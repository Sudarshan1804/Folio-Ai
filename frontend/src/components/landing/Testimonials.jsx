import { motion } from "framer-motion";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const quotes = [
{ name: "Ananya R.", role: "Product Designer", text: "Uploaded my resume on a coffee break. Walked back with a portfolio I actually wanted to show recruiters." },
{ name: "Marcus L.", role: "Full-stack Engineer", text: "The AI rewrites alone are worth it. My project descriptions finally don't sound like a stale README." },
{ name: "Priya S.", role: "Startup Founder", text: "Better than what my agency charged me $3k for. The templates feel hand-crafted." },
{ name: "Tom B.", role: "ML Researcher", text: "Clean, fast, and the color generation nails the vibe every time. Wild how good this is." }];


export function Testimonials() {
  return (/*#__PURE__*/
    _jsx("section", { className: "relative py-32", children: /*#__PURE__*/
      _jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [/*#__PURE__*/
        _jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [/*#__PURE__*/
          _jsx("p", { className: "text-sm text-accent font-medium tracking-wider uppercase", children: "Loved by builders" }), /*#__PURE__*/
          _jsxs("h2", { className: "mt-3 text-4xl md:text-5xl font-bold", children: ["Folks are ", /*#__PURE__*/_jsx("span", { className: "text-gradient", children: "shipping faster" })] })] }
        ), /*#__PURE__*/
        _jsx("div", { className: "mt-14 grid md:grid-cols-2 gap-5", children:
          quotes.map((q, i) => /*#__PURE__*/
          _jsxs(motion.div, {

            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.06 },
            className: "glass rounded-2xl p-7", children: [/*#__PURE__*/

            _jsxs("p", { className: "text-foreground/90 leading-relaxed", children: ["\"", q.text, "\""] }), /*#__PURE__*/
            _jsxs("div", { className: "mt-5 flex items-center gap-3", children: [/*#__PURE__*/
              _jsx("div", { className: "w-10 h-10 rounded-full bg-aurora" }), /*#__PURE__*/
              _jsxs("div", { children: [/*#__PURE__*/
                _jsx("p", { className: "text-sm font-medium", children: q.name }), /*#__PURE__*/
                _jsx("p", { className: "text-xs text-muted-foreground", children: q.role })] }
              )] }
            )] }, q.name
          )
          ) }
        )] }
      ) }
    ));

}