import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  contact?: {
    email?: string;
    phone?: string;
    location?: string;
  };
  socialLinks?: {
    platform: string;
    url: string;
  }[];
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
  }[];
  skills: string[];
  projects: {
    title: string;
    description: string;
    url?: string;
  }[];
  education?: {
    degree: string;
    institution: string;
    period: string;
    description?: string;
  }[];
  additionalSections?: {
    title: string;
    items: {
      title: string;
      subtitle?: string;
      period?: string;
      description?: string;
    }[];
  }[];
}

export async function parseResumeText(text: string): Promise<PortfolioData> {
  if (!apiKey) {
    throw new Error("Missing VITE_GEMINI_API_KEY in environment variables.");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  
  // Use flash model for fast text processing
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
  You are an expert resume parser and portfolio copywriter.
  Extract the relevant information from the following resume text to create a stunning developer portfolio.
  Make the 'about' section engaging and professional (approx 2-3 sentences).
  Infer the primary 'role' (e.g., Senior Frontend Developer, Technical Writer, UX Designer) based on their experience.
  
  Output the result as a raw JSON object matching this TypeScript interface exactly:
  {
    "name": "Full Name",
    "role": "Primary Job Title",
    "about": "Engaging professional summary",
    "contact": {
      "email": "email@example.com",
      "phone": "+1 234 567 890",
      "location": "City, Country"
    },
    "socialLinks": [
      {
        "platform": "GitHub",
        "url": "https://github.com/username"
      },
      {
        "platform": "LinkedIn",
        "url": "https://linkedin.com/in/username"
      }
    ],
    "experience": [
      {
        "title": "Job Title",
        "company": "Company Name",
        "period": "e.g., 2021 - Present",
        "description": "Short summary of responsibilities"
      }
    ],
    "skills": ["React", "TypeScript", ...],
    "projects": [
      {
        "title": "Project Name",
        "description": "Short description of the project"
      }
    ],
    "education": [
      {
        "degree": "Degree Name",
        "institution": "University/School",
        "period": "2015 - 2019",
        "description": "Optional details about coursework or honors"
      }
    ],
    "additionalSections": [
      {
        "title": "Certifications",
        "items": [
          {
            "title": "AWS Certified Solutions Architect",
            "subtitle": "Amazon Web Services",
            "period": "2023",
            "description": "Optional description"
          }
        ]
      }
    ]
  }

  Important Instructions:
  - Do not leave any information from the resume behind! If there are Awards, Languages, Open Source Contributions, Volunteer Work, etc., put them into "additionalSections".
  - Make sure to map everything logically. 
  - Return ONLY valid JSON, without markdown formatting blocks (like \`\`\`json).

  Resume Text:
  """
  ${text}
  """
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let textResponse = response.text().trim();
    
    // Strip markdown code blocks if the model accidentally includes them
    let cleanedText = textResponse;
    if (cleanedText.startsWith('```json')) {
      cleanedText = cleanedText.replace(/^```json\n?/, '').replace(/\n?```$/, '');
    } else if (cleanedText.startsWith('```')) {
      cleanedText = cleanedText.replace(/^```\n?/, '').replace(/\n?```$/, '');
    }

    // Attempt to find the first '{' and last '}' to extract the JSON object
    // This handles cases where the AI adds conversational text before or after the JSON
    const firstBrace = cleanedText.indexOf('{');
    const lastBrace = cleanedText.lastIndexOf('}');
    
    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
      cleanedText = cleanedText.substring(firstBrace, lastBrace + 1);
    }
    
    try {
      return JSON.parse(cleanedText) as PortfolioData;
    } catch (parseError) {
      console.error("JSON parse error after cleaning:", parseError);
      console.error("Cleaned text was:", cleanedText);
      throw new Error("The AI response could not be parsed as valid JSON. Please try again.");
    }
  } catch (error) {
    console.error("Error parsing resume with Gemini:", error);
    throw error;
  }
}
