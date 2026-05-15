
import { motion } from "framer-motion";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { templates } from "@/components/landing/Templates";
import { GenerateModal } from "@/components/landing/GenerateModal";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export default TemplatesPage;

function TemplatesPage() {
  return (/*#__PURE__*/
    _jsxs("main", { className: "relative min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col", children: [/*#__PURE__*/
      _jsx(Navbar, {}), /*#__PURE__*/


      _jsx("div", { "aria-hidden": true, className: "absolute inset-0 bg-hero pointer-events-none" }), /*#__PURE__*/
      _jsx("div", { "aria-hidden": true, className: "absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" }), /*#__PURE__*/
      _jsx("div", { "aria-hidden": true, className: "absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px]" }), /*#__PURE__*/

      _jsx("div", { className: "relative flex-1 pt-28 pb-12", children: /*#__PURE__*/
        _jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [/*#__PURE__*/
          _jsx("div", { className: "mb-8", children: /*#__PURE__*/
            _jsx("h1", { className: "text-4xl md:text-5xl font-bold tracking-tight mb-4", children: "All Templates" }) }
          ), /*#__PURE__*/

          _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children:
            templates.map((t, i) => /*#__PURE__*/
            _jsxs(motion.div, {

              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: i * 0.05 },
              className: "group glass rounded-2xl p-3 hover:border-primary/40 transition-all hover:-translate-y-1", children: [/*#__PURE__*/

              _jsxs("div", { className: "aspect-[4/3] rounded-xl relative overflow-hidden bg-muted mb-3", children: [/*#__PURE__*/
                _jsx("img", { src: t.image, alt: t.name, className: "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" }), /*#__PURE__*/
                _jsx("div", { className: "absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" })] }
              ), /*#__PURE__*/
              _jsxs("div", { className: "flex items-center justify-between px-2 pt-2 pb-1", children: [/*#__PURE__*/
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
      ), /*#__PURE__*/

      _jsx(Footer, {})] }
    ));

}