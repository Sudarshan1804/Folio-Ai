import { createFileRoute, Link } from '@tanstack/react-router'
import { X, Terminal as TerminalIcon, Download } from 'lucide-react'
import { useResumeData } from '@/hooks/useResumeData'

export const Route = createFileRoute('/preview/terminal')({
  component: TerminalTemplate,
})

function TerminalTemplate() {
  const resumeData = useResumeData()

  return (
    <div className="min-h-screen bg-black text-[#00ff00] font-mono p-4 md:p-8 pb-32">
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        <button className="flex items-center gap-2 bg-[#00ff00]/10 hover:bg-[#00ff00]/30 text-[#00ff00] px-5 py-2.5 rounded text-sm font-bold transition-all border border-[#00ff00] shadow-[0_0_15px_rgba(0,255,0,0.3)]">
          <Download className="w-4 h-4" /> DOWNLOAD_ZIP
        </button>
        <Link to="/" hash="templates" className="flex items-center gap-2 bg-black hover:bg-[#00ff00]/20 text-[#00ff00] px-5 py-2.5 rounded text-sm font-bold transition-all border border-[#00ff00] shadow-[0_0_15px_rgba(0,255,0,0.3)]">
          <X className="w-4 h-4" /> EXIT_PREVIEW
        </Link>
      </div>

      <div className="max-w-4xl mx-auto border border-[#00ff00] p-1 bg-black/80 shadow-[0_0_30px_rgba(0,255,0,0.15)] relative overflow-hidden">
        {/* Scanline effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_50%,rgba(0,0,0,0.03)_50%)] bg-[length:100%_4px] pointer-events-none" />
        
        <div className="bg-[#00ff00] text-black px-4 py-1.5 flex items-center gap-2 font-bold uppercase text-sm mb-4 sticky top-0 z-10 border-b border-[#00ff00]">
          <TerminalIcon className="w-4 h-4" /> root@sysadmin:~
        </div>
        
        <div className="p-4 md:p-8 space-y-10 relative z-0">
          <section>
            <p className="mb-2"><span className="text-white">sysadmin@host</span>:<span className="text-blue-400">~</span>$ ./banner.sh</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 whitespace-pre-wrap leading-tight text-[#00ff00]">
{`  _____         _      _    
 / ____|       (_)    | |   
| (___   _ __   _   __| | ___ 
 \\___ \\ | '_ \\ | | / _\` |/ _ \\
 ____) || | | || || (_| |  __/
|_____/ |_| |_||_| \\__,_|\\___|`}
            </h1>
            <p className="text-xl opacity-90"> {resumeData?.role || "Senior Backend Engineer & Systems Architect"}</p>
            <p className="text-lg opacity-80"> {resumeData?.about || "Based in Seattle, WA. Designing high-availability microservices."}</p>
          </section>

          <section>
            <p className="mb-2"><span className="text-white">sysadmin@host</span>:<span className="text-blue-400">~/experience</span>$ cat history.log</p>
            <div className="pl-4 border-l-2 border-[#00ff00]/30 space-y-6 mt-4">
              {resumeData?.experience?.length ? resumeData.experience.map((exp, i) => (
                <div key={i}>
                  <h3 className="font-bold text-xl text-white">{exp.title} @ {exp.company}</h3>
                  <p className="opacity-70 text-sm mb-2">[ {exp.period} ]</p>
                  <p className="opacity-90">{exp.description}</p>
                </div>
              )) : (
                <>
                  <div>
                    <h3 className="font-bold text-xl text-white">Staff Engineer @ CloudScale Inc.</h3>
                    <p className="opacity-70 text-sm mb-2">[ 2021-04-01 - PRESENT ]</p>
                    <p className="opacity-90">Architected a distributed caching layer in Go, reducing P99 latency by 45%. Led a team of 6 engineers to migrate monolithic legacy services to Kubernetes.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white">Backend Developer @ StartUp V2</h3>
                    <p className="opacity-70 text-sm mb-2">[ 2018-08-15 - 2021-03-30 ]</p>
                    <p className="opacity-90">Developed core REST APIs using Node.js and PostgreSQL. Implemented robust CI/CD pipelines using GitHub Actions and Terraform.</p>
                  </div>
                </>
              )}
            </div>
          </section>

          <section>
            <p className="mb-2"><span className="text-white">sysadmin@host</span>:<span className="text-blue-400">~/projects</span>$ ls -la --color</p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {resumeData?.projects?.length ? resumeData.projects.map((p, i) => (
                <div key={i} className="border border-[#00ff00]/30 p-5 hover:bg-[#00ff00]/10 cursor-pointer transition-colors">
                  <h3 className="font-bold text-xl mb-2 flex items-center justify-between">
                    <span className="text-blue-400">{i % 2 === 0 ? "drwxr-xr-x" : "-rw-r--r--"}</span> <span className="text-white">{p.title.replace(/\s+/g, '-').toLowerCase()}</span>
                  </h3>
                  <p className="opacity-80 mb-4">{p.description}</p>
                  <p className="text-xs opacity-60">Last commit: {Math.floor(Math.random() * 24) + 1} hours ago</p>
                </div>
              )) : (
                <>
                  <div className="border border-[#00ff00]/30 p-5 hover:bg-[#00ff00]/10 cursor-pointer transition-colors">
                    <h3 className="font-bold text-xl mb-2 flex items-center justify-between">
                      <span className="text-blue-400">drwxr-xr-x</span> <span className="text-white">nexus-engine</span>
                    </h3>
                    <p className="opacity-80 mb-4">Distributed task queue built in Rust handling 10k req/s.</p>
                    <p className="text-xs opacity-60">Last commit: 2 hours ago</p>
                  </div>
                  <div className="border border-[#00ff00]/30 p-5 hover:bg-[#00ff00]/10 cursor-pointer transition-colors">
                    <h3 className="font-bold text-xl mb-2 flex items-center justify-between">
                      <span className="text-blue-400">-rw-r--r--</span> <span className="text-white">cli-dashboard</span>
                    </h3>
                    <p className="opacity-80 mb-4">A customizable terminal dashboard for monitoring K8s clusters.</p>
                    <p className="text-xs opacity-60">Last commit: 5 days ago</p>
                  </div>
                  <div className="border border-[#00ff00]/30 p-5 hover:bg-[#00ff00]/10 cursor-pointer transition-colors">
                    <h3 className="font-bold text-xl mb-2 flex items-center justify-between">
                      <span className="text-blue-400">-rwxr-xr-x</span> <span className="text-white">auto-deploy.sh</span>
                    </h3>
                    <p className="opacity-80 mb-4">Zero-downtime deployment script used across 50+ repositories.</p>
                    <p className="text-xs opacity-60">Last commit: 1 month ago</p>
                  </div>
                </>
              )}
            </div>
          </section>

          <section>
            <p className="mb-2"><span className="text-white">sysadmin@host</span>:<span className="text-blue-400">~</span>$ ./get_skills.py</p>
            <div className="bg-[#00ff00]/5 p-4 border border-[#00ff00]/20 font-mono mt-4">
              <span className="text-yellow-400">import</span> skills<br/><br/>
              {resumeData?.skills?.length ? (
                <>
                  <span className="opacity-80"># Extracted Skills</span><br/>
                  skills_list = [{resumeData.skills.map((s, i) => <span key={i}><span className="text-green-300">"{s}"</span>{i < resumeData.skills.length - 1 ? ', ' : ''}</span>)}]<br/><br/>
                </>
              ) : (
                <>
                  <span className="opacity-80"># Core Languages</span><br/>
                  languages = [<span className="text-green-300">"Rust"</span>, <span className="text-green-300">"Go"</span>, <span className="text-green-300">"Python"</span>, <span className="text-green-300">"TypeScript"</span>]<br/><br/>
                  <span className="opacity-80"># Infrastructure</span><br/>
                  infra = [<span className="text-green-300">"Kubernetes"</span>, <span className="text-green-300">"Docker"</span>, <span className="text-green-300">"AWS"</span>, <span className="text-green-300">"Terraform"</span>]<br/><br/>
                  <span className="opacity-80"># Databases</span><br/>
                  dbs = [<span className="text-green-300">"PostgreSQL"</span>, <span className="text-green-300">"Redis"</span>, <span className="text-green-300">"MongoDB"</span>]
                </>
              )}
            </div>
          </section>

          {resumeData?.education && resumeData.education.length > 0 && (
            <section>
              <p className="mb-2"><span className="text-white">sysadmin@host</span>:<span className="text-blue-400">~/education</span>$ cat transcript.log</p>
              <div className="pl-4 border-l-2 border-[#00ff00]/30 space-y-6 mt-4">
                {resumeData.education.map((edu, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-xl text-white">{edu.degree}</h3>
                    <p className="opacity-70 text-sm mb-2">[ {edu.institution} | {edu.period} ]</p>
                    {edu.description && <p className="opacity-90">{edu.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {resumeData?.additionalSections?.map((section, idx) => (
            <section key={idx}>
              <p className="mb-2"><span className="text-white">sysadmin@host</span>:<span className="text-blue-400">~/docs</span>$ cat {section.title.toLowerCase().replace(/\s+/g, '_')}.txt</p>
              <div className="pl-4 border-l-2 border-[#00ff00]/30 space-y-6 mt-4">
                {section.items.map((item, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-xl text-white">{item.title}</h3>
                    {(item.subtitle || item.period) && (
                      <p className="opacity-70 text-sm mb-2">
                        [ {item.subtitle} {item.subtitle && item.period ? '|' : ''} {item.period} ]
                      </p>
                    )}
                    {item.description && <p className="opacity-90">{item.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          ))}

          {resumeData?.contact || resumeData?.socialLinks?.length ? (
            <section>
              <p className="mb-2"><span className="text-white">sysadmin@host</span>:<span className="text-blue-400">~/profile</span>$ cat whoami.txt</p>
              <div className="bg-[#00ff00]/5 p-4 border border-[#00ff00]/20 font-mono mt-4 space-y-2">
                {resumeData.contact?.email && <p><span className="text-yellow-400">EMAIL:</span> <a href={`mailto:${resumeData.contact.email}`} className="text-white hover:underline">{resumeData.contact.email}</a></p>}
                {resumeData.contact?.phone && <p><span className="text-yellow-400">PHONE:</span> <a href={`tel:${resumeData.contact.phone}`} className="text-white hover:underline">{resumeData.contact.phone}</a></p>}
                {resumeData.contact?.location && <p><span className="text-yellow-400">LOCATION:</span> <span className="text-white">{resumeData.contact.location}</span></p>}
                
                {resumeData.socialLinks && resumeData.socialLinks.length > 0 && (
                  <div className="pt-2 mt-2 border-t border-[#00ff00]/20">
                    <p className="text-yellow-400 mb-2"># EXTERNAL_LINKS</p>
                    {resumeData.socialLinks.map((link, i) => (
                      <p key={i}><span className="text-green-300">[{link.platform.toUpperCase()}]</span> <a href={link.url} target="_blank" rel="noreferrer" className="text-white hover:underline">{link.url}</a></p>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ) : null}

          <section>
            <p className="mb-2"><span className="text-white">sysadmin@host</span>:<span className="text-blue-400">~</span>$ ./contact.sh</p>
            <div className="border border-[#00ff00]/30 p-6 mt-4 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="opacity-80 mb-2">Initializing secure connection...</p>
                <p className="text-xl font-bold">STATUS: <span className="text-white">READY_FOR_COMMUNICATION</span></p>
              </div>
              {resumeData?.contact?.email ? (
                <a href={`mailto:${resumeData.contact.email}`} className="border-2 border-[#00ff00] px-8 py-3 hover:bg-[#00ff00] hover:text-black font-bold uppercase transition-colors tracking-wider w-full md:w-auto text-center block">
                  Execute Handshake
                </a>
              ) : (
                <button className="border-2 border-[#00ff00] px-8 py-3 hover:bg-[#00ff00] hover:text-black font-bold uppercase transition-colors tracking-wider w-full md:w-auto">
                  Execute Handshake
                </button>
              )}
            </div>
          </section>
          
          <div className="flex items-center pt-8">
            <span className="text-white">sysadmin@host</span>:<span className="text-blue-400">~</span>$ <span className="w-3 h-6 bg-[#00ff00] ml-2 inline-block animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}
