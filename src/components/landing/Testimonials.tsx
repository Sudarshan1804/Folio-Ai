import { motion } from "framer-motion";

const quotes = [
  { name: "Ananya R.", role: "Product Designer", text: "Uploaded my resume on a coffee break. Walked back with a portfolio I actually wanted to show recruiters." },
  { name: "Marcus L.", role: "Full-stack Engineer", text: "The AI rewrites alone are worth it. My project descriptions finally don't sound like a stale README." },
  { name: "Priya S.", role: "Startup Founder", text: "Better than what my agency charged me $3k for. The templates feel hand-crafted." },
  { name: "Tom B.", role: "ML Researcher", text: "Clean, fast, and the color generation nails the vibe every time. Wild how good this is." },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm text-accent font-medium tracking-wider uppercase">Loved by builders</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Folks are <span className="text-gradient">shipping faster</span></h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {quotes.map((q, i) => (
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-2xl p-7"
            >
              <p className="text-foreground/90 leading-relaxed">"{q.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-aurora" />
                <div>
                  <p className="text-sm font-medium">{q.name}</p>
                  <p className="text-xs text-muted-foreground">{q.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
