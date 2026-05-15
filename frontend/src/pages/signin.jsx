
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { useState } from "react";
import { signInFn } from "@/server-actions/auth";
import { setAuthToken } from "@/lib/auth";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export default SignIn;

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await signInFn({ data: { email, password } });
      if (result.token) {
        setAuthToken(result.token);
        navigate({ to: "/" });
      }
    } catch (err) {
      setError(err.message || "Failed to sign in");
    } finally {
      setIsLoading(false);
    }
  };

  return (/*#__PURE__*/
    _jsxs("main", { className: "relative min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col", children: [/*#__PURE__*/
      _jsx(Navbar, {}), /*#__PURE__*/


      _jsx("div", { "aria-hidden": true, className: "absolute inset-0 bg-hero pointer-events-none" }), /*#__PURE__*/
      _jsx("div", { "aria-hidden": true, className: "absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" }), /*#__PURE__*/
      _jsx("div", { "aria-hidden": true, className: "absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px]" }), /*#__PURE__*/

      _jsx("div", { className: "relative flex-1 flex flex-col items-center justify-center p-6 mt-20", children: /*#__PURE__*/
        _jsxs(motion.div, {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "w-full max-w-md glass rounded-3xl p-8 relative", children: [/*#__PURE__*/


          _jsx("div", { className: "absolute inset-0 rounded-3xl bg-gradient-to-b from-white/10 to-transparent -z-10 pointer-events-none" }), /*#__PURE__*/

          _jsxs("div", { className: "flex flex-col items-center text-center mb-8", children: [/*#__PURE__*/
            _jsx(Link, { to: "/", className: "inline-flex items-center gap-2 font-display font-semibold mb-6", children: /*#__PURE__*/
              _jsx("span", { className: "relative grid place-items-center w-10 h-10 rounded-xl bg-aurora glow", children: /*#__PURE__*/
                _jsx(Sparkles, { className: "w-5 h-5 text-background" }) }
              ) }
            ), /*#__PURE__*/
            _jsx("h1", { className: "text-2xl font-bold tracking-tight mb-2", children: "Welcome back" }), /*#__PURE__*/
            _jsx("p", { className: "text-sm text-muted-foreground", children: "Sign in to your account to continue" }

            )] }
          ), /*#__PURE__*/

          _jsxs("form", { className: "space-y-4", onSubmit: handleSubmit, children: [
            error && /*#__PURE__*/
            _jsx("div", { className: "p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm", children:
              error }
            ), /*#__PURE__*/

            _jsxs("div", { className: "space-y-2", children: [/*#__PURE__*/
              _jsx("label", { htmlFor: "email", className: "text-sm font-medium text-foreground/80", children: "Email address" }

              ), /*#__PURE__*/
              _jsx("input", {
                id: "email",
                type: "email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                placeholder: "you@example.com",
                required: true,
                className: "w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50" }
              )] }
            ), /*#__PURE__*/

            _jsxs("div", { className: "space-y-2", children: [/*#__PURE__*/
              _jsxs("div", { className: "flex items-center justify-between", children: [/*#__PURE__*/
                _jsx("label", { htmlFor: "password", className: "text-sm font-medium text-foreground/80", children: "Password" }

                ), /*#__PURE__*/
                _jsx("a", { href: "#", className: "text-xs text-primary hover:text-primary/80 transition-colors", children: "Forgot password?" }

                )] }
              ), /*#__PURE__*/
              _jsx("input", {
                id: "password",
                type: "password",
                value: password,
                onChange: (e) => setPassword(e.target.value),
                placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                required: true,
                className: "w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50" }
              )] }
            ), /*#__PURE__*/

            _jsxs("button", {
              type: "submit",
              disabled: isLoading,
              className: "w-full group inline-flex items-center justify-center gap-2 bg-aurora text-background font-medium px-4 py-3 rounded-xl glow hover:scale-[1.02] transition-transform mt-6 disabled:opacity-50 disabled:hover:scale-100", children: [

              isLoading ? "Signing In..." : "Sign In",
              !isLoading && /*#__PURE__*/_jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })] }
            )] }
          ), /*#__PURE__*/

          _jsxs("div", { className: "mt-6 text-center text-sm text-muted-foreground", children: ["Don't have an account?",
            " ", /*#__PURE__*/
            _jsx(Link, { to: "/signup", className: "text-foreground font-medium hover:text-primary transition-colors", children: "Get started" }

            )] }
          )] }
        ) }
      )] }
    ));

}