import { motion } from "framer-motion";
import { Brain, Palette, Zap, Globe, Code2, Sparkles } from "lucide-react";

const features = [
  { icon: Brain, title: "AI Resume Parsing", desc: "Drop a PDF, DOCX or TXT — our AI extracts skills, projects, experience and education with surgical precision." },
  { icon: Palette, title: "Auto Color & Type", desc: "Bespoke palettes, font pairings and motion presets generated to match your personal brand." },
  { icon: Zap, title: "Instant Generation", desc: "Full responsive portfolio in under 30 seconds. Hero, projects, timeline, contact — all done." },
  { icon: Globe, title: "Download & Self-Host", desc: "Export clean HTML/CSS/JS code and host it anywhere — Vercel, Netlify, GitHub Pages, your own server." },
  { icon: Code2, title: "Live Editor", desc: "Refine every section visually — drag, drop, rewrite with AI, swap themes in real time." },
  { icon: Sparkles, title: "AI Enhancements", desc: "Smart bio writer, project polish, ATS optimization and grammar tune-ups on tap." },
];

export function Features() {
  return (
    <section id="features" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm text-accent font-medium tracking-wider uppercase">Features</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Everything you need to <span className="text-gradient">stand out</span></h2>
          <p className="mt-4 text-muted-foreground">From parsing to publishing — built for makers who want results, not a weekend of fiddling.</p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group glass rounded-2xl p-6 hover:border-primary/40 transition-colors relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-aurora grid place-items-center glow">
                  <f.icon className="w-5 h-5 text-background" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
