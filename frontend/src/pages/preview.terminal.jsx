import { X, Terminal as TerminalIcon, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useResumeData } from '@/hooks/useResumeData';import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";


export default TerminalTemplate;

function TerminalTemplate() {
  const resumeData = useResumeData();

  return (/*#__PURE__*/
    _jsxs("div", { className: "min-h-screen bg-black text-[#00ff00] font-mono p-4 md:p-8 pb-32", children: [/*#__PURE__*/
      _jsxs("div", { className: "fixed top-6 right-6 z-50 flex items-center gap-3", children: [/*#__PURE__*/
        _jsxs("button", { className: "flex items-center gap-2 bg-[#00ff00]/10 hover:bg-[#00ff00]/30 text-[#00ff00] px-5 py-2.5 rounded text-sm font-bold transition-all border border-[#00ff00] shadow-[0_0_15px_rgba(0,255,0,0.3)]", children: [/*#__PURE__*/
          _jsx(Download, { className: "w-4 h-4" }), " DOWNLOAD_ZIP"] }
        ), /*#__PURE__*/
        _jsxs(Link, { to: "/", hash: "templates", className: "flex items-center gap-2 bg-black hover:bg-[#00ff00]/20 text-[#00ff00] px-5 py-2.5 rounded text-sm font-bold transition-all border border-[#00ff00] shadow-[0_0_15px_rgba(0,255,0,0.3)]", children: [/*#__PURE__*/
          _jsx(X, { className: "w-4 h-4" }), " EXIT_PREVIEW"] }
        )] }
      ), /*#__PURE__*/

      _jsxs("div", { className: "max-w-4xl mx-auto border border-[#00ff00] p-1 bg-black/80 shadow-[0_0_30px_rgba(0,255,0,0.15)] relative overflow-hidden", children: [/*#__PURE__*/

        _jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_50%,rgba(0,0,0,0.03)_50%)] bg-[length:100%_4px] pointer-events-none" }), /*#__PURE__*/

        _jsxs("div", { className: "bg-[#00ff00] text-black px-4 py-1.5 flex items-center gap-2 font-bold uppercase text-sm mb-4 sticky top-0 z-10 border-b border-[#00ff00]", children: [/*#__PURE__*/
          _jsx(TerminalIcon, { className: "w-4 h-4" }), " root@sysadmin:~"] }
        ), /*#__PURE__*/

        _jsxs("div", { className: "p-4 md:p-8 space-y-10 relative z-0", children: [/*#__PURE__*/
          _jsxs("section", { children: [/*#__PURE__*/
            _jsxs("p", { className: "mb-2", children: [/*#__PURE__*/_jsx("span", { className: "text-white", children: "sysadmin@host" }), ":", /*#__PURE__*/_jsx("span", { className: "text-blue-400", children: "~" }), "$ ./banner.sh"] }), /*#__PURE__*/
            _jsx("h1", { className: "text-3xl md:text-5xl font-bold mb-6 whitespace-pre-wrap leading-tight text-[#00ff00]", children:
              `  _____         _      _    
 / ____|       (_)    | |   
| (___   _ __   _   __| | ___ 
 \\___ \\ | '_ \\ | | / _\` |/ _ \\
 ____) || | | || || (_| |  __/
|_____/ |_| |_||_| \\__,_|\\___|` }
            ), /*#__PURE__*/
            _jsxs("p", { className: "text-xl opacity-90", children: [" ", resumeData?.role || "Senior Backend Engineer & Systems Architect"] }), /*#__PURE__*/
            _jsxs("p", { className: "text-lg opacity-80", children: [" ", resumeData?.about || "Based in Seattle, WA. Designing high-availability microservices."] })] }
          ), /*#__PURE__*/

          _jsxs("section", { children: [/*#__PURE__*/
            _jsxs("p", { className: "mb-2", children: [/*#__PURE__*/_jsx("span", { className: "text-white", children: "sysadmin@host" }), ":", /*#__PURE__*/_jsx("span", { className: "text-blue-400", children: "~/experience" }), "$ cat history.log"] }), /*#__PURE__*/
            _jsx("div", { className: "pl-4 border-l-2 border-[#00ff00]/30 space-y-6 mt-4", children:
              resumeData?.experience?.length ? resumeData.experience.map((exp, i) => /*#__PURE__*/
              _jsxs("div", { children: [/*#__PURE__*/
                _jsxs("h3", { className: "font-bold text-xl text-white", children: [exp.title, " @ ", exp.company] }), /*#__PURE__*/
                _jsxs("p", { className: "opacity-70 text-sm mb-2", children: ["[ ", exp.period, " ]"] }), /*#__PURE__*/
                _jsx("p", { className: "opacity-90", children: exp.description })] }, i
              )
              ) : /*#__PURE__*/
              _jsxs(_Fragment, { children: [/*#__PURE__*/
                _jsxs("div", { children: [/*#__PURE__*/
                  _jsx("h3", { className: "font-bold text-xl text-white", children: "Staff Engineer @ CloudScale Inc." }), /*#__PURE__*/
                  _jsx("p", { className: "opacity-70 text-sm mb-2", children: "[ 2021-04-01 - PRESENT ]" }), /*#__PURE__*/
                  _jsx("p", { className: "opacity-90", children: "Architected a distributed caching layer in Go, reducing P99 latency by 45%. Led a team of 6 engineers to migrate monolithic legacy services to Kubernetes." })] }
                ), /*#__PURE__*/
                _jsxs("div", { children: [/*#__PURE__*/
                  _jsx("h3", { className: "font-bold text-xl text-white", children: "Backend Developer @ StartUp V2" }), /*#__PURE__*/
                  _jsx("p", { className: "opacity-70 text-sm mb-2", children: "[ 2018-08-15 - 2021-03-30 ]" }), /*#__PURE__*/
                  _jsx("p", { className: "opacity-90", children: "Developed core REST APIs using Node.js and PostgreSQL. Implemented robust CI/CD pipelines using GitHub Actions and Terraform." })] }
                )] }
              ) }

            )] }
          ), /*#__PURE__*/

          _jsxs("section", { children: [/*#__PURE__*/
            _jsxs("p", { className: "mb-2", children: [/*#__PURE__*/_jsx("span", { className: "text-white", children: "sysadmin@host" }), ":", /*#__PURE__*/_jsx("span", { className: "text-blue-400", children: "~/projects" }), "$ ls -la --color"] }), /*#__PURE__*/
            _jsx("div", { className: "grid md:grid-cols-2 gap-4 mt-4", children:
              resumeData?.projects?.length ? resumeData.projects.map((p, i) => /*#__PURE__*/
              _jsxs("div", { className: "border border-[#00ff00]/30 p-5 hover:bg-[#00ff00]/10 cursor-pointer transition-colors", children: [/*#__PURE__*/
                _jsxs("h3", { className: "font-bold text-xl mb-2 flex items-center justify-between", children: [/*#__PURE__*/
                  _jsx("span", { className: "text-blue-400", children: i % 2 === 0 ? "drwxr-xr-x" : "-rw-r--r--" }), " ", /*#__PURE__*/_jsx("span", { className: "text-white", children: p.title.replace(/\s+/g, '-').toLowerCase() })] }
                ), /*#__PURE__*/
                _jsx("p", { className: "opacity-80 mb-4", children: p.description }), /*#__PURE__*/
                _jsxs("p", { className: "text-xs opacity-60", children: ["Last commit: ", Math.floor(Math.random() * 24) + 1, " hours ago"] })] }, i
              )
              ) : /*#__PURE__*/
              _jsxs(_Fragment, { children: [/*#__PURE__*/
                _jsxs("div", { className: "border border-[#00ff00]/30 p-5 hover:bg-[#00ff00]/10 cursor-pointer transition-colors", children: [/*#__PURE__*/
                  _jsxs("h3", { className: "font-bold text-xl mb-2 flex items-center justify-between", children: [/*#__PURE__*/
                    _jsx("span", { className: "text-blue-400", children: "drwxr-xr-x" }), " ", /*#__PURE__*/_jsx("span", { className: "text-white", children: "nexus-engine" })] }
                  ), /*#__PURE__*/
                  _jsx("p", { className: "opacity-80 mb-4", children: "Distributed task queue built in Rust handling 10k req/s." }), /*#__PURE__*/
                  _jsx("p", { className: "text-xs opacity-60", children: "Last commit: 2 hours ago" })] }
                ), /*#__PURE__*/
                _jsxs("div", { className: "border border-[#00ff00]/30 p-5 hover:bg-[#00ff00]/10 cursor-pointer transition-colors", children: [/*#__PURE__*/
                  _jsxs("h3", { className: "font-bold text-xl mb-2 flex items-center justify-between", children: [/*#__PURE__*/
                    _jsx("span", { className: "text-blue-400", children: "-rw-r--r--" }), " ", /*#__PURE__*/_jsx("span", { className: "text-white", children: "cli-dashboard" })] }
                  ), /*#__PURE__*/
                  _jsx("p", { className: "opacity-80 mb-4", children: "A customizable terminal dashboard for monitoring K8s clusters." }), /*#__PURE__*/
                  _jsx("p", { className: "text-xs opacity-60", children: "Last commit: 5 days ago" })] }
                ), /*#__PURE__*/
                _jsxs("div", { className: "border border-[#00ff00]/30 p-5 hover:bg-[#00ff00]/10 cursor-pointer transition-colors", children: [/*#__PURE__*/
                  _jsxs("h3", { className: "font-bold text-xl mb-2 flex items-center justify-between", children: [/*#__PURE__*/
                    _jsx("span", { className: "text-blue-400", children: "-rwxr-xr-x" }), " ", /*#__PURE__*/_jsx("span", { className: "text-white", children: "auto-deploy.sh" })] }
                  ), /*#__PURE__*/
                  _jsx("p", { className: "opacity-80 mb-4", children: "Zero-downtime deployment script used across 50+ repositories." }), /*#__PURE__*/
                  _jsx("p", { className: "text-xs opacity-60", children: "Last commit: 1 month ago" })] }
                )] }
              ) }

            )] }
          ), /*#__PURE__*/

          _jsxs("section", { children: [/*#__PURE__*/
            _jsxs("p", { className: "mb-2", children: [/*#__PURE__*/_jsx("span", { className: "text-white", children: "sysadmin@host" }), ":", /*#__PURE__*/_jsx("span", { className: "text-blue-400", children: "~" }), "$ ./get_skills.py"] }), /*#__PURE__*/
            _jsxs("div", { className: "bg-[#00ff00]/5 p-4 border border-[#00ff00]/20 font-mono mt-4", children: [/*#__PURE__*/
              _jsx("span", { className: "text-yellow-400", children: "import" }), " skills", /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("br", {}),
              resumeData?.skills?.length ? /*#__PURE__*/
              _jsxs(_Fragment, { children: [/*#__PURE__*/
                _jsx("span", { className: "opacity-80", children: "# Extracted Skills" }), /*#__PURE__*/_jsx("br", {}), "skills_list = [",
                resumeData.skills.map((s, i) => /*#__PURE__*/_jsxs("span", { children: [/*#__PURE__*/_jsxs("span", { className: "text-green-300", children: ["\"", s, "\""] }), i < resumeData.skills.length - 1 ? ', ' : ''] }, i)), "]", /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("br", {})] }
              ) : /*#__PURE__*/

              _jsxs(_Fragment, { children: [/*#__PURE__*/
                _jsx("span", { className: "opacity-80", children: "# Core Languages" }), /*#__PURE__*/_jsx("br", {}), "languages = [", /*#__PURE__*/
                _jsx("span", { className: "text-green-300", children: "\"Rust\"" }), ", ", /*#__PURE__*/_jsx("span", { className: "text-green-300", children: "\"Go\"" }), ", ", /*#__PURE__*/_jsx("span", { className: "text-green-300", children: "\"Python\"" }), ", ", /*#__PURE__*/_jsx("span", { className: "text-green-300", children: "\"TypeScript\"" }), "]", /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/
                _jsx("span", { className: "opacity-80", children: "# Infrastructure" }), /*#__PURE__*/_jsx("br", {}), "infra = [", /*#__PURE__*/
                _jsx("span", { className: "text-green-300", children: "\"Kubernetes\"" }), ", ", /*#__PURE__*/_jsx("span", { className: "text-green-300", children: "\"Docker\"" }), ", ", /*#__PURE__*/_jsx("span", { className: "text-green-300", children: "\"AWS\"" }), ", ", /*#__PURE__*/_jsx("span", { className: "text-green-300", children: "\"Terraform\"" }), "]", /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/
                _jsx("span", { className: "opacity-80", children: "# Databases" }), /*#__PURE__*/_jsx("br", {}), "dbs = [", /*#__PURE__*/
                _jsx("span", { className: "text-green-300", children: "\"PostgreSQL\"" }), ", ", /*#__PURE__*/_jsx("span", { className: "text-green-300", children: "\"Redis\"" }), ", ", /*#__PURE__*/_jsx("span", { className: "text-green-300", children: "\"MongoDB\"" }), "]"] }
              )] }

            )] }
          ),

          resumeData?.education && resumeData.education.length > 0 && /*#__PURE__*/
          _jsxs("section", { children: [/*#__PURE__*/
            _jsxs("p", { className: "mb-2", children: [/*#__PURE__*/_jsx("span", { className: "text-white", children: "sysadmin@host" }), ":", /*#__PURE__*/_jsx("span", { className: "text-blue-400", children: "~/education" }), "$ cat transcript.log"] }), /*#__PURE__*/
            _jsx("div", { className: "pl-4 border-l-2 border-[#00ff00]/30 space-y-6 mt-4", children:
              resumeData.education.map((edu, i) => /*#__PURE__*/
              _jsxs("div", { children: [/*#__PURE__*/
                _jsx("h3", { className: "font-bold text-xl text-white", children: edu.degree }), /*#__PURE__*/
                _jsxs("p", { className: "opacity-70 text-sm mb-2", children: ["[ ", edu.institution, " | ", edu.period, " ]"] }),
                edu.description && /*#__PURE__*/_jsx("p", { className: "opacity-90", children: edu.description })] }, i
              )
              ) }
            )] }
          ),


          resumeData?.additionalSections?.map((section, idx) => /*#__PURE__*/
          _jsxs("section", { children: [/*#__PURE__*/
            _jsxs("p", { className: "mb-2", children: [/*#__PURE__*/_jsx("span", { className: "text-white", children: "sysadmin@host" }), ":", /*#__PURE__*/_jsx("span", { className: "text-blue-400", children: "~/docs" }), "$ cat ", section.title.toLowerCase().replace(/\s+/g, '_'), ".txt"] }), /*#__PURE__*/
            _jsx("div", { className: "pl-4 border-l-2 border-[#00ff00]/30 space-y-6 mt-4", children:
              section.items.map((item, i) => /*#__PURE__*/
              _jsxs("div", { children: [/*#__PURE__*/
                _jsx("h3", { className: "font-bold text-xl text-white", children: item.title }),
                (item.subtitle || item.period) && /*#__PURE__*/
                _jsxs("p", { className: "opacity-70 text-sm mb-2", children: ["[ ",
                  item.subtitle, " ", item.subtitle && item.period ? '|' : '', " ", item.period, " ]"] }
                ),

                item.description && /*#__PURE__*/_jsx("p", { className: "opacity-90", children: item.description })] }, i
              )
              ) }
            )] }, idx
          )
          ),

          resumeData?.contact || resumeData?.socialLinks?.length ? /*#__PURE__*/
          _jsxs("section", { children: [/*#__PURE__*/
            _jsxs("p", { className: "mb-2", children: [/*#__PURE__*/_jsx("span", { className: "text-white", children: "sysadmin@host" }), ":", /*#__PURE__*/_jsx("span", { className: "text-blue-400", children: "~/profile" }), "$ cat whoami.txt"] }), /*#__PURE__*/
            _jsxs("div", { className: "bg-[#00ff00]/5 p-4 border border-[#00ff00]/20 font-mono mt-4 space-y-2", children: [
              resumeData.contact?.email && /*#__PURE__*/_jsxs("p", { children: [/*#__PURE__*/_jsx("span", { className: "text-yellow-400", children: "EMAIL:" }), " ", /*#__PURE__*/_jsx("a", { href: `mailto:${resumeData.contact.email}`, className: "text-white hover:underline", children: resumeData.contact.email })] }),
              resumeData.contact?.phone && /*#__PURE__*/_jsxs("p", { children: [/*#__PURE__*/_jsx("span", { className: "text-yellow-400", children: "PHONE:" }), " ", /*#__PURE__*/_jsx("a", { href: `tel:${resumeData.contact.phone}`, className: "text-white hover:underline", children: resumeData.contact.phone })] }),
              resumeData.contact?.location && /*#__PURE__*/_jsxs("p", { children: [/*#__PURE__*/_jsx("span", { className: "text-yellow-400", children: "LOCATION:" }), " ", /*#__PURE__*/_jsx("span", { className: "text-white", children: resumeData.contact.location })] }),

              resumeData.socialLinks && resumeData.socialLinks.length > 0 && /*#__PURE__*/
              _jsxs("div", { className: "pt-2 mt-2 border-t border-[#00ff00]/20", children: [/*#__PURE__*/
                _jsx("p", { className: "text-yellow-400 mb-2", children: "# EXTERNAL_LINKS" }),
                resumeData.socialLinks.map((link, i) => /*#__PURE__*/
                _jsxs("p", { children: [/*#__PURE__*/_jsxs("span", { className: "text-green-300", children: ["[", link.platform.toUpperCase(), "]"] }), " ", /*#__PURE__*/_jsx("a", { href: link.url, target: "_blank", rel: "noreferrer", className: "text-white hover:underline", children: link.url })] }, i)
                )] }
              )] }

            )] }
          ) :
          null, /*#__PURE__*/

          _jsxs("section", { children: [/*#__PURE__*/
            _jsxs("p", { className: "mb-2", children: [/*#__PURE__*/_jsx("span", { className: "text-white", children: "sysadmin@host" }), ":", /*#__PURE__*/_jsx("span", { className: "text-blue-400", children: "~" }), "$ ./contact.sh"] }), /*#__PURE__*/
            _jsxs("div", { className: "border border-[#00ff00]/30 p-6 mt-4 flex flex-col md:flex-row items-center justify-between gap-6", children: [/*#__PURE__*/
              _jsxs("div", { children: [/*#__PURE__*/
                _jsx("p", { className: "opacity-80 mb-2", children: "Initializing secure connection..." }), /*#__PURE__*/
                _jsxs("p", { className: "text-xl font-bold", children: ["STATUS: ", /*#__PURE__*/_jsx("span", { className: "text-white", children: "READY_FOR_COMMUNICATION" })] })] }
              ),
              resumeData?.contact?.email ? /*#__PURE__*/
              _jsx("a", { href: `mailto:${resumeData.contact.email}`, className: "border-2 border-[#00ff00] px-8 py-3 hover:bg-[#00ff00] hover:text-black font-bold uppercase transition-colors tracking-wider w-full md:w-auto text-center block", children: "Execute Handshake" }

              ) : /*#__PURE__*/

              _jsx("button", { className: "border-2 border-[#00ff00] px-8 py-3 hover:bg-[#00ff00] hover:text-black font-bold uppercase transition-colors tracking-wider w-full md:w-auto", children: "Execute Handshake" }

              )] }

            )] }
          ), /*#__PURE__*/

          _jsxs("div", { className: "flex items-center pt-8", children: [/*#__PURE__*/
            _jsx("span", { className: "text-white", children: "sysadmin@host" }), ":", /*#__PURE__*/_jsx("span", { className: "text-blue-400", children: "~" }), "$ ", /*#__PURE__*/_jsx("span", { className: "w-3 h-6 bg-[#00ff00] ml-2 inline-block animate-pulse" })] }
          )] }
        )] }
      )] }
    ));

}