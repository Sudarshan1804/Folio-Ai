
import { X, Cpu, Zap, Radio, Hexagon, Shield, Terminal as TermIcon, Download } from 'lucide-react';
import { useResumeData } from '@/hooks/useResumeData';import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";

export default FuturisticTemplate;

function FuturisticTemplate() {
  const resumeData = useResumeData();

  return (/*#__PURE__*/
    _jsxs("div", { className: "min-h-screen bg-[#050510] text-[#00f0ff] font-sans pb-32 overflow-x-hidden relative", children: [/*#__PURE__*/

      _jsx("div", { className: "fixed inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(500px)_rotateX(60deg)_translateY(-100px)_translateZ(-200px)] opacity-50 pointer-events-none" }), /*#__PURE__*/


      _jsxs("div", { className: "fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-8 bg-[#00f0ff]/5 backdrop-blur-md px-8 py-4 rounded border border-[#00f0ff]/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]", children: [/*#__PURE__*/
        _jsx("a", { href: "#core", className: "text-xs font-bold tracking-[0.2em] uppercase hover:text-[#ff00ff] transition-colors", children: "Core_Logic" }), /*#__PURE__*/
        _jsx("a", { href: "#systems", className: "text-xs font-bold tracking-[0.2em] uppercase hover:text-[#ff00ff] transition-colors", children: "Systems" }), /*#__PURE__*/
        _jsx("a", { href: "#timeline", className: "text-xs font-bold tracking-[0.2em] uppercase hover:text-[#ff00ff] transition-colors", children: "Timeline" }), /*#__PURE__*/
        _jsx("a", { href: "#comms", className: "text-xs font-bold tracking-[0.2em] uppercase hover:text-[#ff00ff] transition-colors", children: "Comms" })] }
      ), /*#__PURE__*/

      _jsxs("div", { className: "fixed top-6 right-6 z-50 flex items-center gap-3", children: [/*#__PURE__*/
        _jsxs("button", { className: "flex items-center gap-2 bg-[#ff00ff]/10 hover:bg-[#ff00ff]/30 text-[#ff00ff] px-5 py-2.5 rounded text-sm font-bold transition-all border border-[#ff00ff] backdrop-blur-md shadow-[0_0_20px_rgba(255,0,255,0.4)]", children: [/*#__PURE__*/
          _jsx(Download, { className: "w-4 h-4" }), " DOWNLOAD.ZIP"] }
        ), /*#__PURE__*/
        _jsxs(Link, { to: "/", hash: "templates", className: "flex items-center gap-2 bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 text-[#00f0ff] px-5 py-2.5 rounded text-sm font-bold transition-all border border-[#00f0ff] backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.4)]", children: [/*#__PURE__*/
          _jsx(X, { className: "w-4 h-4" }), " DISCONNECT"] }
        )] }
      ), /*#__PURE__*/

      _jsxs("div", { className: "relative max-w-5xl mx-auto pt-32 px-6", children: [/*#__PURE__*/


        _jsxs("header", { className: "mb-32 text-center relative", id: "core", children: [/*#__PURE__*/
          _jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-[#ff00ff]/10 blur-[100px] rounded-full pointer-events-none" }), /*#__PURE__*/

          _jsxs("div", { className: "w-40 h-40 mx-auto mb-8 relative", children: [/*#__PURE__*/
            _jsx("div", { className: "absolute inset-0 border-2 border-[#00f0ff] rounded-full animate-[spin_10s_linear_infinite] border-t-transparent" }), /*#__PURE__*/
            _jsx("div", { className: "absolute inset-2 border-2 border-[#ff00ff] rounded-full animate-[spin_7s_linear_infinite_reverse] border-b-transparent" }), /*#__PURE__*/
            _jsx("img", { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", alt: "Avatar", className: "w-full h-full object-cover rounded-full p-4" })] }
          ), /*#__PURE__*/

          _jsx("h1", { className: "text-6xl md:text-8xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ff00ff] uppercase", style: { textShadow: "0 0 30px rgba(0, 240, 255, 0.4)" }, children:
            resumeData?.name ? resumeData.name.replace(/\s+/g, '_') : 'ELARA_VEX' }
          ), /*#__PURE__*/
          _jsx("p", { className: "text-xl md:text-2xl tracking-[0.3em] uppercase text-[#00f0ff]/80 font-bold mb-8", children:
            resumeData?.role || "Cybernetic Systems Architect" }
          ), /*#__PURE__*/
          _jsx("div", { className: "flex justify-center gap-6", children: /*#__PURE__*/
            _jsx("button", { className: "border border-[#00f0ff] bg-[#00f0ff]/10 hover:bg-[#00f0ff] hover:text-black px-8 py-3 font-bold uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(0,240,255,0.5)]", children: "Initialize Sequence" }

            ) }
          )] }
        ), /*#__PURE__*/


        _jsxs("section", { id: "systems", className: "mb-32", children: [/*#__PURE__*/
          _jsxs("h2", { className: "text-3xl font-black uppercase tracking-[0.2em] mb-12 flex items-center gap-4 text-[#ff00ff]", children: [/*#__PURE__*/
            _jsx(TermIcon, { className: "w-8 h-8" }), " Active_Systems"] }
          ), /*#__PURE__*/
          _jsx("div", { className: "grid md:grid-cols-2 gap-8", children:
            resumeData?.projects?.length ? resumeData.projects.map((p, i) => /*#__PURE__*/
            _jsx("div", { className: `bg-black/40 border border-[${i % 2 === 0 ? '#ff00ff' : '#00f0ff'}]/40 p-1 rounded-lg backdrop-blur-md group hover:border-[${i % 2 === 0 ? '#00f0ff' : '#ff00ff'}] transition-colors cursor-pointer ${i % 2 !== 0 ? 'md:mt-12' : ''}`, children: /*#__PURE__*/
              _jsxs("div", { className: `border border-[${i % 2 === 0 ? '#ff00ff' : '#00f0ff'}]/20 p-6 h-full relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center bg-blend-overlay`, children: [/*#__PURE__*/
                _jsx("div", { className: "absolute inset-0 bg-black/80 group-hover:bg-black/60 transition-colors" }), /*#__PURE__*/
                _jsxs("div", { className: "relative z-10", children: [/*#__PURE__*/
                  _jsxs("div", { className: "flex justify-between items-start mb-6", children: [
                    i % 2 === 0 ? /*#__PURE__*/_jsx(Cpu, { className: "w-10 h-10 text-[#ff00ff] group-hover:text-[#00f0ff] transition-colors" }) : /*#__PURE__*/_jsx(Zap, { className: "w-10 h-10 text-[#00f0ff] group-hover:text-[#ff00ff] transition-colors" }), /*#__PURE__*/
                    _jsxs("span", { className: `text-xs bg-[${i % 2 === 0 ? '#ff00ff' : '#00f0ff'}]/20 text-[${i % 2 === 0 ? '#ff00ff' : '#00f0ff'}] px-2 py-1 rounded border border-[${i % 2 === 0 ? '#ff00ff' : '#00f0ff'}]/50 uppercase tracking-widest`, children: ["v", Math.floor(Math.random() * 3) + 1, ".", Math.floor(Math.random() * 9), ".", Math.floor(Math.random() * 9)] })] }
                  ), /*#__PURE__*/
                  _jsx("h3", { className: "text-2xl font-bold text-white mb-3 uppercase tracking-wider", children: p.title }), /*#__PURE__*/
                  _jsx("p", { className: `text-[${i % 2 === 0 ? '#00f0ff' : '#ff00ff'}]/80 text-sm leading-relaxed mb-6 font-medium`, children:
                    p.description }
                  ),
                  resumeData?.skills && /*#__PURE__*/
                  _jsx("div", { className: "flex flex-wrap gap-2", children:
                    resumeData.skills.slice(0, 2).map((skill, si) => /*#__PURE__*/
                    _jsx("span", { className: "text-xs font-bold tracking-widest uppercase border border-white/20 px-2 py-1", children: skill }, si)
                    ) }
                  )] }

                )] }
              ) }, i
            )
            ) : /*#__PURE__*/
            _jsxs(_Fragment, { children: [/*#__PURE__*/
              _jsx("div", { className: "bg-black/40 border border-[#ff00ff]/40 p-1 rounded-lg backdrop-blur-md group hover:border-[#00f0ff] transition-colors cursor-pointer", children: /*#__PURE__*/
                _jsxs("div", { className: "border border-[#ff00ff]/20 p-6 h-full relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center bg-blend-overlay", children: [/*#__PURE__*/
                  _jsx("div", { className: "absolute inset-0 bg-black/80 group-hover:bg-black/60 transition-colors" }), /*#__PURE__*/
                  _jsxs("div", { className: "relative z-10", children: [/*#__PURE__*/
                    _jsxs("div", { className: "flex justify-between items-start mb-6", children: [/*#__PURE__*/
                      _jsx(Cpu, { className: "w-10 h-10 text-[#ff00ff] group-hover:text-[#00f0ff] transition-colors" }), /*#__PURE__*/
                      _jsx("span", { className: "text-xs bg-[#ff00ff]/20 text-[#ff00ff] px-2 py-1 rounded border border-[#ff00ff]/50 uppercase tracking-widest", children: "v2.4.1" })] }
                    ), /*#__PURE__*/
                    _jsx("h3", { className: "text-2xl font-bold text-white mb-3 uppercase tracking-wider", children: "Neural City Grid" }), /*#__PURE__*/
                    _jsx("p", { className: "text-[#00f0ff]/80 text-sm leading-relaxed mb-6 font-medium", children: "Developing next-generation AI models for predictive city infrastructure management. Processing 10M+ data points/sec." }

                    ), /*#__PURE__*/
                    _jsxs("div", { className: "flex gap-2", children: [/*#__PURE__*/
                      _jsx("span", { className: "text-xs font-bold tracking-widest uppercase border border-white/20 px-2 py-1", children: "TensorFlow" }), /*#__PURE__*/
                      _jsx("span", { className: "text-xs font-bold tracking-widest uppercase border border-white/20 px-2 py-1", children: "Rust" })] }
                    )] }
                  )] }
                ) }
              ), /*#__PURE__*/

              _jsx("div", { className: "bg-black/40 border border-[#00f0ff]/40 p-1 rounded-lg backdrop-blur-md group hover:border-[#ff00ff] transition-colors cursor-pointer md:mt-12", children: /*#__PURE__*/
                _jsxs("div", { className: "border border-[#00f0ff]/20 p-6 h-full relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center bg-blend-overlay", children: [/*#__PURE__*/
                  _jsx("div", { className: "absolute inset-0 bg-black/80 group-hover:bg-black/60 transition-colors" }), /*#__PURE__*/
                  _jsxs("div", { className: "relative z-10", children: [/*#__PURE__*/
                    _jsxs("div", { className: "flex justify-between items-start mb-6", children: [/*#__PURE__*/
                      _jsx(Zap, { className: "w-10 h-10 text-[#00f0ff] group-hover:text-[#ff00ff] transition-colors" }), /*#__PURE__*/
                      _jsx("span", { className: "text-xs bg-[#00f0ff]/20 text-[#00f0ff] px-2 py-1 rounded border border-[#00f0ff]/50 uppercase tracking-widest", children: "v1.0.0" })] }
                    ), /*#__PURE__*/
                    _jsx("h3", { className: "text-2xl font-bold text-white mb-3 uppercase tracking-wider", children: "Quantum Ledger" }), /*#__PURE__*/
                    _jsx("p", { className: "text-[#ff00ff]/80 text-sm leading-relaxed mb-6 font-medium", children: "Optimization algorithms running on 128-qubit processors for ultra-secure financial markets." }

                    ), /*#__PURE__*/
                    _jsxs("div", { className: "flex gap-2", children: [/*#__PURE__*/
                      _jsx("span", { className: "text-xs font-bold tracking-widest uppercase border border-white/20 px-2 py-1", children: "Q#" }), /*#__PURE__*/
                      _jsx("span", { className: "text-xs font-bold tracking-widest uppercase border border-white/20 px-2 py-1", children: "Go" })] }
                    )] }
                  )] }
                ) }
              )] }
            ) }

          )] }
        ), /*#__PURE__*/


        _jsxs("section", { id: "timeline", className: "mb-32", children: [/*#__PURE__*/
          _jsxs("h2", { className: "text-3xl font-black uppercase tracking-[0.2em] mb-12 flex items-center gap-4 text-[#00f0ff]", children: [/*#__PURE__*/
            _jsx(Radio, { className: "w-8 h-8" }), " System_Logs"] }
          ), /*#__PURE__*/
          _jsx("div", { className: "relative border-l-2 border-[#00f0ff]/30 pl-8 space-y-12 py-4", children:
            resumeData?.experience?.length ? resumeData.experience.map((exp, i) => /*#__PURE__*/
            _jsxs("div", { className: "relative", children: [/*#__PURE__*/
              _jsx(Hexagon, { className: `absolute -left-[49px] top-0 w-8 h-8 text-[${i % 2 === 0 ? '#ff00ff' : '#00f0ff'}] fill-black` }), /*#__PURE__*/
              _jsxs("h3", { className: "text-2xl font-bold text-white uppercase tracking-wider mb-2", children: [exp.title, " // ", exp.company] }), /*#__PURE__*/
              _jsx("p", { className: `text-sm text-[${i % 2 === 0 ? '#00f0ff' : '#ff00ff'}] font-bold tracking-widest mb-4`, children: exp.period }), /*#__PURE__*/
              _jsx("p", { className: "text-[#00f0ff]/70 leading-relaxed max-w-2xl", children:
                exp.description }
              )] }, i
            )
            ) : /*#__PURE__*/
            _jsxs(_Fragment, { children: [/*#__PURE__*/
              _jsxs("div", { className: "relative", children: [/*#__PURE__*/
                _jsx(Hexagon, { className: "absolute -left-[49px] top-0 w-8 h-8 text-[#ff00ff] fill-black" }), /*#__PURE__*/
                _jsx("h3", { className: "text-2xl font-bold text-white uppercase tracking-wider mb-2", children: "Lead Architect // CyberDyne Sys" }), /*#__PURE__*/
                _jsx("p", { className: "text-sm text-[#00f0ff] font-bold tracking-widest mb-4", children: "2023 - PRESENT" }), /*#__PURE__*/
                _jsx("p", { className: "text-[#00f0ff]/70 leading-relaxed max-w-2xl", children: "Spearheading the transition from legacy binary systems to quantum-assisted neural processing nodes." }

                )] }
              ), /*#__PURE__*/
              _jsxs("div", { className: "relative", children: [/*#__PURE__*/
                _jsx(Hexagon, { className: "absolute -left-[49px] top-0 w-8 h-8 text-[#00f0ff] fill-black" }), /*#__PURE__*/
                _jsx("h3", { className: "text-2xl font-bold text-white uppercase tracking-wider mb-2", children: "Security Specialist // Nexus Corp" }), /*#__PURE__*/
                _jsx("p", { className: "text-sm text-[#ff00ff] font-bold tracking-widest mb-4", children: "2020 - 2023" }), /*#__PURE__*/
                _jsx("p", { className: "text-[#00f0ff]/70 leading-relaxed max-w-2xl", children: "Developed intrusion detection protocols using advanced machine learning heuristics." }

                )] }
              )] }
            ) }

          )] }
        ),


        resumeData?.education && resumeData.education.length > 0 && /*#__PURE__*/
        _jsxs("section", { className: "mb-32", children: [/*#__PURE__*/
          _jsxs("h2", { className: "text-3xl font-black uppercase tracking-[0.2em] mb-12 flex items-center gap-4 text-[#ff00ff]", children: [/*#__PURE__*/
            _jsx(Hexagon, { className: "w-8 h-8" }), " Training_Data"] }
          ), /*#__PURE__*/
          _jsx("div", { className: "grid gap-6", children:
            resumeData.education.map((edu, i) => /*#__PURE__*/
            _jsxs("div", { className: "bg-black/40 border border-[#ff00ff]/30 p-6 rounded-lg backdrop-blur-md relative overflow-hidden", children: [/*#__PURE__*/
              _jsx("div", { className: "absolute top-0 right-0 w-16 h-16 bg-[#ff00ff]/10 blur-xl" }), /*#__PURE__*/
              _jsx("h3", { className: "text-xl font-bold text-white uppercase tracking-wider mb-2", children: edu.degree }), /*#__PURE__*/
              _jsxs("p", { className: "text-sm text-[#ff00ff] font-bold tracking-widest mb-4", children: [edu.institution, " // ", edu.period] }),
              edu.description && /*#__PURE__*/_jsx("p", { className: "text-[#00f0ff]/70 leading-relaxed", children: edu.description })] }, i
            )
            ) }
          )] }
        ),



        resumeData?.additionalSections?.map((section, idx) => /*#__PURE__*/
        _jsxs("section", { className: "mb-32", children: [/*#__PURE__*/
          _jsxs("h2", { className: "text-3xl font-black uppercase tracking-[0.2em] mb-12 flex items-center gap-4 text-[#00f0ff]", children: [/*#__PURE__*/
            _jsx(Radio, { className: "w-8 h-8" }), " ", section.title.replace(/\s+/g, '_')] }
          ), /*#__PURE__*/
          _jsx("div", { className: "grid gap-6", children:
            section.items.map((item, i) => /*#__PURE__*/
            _jsxs("div", { className: "bg-black/40 border border-[#00f0ff]/30 p-6 rounded-lg backdrop-blur-md relative overflow-hidden", children: [/*#__PURE__*/
              _jsx("div", { className: "absolute top-0 right-0 w-16 h-16 bg-[#00f0ff]/10 blur-xl" }), /*#__PURE__*/
              _jsx("h3", { className: "text-xl font-bold text-white uppercase tracking-wider mb-2", children: item.title }),
              (item.subtitle || item.period) && /*#__PURE__*/
              _jsxs("p", { className: "text-sm text-[#00f0ff] font-bold tracking-widest mb-4", children: [
                item.subtitle, " ", item.subtitle && item.period ? '//' : '', " ", item.period] }
              ),

              item.description && /*#__PURE__*/_jsx("p", { className: "text-[#00f0ff]/70 leading-relaxed", children: item.description })] }, i
            )
            ) }
          )] }, idx
        )
        ), /*#__PURE__*/


        _jsxs("section", { id: "comms", className: "border border-[#00f0ff]/30 bg-[#00f0ff]/5 p-8 md:p-12 backdrop-blur-md relative overflow-hidden", children: [/*#__PURE__*/
          _jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f0ff] to-[#ff00ff]" }), /*#__PURE__*/
          _jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center gap-8 relative z-10", children: [/*#__PURE__*/
            _jsxs("div", { children: [/*#__PURE__*/
              _jsxs("h2", { className: "text-4xl font-black uppercase tracking-[0.1em] mb-4 text-white flex items-center gap-3", children: [/*#__PURE__*/
                _jsx(Shield, { className: "w-8 h-8 text-[#ff00ff]" }), " Open_Channel"] }
              ), /*#__PURE__*/
              _jsx("p", { className: "text-[#00f0ff]/80", children: "Secure transmissions accepted. Encryption key available upon request." })] }
            ), /*#__PURE__*/
            _jsx("div", { className: "w-full md:w-auto flex flex-col gap-4", children: /*#__PURE__*/
              _jsx("button", { className: "w-full md:w-auto border-2 border-[#ff00ff] bg-black text-[#ff00ff] px-8 py-4 font-bold uppercase tracking-widest hover:bg-[#ff00ff] hover:text-black transition-colors shadow-[0_0_15px_rgba(255,0,255,0.3)]", children: "Transmit Message" }

              ) }
            )] }
          )] }
        ), /*#__PURE__*/

        _jsxs("div", { className: "mt-20 border-t border-[#00f0ff]/20 pt-8 flex justify-between items-center text-xs uppercase tracking-[0.3em] text-[#00f0ff]/40", children: [/*#__PURE__*/
          _jsx("span", { children: "Sys.Ver 9.4.2" }), /*#__PURE__*/
          _jsx("span", { children: "Status: Online" })] }
        )] }
      )] }
    ));

}