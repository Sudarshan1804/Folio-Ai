import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { templates } from "@/components/landing/Templates";
import { GenerateModal } from "@/components/landing/GenerateModal";

export const Route = createFileRoute("/templates")({
  head: () => ({
    meta: [{ title: "All Templates — FolioAI" }],
  }),
  component: TemplatesPage,
});

function TemplatesPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <Navbar />
      
      {/* Background effects */}
      <div aria-hidden className="absolute inset-0 bg-hero pointer-events-none" />
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div aria-hidden className="absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px]" />
      
      <div className="relative flex-1 pt-28 pb-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">All Templates</h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group glass rounded-2xl p-3 hover:border-primary/40 transition-all hover:-translate-y-1"
              >
                <div className="aspect-[4/3] rounded-xl relative overflow-hidden bg-muted mb-3">
                  <img src={t.image} alt={t.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center justify-between px-2 pt-2 pb-1">
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.tag}</p>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link 
                      to={`/preview/${t.id}`}
                      className="text-xs font-medium glass text-foreground px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer inline-flex items-center"
                    >
                      Preview
                    </Link>
                    <GenerateModal templateId={t.id} templateName={t.name}>
                      <button className="text-xs font-medium bg-aurora text-background px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
                        Use
                      </button>
                    </GenerateModal>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
