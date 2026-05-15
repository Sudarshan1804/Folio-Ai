import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { GenerateModal } from "./GenerateModal";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export const templates = [
{ id: "bento", name: "Bento Grid Folio", tag: "Modern Layout", image: "/templates/bento.png" },
{ id: "terminal", name: "Terminal Dev", tag: "Engineering", image: "/templates/terminal.png" },
{ id: "glass", name: "Glassmorphism", tag: "Creative Design", image: "/templates/glassmorphism.png" },
{ id: "dark", name: "Dark Studio", tag: "Premium 3D", image: "/templates/dark_studio.png" },
{ id: "notion", name: "Notion Minimal", tag: "Clean & Simple", image: "/templates/notion_minimal.png" },
{ id: "futuristic", name: "AI Futuristic", tag: "Bold & Animated", image: "/templates/ai_futuristic.png" }];


export function Templates() {
  return (/*#__PURE__*/
    _jsx("section", { id: "templates", className: "relative py-32", children: /*#__PURE__*/
      _jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [/*#__PURE__*/
        _jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6", children: [/*#__PURE__*/
          _jsxs("div", { children: [/*#__PURE__*/
            _jsx("p", { className: "text-sm text-accent font-medium tracking-wider uppercase", children: "Templates" }), /*#__PURE__*/
            _jsxs("h2", { className: "mt-3 text-4xl md:text-5xl font-bold", children: ["Start from a ", /*#__PURE__*/_jsx("span", { className: "text-gradient", children: "stunning base" })] }), /*#__PURE__*/
            _jsx("p", { className: "mt-4 text-muted-foreground max-w-xl", children: "Hand-crafted portfolio templates. Pick one, the AI populates it with your data." })] }
          ), /*#__PURE__*/
          _jsx(Link, { to: "/templates", className: "self-start glass rounded-xl px-5 py-2.5 text-sm hover:bg-white/5 transition-colors", children: "Browse all templates \u2192" })] }
        ), /*#__PURE__*/

        _jsx("div", { className: "mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5", children:
          templates.filter((t) => ['bento', 'glass', 'futuristic'].includes(t.id)).map((t, i) => /*#__PURE__*/
          _jsxs(motion.div, {

            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-50px" },
            transition: { duration: 0.5, delay: i * 0.05 },
            className: "group glass rounded-2xl p-3 hover:border-primary/40 transition-all hover:-translate-y-1", children: [/*#__PURE__*/

            _jsxs("div", { className: "aspect-[4/3] rounded-xl relative overflow-hidden bg-muted", children: [/*#__PURE__*/
              _jsx("img", { src: t.image, alt: t.name, className: "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" }), /*#__PURE__*/
              _jsx("div", { className: "absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" })] }
            ), /*#__PURE__*/
            _jsxs("div", { className: "flex items-center justify-between px-2 pt-3 pb-1", children: [/*#__PURE__*/
              _jsxs("div", { children: [/*#__PURE__*/
                _jsx("p", { className: "text-sm font-semibold", children: t.name }), /*#__PURE__*/
                _jsx("p", { className: "text-xs text-muted-foreground", children: t.tag })] }
              ), /*#__PURE__*/
              _jsxs("div", { className: "flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity", children: [/*#__PURE__*/
                _jsx(Link, {
                  to: `/preview/${t.id}`,
                  className: "text-xs font-medium glass text-foreground px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer inline-flex items-center", children:
                  "Preview" }

                ), /*#__PURE__*/
                _jsx(GenerateModal, { templateId: t.id, templateName: t.name, children: /*#__PURE__*/
                  _jsx("button", { className: "text-xs font-medium bg-aurora text-background px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity cursor-pointer", children: "Use" }

                  ) }
                )] }
              )] }
            )] }, t.name
          )
          ) }
        )] }
      ) }
    ));

}