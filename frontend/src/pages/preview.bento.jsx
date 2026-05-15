
import { X, Github, Twitter, Mail, ArrowUpRight, Layout, Download } from 'lucide-react';
import { useResumeData } from '@/hooks/useResumeData';import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";

export default BentoTemplate;

function BentoTemplate() {
  const resumeData = useResumeData();

  return (/*#__PURE__*/
    _jsxs("div", { className: "min-h-screen bg-[#0f172a] text-slate-200 font-sans p-4 md:p-8 pb-24", children: [/*#__PURE__*/

      _jsxs("div", { className: "fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-slate-700/50 shadow-xl", children: [/*#__PURE__*/
        _jsx("a", { href: "#about", className: "text-sm font-medium hover:text-white px-3 py-1", children: "About" }), /*#__PURE__*/
        _jsx("a", { href: "#experience", className: "text-sm font-medium hover:text-white px-3 py-1", children: "Experience" }), /*#__PURE__*/
        _jsx("a", { href: "#projects", className: "text-sm font-medium hover:text-white px-3 py-1", children: "Projects" }), /*#__PURE__*/
        _jsx("a", { href: "#contact", className: "text-sm font-medium hover:text-white px-3 py-1", children: "Contact" })] }
      ), /*#__PURE__*/

      _jsxs("div", { className: "fixed top-6 right-6 z-50 flex items-center gap-3", children: [/*#__PURE__*/
        _jsxs("button", { className: "flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg border border-indigo-400/30", children: [/*#__PURE__*/
          _jsx(Download, { className: "w-4 h-4" }), " Download .zip"] }
        ), /*#__PURE__*/
        _jsxs(Link, { to: "/", hash: "templates", className: "flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg border border-white/10", children: [/*#__PURE__*/
          _jsx(X, { className: "w-4 h-4" }), " Close Preview"] }
        )] }
      ), /*#__PURE__*/

      _jsxs("div", { className: "max-w-5xl mx-auto space-y-4 mt-20 md:mt-12", children: [/*#__PURE__*/

        _jsxs("header", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", id: "about", children: [/*#__PURE__*/
          _jsxs("div", { className: "md:col-span-2 bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 flex flex-col justify-end min-h-[400px] relative overflow-hidden group", children: [/*#__PURE__*/
            _jsx("img", { src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", alt: "Workspace", className: "absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 mix-blend-overlay" }), /*#__PURE__*/
            _jsxs("div", { className: "relative z-10", children: [/*#__PURE__*/
              _jsx("h1", { className: "text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white", children: resumeData?.name ? resumeData.name + '.' : 'Alex Morgan.' }), /*#__PURE__*/
              _jsx("p", { className: "text-xl text-slate-400 max-w-lg leading-relaxed", children:
                resumeData?.role || "A passionate Product Designer & Frontend Developer crafting modern, accessible digital experiences." }
              )] }
            )] }
          ), /*#__PURE__*/
          _jsxs("div", { className: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[400px] text-center shadow-2xl relative overflow-hidden", children: [/*#__PURE__*/
            _jsx("div", { className: "absolute inset-0 bg-black/10" }), /*#__PURE__*/
            _jsx("img", { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", alt: "Alex Morgan", className: "w-40 h-40 object-cover rounded-full border-4 border-white/20 shadow-2xl relative z-10 mb-6" }), /*#__PURE__*/
            _jsx("h2", { className: "text-2xl font-bold text-white relative z-10", children: "Based in SF" }), /*#__PURE__*/
            _jsx("p", { className: "text-white/80 font-medium relative z-10", children: "Available for work" })] }
          )] }
        ), /*#__PURE__*/


        _jsxs("main", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [/*#__PURE__*/


          _jsxs("div", { id: "projects", className: "md:col-span-2 md:row-span-2 bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 group hover:border-slate-600 transition-colors cursor-pointer flex flex-col", children: [/*#__PURE__*/
            _jsxs("div", { className: "aspect-[4/3] rounded-2xl mb-6 overflow-hidden relative w-full", children: [/*#__PURE__*/
              _jsx("img", { src: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Project Alpha", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" }), /*#__PURE__*/
              _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" })] }
            ), /*#__PURE__*/
            _jsxs("div", { className: "mt-auto", children: [/*#__PURE__*/
              _jsxs("h3", { className: "text-3xl font-bold mb-3 flex items-center justify-between text-white", children: [
                resumeData?.projects?.[0]?.title || "FinTech App Redesign", " ", /*#__PURE__*/_jsx(ArrowUpRight, { className: "w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" })] }
              ), /*#__PURE__*/
              _jsx("p", { className: "text-slate-400 text-lg leading-relaxed", children: resumeData?.projects?.[0]?.description || "A complete overhaul of a mobile banking app, focusing on accessibility and modern transaction flows. Increased user retention by 40%." })] }
            )] }
          ), /*#__PURE__*/


          _jsxs("div", { className: "md:col-span-2 bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 flex flex-col justify-center", children: [/*#__PURE__*/
            _jsx("h3", { className: "text-xl font-semibold mb-4 text-white", children: "Philosophy" }), /*#__PURE__*/
            _jsx("p", { className: "text-slate-400 leading-relaxed text-lg", children:
              resumeData?.about || "I believe in designing with empathy. The best products aren't just beautiful—they solve real problems for real people. Over the past 6 years, I've had the privilege of working with startups and enterprise companies alike to build scalable, human-centered software." }
            )] }
          ), /*#__PURE__*/


          _jsxs("div", { className: "bg-slate-800/50 rounded-3xl p-6 border border-slate-700/50 flex flex-col items-center justify-center gap-4 hover:bg-slate-700/50 transition-colors cursor-pointer", children: [/*#__PURE__*/
            _jsx(Github, { className: "w-10 h-10 text-white" }), /*#__PURE__*/
            _jsx("span", { className: "text-sm font-medium uppercase tracking-wider", children: "GitHub" })] }
          ), /*#__PURE__*/
          _jsxs("div", { className: "bg-[#1DA1F2]/10 rounded-3xl p-6 border border-[#1DA1F2]/20 flex flex-col items-center justify-center gap-4 hover:bg-[#1DA1F2]/20 transition-colors cursor-pointer text-[#1DA1F2]", children: [/*#__PURE__*/
            _jsx(Twitter, { className: "w-10 h-10" }), /*#__PURE__*/
            _jsx("span", { className: "text-sm font-medium uppercase tracking-wider", children: "Twitter" })] }
          ), /*#__PURE__*/


          _jsxs("div", { id: "experience", className: "md:col-span-4 bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 mt-4", children: [/*#__PURE__*/
            _jsx("h3", { className: "text-2xl font-bold mb-8 text-white", children: "Experience" }), /*#__PURE__*/
            _jsx("div", { className: "space-y-8", children:
              resumeData?.experience?.length ? resumeData.experience.map((exp, i) => /*#__PURE__*/
              _jsxs("div", { className: `flex flex-col md:flex-row md:items-start gap-4 md:gap-8 ${i < resumeData.experience.length - 1 ? 'border-b border-slate-700/50 pb-8' : 'pb-4'}`, children: [/*#__PURE__*/
                _jsx("div", { className: "md:w-48 shrink-0", children: /*#__PURE__*/
                  _jsx("p", { className: "text-slate-400 font-medium", children: exp.period }) }
                ), /*#__PURE__*/
                _jsxs("div", { children: [/*#__PURE__*/
                  _jsx("h4", { className: "text-xl font-bold text-white", children: exp.title }), /*#__PURE__*/
                  _jsx("p", { className: "text-indigo-400 mb-4 font-medium", children: exp.company }), /*#__PURE__*/
                  _jsx("p", { className: "text-slate-400 leading-relaxed", children: exp.description })] }
                )] }, i
              )
              ) : /*#__PURE__*/
              _jsxs(_Fragment, { children: [/*#__PURE__*/
                _jsxs("div", { className: "flex flex-col md:flex-row md:items-start gap-4 md:gap-8 border-b border-slate-700/50 pb-8", children: [/*#__PURE__*/
                  _jsx("div", { className: "md:w-48 shrink-0", children: /*#__PURE__*/
                    _jsx("p", { className: "text-slate-400 font-medium", children: "2021 - Present" }) }
                  ), /*#__PURE__*/
                  _jsxs("div", { children: [/*#__PURE__*/
                    _jsx("h4", { className: "text-xl font-bold text-white", children: "Senior Product Designer" }), /*#__PURE__*/
                    _jsx("p", { className: "text-indigo-400 mb-4 font-medium", children: "Stripe" }), /*#__PURE__*/
                    _jsx("p", { className: "text-slate-400 leading-relaxed", children: "Leading design for the core payments team. Spearheaded the redesign of the merchant dashboard, resulting in a 25% decrease in support tickets." })] }
                  )] }
                ), /*#__PURE__*/
                _jsxs("div", { className: "flex flex-col md:flex-row md:items-start gap-4 md:gap-8 pb-4", children: [/*#__PURE__*/
                  _jsx("div", { className: "md:w-48 shrink-0", children: /*#__PURE__*/
                    _jsx("p", { className: "text-slate-400 font-medium", children: "2018 - 2021" }) }
                  ), /*#__PURE__*/
                  _jsxs("div", { children: [/*#__PURE__*/
                    _jsx("h4", { className: "text-xl font-bold text-white", children: "UI/UX Engineer" }), /*#__PURE__*/
                    _jsx("p", { className: "text-indigo-400 mb-4 font-medium", children: "Airbnb" }), /*#__PURE__*/
                    _jsx("p", { className: "text-slate-400 leading-relaxed", children: "Bridged the gap between design and engineering. Built reusable React components for the internal design system used by over 100 developers." })] }
                  )] }
                )] }
              ) }

            )] }
          ), /*#__PURE__*/


          _jsxs("div", { className: "md:col-span-2 bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 flex flex-col justify-center", children: [/*#__PURE__*/
            _jsx("h3", { className: "text-xl font-bold mb-6 text-white", children: "Tech Stack & Tools" }), /*#__PURE__*/
            _jsx("div", { className: "flex flex-wrap gap-3", children:
              (resumeData?.skills?.length ? resumeData.skills : ['Figma', 'React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion', 'Webflow']).map((skill) => /*#__PURE__*/
              _jsx("span", { className: "px-5 py-2.5 rounded-full bg-slate-900 text-sm font-medium border border-slate-700 text-slate-300", children:
                skill }, skill
              )
              ) }
            )] }
          ), /*#__PURE__*/


          _jsxs("div", { className: "md:col-span-2 bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 group hover:border-slate-600 transition-colors cursor-pointer flex flex-col justify-between", children: [/*#__PURE__*/
            _jsxs("div", { className: "flex items-center gap-4 mb-6", children: [/*#__PURE__*/
              _jsx("div", { className: "w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center", children: /*#__PURE__*/
                _jsx(Layout, { className: "w-7 h-7 text-indigo-400" }) }
              ), /*#__PURE__*/
              _jsx("h3", { className: "text-2xl font-bold text-white", children: resumeData?.projects?.[1]?.title || "Design System Core" })] }
            ), /*#__PURE__*/
            _jsx("p", { className: "text-slate-400 leading-relaxed mb-6", children: resumeData?.projects?.[1]?.description || "An open-source UI component library built with accessibility and performance in mind. Over 5k stars on GitHub." }), /*#__PURE__*/
            _jsxs("span", { className: "text-indigo-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all", children: ["View Repository ", /*#__PURE__*/_jsx(ArrowUpRight, { className: "w-4 h-4" })] })] }
          ),


          resumeData?.education && resumeData.education.length > 0 && /*#__PURE__*/
          _jsxs("div", { className: "md:col-span-4 bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 mt-4", children: [/*#__PURE__*/
            _jsx("h3", { className: "text-2xl font-bold mb-8 text-white", children: "Education" }), /*#__PURE__*/
            _jsx("div", { className: "space-y-8", children:
              resumeData.education.map((edu, i) => /*#__PURE__*/
              _jsxs("div", { className: `flex flex-col md:flex-row md:items-start gap-4 md:gap-8 ${i < resumeData.education.length - 1 ? 'border-b border-slate-700/50 pb-8' : 'pb-4'}`, children: [/*#__PURE__*/
                _jsx("div", { className: "md:w-48 shrink-0", children: /*#__PURE__*/
                  _jsx("p", { className: "text-slate-400 font-medium", children: edu.period }) }
                ), /*#__PURE__*/
                _jsxs("div", { children: [/*#__PURE__*/
                  _jsx("h4", { className: "text-xl font-bold text-white", children: edu.degree }), /*#__PURE__*/
                  _jsx("p", { className: "text-indigo-400 mb-4 font-medium", children: edu.institution }),
                  edu.description && /*#__PURE__*/_jsx("p", { className: "text-slate-400 leading-relaxed", children: edu.description })] }
                )] }, i
              )
              ) }
            )] }
          ),



          resumeData?.additionalSections?.map((section, idx) => /*#__PURE__*/
          _jsxs("div", { className: "md:col-span-4 bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 mt-4", children: [/*#__PURE__*/
            _jsx("h3", { className: "text-2xl font-bold mb-8 text-white", children: section.title }), /*#__PURE__*/
            _jsx("div", { className: "space-y-8", children:
              section.items.map((item, i) => /*#__PURE__*/
              _jsxs("div", { className: `flex flex-col md:flex-row md:items-start gap-4 md:gap-8 ${i < section.items.length - 1 ? 'border-b border-slate-700/50 pb-8' : 'pb-4'}`, children: [/*#__PURE__*/
                _jsx("div", { className: "md:w-48 shrink-0", children: /*#__PURE__*/
                  _jsx("p", { className: "text-slate-400 font-medium", children: item.period }) }
                ), /*#__PURE__*/
                _jsxs("div", { children: [/*#__PURE__*/
                  _jsx("h4", { className: "text-xl font-bold text-white", children: item.title }),
                  item.subtitle && /*#__PURE__*/_jsx("p", { className: "text-indigo-400 mb-4 font-medium", children: item.subtitle }),
                  item.description && /*#__PURE__*/_jsx("p", { className: "text-slate-400 leading-relaxed", children: item.description })] }
                )] }, i
              )
              ) }
            )] }, idx
          )
          ), /*#__PURE__*/


          _jsxs("div", { id: "contact", className: "md:col-span-4 bg-gradient-to-r from-slate-800 to-slate-800/50 rounded-3xl p-8 md:p-12 border border-slate-700/50 flex flex-col md:flex-row items-center justify-between gap-8 mt-4", children: [/*#__PURE__*/
            _jsxs("div", { children: [/*#__PURE__*/
              _jsx("h3", { className: "text-4xl font-bold mb-4 text-white", children: "Let's build something." }), /*#__PURE__*/
              _jsx("p", { className: "text-slate-400 text-lg max-w-md", children: "I'm currently available for freelance projects and open to full-time opportunities." })] }
            ), /*#__PURE__*/
            _jsxs("button", { className: "px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-3 shrink-0 shadow-xl shadow-white/10 text-lg", children: [/*#__PURE__*/
              _jsx(Mail, { className: "w-5 h-5" }), " alex@example.com"] }
            )] }
          )] }
        ), /*#__PURE__*/

        _jsx("footer", { className: "text-center py-8 text-slate-500 text-sm", children: /*#__PURE__*/
          _jsxs("p", { children: ["\xA9 ", new Date().getFullYear(), " ", resumeData?.name || "Alex Morgan", ". All rights reserved."] }) }
        )] }
      )] }
    ));

}