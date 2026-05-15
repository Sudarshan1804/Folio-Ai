import { motion } from "framer-motion";
import { Brain, Palette, Zap, Globe, Code2, Sparkles } from "lucide-react";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const features = [
{ icon: Brain, title: "AI Resume Parsing", desc: "Drop a PDF, DOCX or TXT — our AI extracts skills, projects, experience and education with surgical precision." },
{ icon: Palette, title: "Auto Color & Type", desc: "Bespoke palettes, font pairings and motion presets generated to match your personal brand." },
{ icon: Zap, title: "Instant Generation", desc: "Full responsive portfolio in under 30 seconds. Hero, projects, timeline, contact — all done." },
{ icon: Globe, title: "Download & Self-Host", desc: "Export clean HTML/CSS/JS code and host it anywhere — Vercel, Netlify, GitHub Pages, your own server." },
{ icon: Code2, title: "Live Editor", desc: "Refine every section visually — drag, drop, rewrite with AI, swap themes in real time." },
{ icon: Sparkles, title: "AI Enhancements", desc: "Smart bio writer, project polish, ATS optimization and grammar tune-ups on tap." }];


export function Features() {
  return (/*#__PURE__*/
    _jsx("section", { id: "features", className: "relative py-32", children: /*#__PURE__*/
      _jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [/*#__PURE__*/
        _jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [/*#__PURE__*/
          _jsx("p", { className: "text-sm text-accent font-medium tracking-wider uppercase", children: "Features" }), /*#__PURE__*/
          _jsxs("h2", { className: "mt-3 text-4xl md:text-5xl font-bold", children: ["Everything you need to ", /*#__PURE__*/_jsx("span", { className: "text-gradient", children: "stand out" })] }), /*#__PURE__*/
          _jsx("p", { className: "mt-4 text-muted-foreground", children: "From parsing to publishing \u2014 built for makers who want results, not a weekend of fiddling." })] }
        ), /*#__PURE__*/

        _jsx("div", { className: "mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5", children:
          features.map((f, i) => /*#__PURE__*/
          _jsxs(motion.div, {

            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-80px" },
            transition: { duration: 0.5, delay: i * 0.06 },
            className: "group glass rounded-2xl p-6 hover:border-primary/40 transition-colors relative overflow-hidden", children: [/*#__PURE__*/

            _jsx("div", { className: "absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" }), /*#__PURE__*/
            _jsxs("div", { className: "relative", children: [/*#__PURE__*/
              _jsx("div", { className: "w-11 h-11 rounded-xl bg-aurora grid place-items-center glow", children: /*#__PURE__*/
                _jsx(f.icon, { className: "w-5 h-5 text-background" }) }
              ), /*#__PURE__*/
              _jsx("h3", { className: "mt-5 text-lg font-semibold", children: f.title }), /*#__PURE__*/
              _jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: f.desc })] }
            )] }, f.title
          )
          ) }
        )] }
      ) }
    ));

}