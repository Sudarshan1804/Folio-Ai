import { createFileRoute, Link } from '@tanstack/react-router'
import { X, Cpu, Zap, Radio, Hexagon, Shield, Terminal as TermIcon, Download } from 'lucide-react'
import { useResumeData } from '@/hooks/useResumeData'

export const Route = createFileRoute('/preview/futuristic')({
  component: FuturisticTemplate,
})

function FuturisticTemplate() {
  const resumeData = useResumeData()

  return (
    <div className="min-h-screen bg-[#050510] text-[#00f0ff] font-sans pb-32 overflow-x-hidden relative">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(500px)_rotateX(60deg)_translateY(-100px)_translateZ(-200px)] opacity-50 pointer-events-none" />
      
      {/* Navigation */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-8 bg-[#00f0ff]/5 backdrop-blur-md px-8 py-4 rounded border border-[#00f0ff]/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
        <a href="#core" className="text-xs font-bold tracking-[0.2em] uppercase hover:text-[#ff00ff] transition-colors">Core_Logic</a>
        <a href="#systems" className="text-xs font-bold tracking-[0.2em] uppercase hover:text-[#ff00ff] transition-colors">Systems</a>
        <a href="#timeline" className="text-xs font-bold tracking-[0.2em] uppercase hover:text-[#ff00ff] transition-colors">Timeline</a>
        <a href="#comms" className="text-xs font-bold tracking-[0.2em] uppercase hover:text-[#ff00ff] transition-colors">Comms</a>
      </div>

      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        <button className="flex items-center gap-2 bg-[#ff00ff]/10 hover:bg-[#ff00ff]/30 text-[#ff00ff] px-5 py-2.5 rounded text-sm font-bold transition-all border border-[#ff00ff] backdrop-blur-md shadow-[0_0_20px_rgba(255,0,255,0.4)]">
          <Download className="w-4 h-4" /> DOWNLOAD.ZIP
        </button>
        <Link to="/" hash="templates" className="flex items-center gap-2 bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 text-[#00f0ff] px-5 py-2.5 rounded text-sm font-bold transition-all border border-[#00f0ff] backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.4)]">
          <X className="w-4 h-4" /> DISCONNECT
        </Link>
      </div>

      <div className="relative max-w-5xl mx-auto pt-32 px-6">
        
        {/* Hero */}
        <header className="mb-32 text-center relative" id="core">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-[#ff00ff]/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="w-40 h-40 mx-auto mb-8 relative">
            <div className="absolute inset-0 border-2 border-[#00f0ff] rounded-full animate-[spin_10s_linear_infinite] border-t-transparent" />
            <div className="absolute inset-2 border-2 border-[#ff00ff] rounded-full animate-[spin_7s_linear_infinite_reverse] border-b-transparent" />
            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Avatar" className="w-full h-full object-cover rounded-full p-4" />
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ff00ff] uppercase" style={{ textShadow: "0 0 30px rgba(0, 240, 255, 0.4)" }}>
            {resumeData?.name ? resumeData.name.replace(/\s+/g, '_') : 'ELARA_VEX'}
          </h1>
          <p className="text-xl md:text-2xl tracking-[0.3em] uppercase text-[#00f0ff]/80 font-bold mb-8">
            {resumeData?.role || "Cybernetic Systems Architect"}
          </p>
          <div className="flex justify-center gap-6">
             <button className="border border-[#00f0ff] bg-[#00f0ff]/10 hover:bg-[#00f0ff] hover:text-black px-8 py-3 font-bold uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(0,240,255,0.5)]">
               Initialize Sequence
             </button>
          </div>
        </header>

        {/* Systems / Projects */}
        <section id="systems" className="mb-32">
          <h2 className="text-3xl font-black uppercase tracking-[0.2em] mb-12 flex items-center gap-4 text-[#ff00ff]">
            <TermIcon className="w-8 h-8" /> Active_Systems
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {resumeData?.projects?.length ? resumeData.projects.map((p, i) => (
              <div key={i} className={`bg-black/40 border border-[${i % 2 === 0 ? '#ff00ff' : '#00f0ff'}]/40 p-1 rounded-lg backdrop-blur-md group hover:border-[${i % 2 === 0 ? '#00f0ff' : '#ff00ff'}] transition-colors cursor-pointer ${i % 2 !== 0 ? 'md:mt-12' : ''}`}>
                <div className={`border border-[${i % 2 === 0 ? '#ff00ff' : '#00f0ff'}]/20 p-6 h-full relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center bg-blend-overlay`}>
                  <div className="absolute inset-0 bg-black/80 group-hover:bg-black/60 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      {i % 2 === 0 ? <Cpu className="w-10 h-10 text-[#ff00ff] group-hover:text-[#00f0ff] transition-colors" /> : <Zap className="w-10 h-10 text-[#00f0ff] group-hover:text-[#ff00ff] transition-colors" />}
                      <span className={`text-xs bg-[${i % 2 === 0 ? '#ff00ff' : '#00f0ff'}]/20 text-[${i % 2 === 0 ? '#ff00ff' : '#00f0ff'}] px-2 py-1 rounded border border-[${i % 2 === 0 ? '#ff00ff' : '#00f0ff'}]/50 uppercase tracking-widest`}>v{Math.floor(Math.random() * 3) + 1}.{Math.floor(Math.random() * 9)}.{Math.floor(Math.random() * 9)}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wider">{p.title}</h3>
                    <p className={`text-[${i % 2 === 0 ? '#00f0ff' : '#ff00ff'}]/80 text-sm leading-relaxed mb-6 font-medium`}>
                      {p.description}
                    </p>
                    {resumeData?.skills && (
                      <div className="flex flex-wrap gap-2">
                        {resumeData.skills.slice(0, 2).map((skill, si) => (
                          <span key={si} className="text-xs font-bold tracking-widest uppercase border border-white/20 px-2 py-1">{skill}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )) : (
              <>
                <div className="bg-black/40 border border-[#ff00ff]/40 p-1 rounded-lg backdrop-blur-md group hover:border-[#00f0ff] transition-colors cursor-pointer">
                  <div className="border border-[#ff00ff]/20 p-6 h-full relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center bg-blend-overlay">
                    <div className="absolute inset-0 bg-black/80 group-hover:bg-black/60 transition-colors" />
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <Cpu className="w-10 h-10 text-[#ff00ff] group-hover:text-[#00f0ff] transition-colors" />
                        <span className="text-xs bg-[#ff00ff]/20 text-[#ff00ff] px-2 py-1 rounded border border-[#ff00ff]/50 uppercase tracking-widest">v2.4.1</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wider">Neural City Grid</h3>
                      <p className="text-[#00f0ff]/80 text-sm leading-relaxed mb-6 font-medium">
                        Developing next-generation AI models for predictive city infrastructure management. Processing 10M+ data points/sec.
                      </p>
                      <div className="flex gap-2">
                        <span className="text-xs font-bold tracking-widest uppercase border border-white/20 px-2 py-1">TensorFlow</span>
                        <span className="text-xs font-bold tracking-widest uppercase border border-white/20 px-2 py-1">Rust</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 border border-[#00f0ff]/40 p-1 rounded-lg backdrop-blur-md group hover:border-[#ff00ff] transition-colors cursor-pointer md:mt-12">
                  <div className="border border-[#00f0ff]/20 p-6 h-full relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center bg-blend-overlay">
                    <div className="absolute inset-0 bg-black/80 group-hover:bg-black/60 transition-colors" />
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <Zap className="w-10 h-10 text-[#00f0ff] group-hover:text-[#ff00ff] transition-colors" />
                        <span className="text-xs bg-[#00f0ff]/20 text-[#00f0ff] px-2 py-1 rounded border border-[#00f0ff]/50 uppercase tracking-widest">v1.0.0</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wider">Quantum Ledger</h3>
                      <p className="text-[#ff00ff]/80 text-sm leading-relaxed mb-6 font-medium">
                        Optimization algorithms running on 128-qubit processors for ultra-secure financial markets.
                      </p>
                      <div className="flex gap-2">
                        <span className="text-xs font-bold tracking-widest uppercase border border-white/20 px-2 py-1">Q#</span>
                        <span className="text-xs font-bold tracking-widest uppercase border border-white/20 px-2 py-1">Go</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="mb-32">
          <h2 className="text-3xl font-black uppercase tracking-[0.2em] mb-12 flex items-center gap-4 text-[#00f0ff]">
            <Radio className="w-8 h-8" /> System_Logs
          </h2>
          <div className="relative border-l-2 border-[#00f0ff]/30 pl-8 space-y-12 py-4">
            {resumeData?.experience?.length ? resumeData.experience.map((exp, i) => (
              <div key={i} className="relative">
                <Hexagon className={`absolute -left-[49px] top-0 w-8 h-8 text-[${i % 2 === 0 ? '#ff00ff' : '#00f0ff'}] fill-black`} />
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-2">{exp.title} // {exp.company}</h3>
                <p className={`text-sm text-[${i % 2 === 0 ? '#00f0ff' : '#ff00ff'}] font-bold tracking-widest mb-4`}>{exp.period}</p>
                <p className="text-[#00f0ff]/70 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
            )) : (
              <>
                 <div className="relative">
                   <Hexagon className="absolute -left-[49px] top-0 w-8 h-8 text-[#ff00ff] fill-black" />
                   <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-2">Lead Architect // CyberDyne Sys</h3>
                   <p className="text-sm text-[#00f0ff] font-bold tracking-widest mb-4">2023 - PRESENT</p>
                   <p className="text-[#00f0ff]/70 leading-relaxed max-w-2xl">
                     Spearheading the transition from legacy binary systems to quantum-assisted neural processing nodes.
                   </p>
                 </div>
                 <div className="relative">
                   <Hexagon className="absolute -left-[49px] top-0 w-8 h-8 text-[#00f0ff] fill-black" />
                   <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-2">Security Specialist // Nexus Corp</h3>
                   <p className="text-sm text-[#ff00ff] font-bold tracking-widest mb-4">2020 - 2023</p>
                   <p className="text-[#00f0ff]/70 leading-relaxed max-w-2xl">
                     Developed intrusion detection protocols using advanced machine learning heuristics. 
                   </p>
                 </div>
              </>
            )}
          </div>
        </section>

        {/* Education */}
        {resumeData?.education && resumeData.education.length > 0 && (
          <section className="mb-32">
            <h2 className="text-3xl font-black uppercase tracking-[0.2em] mb-12 flex items-center gap-4 text-[#ff00ff]">
              <Hexagon className="w-8 h-8" /> Training_Data
            </h2>
            <div className="grid gap-6">
              {resumeData.education.map((edu, i) => (
                <div key={i} className="bg-black/40 border border-[#ff00ff]/30 p-6 rounded-lg backdrop-blur-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#ff00ff]/10 blur-xl" />
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">{edu.degree}</h3>
                  <p className="text-sm text-[#ff00ff] font-bold tracking-widest mb-4">{edu.institution} // {edu.period}</p>
                  {edu.description && <p className="text-[#00f0ff]/70 leading-relaxed">{edu.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Additional Sections */}
        {resumeData?.additionalSections?.map((section, idx) => (
          <section key={idx} className="mb-32">
            <h2 className="text-3xl font-black uppercase tracking-[0.2em] mb-12 flex items-center gap-4 text-[#00f0ff]">
              <Radio className="w-8 h-8" /> {section.title.replace(/\s+/g, '_')}
            </h2>
            <div className="grid gap-6">
              {section.items.map((item, i) => (
                <div key={i} className="bg-black/40 border border-[#00f0ff]/30 p-6 rounded-lg backdrop-blur-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#00f0ff]/10 blur-xl" />
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">{item.title}</h3>
                  {(item.subtitle || item.period) && (
                    <p className="text-sm text-[#00f0ff] font-bold tracking-widest mb-4">
                      {item.subtitle} {item.subtitle && item.period ? '//' : ''} {item.period}
                    </p>
                  )}
                  {item.description && <p className="text-[#00f0ff]/70 leading-relaxed">{item.description}</p>}
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Contact Module */}
        <section id="comms" className="border border-[#00f0ff]/30 bg-[#00f0ff]/5 p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f0ff] to-[#ff00ff]" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-[0.1em] mb-4 text-white flex items-center gap-3">
                <Shield className="w-8 h-8 text-[#ff00ff]" /> Open_Channel
              </h2>
              <p className="text-[#00f0ff]/80">Secure transmissions accepted. Encryption key available upon request.</p>
            </div>
            <div className="w-full md:w-auto flex flex-col gap-4">
              <button className="w-full md:w-auto border-2 border-[#ff00ff] bg-black text-[#ff00ff] px-8 py-4 font-bold uppercase tracking-widest hover:bg-[#ff00ff] hover:text-black transition-colors shadow-[0_0_15px_rgba(255,0,255,0.3)]">
                Transmit Message
              </button>
            </div>
          </div>
        </section>

        <div className="mt-20 border-t border-[#00f0ff]/20 pt-8 flex justify-between items-center text-xs uppercase tracking-[0.3em] text-[#00f0ff]/40">
          <span>Sys.Ver 9.4.2</span>
          <span>Status: Online</span>
        </div>
      </div>
    </div>
  )
}
