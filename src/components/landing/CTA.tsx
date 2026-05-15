import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative glass rounded-3xl p-12 md:p-16 overflow-hidden text-center">
          <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-aurora opacity-30 blur-3xl rounded-full" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold">Your next portfolio is <br /><span className="text-gradient">one upload away.</span></h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">Generate, download, and host your portfolio wherever you want. Your code, your control.</p>
            <a href="#hero" className="mt-8 inline-flex items-center gap-2 bg-aurora text-background font-medium px-7 py-3.5 rounded-xl glow hover:scale-[1.02] transition-transform">
              Generate & download free <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
