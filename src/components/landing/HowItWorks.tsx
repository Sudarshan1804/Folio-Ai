import { motion } from "framer-motion";
import { FileUp, Cpu, Rocket } from "lucide-react";

const steps = [
  { icon: FileUp, label: "01 · Upload", title: "Drop your resume", desc: "PDF, DOCX or plain text — we handle the rest." },
  { icon: Cpu, label: "02 · Generate", title: "AI does the heavy lifting", desc: "Structure, copy, palette, layout — all in seconds." },
  { icon: Rocket, label: "03 · Download", title: "Get your code", desc: "Download the full source code and host it anywhere you want." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm text-accent font-medium tracking-wider uppercase">How it works</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">From resume to <span className="text-gradient">live site</span> in 3 steps</h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5 relative">
          <div aria-hidden className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 text-center relative"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl bg-aurora grid place-items-center glow">
                <s.icon className="w-6 h-6 text-background" />
              </div>
              <p className="mt-6 text-xs tracking-widest text-accent">{s.label}</p>
              <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
