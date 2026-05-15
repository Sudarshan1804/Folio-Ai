import { createFileRoute, Link } from '@tanstack/react-router'
import { X, FileText, ChevronRight, Hash, Image as ImageIcon, CheckSquare, Calendar, Download } from 'lucide-react'
import { useResumeData } from '@/hooks/useResumeData'

export const Route = createFileRoute('/preview/notion')({
  component: NotionTemplate,
})

function NotionTemplate() {
  const resumeData = useResumeData()

  return (
    <div className="min-h-screen bg-[#fffefc] text-[#37352f] font-serif p-4 md:p-8 pb-32">
      {/* Floating Close Button */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        <button className="flex items-center gap-2 bg-[#37352f] hover:bg-[#2f2d27] text-white px-4 py-2 rounded text-sm font-medium transition-all shadow-sm font-sans">
          <Download className="w-4 h-4" /> Download .zip
        </button>
        <Link to="/" hash="templates" className="flex items-center gap-2 bg-white hover:bg-gray-100 text-[#37352f] px-4 py-2 rounded text-sm font-medium transition-all border border-gray-200 shadow-sm font-sans">
          <X className="w-4 h-4" /> Close Preview
        </Link>
      </div>

      <div className="max-w-3xl mx-auto py-12 md:py-20">
        
        {/* Cover Image Placeholder */}
        <div className="w-full h-48 md:h-64 mb-12 bg-gray-100 rounded-lg overflow-hidden relative group">
           <img src="https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" alt="Cover" className="w-full h-full object-cover" />
        </div>

        <header className="mb-12 relative">
          <div className="text-7xl absolute -top-24 left-4 bg-[#fffefc] p-2 rounded-lg">📝</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-sans tracking-tight pt-4">{resumeData?.name ? `${resumeData.name}'s Knowledge Base` : "Michael's Knowledge Base"}</h1>
          <div className="flex flex-wrap gap-4 text-sm font-sans mb-8 border-b border-gray-200 pb-8">
             <span className="flex items-center gap-1 text-gray-500"><Calendar className="w-4 h-4" /> Updated Today</span>
             <span className="flex items-center gap-1 text-gray-500"><Hash className="w-4 h-4" /> {resumeData?.role || "Technical Writer"}</span>
          </div>
          <p className="text-lg text-[#37352f] font-sans leading-relaxed">
            {resumeData?.about || "Hi, I'm Michael. I'm a Developer Relations Engineer and Technical Writer. I specialize in breaking down complex distributed systems into digestible, enjoyable documentation. Welcome to my digital garden."}
          </p>
        </header>

        <main className="space-y-12 font-sans">
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
              Featured Articles
            </h2>
            <div className="space-y-1">
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer transition-colors group">
                <FileText className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                <span className="font-medium underline decoration-gray-300 underline-offset-4 decoration-1 text-[#37352f]">Building Scalable Design Systems in React</span>
                <span className="text-xs text-gray-400 ml-auto flex items-center hidden sm:flex">Published Oct 12</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer transition-colors group">
                <FileText className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                <span className="font-medium underline decoration-gray-300 underline-offset-4 decoration-1 text-[#37352f]">Why I switched to Rust for backend architecture</span>
                <span className="text-xs text-gray-400 ml-auto flex items-center hidden sm:flex">Published Sep 04</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer transition-colors group">
                <FileText className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                <span className="font-medium underline decoration-gray-300 underline-offset-4 decoration-1 text-[#37352f]">The ultimate guide to WebGL performance</span>
                <span className="text-xs text-gray-400 ml-auto flex items-center hidden sm:flex">Published Aug 21</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-b border-gray-100 pb-2">
              Project Database
            </h2>
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-500">
                  <tr>
                    <th className="px-4 py-3 font-medium flex items-center gap-1"><FileText className="w-3 h-3" /> Name</th>
                    <th className="px-4 py-3 font-medium"><Hash className="w-3 h-3 inline mr-1" /> Type</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {resumeData?.projects?.length ? resumeData.projects.map((p, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors cursor-pointer">
                      <td className="px-4 py-3 font-medium flex items-center gap-2"><span className="text-lg">📚</span> {p.title}</td>
                      <td className="px-4 py-3"><span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">Project</span></td>
                      <td className="px-4 py-3"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">Completed</span></td>
                    </tr>
                  )) : (
                    <>
                      <tr className="hover:bg-gray-50 transition-colors cursor-pointer">
                        <td className="px-4 py-3 font-medium flex items-center gap-2"><span className="text-lg">📚</span> Docs Engine</td>
                        <td className="px-4 py-3"><span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">Open Source</span></td>
                        <td className="px-4 py-3"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">Completed</span></td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors cursor-pointer">
                        <td className="px-4 py-3 font-medium flex items-center gap-2"><span className="text-lg">⚡️</span> React Compiler Plugin</td>
                        <td className="px-4 py-3"><span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs">Tooling</span></td>
                        <td className="px-4 py-3"><span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs">In Progress</span></td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors cursor-pointer">
                        <td className="px-4 py-3 font-medium flex items-center gap-2"><span className="text-lg">🎨</span> Minimal Theme</td>
                        <td className="px-4 py-3"><span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs">Design</span></td>
                        <td className="px-4 py-3"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">Completed</span></td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-b border-gray-100 pb-2">
              Experience
            </h2>
            <div className="space-y-6">
              {resumeData?.experience?.length ? resumeData.experience.map((exp, i) => (
                <div key={i} className="pl-4 border-l-[3px] border-gray-200">
                  <h3 className="font-bold text-lg">{exp.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{exp.company} • {exp.period}</p>
                  <ul className="space-y-1 text-[#37352f]">
                    <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-blue-500 shrink-0 mt-1" /> {exp.description}</li>
                  </ul>
                </div>
              )) : (
                <>
                  <div className="pl-4 border-l-[3px] border-gray-200">
                    <h3 className="font-bold text-lg">Senior Technical Writer</h3>
                    <p className="text-sm text-gray-500 mb-2">Vercel • 2021 - Present</p>
                    <ul className="space-y-1 text-[#37352f]">
                      <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-blue-500 shrink-0 mt-1" /> Authored over 100+ technical guides for the Next.js ecosystem.</li>
                      <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-blue-500 shrink-0 mt-1" /> Managed the open-source documentation contributions.</li>
                    </ul>
                  </div>
                  <div className="pl-4 border-l-[3px] border-gray-200">
                    <h3 className="font-bold text-lg">Frontend Developer</h3>
                    <p className="text-sm text-gray-500 mb-2">Startup Inc • 2018 - 2021</p>
                    <ul className="space-y-1 text-[#37352f]">
                      <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-gray-400 shrink-0 mt-1" /> Built the core dashboard using React and Redux.</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </section>

          {resumeData?.education && resumeData.education.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-gray-100 pb-2">
                Education
              </h2>
              <div className="space-y-6">
                {resumeData.education.map((edu, i) => (
                  <div key={i} className="pl-4 border-l-[3px] border-gray-200">
                    <h3 className="font-bold text-lg">{edu.degree}</h3>
                    <p className="text-sm text-gray-500 mb-2">{edu.institution} • {edu.period}</p>
                    {edu.description && (
                      <ul className="space-y-1 text-[#37352f]">
                        <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-blue-500 shrink-0 mt-1" /> {edu.description}</li>
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {resumeData?.additionalSections?.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-2xl font-bold mb-4 border-b border-gray-100 pb-2">
                {section.title}
              </h2>
              <div className="space-y-6">
                {section.items.map((item, i) => (
                  <div key={i} className="pl-4 border-l-[3px] border-gray-200">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    {(item.subtitle || item.period) && (
                      <p className="text-sm text-gray-500 mb-2">
                        {item.subtitle} {item.subtitle && item.period ? '•' : ''} {item.period}
                      </p>
                    )}
                    {item.description && (
                      <ul className="space-y-1 text-[#37352f]">
                        <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-blue-500 shrink-0 mt-1" /> {item.description}</li>
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col md:flex-row items-center gap-6 mt-12">
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2">Let's connect</h2>
              <p className="text-gray-600 mb-4">I'm always open to discussing technical writing, developer tools, or potential opportunities.</p>
              <div className="flex gap-4 flex-wrap">
                <a href={`mailto:${resumeData?.contact?.email || 'michael@example.com'}`} className="text-blue-600 hover:underline cursor-pointer font-medium">
                  {resumeData?.contact?.email || 'michael@example.com'}
                </a>
                {resumeData?.socialLinks?.length ? (
                  resumeData.socialLinks.map((social, i) => (
                    <a key={i} href={social.url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline cursor-pointer font-medium">
                      {social.platform}
                    </a>
                  ))
                ) : (
                  <>
                    <span className="text-blue-600 hover:underline cursor-pointer font-medium">Twitter</span>
                    <span className="text-blue-600 hover:underline cursor-pointer font-medium">LinkedIn</span>
                  </>
                )}
              </div>
            </div>
            <div className="w-32 h-32 bg-gray-200 rounded-lg overflow-hidden shrink-0 border border-gray-300">
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Michael" className="w-full h-full object-cover" />
            </div>
          </section>
          
        </main>
      </div>
    </div>
  )
}
