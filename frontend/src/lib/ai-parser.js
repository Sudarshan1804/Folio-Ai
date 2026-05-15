import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;











































export async function parseResumeText(text) {
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
    if (textResponse.startsWith('\`\`\`json')) {
      textResponse = textResponse.replace(/^\`\`\`json\n/, '').replace(/\n\`\`\`$/, '');
    } else if (textResponse.startsWith('\`\`\`')) {
      textResponse = textResponse.replace(/^\`\`\`\n/, '').replace(/\n\`\`\`$/, '');
    }

    return JSON.parse(textResponse);
  } catch (error) {
    console.error("Error parsing resume with Gemini:", error);
    throw error;
  }
}