import { createFileRoute, Link } from '@tanstack/react-router'
import { X, Dribbble, Instagram, Palette, ExternalLink, Mail, Download, Github, Linkedin, Twitter, Link as LinkIcon } from 'lucide-react'
import { useResumeData } from '@/hooks/useResumeData'

export const Route = createFileRoute('/preview/glass')({
  component: GlassTemplate,
})

function GlassTemplate() {
  const resumeData = useResumeData()

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#0f111a] text-white font-sans pb-32">
      {/* Dynamic Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/20 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-500/20 blur-[120px] pointer-events-none" />
      <div className="fixed top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-fuchsia-500/20 blur-[100px] pointer-events-none" />

      {/* Floating Header */}
      <header className="fixed top-0 inset-x-0 z-40 p-6 flex justify-between items-center">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full shadow-xl flex items-center gap-6">
          <span className="font-bold tracking-widest uppercase text-sm">Glass.</span>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-white/70">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-cyan-500/20 hover:bg-cyan-500/40 backdrop-blur-xl text-cyan-300 px-5 py-3 rounded-full text-sm font-medium transition-all shadow-[0_4px_24px_rgba(0,0,0,0.2)] border border-cyan-500/30">
            <Download className="w-4 h-4" /> Download .zip
          </button>
          <Link to="/" hash="templates" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white px-5 py-3 rounded-full text-sm font-medium transition-all shadow-[0_4px_24px_rgba(0,0,0,0.2)] border border-white/10">
            <X className="w-4 h-4" /> Close Preview
          </Link>
        </div>
      </header>

      <div className="relative max-w-5xl mx-auto space-y-24 pt-40 px-6">
        
        {/* Hero Section */}
        <section className="text-center space-y-8" id="about">
          <div className="w-32 h-32 mx-auto rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-indigo-500 shadow-2xl shadow-fuchsia-500/20">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Sarah Jenkins" className="w-full h-full object-cover rounded-full border-4 border-[#0f111a]" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 leading-tight pb-2">
            {resumeData?.name || "Sarah Jenkins"}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            {resumeData?.about || "I craft fluid, beautiful interfaces that feel alive. Senior Visual Designer specializing in modern web experiences."}
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
             <button className="bg-white text-[#0f111a] px-8 py-3 rounded-full font-bold shadow-xl shadow-white/10 hover:scale-105 transition-transform">
               View My Work
             </button>
             <button className="bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
               Get in Touch
             </button>
          </div>
        </section>

        {/* Work Grid */}
        <section id="work" className="space-y-8 pt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Selected Work</h2>
            <div className="h-px bg-gradient-to-r from-white/20 to-transparent flex-1 ml-8" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {(resumeData?.projects?.length ? resumeData.projects.map(p => ({ title: p.title, img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tag: "Project" })) : [
              { title: "Aurora Dashboard", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tag: "UI Design" },
              { title: "Prism E-Commerce", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tag: "Web App" },
              { title: "Lumina Mobile", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tag: "iOS Design" },
              { title: "Echo Branding", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tag: "Identity" },
            ]).map((work, i) => (
              <div key={i} className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-4 shadow-2xl hover:bg-white/10 transition-all cursor-pointer overflow-hidden">
                <div className="aspect-video rounded-2xl overflow-hidden relative mb-6">
                  <img src={work.img} alt={work.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                     <button className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full font-medium flex items-center gap-2">
                       View Case Study <ExternalLink className="w-4 h-4" />
                     </button>
                  </div>
                </div>
                <div className="px-4 pb-2">
                  <h3 className="text-2xl font-bold mb-1">{work.title}</h3>
                  <p className="text-fuchsia-400 font-medium">{work.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience / Services */}
        <section className="grid md:grid-cols-2 gap-8 pt-12">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-2xl" />
             <h2 className="text-3xl font-bold mb-8 relative z-10">Expertise</h2>
             <div className="space-y-6 relative z-10">
               {resumeData?.skills?.length ? resumeData.skills.slice(0, 5).map((skill, i) => (
                 <div key={i}>
                   <div className="flex justify-between mb-2">
                     <span className="font-medium">{skill}</span>
                   </div>
                   <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                     <div className={`h-full bg-gradient-to-r w-[${95 - i * 5}%] ${i % 2 === 0 ? 'from-cyan-400 to-indigo-500' : 'from-fuchsia-400 to-purple-500'}`} style={{ width: `${95 - i * 5}%` }} />
                   </div>
                 </div>
               )) : (
                 <>
                   <div>
                     <div className="flex justify-between mb-2">
                       <span className="font-medium">User Interface Design</span>
                       <span className="text-cyan-400">95%</span>
                     </div>
                     <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 w-[95%]" />
                     </div>
                   </div>
                   <div>
                     <div className="flex justify-between mb-2">
                       <span className="font-medium">Interaction Design</span>
                       <span className="text-fuchsia-400">88%</span>
                     </div>
                     <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full bg-gradient-to-r from-fuchsia-400 to-purple-500 w-[88%]" />
                     </div>
                   </div>
                   <div>
                     <div className="flex justify-between mb-2">
                       <span className="font-medium">Design Systems</span>
                       <span className="text-sky-400">92%</span>
                     </div>
                     <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full bg-gradient-to-r from-sky-400 to-cyan-500 w-[92%]" />
                     </div>
                   </div>
                 </>
               )}
             </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 shadow-2xl relative overflow-hidden">
             <div className="absolute bottom-0 right-0 w-32 h-32 bg-fuchsia-500/20 blur-2xl" />
             <h2 className="text-3xl font-bold mb-8 relative z-10">Experience</h2>
              <div className="space-y-8 relative z-10">
                {resumeData?.experience?.length ? resumeData.experience.map((exp, i) => (
                  <div key={i} className="border-l-2 border-white/10 pl-6 relative">
                    <div className={`absolute w-3 h-3 ${i % 2 === 0 ? 'bg-fuchsia-400 shadow-[0_0_10px_rgba(232,121,249,0.8)]' : 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]'} rounded-full -left-[7px] top-1`} />
                    <h3 className="text-xl font-bold">{exp.title} @ {exp.company}</h3>
                    <p className="text-white/60 text-sm mb-2">{exp.period}</p>
                    <p className="text-white/80 font-light">{exp.description}</p>
                  </div>
                )) : (
                  <>
                    <div className="border-l-2 border-white/10 pl-6 relative">
                      <div className="absolute w-3 h-3 bg-fuchsia-400 rounded-full -left-[7px] top-1 shadow-[0_0_10px_rgba(232,121,249,0.8)]" />
                      <h3 className="text-xl font-bold">Design Lead @ Meta</h3>
                      <p className="text-white/60 text-sm mb-2">2022 - Present</p>
                      <p className="text-white/80 font-light">Leading the core design system team for VR interfaces.</p>
                    </div>
                    <div className="border-l-2 border-white/10 pl-6 relative">
                      <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-[7px] top-1 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                      <h3 className="text-xl font-bold">Senior Designer @ Spotify</h3>
                      <p className="text-white/60 text-sm mb-2">2019 - 2022</p>
                      <p className="text-white/80 font-light">Redesigned the mobile artist profile experience.</p>
                    </div>
                  </>
                )}
             </div>
          </div>
        </section>

        {/* Dynamic Extra Sections (Education, Certs, etc) */}
        {(resumeData?.education?.length || resumeData?.additionalSections?.length) && (
          <section className="grid md:grid-cols-2 gap-8 pt-12">
            {resumeData?.education && resumeData.education.length > 0 && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/20 blur-2xl" />
                 <h2 className="text-3xl font-bold mb-8 relative z-10">Education</h2>
                  <div className="space-y-8 relative z-10">
                    {resumeData.education.map((edu, i) => (
                      <div key={i} className="border-l-2 border-white/10 pl-6 relative">
                        <div className="absolute w-3 h-3 bg-indigo-400 rounded-full -left-[7px] top-1 shadow-[0_0_10px_rgba(129,140,248,0.8)]" />
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <p className="text-white/60 text-sm mb-2">{edu.institution} | {edu.period}</p>
                        {edu.description && <p className="text-white/80 font-light">{edu.description}</p>}
                      </div>
                    ))}
                 </div>
              </div>
            )}
            
            {resumeData?.additionalSections?.map((section, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 shadow-2xl relative overflow-hidden">
                 <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/20 blur-2xl" />
                 <h2 className="text-3xl font-bold mb-8 relative z-10">{section.title}</h2>
                  <div className="space-y-8 relative z-10">
                    {section.items.map((item, i) => (
                      <div key={i} className="border-l-2 border-white/10 pl-6 relative">
                        <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-[7px] top-1 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        {item.subtitle && <p className="text-white/60 text-sm mb-1">{item.subtitle}</p>}
                        {item.period && <p className="text-white/50 text-xs mb-2">{item.period}</p>}
                        {item.description && <p className="text-white/80 font-light">{item.description}</p>}
                      </div>
                    ))}
                 </div>
              </div>
            ))}
          </section>
        )}

        {/* Contact CTA */}
        <section id="contact" className="pt-12 pb-12">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-[3rem] p-12 text-center shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-grid-pattern opacity-10" />
             <div className="relative z-10 max-w-2xl mx-auto">
               <Palette className="w-16 h-16 mx-auto mb-6 text-fuchsia-400" />
               <h2 className="text-4xl md:text-5xl font-bold mb-6">Have an idea? Let's bring it to life.</h2>
               <p className="text-xl text-white/70 font-light mb-10">
                 Currently accepting new projects for Q4 2024. Reach out and let's create something beautiful together.
               </p>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <a href={`mailto:${resumeData?.contact?.email || 'hello@example.com'}`} className="bg-white text-black px-10 py-4 rounded-full font-bold shadow-xl flex items-center gap-3 hover:scale-105 transition-transform w-full sm:w-auto justify-center">
                   <Mail className="w-5 h-5" /> {resumeData?.contact?.email || 'Say Hello'}
                 </a>
                 {resumeData?.socialLinks?.length ? (
                   <div className="flex items-center gap-4">
                     {resumeData.socialLinks.map((social, i) => {
                       let Icon = LinkIcon;
                       if (social.platform.toLowerCase().includes('github')) Icon = Github;
                       if (social.platform.toLowerCase().includes('linkedin')) Icon = Linkedin;
                       if (social.platform.toLowerCase().includes('twitter') || social.platform.toLowerCase().includes('x')) Icon = Twitter;
                       if (social.platform.toLowerCase().includes('dribbble')) Icon = Dribbble;
                       if (social.platform.toLowerCase().includes('instagram')) Icon = Instagram;
                       
                       return (
                         <a key={i} href={social.url} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/10 hover:bg-white/20 transition-colors cursor-pointer text-white">
                           <Icon className="w-6 h-6" />
                         </a>
                       )
                     })}
                   </div>
                 ) : (
                   <div className="flex items-center gap-4">
                     <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/10 hover:bg-white/20 transition-colors cursor-pointer text-pink-400">
                       <Dribbble className="w-6 h-6" />
                     </div>
                     <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/10 hover:bg-white/20 transition-colors cursor-pointer text-fuchsia-400">
                       <Instagram className="w-6 h-6" />
                     </div>
                   </div>
                 )}
               </div>
             </div>
          </div>
        </section>

      </div>
    </div>
  )
}
