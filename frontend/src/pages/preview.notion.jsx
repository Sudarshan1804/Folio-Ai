import { X, FileText, Hash, CheckSquare, Calendar, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useResumeData } from '@/hooks/useResumeData';import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";


export default NotionTemplate;

function NotionTemplate() {
  const resumeData = useResumeData();

  return (/*#__PURE__*/
    _jsxs("div", { className: "min-h-screen bg-[#fffefc] text-[#37352f] font-serif p-4 md:p-8 pb-32", children: [/*#__PURE__*/

      _jsxs("div", { className: "fixed top-6 right-6 z-50 flex items-center gap-3", children: [/*#__PURE__*/
        _jsxs("button", { className: "flex items-center gap-2 bg-[#37352f] hover:bg-[#2f2d27] text-white px-4 py-2 rounded text-sm font-medium transition-all shadow-sm font-sans", children: [/*#__PURE__*/
          _jsx(Download, { className: "w-4 h-4" }), " Download .zip"] }
        ), /*#__PURE__*/
        _jsxs(Link, { to: "/", hash: "templates", className: "flex items-center gap-2 bg-white hover:bg-gray-100 text-[#37352f] px-4 py-2 rounded text-sm font-medium transition-all border border-gray-200 shadow-sm font-sans", children: [/*#__PURE__*/
          _jsx(X, { className: "w-4 h-4" }), " Close Preview"] }
        )] }
      ), /*#__PURE__*/

      _jsxs("div", { className: "max-w-3xl mx-auto py-12 md:py-20", children: [/*#__PURE__*/


        _jsx("div", { className: "w-full h-48 md:h-64 mb-12 bg-gray-100 rounded-lg overflow-hidden relative group", children: /*#__PURE__*/
          _jsx("img", { src: "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80", alt: "Cover", className: "w-full h-full object-cover" }) }
        ), /*#__PURE__*/

        _jsxs("header", { className: "mb-12 relative", children: [/*#__PURE__*/
          _jsx("div", { className: "text-7xl absolute -top-24 left-4 bg-[#fffefc] p-2 rounded-lg", children: "\uD83D\uDCDD" }), /*#__PURE__*/
          _jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6 font-sans tracking-tight pt-4", children: resumeData?.name ? `${resumeData.name}'s Knowledge Base` : "Michael's Knowledge Base" }), /*#__PURE__*/
          _jsxs("div", { className: "flex flex-wrap gap-4 text-sm font-sans mb-8 border-b border-gray-200 pb-8", children: [/*#__PURE__*/
            _jsxs("span", { className: "flex items-center gap-1 text-gray-500", children: [/*#__PURE__*/_jsx(Calendar, { className: "w-4 h-4" }), " Updated Today"] }), /*#__PURE__*/
            _jsxs("span", { className: "flex items-center gap-1 text-gray-500", children: [/*#__PURE__*/_jsx(Hash, { className: "w-4 h-4" }), " ", resumeData?.role || "Technical Writer"] })] }
          ), /*#__PURE__*/
          _jsx("p", { className: "text-lg text-[#37352f] font-sans leading-relaxed", children:
            resumeData?.about || "Hi, I'm Michael. I'm a Developer Relations Engineer and Technical Writer. I specialize in breaking down complex distributed systems into digestible, enjoyable documentation. Welcome to my digital garden." }
          )] }
        ), /*#__PURE__*/

        _jsxs("main", { className: "space-y-12 font-sans", children: [/*#__PURE__*/

          _jsxs("section", { children: [/*#__PURE__*/
            _jsx("h2", { className: "text-2xl font-bold mb-4 flex items-center gap-2 border-b border-gray-100 pb-2", children: "Featured Articles" }

            ), /*#__PURE__*/
            _jsxs("div", { className: "space-y-1", children: [/*#__PURE__*/
              _jsxs("div", { className: "flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer transition-colors group", children: [/*#__PURE__*/
                _jsx(FileText, { className: "w-5 h-5 text-gray-400 group-hover:text-gray-600" }), /*#__PURE__*/
                _jsx("span", { className: "font-medium underline decoration-gray-300 underline-offset-4 decoration-1 text-[#37352f]", children: "Building Scalable Design Systems in React" }), /*#__PURE__*/
                _jsx("span", { className: "text-xs text-gray-400 ml-auto flex items-center hidden sm:flex", children: "Published Oct 12" })] }
              ), /*#__PURE__*/
              _jsxs("div", { className: "flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer transition-colors group", children: [/*#__PURE__*/
                _jsx(FileText, { className: "w-5 h-5 text-gray-400 group-hover:text-gray-600" }), /*#__PURE__*/
                _jsx("span", { className: "font-medium underline decoration-gray-300 underline-offset-4 decoration-1 text-[#37352f]", children: "Why I switched to Rust for backend architecture" }), /*#__PURE__*/
                _jsx("span", { className: "text-xs text-gray-400 ml-auto flex items-center hidden sm:flex", children: "Published Sep 04" })] }
              ), /*#__PURE__*/
              _jsxs("div", { className: "flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer transition-colors group", children: [/*#__PURE__*/
                _jsx(FileText, { className: "w-5 h-5 text-gray-400 group-hover:text-gray-600" }), /*#__PURE__*/
                _jsx("span", { className: "font-medium underline decoration-gray-300 underline-offset-4 decoration-1 text-[#37352f]", children: "The ultimate guide to WebGL performance" }), /*#__PURE__*/
                _jsx("span", { className: "text-xs text-gray-400 ml-auto flex items-center hidden sm:flex", children: "Published Aug 21" })] }
              )] }
            )] }
          ), /*#__PURE__*/

          _jsxs("section", { children: [/*#__PURE__*/
            _jsx("h2", { className: "text-2xl font-bold mb-4 border-b border-gray-100 pb-2", children: "Project Database" }

            ), /*#__PURE__*/
            _jsx("div", { className: "overflow-x-auto border border-gray-200 rounded-lg", children: /*#__PURE__*/
              _jsxs("table", { className: "w-full text-sm text-left", children: [/*#__PURE__*/
                _jsx("thead", { className: "bg-gray-50 border-b border-gray-200 text-gray-500", children: /*#__PURE__*/
                  _jsxs("tr", { children: [/*#__PURE__*/
                    _jsxs("th", { className: "px-4 py-3 font-medium flex items-center gap-1", children: [/*#__PURE__*/_jsx(FileText, { className: "w-3 h-3" }), " Name"] }), /*#__PURE__*/
                    _jsxs("th", { className: "px-4 py-3 font-medium", children: [/*#__PURE__*/_jsx(Hash, { className: "w-3 h-3 inline mr-1" }), " Type"] }), /*#__PURE__*/
                    _jsx("th", { className: "px-4 py-3 font-medium", children: "Status" })] }
                  ) }
                ), /*#__PURE__*/
                _jsx("tbody", { className: "divide-y divide-gray-200", children:
                  resumeData?.projects?.length ? resumeData.projects.map((p, i) => /*#__PURE__*/
                  _jsxs("tr", { className: "hover:bg-gray-50 transition-colors cursor-pointer", children: [/*#__PURE__*/
                    _jsxs("td", { className: "px-4 py-3 font-medium flex items-center gap-2", children: [/*#__PURE__*/_jsx("span", { className: "text-lg", children: "\uD83D\uDCDA" }), " ", p.title] }), /*#__PURE__*/
                    _jsx("td", { className: "px-4 py-3", children: /*#__PURE__*/_jsx("span", { className: "bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs", children: "Project" }) }), /*#__PURE__*/
                    _jsx("td", { className: "px-4 py-3", children: /*#__PURE__*/_jsx("span", { className: "bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs", children: "Completed" }) })] }, i
                  )
                  ) : /*#__PURE__*/
                  _jsxs(_Fragment, { children: [/*#__PURE__*/
                    _jsxs("tr", { className: "hover:bg-gray-50 transition-colors cursor-pointer", children: [/*#__PURE__*/
                      _jsxs("td", { className: "px-4 py-3 font-medium flex items-center gap-2", children: [/*#__PURE__*/_jsx("span", { className: "text-lg", children: "\uD83D\uDCDA" }), " Docs Engine"] }), /*#__PURE__*/
                      _jsx("td", { className: "px-4 py-3", children: /*#__PURE__*/_jsx("span", { className: "bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs", children: "Open Source" }) }), /*#__PURE__*/
                      _jsx("td", { className: "px-4 py-3", children: /*#__PURE__*/_jsx("span", { className: "bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs", children: "Completed" }) })] }
                    ), /*#__PURE__*/
                    _jsxs("tr", { className: "hover:bg-gray-50 transition-colors cursor-pointer", children: [/*#__PURE__*/
                      _jsxs("td", { className: "px-4 py-3 font-medium flex items-center gap-2", children: [/*#__PURE__*/_jsx("span", { className: "text-lg", children: "\u26A1\uFE0F" }), " React Compiler Plugin"] }), /*#__PURE__*/
                      _jsx("td", { className: "px-4 py-3", children: /*#__PURE__*/_jsx("span", { className: "bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs", children: "Tooling" }) }), /*#__PURE__*/
                      _jsx("td", { className: "px-4 py-3", children: /*#__PURE__*/_jsx("span", { className: "bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs", children: "In Progress" }) })] }
                    ), /*#__PURE__*/
                    _jsxs("tr", { className: "hover:bg-gray-50 transition-colors cursor-pointer", children: [/*#__PURE__*/
                      _jsxs("td", { className: "px-4 py-3 font-medium flex items-center gap-2", children: [/*#__PURE__*/_jsx("span", { className: "text-lg", children: "\uD83C\uDFA8" }), " Minimal Theme"] }), /*#__PURE__*/
                      _jsx("td", { className: "px-4 py-3", children: /*#__PURE__*/_jsx("span", { className: "bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs", children: "Design" }) }), /*#__PURE__*/
                      _jsx("td", { className: "px-4 py-3", children: /*#__PURE__*/_jsx("span", { className: "bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs", children: "Completed" }) })] }
                    )] }
                  ) }

                )] }
              ) }
            )] }
          ), /*#__PURE__*/

          _jsxs("section", { children: [/*#__PURE__*/
            _jsx("h2", { className: "text-2xl font-bold mb-4 border-b border-gray-100 pb-2", children: "Experience" }

            ), /*#__PURE__*/
            _jsx("div", { className: "space-y-6", children:
              resumeData?.experience?.length ? resumeData.experience.map((exp, i) => /*#__PURE__*/
              _jsxs("div", { className: "pl-4 border-l-[3px] border-gray-200", children: [/*#__PURE__*/
                _jsx("h3", { className: "font-bold text-lg", children: exp.title }), /*#__PURE__*/
                _jsxs("p", { className: "text-sm text-gray-500 mb-2", children: [exp.company, " \u2022 ", exp.period] }), /*#__PURE__*/
                _jsx("ul", { className: "space-y-1 text-[#37352f]", children: /*#__PURE__*/
                  _jsxs("li", { className: "flex items-start gap-2", children: [/*#__PURE__*/_jsx(CheckSquare, { className: "w-4 h-4 text-blue-500 shrink-0 mt-1" }), " ", exp.description] }) }
                )] }, i
              )
              ) : /*#__PURE__*/
              _jsxs(_Fragment, { children: [/*#__PURE__*/
                _jsxs("div", { className: "pl-4 border-l-[3px] border-gray-200", children: [/*#__PURE__*/
                  _jsx("h3", { className: "font-bold text-lg", children: "Senior Technical Writer" }), /*#__PURE__*/
                  _jsx("p", { className: "text-sm text-gray-500 mb-2", children: "Vercel \u2022 2021 - Present" }), /*#__PURE__*/
                  _jsxs("ul", { className: "space-y-1 text-[#37352f]", children: [/*#__PURE__*/
                    _jsxs("li", { className: "flex items-start gap-2", children: [/*#__PURE__*/_jsx(CheckSquare, { className: "w-4 h-4 text-blue-500 shrink-0 mt-1" }), " Authored over 100+ technical guides for the Next.js ecosystem."] }), /*#__PURE__*/
                    _jsxs("li", { className: "flex items-start gap-2", children: [/*#__PURE__*/_jsx(CheckSquare, { className: "w-4 h-4 text-blue-500 shrink-0 mt-1" }), " Managed the open-source documentation contributions."] })] }
                  )] }
                ), /*#__PURE__*/
                _jsxs("div", { className: "pl-4 border-l-[3px] border-gray-200", children: [/*#__PURE__*/
                  _jsx("h3", { className: "font-bold text-lg", children: "Frontend Developer" }), /*#__PURE__*/
                  _jsx("p", { className: "text-sm text-gray-500 mb-2", children: "Startup Inc \u2022 2018 - 2021" }), /*#__PURE__*/
                  _jsx("ul", { className: "space-y-1 text-[#37352f]", children: /*#__PURE__*/
                    _jsxs("li", { className: "flex items-start gap-2", children: [/*#__PURE__*/_jsx(CheckSquare, { className: "w-4 h-4 text-gray-400 shrink-0 mt-1" }), " Built the core dashboard using React and Redux."] }) }
                  )] }
                )] }
              ) }

            )] }
          ),

          resumeData?.education && resumeData.education.length > 0 && /*#__PURE__*/
          _jsxs("section", { children: [/*#__PURE__*/
            _jsx("h2", { className: "text-2xl font-bold mb-4 border-b border-gray-100 pb-2", children: "Education" }

            ), /*#__PURE__*/
            _jsx("div", { className: "space-y-6", children:
              resumeData.education.map((edu, i) => /*#__PURE__*/
              _jsxs("div", { className: "pl-4 border-l-[3px] border-gray-200", children: [/*#__PURE__*/
                _jsx("h3", { className: "font-bold text-lg", children: edu.degree }), /*#__PURE__*/
                _jsxs("p", { className: "text-sm text-gray-500 mb-2", children: [edu.institution, " \u2022 ", edu.period] }),
                edu.description && /*#__PURE__*/
                _jsx("ul", { className: "space-y-1 text-[#37352f]", children: /*#__PURE__*/
                  _jsxs("li", { className: "flex items-start gap-2", children: [/*#__PURE__*/_jsx(CheckSquare, { className: "w-4 h-4 text-blue-500 shrink-0 mt-1" }), " ", edu.description] }) }
                )] }, i

              )
              ) }
            )] }
          ),


          resumeData?.additionalSections?.map((section, idx) => /*#__PURE__*/
          _jsxs("section", { children: [/*#__PURE__*/
            _jsx("h2", { className: "text-2xl font-bold mb-4 border-b border-gray-100 pb-2", children:
              section.title }
            ), /*#__PURE__*/
            _jsx("div", { className: "space-y-6", children:
              section.items.map((item, i) => /*#__PURE__*/
              _jsxs("div", { className: "pl-4 border-l-[3px] border-gray-200", children: [/*#__PURE__*/
                _jsx("h3", { className: "font-bold text-lg", children: item.title }),
                (item.subtitle || item.period) && /*#__PURE__*/
                _jsxs("p", { className: "text-sm text-gray-500 mb-2", children: [
                  item.subtitle, " ", item.subtitle && item.period ? '•' : '', " ", item.period] }
                ),

                item.description && /*#__PURE__*/
                _jsx("ul", { className: "space-y-1 text-[#37352f]", children: /*#__PURE__*/
                  _jsxs("li", { className: "flex items-start gap-2", children: [/*#__PURE__*/_jsx(CheckSquare, { className: "w-4 h-4 text-blue-500 shrink-0 mt-1" }), " ", item.description] }) }
                )] }, i

              )
              ) }
            )] }, idx
          )
          ), /*#__PURE__*/

          _jsxs("section", { className: "bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col md:flex-row items-center gap-6 mt-12", children: [/*#__PURE__*/
            _jsxs("div", { className: "flex-1", children: [/*#__PURE__*/
              _jsx("h2", { className: "text-xl font-bold mb-2", children: "Let's connect" }), /*#__PURE__*/
              _jsx("p", { className: "text-gray-600 mb-4", children: "I'm always open to discussing technical writing, developer tools, or potential opportunities." }), /*#__PURE__*/
              _jsxs("div", { className: "flex gap-4 flex-wrap", children: [/*#__PURE__*/
                _jsx("a", { href: `mailto:${resumeData?.contact?.email || 'michael@example.com'}`, className: "text-blue-600 hover:underline cursor-pointer font-medium", children:
                  resumeData?.contact?.email || 'michael@example.com' }
                ),
                resumeData?.socialLinks?.length ?
                resumeData.socialLinks.map((social, i) => /*#__PURE__*/
                _jsx("a", { href: social.url, target: "_blank", rel: "noreferrer", className: "text-blue-600 hover:underline cursor-pointer font-medium", children:
                  social.platform }, i
                )
                ) : /*#__PURE__*/

                _jsxs(_Fragment, { children: [/*#__PURE__*/
                  _jsx("span", { className: "text-blue-600 hover:underline cursor-pointer font-medium", children: "Twitter" }), /*#__PURE__*/
                  _jsx("span", { className: "text-blue-600 hover:underline cursor-pointer font-medium", children: "LinkedIn" })] }
                )] }

              )] }
            ), /*#__PURE__*/
            _jsx("div", { className: "w-32 h-32 bg-gray-200 rounded-lg overflow-hidden shrink-0 border border-gray-300", children: /*#__PURE__*/
              _jsx("img", { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", alt: "Michael", className: "w-full h-full object-cover" }) }
            )] }
          )] }

        )] }
      )] }
    ));

}