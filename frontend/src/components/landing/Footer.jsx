import { Sparkles } from "lucide-react";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export function Footer() {
  return (/*#__PURE__*/
    _jsx("footer", { className: "relative border-t border-border/50 py-12", children: /*#__PURE__*/
      _jsxs("div", { className: "mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6", children: [/*#__PURE__*/
        _jsxs("div", { className: "flex items-center gap-2", children: [/*#__PURE__*/
          _jsx("span", { className: "grid place-items-center w-7 h-7 rounded-lg bg-aurora", children: /*#__PURE__*/
            _jsx(Sparkles, { className: "w-3.5 h-3.5 text-background" }) }
          ), /*#__PURE__*/
          _jsxs("span", { className: "font-display font-semibold", children: ["Folio", /*#__PURE__*/_jsx("span", { className: "text-gradient", children: "AI" })] })] }
        ), /*#__PURE__*/
        _jsxs("p", { className: "text-xs text-muted-foreground", children: ["\xA9 ", new Date().getFullYear(), " FolioAI. Crafted for creators, by creators."] }), /*#__PURE__*/
        _jsxs("div", { className: "flex gap-5 text-xs text-muted-foreground", children: [/*#__PURE__*/
          _jsx("a", { href: "#", className: "hover:text-foreground", children: "Privacy" }), /*#__PURE__*/
          _jsx("a", { href: "#", className: "hover:text-foreground", children: "Terms" }), /*#__PURE__*/
          _jsx("a", { href: "#", className: "hover:text-foreground", children: "Twitter" }), /*#__PURE__*/
          _jsx("a", { href: "#", className: "hover:text-foreground", children: "GitHub" })] }
        )] }
      ) }
    ));

}