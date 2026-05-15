import { createFileRoute, Link } from '@tanstack/react-router'
import { X, Github, Twitter, Mail, ArrowUpRight, Layout, Download } from 'lucide-react'
import { useResumeData } from '@/hooks/useResumeData'

export const Route = createFileRoute('/preview/bento')({
  component: BentoTemplate,
})

function BentoTemplate() {
  const resumeData = useResumeData()

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans p-4 md:p-8 pb-24">
      {/* Floating Navigation */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-slate-700/50 shadow-xl">
        <a href="#about" className="text-sm font-medium hover:text-white px-3 py-1">About</a>
        <a href="#experience" className="text-sm font-medium hover:text-white px-3 py-1">Experience</a>
        <a href="#projects" className="text-sm font-medium hover:text-white px-3 py-1">Projects</a>
        <a href="#contact" className="text-sm font-medium hover:text-white px-3 py-1">Contact</a>
      </div>

      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        <button className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg border border-indigo-400/30">
          <Download className="w-4 h-4" /> Download .zip
        </button>
        <Link to="/" hash="templates" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg border border-white/10">
          <X className="w-4 h-4" /> Close Preview
        </Link>
      </div>

      <div className="max-w-5xl mx-auto space-y-4 mt-20 md:mt-12">
        {/* Header Section */}
        <header className="grid grid-cols-1 md:grid-cols-3 gap-4" id="about">
          <div className="md:col-span-2 bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 flex flex-col justify-end min-h-[400px] relative overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Workspace" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 mix-blend-overlay" />
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white">{resumeData?.name ? resumeData.name + '.' : 'Alex Morgan.'}</h1>
              <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                {resumeData?.role || "A passionate Product Designer & Frontend Developer crafting modern, accessible digital experiences."}
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[400px] text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Alex Morgan" className="w-40 h-40 object-cover rounded-full border-4 border-white/20 shadow-2xl relative z-10 mb-6" />
            <h2 className="text-2xl font-bold text-white relative z-10">Based in SF</h2>
            <p className="text-white/80 font-medium relative z-10">Available for work</p>
          </div>
        </header>

        {/* Bento Grid Core */}
        <main className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Main Project */}
          <div id="projects" className="md:col-span-2 md:row-span-2 bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 group hover:border-slate-600 transition-colors cursor-pointer flex flex-col">
            <div className="aspect-[4/3] rounded-2xl mb-6 overflow-hidden relative w-full">
              <img src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Project Alpha" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
            </div>
            <div className="mt-auto">
              <h3 className="text-3xl font-bold mb-3 flex items-center justify-between text-white">
                {resumeData?.projects?.[0]?.title || "FinTech App Redesign"} <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">{resumeData?.projects?.[0]?.description || "A complete overhaul of a mobile banking app, focusing on accessibility and modern transaction flows. Increased user retention by 40%."}</p>
            </div>
          </div>

          {/* About Widget */}
          <div className="md:col-span-2 bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4 text-white">Philosophy</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              {resumeData?.about || "I believe in designing with empathy. The best products aren't just beautiful—they solve real problems for real people. Over the past 6 years, I've had the privilege of working with startups and enterprise companies alike to build scalable, human-centered software."}
            </p>
          </div>

          {/* Smaller Widgets */}
          <div className="bg-slate-800/50 rounded-3xl p-6 border border-slate-700/50 flex flex-col items-center justify-center gap-4 hover:bg-slate-700/50 transition-colors cursor-pointer">
            <Github className="w-10 h-10 text-white" />
            <span className="text-sm font-medium uppercase tracking-wider">GitHub</span>
          </div>
          <div className="bg-[#1DA1F2]/10 rounded-3xl p-6 border border-[#1DA1F2]/20 flex flex-col items-center justify-center gap-4 hover:bg-[#1DA1F2]/20 transition-colors cursor-pointer text-[#1DA1F2]">
            <Twitter className="w-10 h-10" />
            <span className="text-sm font-medium uppercase tracking-wider">Twitter</span>
          </div>

          {/* Experience Timeline */}
          <div id="experience" className="md:col-span-4 bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 mt-4">
            <h3 className="text-2xl font-bold mb-8 text-white">Experience</h3>
            <div className="space-y-8">
              {resumeData?.experience?.length ? resumeData.experience.map((exp, i) => (
                <div key={i} className={`flex flex-col md:flex-row md:items-start gap-4 md:gap-8 ${i < resumeData.experience.length - 1 ? 'border-b border-slate-700/50 pb-8' : 'pb-4'}`}>
                  <div className="md:w-48 shrink-0">
                    <p className="text-slate-400 font-medium">{exp.period}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                    <p className="text-indigo-400 mb-4 font-medium">{exp.company}</p>
                    <p className="text-slate-400 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              )) : (
                <>
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 border-b border-slate-700/50 pb-8">
                    <div className="md:w-48 shrink-0">
                      <p className="text-slate-400 font-medium">2021 - Present</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">Senior Product Designer</h4>
                      <p className="text-indigo-400 mb-4 font-medium">Stripe</p>
                      <p className="text-slate-400 leading-relaxed">Leading design for the core payments team. Spearheaded the redesign of the merchant dashboard, resulting in a 25% decrease in support tickets.</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 pb-4">
                    <div className="md:w-48 shrink-0">
                      <p className="text-slate-400 font-medium">2018 - 2021</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">UI/UX Engineer</h4>
                      <p className="text-indigo-400 mb-4 font-medium">Airbnb</p>
                      <p className="text-slate-400 leading-relaxed">Bridged the gap between design and engineering. Built reusable React components for the internal design system used by over 100 developers.</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Skills */}
          <div className="md:col-span-2 bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-6 text-white">Tech Stack & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {(resumeData?.skills?.length ? resumeData.skills : ['Figma', 'React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion', 'Webflow']).map(skill => (
                <span key={skill} className="px-5 py-2.5 rounded-full bg-slate-900 text-sm font-medium border border-slate-700 text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Additional Project */}
          <div className="md:col-span-2 bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 group hover:border-slate-600 transition-colors cursor-pointer flex flex-col justify-between">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
                 <Layout className="w-7 h-7 text-indigo-400" />
               </div>
               <h3 className="text-2xl font-bold text-white">{resumeData?.projects?.[1]?.title || "Design System Core"}</h3>
             </div>
             <p className="text-slate-400 leading-relaxed mb-6">{resumeData?.projects?.[1]?.description || "An open-source UI component library built with accessibility and performance in mind. Over 5k stars on GitHub."}</p>
             <span className="text-indigo-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">View Repository <ArrowUpRight className="w-4 h-4" /></span>
          </div>

          {/* Education */}
          {resumeData?.education && resumeData.education.length > 0 && (
            <div className="md:col-span-4 bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 mt-4">
              <h3 className="text-2xl font-bold mb-8 text-white">Education</h3>
              <div className="space-y-8">
                {resumeData.education.map((edu, i) => (
                  <div key={i} className={`flex flex-col md:flex-row md:items-start gap-4 md:gap-8 ${i < resumeData.education!.length - 1 ? 'border-b border-slate-700/50 pb-8' : 'pb-4'}`}>
                    <div className="md:w-48 shrink-0">
                      <p className="text-slate-400 font-medium">{edu.period}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      <p className="text-indigo-400 mb-4 font-medium">{edu.institution}</p>
                      {edu.description && <p className="text-slate-400 leading-relaxed">{edu.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Sections */}
          {resumeData?.additionalSections?.map((section, idx) => (
            <div key={idx} className="md:col-span-4 bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 mt-4">
              <h3 className="text-2xl font-bold mb-8 text-white">{section.title}</h3>
              <div className="space-y-8">
                {section.items.map((item, i) => (
                  <div key={i} className={`flex flex-col md:flex-row md:items-start gap-4 md:gap-8 ${i < section.items.length - 1 ? 'border-b border-slate-700/50 pb-8' : 'pb-4'}`}>
                    <div className="md:w-48 shrink-0">
                      <p className="text-slate-400 font-medium">{item.period}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{item.title}</h4>
                      {item.subtitle && <p className="text-indigo-400 mb-4 font-medium">{item.subtitle}</p>}
                      {item.description && <p className="text-slate-400 leading-relaxed">{item.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Contact */}
          <div id="contact" className="md:col-span-4 bg-gradient-to-r from-slate-800 to-slate-800/50 rounded-3xl p-8 md:p-12 border border-slate-700/50 flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
            <div>
              <h3 className="text-4xl font-bold mb-4 text-white">Let's build something.</h3>
              <p className="text-slate-400 text-lg max-w-md">I'm currently available for freelance projects and open to full-time opportunities.</p>
            </div>
            <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-3 shrink-0 shadow-xl shadow-white/10 text-lg">
              <Mail className="w-5 h-5" /> alex@example.com
            </button>
          </div>
        </main>
        
        <footer className="text-center py-8 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {resumeData?.name || "Alex Morgan"}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
