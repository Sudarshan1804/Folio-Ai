import { X, Play, ArrowRight, ArrowDown, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useResumeData } from '@/hooks/useResumeData';import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";


export default DarkStudioTemplate;

function DarkStudioTemplate() {
  const resumeData = useResumeData();

  return (/*#__PURE__*/
    _jsxs("div", { className: "min-h-screen bg-[#050505] text-zinc-300 font-sans pb-32", children: [/*#__PURE__*/

      _jsxs("div", { className: "fixed top-6 right-6 z-50 flex items-center gap-3", children: [/*#__PURE__*/
        _jsxs("button", { className: "flex items-center gap-2 bg-zinc-800 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:bg-zinc-700 shadow-2xl", children: [/*#__PURE__*/
          _jsx(Download, { className: "w-4 h-4" }), " Download"] }
        ), /*#__PURE__*/
        _jsxs(Link, { to: "/", hash: "templates", className: "flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:bg-zinc-200 shadow-2xl", children: [/*#__PURE__*/
          _jsx(X, { className: "w-4 h-4" }), " Close"] }
        )] }
      ), /*#__PURE__*/

      _jsxs("div", { className: "max-w-[90rem] mx-auto px-6 md:px-12", children: [/*#__PURE__*/

        _jsxs("header", { className: "flex justify-between items-center py-8 mb-20 border-b border-zinc-800", children: [/*#__PURE__*/
          _jsx("div", { className: "text-2xl font-black tracking-tighter text-white uppercase", children: resumeData?.name ? resumeData.name.split(' ')[0] + '.' : 'Vanguard.' }), /*#__PURE__*/
          _jsxs("nav", { className: "hidden md:flex gap-12 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500", children: [/*#__PURE__*/
            _jsx("a", { href: "#work", className: "text-white", children: "Work" }), /*#__PURE__*/
            _jsx("a", { href: "#expertise", className: "hover:text-white transition-colors cursor-pointer", children: "Expertise" }), /*#__PURE__*/
            _jsx("a", { href: "#contact", className: "hover:text-white transition-colors cursor-pointer", children: "Contact" })] }
          )] }
        ), /*#__PURE__*/

        _jsxs("main", { className: "space-y-40", children: [/*#__PURE__*/


          _jsxs("section", { className: "max-w-5xl", children: [/*#__PURE__*/
            _jsx("h1", { className: "text-6xl md:text-8xl md:text-[9rem] font-bold text-white tracking-tighter leading-[0.9] mb-12 uppercase", children:
              resumeData?.role ? resumeData.role.split(' ').map((w, i, arr) => i === arr.length - 1 ? /*#__PURE__*/_jsxs(_Fragment, { children: [/*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("span", { className: "text-zinc-600", children: w }, i)] }) : w + ' ') : /*#__PURE__*/_jsxs(_Fragment, { children: ["DIGITAL ", /*#__PURE__*/_jsx("br", {}), " ", /*#__PURE__*/_jsx("span", { className: "text-zinc-600", children: "FLAGSHIP" }), " ", /*#__PURE__*/_jsx("br", {}), " STORES."] }) }
            ), /*#__PURE__*/
            _jsxs("div", { className: "flex flex-col md:flex-row gap-12 items-start md:items-center justify-between", children: [/*#__PURE__*/
              _jsx("p", { className: "text-2xl md:text-3xl text-zinc-400 font-light max-w-2xl leading-tight", children:
                resumeData?.about || "An independent creative studio focusing on high-end web experiences, 3D interactions, and visionary art direction." }
              ), /*#__PURE__*/
              _jsxs("button", { className: "flex items-center gap-4 bg-zinc-900 text-white px-8 py-6 rounded-full font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors shrink-0 group border border-zinc-800", children: [/*#__PURE__*/
                _jsx(Play, { className: "w-5 h-5 fill-white group-hover:scale-110 transition-transform" }), " Showreel"] }
              )] }
            ), /*#__PURE__*/
            _jsx("div", { className: "mt-24 animate-bounce", children: /*#__PURE__*/
              _jsx(ArrowDown, { className: "w-8 h-8 text-zinc-600" }) }
            )] }
          ), /*#__PURE__*/


          _jsxs("section", { className: "w-full aspect-video bg-zinc-900 rounded-3xl overflow-hidden relative group cursor-pointer", children: [/*#__PURE__*/
            _jsx("img", { src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", alt: "Showreel Cover", className: "w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2s]" }), /*#__PURE__*/
            _jsx("div", { className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500", children: /*#__PURE__*/
              _jsx("div", { className: "w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20", children: /*#__PURE__*/
                _jsx(Play, { className: "w-8 h-8 fill-white text-white ml-2" }) }
              ) }
            )] }
          ), /*#__PURE__*/


          _jsxs("section", { id: "work", children: [/*#__PURE__*/
            _jsxs("div", { className: "flex justify-between items-end mb-16 border-b border-zinc-800 pb-8", children: [/*#__PURE__*/
              _jsx("h2", { className: "text-5xl font-bold text-white tracking-tight", children: "SELECTED WORK" }), /*#__PURE__*/
              _jsxs("span", { className: "text-xs uppercase tracking-[0.2em] font-bold flex items-center gap-4 hover:text-white cursor-pointer transition-colors pb-2", children: ["View all cases ", /*#__PURE__*/
                _jsx(ArrowRight, { className: "w-4 h-4" })] }
              )] }
            ), /*#__PURE__*/

            _jsx("div", { className: "grid md:grid-cols-2 gap-x-12 gap-y-24", children:
              resumeData?.projects?.length ? resumeData.projects.slice(0, 4).map((p, i) => /*#__PURE__*/
              _jsxs("div", { className: `group cursor-pointer ${i % 2 !== 0 ? 'md:mt-32' : ''}`, children: [/*#__PURE__*/
                _jsxs("div", { className: "aspect-[4/5] bg-zinc-900 rounded-2xl mb-8 overflow-hidden relative", children: [/*#__PURE__*/
                  _jsx("img", { src: i % 2 === 0 ? "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" : "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", alt: p.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90" }), /*#__PURE__*/
                  _jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8", children: /*#__PURE__*/
                    _jsx("span", { className: "bg-white text-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full w-max", children: "View Case" }) }
                  )] }
                ), /*#__PURE__*/
                _jsxs("div", { className: "flex justify-between items-start", children: [/*#__PURE__*/
                  _jsxs("div", { children: [/*#__PURE__*/
                    _jsx("h3", { className: "text-3xl font-bold text-white mb-2 tracking-tight", children: p.title }), /*#__PURE__*/
                    _jsx("p", { className: "text-zinc-500 uppercase tracking-widest text-xs font-bold truncate max-w-[200px]", children: p.description })] }
                  ), /*#__PURE__*/
                  _jsxs("span", { className: "text-zinc-600 font-serif italic text-xl", children: ["0", i + 1] })] }
                )] }, i
              )
              ) : /*#__PURE__*/
              _jsxs(_Fragment, { children: [/*#__PURE__*/
                _jsxs("div", { className: "group cursor-pointer", children: [/*#__PURE__*/
                  _jsxs("div", { className: "aspect-[4/5] bg-zinc-900 rounded-2xl mb-8 overflow-hidden relative", children: [/*#__PURE__*/
                    _jsx("img", { src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", alt: "Project 1", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90" }), /*#__PURE__*/
                    _jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8", children: /*#__PURE__*/
                      _jsx("span", { className: "bg-white text-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full w-max", children: "View Case" }) }
                    )] }
                  ), /*#__PURE__*/
                  _jsxs("div", { className: "flex justify-between items-start", children: [/*#__PURE__*/
                    _jsxs("div", { children: [/*#__PURE__*/
                      _jsx("h3", { className: "text-3xl font-bold text-white mb-2 tracking-tight", children: "Aura Automotive" }), /*#__PURE__*/
                      _jsx("p", { className: "text-zinc-500 uppercase tracking-widest text-xs font-bold", children: "Web Design, 3D Experience" })] }
                    ), /*#__PURE__*/
                    _jsx("span", { className: "text-zinc-600 font-serif italic text-xl", children: "01" })] }
                  )] }
                ), /*#__PURE__*/

                _jsxs("div", { className: "group cursor-pointer md:mt-32", children: [/*#__PURE__*/
                  _jsxs("div", { className: "aspect-[4/5] bg-zinc-900 rounded-2xl mb-8 overflow-hidden relative", children: [/*#__PURE__*/
                    _jsx("img", { src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", alt: "Project 2", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90" }), /*#__PURE__*/
                    _jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8", children: /*#__PURE__*/
                      _jsx("span", { className: "bg-white text-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full w-max", children: "View Case" }) }
                    )] }
                  ), /*#__PURE__*/
                  _jsxs("div", { className: "flex justify-between items-start", children: [/*#__PURE__*/
                    _jsxs("div", { children: [/*#__PURE__*/
                      _jsx("h3", { className: "text-3xl font-bold text-white mb-2 tracking-tight", children: "Maison De Luxe" }), /*#__PURE__*/
                      _jsx("p", { className: "text-zinc-500 uppercase tracking-widest text-xs font-bold", children: "E-Commerce, Art Direction" })] }
                    ), /*#__PURE__*/
                    _jsx("span", { className: "text-zinc-600 font-serif italic text-xl", children: "02" })] }
                  )] }
                )] }
              ) }

            )] }
          ), /*#__PURE__*/


          _jsxs("section", { id: "expertise", className: "grid md:grid-cols-3 gap-12 border-t border-zinc-800 pt-20", children: [/*#__PURE__*/
            _jsx("div", { className: "md:col-span-1", children: /*#__PURE__*/
              _jsx("h2", { className: "text-4xl font-bold text-white tracking-tight", children: "EXPERTISE." }) }
            ), /*#__PURE__*/
            _jsx("div", { className: "md:col-span-2 grid sm:grid-cols-2 gap-12", children:
              resumeData?.skills?.length ? resumeData.skills.slice(0, 4).map((skill, i) => /*#__PURE__*/
              _jsxs("div", { children: [/*#__PURE__*/
                _jsx("h3", { className: "text-xl font-bold text-white mb-4", children: skill }), /*#__PURE__*/
                _jsxs("p", { className: "text-zinc-400 leading-relaxed", children: ["Demonstrated expertise and hands-on experience in building scalable solutions using ", skill, "."] })] }, i
              )
              ) : /*#__PURE__*/
              _jsxs(_Fragment, { children: [/*#__PURE__*/
                _jsxs("div", { children: [/*#__PURE__*/
                  _jsx("h3", { className: "text-xl font-bold text-white mb-4", children: "Digital Platforms" }), /*#__PURE__*/
                  _jsx("p", { className: "text-zinc-400 leading-relaxed", children: "We build robust, scalable e-commerce solutions and marketing sites using headless architectures and modern web frameworks." })] }
                ), /*#__PURE__*/
                _jsxs("div", { children: [/*#__PURE__*/
                  _jsx("h3", { className: "text-xl font-bold text-white mb-4", children: "Art Direction" }), /*#__PURE__*/
                  _jsx("p", { className: "text-zinc-400 leading-relaxed", children: "From photography to motion graphics, we define the visual language that elevates your brand above the competition." })] }
                ), /*#__PURE__*/
                _jsxs("div", { children: [/*#__PURE__*/
                  _jsx("h3", { className: "text-xl font-bold text-white mb-4", children: "3D & Motion" }), /*#__PURE__*/
                  _jsx("p", { className: "text-zinc-400 leading-relaxed", children: "Integrating WebGL and three.js to create immersive, interactive experiences that capture user attention instantly." })] }
                ), /*#__PURE__*/
                _jsxs("div", { children: [/*#__PURE__*/
                  _jsx("h3", { className: "text-xl font-bold text-white mb-4", children: "Brand Strategy" }), /*#__PURE__*/
                  _jsx("p", { className: "text-zinc-400 leading-relaxed", children: "Positioning your brand in the digital landscape through deep research, competitor analysis, and strategic copywriting." })] }
                )] }
              ) }

            )] }
          ),


          resumeData?.education && resumeData.education.length > 0 && /*#__PURE__*/
          _jsxs("section", { className: "grid md:grid-cols-3 gap-12 border-t border-zinc-800 pt-20", children: [/*#__PURE__*/
            _jsx("div", { className: "md:col-span-1", children: /*#__PURE__*/
              _jsx("h2", { className: "text-4xl font-bold text-white tracking-tight uppercase", children: "Education." }) }
            ), /*#__PURE__*/
            _jsx("div", { className: "md:col-span-2 grid sm:grid-cols-2 gap-12", children:
              resumeData.education.map((edu, i) => /*#__PURE__*/
              _jsxs("div", { children: [/*#__PURE__*/
                _jsx("h3", { className: "text-xl font-bold text-white mb-2", children: edu.degree }), /*#__PURE__*/
                _jsxs("p", { className: "text-zinc-500 uppercase tracking-widest text-xs font-bold mb-4", children: [edu.institution, " \u2022 ", edu.period] }),
                edu.description && /*#__PURE__*/_jsx("p", { className: "text-zinc-400 leading-relaxed", children: edu.description })] }, i
              )
              ) }
            )] }
          ),


          resumeData?.additionalSections?.map((section, idx) => /*#__PURE__*/
          _jsxs("section", { className: "grid md:grid-cols-3 gap-12 border-t border-zinc-800 pt-20", children: [/*#__PURE__*/
            _jsx("div", { className: "md:col-span-1", children: /*#__PURE__*/
              _jsxs("h2", { className: "text-4xl font-bold text-white tracking-tight uppercase", children: [section.title, "."] }) }
            ), /*#__PURE__*/
            _jsx("div", { className: "md:col-span-2 grid sm:grid-cols-2 gap-12", children:
              section.items.map((item, i) => /*#__PURE__*/
              _jsxs("div", { children: [/*#__PURE__*/
                _jsx("h3", { className: "text-xl font-bold text-white mb-2", children: item.title }),
                (item.subtitle || item.period) && /*#__PURE__*/
                _jsxs("p", { className: "text-zinc-500 uppercase tracking-widest text-xs font-bold mb-4", children: [
                  item.subtitle, " ", item.subtitle && item.period ? '•' : '', " ", item.period] }
                ),

                item.description && /*#__PURE__*/_jsx("p", { className: "text-zinc-400 leading-relaxed", children: item.description })] }, i
              )
              ) }
            )] }, idx
          )
          ), /*#__PURE__*/


          _jsxs("footer", { id: "contact", className: "pt-32 pb-12 border-t border-zinc-800 flex flex-col items-center text-center", children: [/*#__PURE__*/
            _jsx("h2", { className: "text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-12 hover:text-zinc-400 transition-colors cursor-pointer", children: "Let's Talk." }

            ), /*#__PURE__*/
            _jsxs("div", { className: "flex gap-8 mb-20 text-sm font-bold uppercase tracking-widest text-zinc-500 flex-wrap justify-center", children: [
              resumeData?.contact?.email && /*#__PURE__*/
              _jsx("a", { href: `mailto:${resumeData.contact.email}`, className: "hover:text-white cursor-pointer transition-colors", children: resumeData.contact.email }),

              resumeData?.contact?.phone && /*#__PURE__*/
              _jsx("a", { href: `tel:${resumeData.contact.phone}`, className: "hover:text-white cursor-pointer transition-colors", children: resumeData.contact.phone }),

              !resumeData?.contact?.email && !resumeData?.contact?.phone && /*#__PURE__*/
              _jsxs(_Fragment, { children: [/*#__PURE__*/
                _jsx("span", { className: "hover:text-white cursor-pointer transition-colors", children: "hello@vanguard.studio" }), /*#__PURE__*/
                _jsx("span", { className: "hover:text-white cursor-pointer transition-colors", children: "+1 (555) 000-0000" })] }
              )] }

            ), /*#__PURE__*/
            _jsxs("div", { className: "w-full flex justify-between items-center text-xs text-zinc-600 font-bold tracking-widest uppercase", children: [/*#__PURE__*/
              _jsxs("span", { children: ["\xA9 ", new Date().getFullYear(), " ", resumeData?.name || 'Vanguard Studio'] }), /*#__PURE__*/
              _jsx("div", { className: "flex gap-4", children:
                resumeData?.socialLinks?.length ?
                resumeData.socialLinks.map((social, i) => /*#__PURE__*/
                _jsx("a", { href: social.url, target: "_blank", rel: "noreferrer", className: "hover:text-white cursor-pointer", children: social.platform.substring(0, 2).toUpperCase() }, i)
                ) : /*#__PURE__*/

                _jsxs(_Fragment, { children: [/*#__PURE__*/
                  _jsx("span", { className: "hover:text-white cursor-pointer", children: "TW" }), /*#__PURE__*/
                  _jsx("span", { className: "hover:text-white cursor-pointer", children: "IG" }), /*#__PURE__*/
                  _jsx("span", { className: "hover:text-white cursor-pointer", children: "IN" })] }
                ) }

              )] }
            )] }
          )] }

        )] }
      )] }
    ));

}