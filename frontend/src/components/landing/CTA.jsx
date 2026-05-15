import { ArrowRight } from "lucide-react";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export function CTA() {
  return (/*#__PURE__*/
    _jsx("section", { className: "relative py-24", children: /*#__PURE__*/
      _jsx("div", { className: "mx-auto max-w-5xl px-6", children: /*#__PURE__*/
        _jsxs("div", { className: "relative glass rounded-3xl p-12 md:p-16 overflow-hidden text-center", children: [/*#__PURE__*/
          _jsx("div", { "aria-hidden": true, className: "absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-aurora opacity-30 blur-3xl rounded-full" }), /*#__PURE__*/
          _jsxs("div", { className: "relative", children: [/*#__PURE__*/
            _jsxs("h2", { className: "text-4xl md:text-5xl font-bold", children: ["Your next portfolio is ", /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("span", { className: "text-gradient", children: "one upload away." })] }), /*#__PURE__*/
            _jsx("p", { className: "mt-5 text-muted-foreground max-w-xl mx-auto", children: "Generate, download, and host your portfolio wherever you want. Your code, your control." }), /*#__PURE__*/
            _jsxs("a", { href: "#hero", className: "mt-8 inline-flex items-center gap-2 bg-aurora text-background font-medium px-7 py-3.5 rounded-xl glow hover:scale-[1.02] transition-transform", children: ["Generate & download free ", /*#__PURE__*/
              _jsx(ArrowRight, { className: "w-4 h-4" })] }
            )] }
          )] }
        ) }
      ) }
    ));

}