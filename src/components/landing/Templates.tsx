import { motion } from "framer-motion";
import { Link, useNavigate } from "@tanstack/react-router";
import { GenerateModal } from "./GenerateModal";
import { getAuthToken } from "@/lib/auth";

export const templates = [
  { id: "bento", name: "Bento Grid Folio", tag: "Modern Layout", image: "/templates/bento.png" },
  { id: "terminal", name: "Terminal Dev", tag: "Engineering", image: "/templates/terminal.png" },
  { id: "glass", name: "Glassmorphism", tag: "Creative Design", image: "/templates/glassmorphism.png" },
  { id: "dark", name: "Dark Studio", tag: "Premium 3D", image: "/templates/dark_studio.png" },
  { id: "futuristic", name: "AI Futuristic", tag: "Bold & Animated", image: "/templates/ai_futuristic.png" },
];

export function Templates() {
  const navigate = useNavigate();

  const handleUseClick = (e: React.MouseEvent) => {
    const isLoggedIn = !!getAuthToken();
    if (!isLoggedIn) {
      e.preventDefault();
      e.stopPropagation();
      navigate({ to: "/signin" });
    }
  };

  return (
    <section id="templates" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-sm text-accent font-medium tracking-wider uppercase">Templates</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Start from a <span className="text-gradient">stunning base</span></h2>
            <p className="mt-4 text-muted-foreground max-w-xl">Hand-crafted portfolio templates. Pick one, the AI populates it with your data.</p>
          </div>
          <Link to="/templates" className="self-start glass rounded-xl px-5 py-2.5 text-sm hover:bg-white/5 transition-colors">Browse all templates →</Link>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {templates.filter(t => ['bento', 'glass', 'futuristic'].includes(t.id)).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group glass rounded-2xl p-3 hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <div className="aspect-[4/3] rounded-xl relative overflow-hidden bg-muted">
                <img src={t.image} alt={t.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-between px-2 pt-3 pb-1">
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
                    <button 
                      onClick={handleUseClick}
                      className="text-xs font-medium bg-aurora text-background px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      Use
                    </button>
                  </GenerateModal>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
