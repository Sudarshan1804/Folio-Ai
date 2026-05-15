import { Link, useNavigate } from "@tanstack/react-router";
import { Sparkles, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { getAuthToken, clearAuthToken } from "@/lib/auth";import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!getAuthToken());
  }, []);

  const handleSignOut = () => {
    clearAuthToken();
    setIsLoggedIn(false);
    navigate({ to: "/" });
  };

  const links = [
  { label: "Features", href: "#features" },
  { label: "Templates", href: "#templates" },
  { label: "How it works", href: "#how" }];

  return (/*#__PURE__*/
    _jsx("header", { className: "fixed top-0 inset-x-0 z-50", children: /*#__PURE__*/
      _jsx("div", { className: "mx-auto mt-4 max-w-6xl px-4", children: /*#__PURE__*/
        _jsxs("nav", { className: "glass rounded-2xl px-4 py-3 flex items-center justify-between", children: [/*#__PURE__*/
          _jsxs(Link, { to: "/", className: "flex items-center gap-2 font-display font-semibold", children: [/*#__PURE__*/
            _jsx("span", { className: "relative grid place-items-center w-8 h-8 rounded-lg bg-aurora glow", children: /*#__PURE__*/
              _jsx(Sparkles, { className: "w-4 h-4 text-background" }) }
            ), /*#__PURE__*/
            _jsxs("span", { className: "text-base", children: ["Folio", /*#__PURE__*/_jsx("span", { className: "text-gradient", children: "AI" })] })] }
          ), /*#__PURE__*/
          _jsx("ul", { className: "hidden md:flex items-center gap-7 text-sm text-muted-foreground", children:
            links.map((l) => /*#__PURE__*/
            _jsx("li", { children: /*#__PURE__*/
              _jsx("a", { href: l.href, className: "hover:text-foreground transition-colors", children: l.label }) }, l.href
            )
            ) }
          ), /*#__PURE__*/
          _jsx("div", { className: "flex items-center gap-2", children:
            isLoggedIn ? /*#__PURE__*/
            _jsxs(_Fragment, { children: [/*#__PURE__*/
              _jsx(Link, { to: "/profile", className: "inline-flex items-center text-sm font-medium hover:text-primary px-3 py-2 transition-colors", children: "Profile" }

              ), /*#__PURE__*/
              _jsxs("button", {
                onClick: handleSignOut,
                className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground px-3 py-2 transition-colors", children: [
                "Sign out", /*#__PURE__*/

                _jsx(LogOut, { className: "w-4 h-4" })] }
              )] }
            ) : /*#__PURE__*/

            _jsxs(_Fragment, { children: [/*#__PURE__*/
              _jsx(Link, { to: "/signin", className: "hidden sm:inline-flex text-sm text-muted-foreground hover:text-foreground px-3 py-2", children: "Sign in" }

              ), /*#__PURE__*/
              _jsx(Link, { to: "/signup", className: "text-sm font-medium bg-aurora text-background px-4 py-2 rounded-xl hover:opacity-90 transition-opacity", children: "Get started" }

              )] }
            ) }

          )] }
        ) }
      ) }
    ));

}