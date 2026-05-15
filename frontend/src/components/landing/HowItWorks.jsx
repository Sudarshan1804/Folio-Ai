import { motion } from "framer-motion";
import { FileUp, Cpu, Rocket } from "lucide-react";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const steps = [
{ icon: FileUp, label: "01 · Upload", title: "Drop your resume", desc: "PDF, DOCX or plain text — we handle the rest." },
{ icon: Cpu, label: "02 · Generate", title: "AI does the heavy lifting", desc: "Structure, copy, palette, layout — all in seconds." },
{ icon: Rocket, label: "03 · Download", title: "Get your code", desc: "Download the full source code and host it anywhere you want." }];


export function HowItWorks() {
  return (/*#__PURE__*/
    _jsx("section", { id: "how", className: "relative py-32", children: /*#__PURE__*/
      _jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [/*#__PURE__*/
        _jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [/*#__PURE__*/
          _jsx("p", { className: "text-sm text-accent font-medium tracking-wider uppercase", children: "How it works" }), /*#__PURE__*/
          _jsxs("h2", { className: "mt-3 text-4xl md:text-5xl font-bold", children: ["From resume to ", /*#__PURE__*/_jsx("span", { className: "text-gradient", children: "live site" }), " in 3 steps"] })] }
        ), /*#__PURE__*/

        _jsxs("div", { className: "mt-16 grid md:grid-cols-3 gap-5 relative", children: [/*#__PURE__*/
          _jsx("div", { "aria-hidden": true, className: "hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" }),
          steps.map((s, i) => /*#__PURE__*/
          _jsxs(motion.div, {

            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.1 },
            className: "glass rounded-2xl p-8 text-center relative", children: [/*#__PURE__*/

            _jsx("div", { className: "mx-auto w-14 h-14 rounded-2xl bg-aurora grid place-items-center glow", children: /*#__PURE__*/
              _jsx(s.icon, { className: "w-6 h-6 text-background" }) }
            ), /*#__PURE__*/
            _jsx("p", { className: "mt-6 text-xs tracking-widest text-accent", children: s.label }), /*#__PURE__*/
            _jsx("h3", { className: "mt-2 text-xl font-semibold", children: s.title }), /*#__PURE__*/
            _jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc })] }, s.label
          )
          )] }
        )] }
      ) }
    ));

}