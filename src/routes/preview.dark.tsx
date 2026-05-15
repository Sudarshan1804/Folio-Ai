import { createFileRoute, Link } from '@tanstack/react-router'
import { X, Play, ArrowRight, ArrowDown, Download } from 'lucide-react'
import { useResumeData } from '@/hooks/useResumeData'

export const Route = createFileRoute('/preview/dark')({
  component: DarkStudioTemplate,
})

function DarkStudioTemplate() {
  const resumeData = useResumeData()

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans pb-32">
      {/* Floating Close Button */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        <button className="flex items-center gap-2 bg-zinc-800 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:bg-zinc-700 shadow-2xl">
          <Download className="w-4 h-4" /> Download
        </button>
        <Link to="/" hash="templates" className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:bg-zinc-200 shadow-2xl">
          <X className="w-4 h-4" /> Close
        </Link>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        {/* Header */}
        <header className="flex justify-between items-center py-8 mb-20 border-b border-zinc-800">
          <div className="text-2xl font-black tracking-tighter text-white uppercase">{resumeData?.name ? resumeData.name.split(' ')[0] + '.' : 'Vanguard.'}</div>
          <nav className="hidden md:flex gap-12 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
            <a href="#work" className="text-white">Work</a>
            <a href="#expertise" className="hover:text-white transition-colors cursor-pointer">Expertise</a>
            <a href="#contact" className="hover:text-white transition-colors cursor-pointer">Contact</a>
          </nav>
        </header>

        <main className="space-y-40">
          
          {/* Hero Section */}
          <section className="max-w-5xl">
            <h1 className="text-6xl md:text-8xl md:text-[9rem] font-bold text-white tracking-tighter leading-[0.9] mb-12 uppercase">
              {resumeData?.role ? resumeData.role.split(' ').map((w,i,arr) => i === arr.length - 1 ? <><br/><span className="text-zinc-600" key={i}>{w}</span></> : w + ' ') : <>DIGITAL <br/> <span className="text-zinc-600">FLAGSHIP</span> <br/> STORES.</>}
            </h1>
            <div className="flex flex-col md:flex-row gap-12 items-start md:items-center justify-between">
              <p className="text-2xl md:text-3xl text-zinc-400 font-light max-w-2xl leading-tight">
                {resumeData?.about || "An independent creative studio focusing on high-end web experiences, 3D interactions, and visionary art direction."}
              </p>
              <button className="flex items-center gap-4 bg-zinc-900 text-white px-8 py-6 rounded-full font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors shrink-0 group border border-zinc-800">
                <Play className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" /> Showreel
              </button>
            </div>
            <div className="mt-24 animate-bounce">
              <ArrowDown className="w-8 h-8 text-zinc-600" />
            </div>
          </section>

          {/* Full Width Image / Video Placeholder */}
          <section className="w-full aspect-video bg-zinc-900 rounded-3xl overflow-hidden relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Showreel Cover" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2s]" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                <Play className="w-8 h-8 fill-white text-white ml-2" />
              </div>
            </div>
          </section>

          {/* Selected Work */}
          <section id="work">
            <div className="flex justify-between items-end mb-16 border-b border-zinc-800 pb-8">
              <h2 className="text-5xl font-bold text-white tracking-tight">SELECTED WORK</h2>
              <span className="text-xs uppercase tracking-[0.2em] font-bold flex items-center gap-4 hover:text-white cursor-pointer transition-colors pb-2">
                View all cases <ArrowRight className="w-4 h-4" />
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
              {resumeData?.projects?.length ? resumeData.projects.slice(0, 4).map((p, i) => (
                <div key={i} className={`group cursor-pointer ${i % 2 !== 0 ? 'md:mt-32' : ''}`}>
                  <div className="aspect-[4/5] bg-zinc-900 rounded-2xl mb-8 overflow-hidden relative">
                    <img src={i % 2 === 0 ? "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" : "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                       <span className="bg-white text-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full w-max">View Case</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">{p.title}</h3>
                      <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold truncate max-w-[200px]">{p.description}</p>
                    </div>
                    <span className="text-zinc-600 font-serif italic text-xl">0{i + 1}</span>
                  </div>
                </div>
              )) : (
                <>
                  <div className="group cursor-pointer">
                    <div className="aspect-[4/5] bg-zinc-900 rounded-2xl mb-8 overflow-hidden relative">
                      <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Project 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                         <span className="bg-white text-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full w-max">View Case</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Aura Automotive</h3>
                        <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Web Design, 3D Experience</p>
                      </div>
                      <span className="text-zinc-600 font-serif italic text-xl">01</span>
                    </div>
                  </div>

                  <div className="group cursor-pointer md:mt-32">
                    <div className="aspect-[4/5] bg-zinc-900 rounded-2xl mb-8 overflow-hidden relative">
                      <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Project 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                         <span className="bg-white text-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full w-max">View Case</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Maison De Luxe</h3>
                        <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">E-Commerce, Art Direction</p>
                      </div>
                      <span className="text-zinc-600 font-serif italic text-xl">02</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>

          {/* Services / Expertise */}
          <section id="expertise" className="grid md:grid-cols-3 gap-12 border-t border-zinc-800 pt-20">
            <div className="md:col-span-1">
              <h2 className="text-4xl font-bold text-white tracking-tight">EXPERTISE.</h2>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-12">
              {resumeData?.skills?.length ? resumeData.skills.slice(0, 4).map((skill, i) => (
                <div key={i}>
                  <h3 className="text-xl font-bold text-white mb-4">{skill}</h3>
                  <p className="text-zinc-400 leading-relaxed">Demonstrated expertise and hands-on experience in building scalable solutions using {skill}.</p>
                </div>
              )) : (
                <>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Digital Platforms</h3>
                    <p className="text-zinc-400 leading-relaxed">We build robust, scalable e-commerce solutions and marketing sites using headless architectures and modern web frameworks.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Art Direction</h3>
                    <p className="text-zinc-400 leading-relaxed">From photography to motion graphics, we define the visual language that elevates your brand above the competition.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">3D & Motion</h3>
                    <p className="text-zinc-400 leading-relaxed">Integrating WebGL and three.js to create immersive, interactive experiences that capture user attention instantly.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Brand Strategy</h3>
                    <p className="text-zinc-400 leading-relaxed">Positioning your brand in the digital landscape through deep research, competitor analysis, and strategic copywriting.</p>
                  </div>
                </>
              )}
            </div>
          </section>

          {/* Education & Extra Sections */}
          {resumeData?.education && resumeData.education.length > 0 && (
            <section className="grid md:grid-cols-3 gap-12 border-t border-zinc-800 pt-20">
              <div className="md:col-span-1">
                <h2 className="text-4xl font-bold text-white tracking-tight uppercase">Education.</h2>
              </div>
              <div className="md:col-span-2 grid sm:grid-cols-2 gap-12">
                {resumeData.education.map((edu, i) => (
                  <div key={i}>
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-4">{edu.institution} • {edu.period}</p>
                    {edu.description && <p className="text-zinc-400 leading-relaxed">{edu.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {resumeData?.additionalSections?.map((section, idx) => (
            <section key={idx} className="grid md:grid-cols-3 gap-12 border-t border-zinc-800 pt-20">
              <div className="md:col-span-1">
                <h2 className="text-4xl font-bold text-white tracking-tight uppercase">{section.title}.</h2>
              </div>
              <div className="md:col-span-2 grid sm:grid-cols-2 gap-12">
                {section.items.map((item, i) => (
                  <div key={i}>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    {(item.subtitle || item.period) && (
                      <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-4">
                        {item.subtitle} {item.subtitle && item.period ? '•' : ''} {item.period}
                      </p>
                    )}
                    {item.description && <p className="text-zinc-400 leading-relaxed">{item.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Giant CTA Footer */}
          <footer id="contact" className="pt-32 pb-12 border-t border-zinc-800 flex flex-col items-center text-center">
             <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-12 hover:text-zinc-400 transition-colors cursor-pointer">
               Let's Talk.
             </h2>
             <div className="flex gap-8 mb-20 text-sm font-bold uppercase tracking-widest text-zinc-500 flex-wrap justify-center">
               {resumeData?.contact?.email && (
                 <a href={`mailto:${resumeData.contact.email}`} className="hover:text-white cursor-pointer transition-colors">{resumeData.contact.email}</a>
               )}
               {resumeData?.contact?.phone && (
                 <a href={`tel:${resumeData.contact.phone}`} className="hover:text-white cursor-pointer transition-colors">{resumeData.contact.phone}</a>
               )}
               {!resumeData?.contact?.email && !resumeData?.contact?.phone && (
                 <>
                   <span className="hover:text-white cursor-pointer transition-colors">hello@vanguard.studio</span>
                   <span className="hover:text-white cursor-pointer transition-colors">+1 (555) 000-0000</span>
                 </>
               )}
             </div>
             <div className="w-full flex justify-between items-center text-xs text-zinc-600 font-bold tracking-widest uppercase">
               <span>© {new Date().getFullYear()} {resumeData?.name || 'Vanguard Studio'}</span>
               <div className="flex gap-4">
                 {resumeData?.socialLinks?.length ? (
                   resumeData.socialLinks.map((social, i) => (
                     <a key={i} href={social.url} target="_blank" rel="noreferrer" className="hover:text-white cursor-pointer">{social.platform.substring(0, 2).toUpperCase()}</a>
                   ))
                 ) : (
                   <>
                     <span className="hover:text-white cursor-pointer">TW</span>
                     <span className="hover:text-white cursor-pointer">IG</span>
                     <span className="hover:text-white cursor-pointer">IN</span>
                   </>
                 )}
               </div>
             </div>
          </footer>

        </main>
      </div>
    </div>
  )
}
