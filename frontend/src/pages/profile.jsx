
import { Navbar } from "@/components/landing/Navbar";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export default Profile;

function Profile() {
  return (/*#__PURE__*/
    _jsxs("main", { className: "relative min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col", children: [/*#__PURE__*/
      _jsx(Navbar, {}), /*#__PURE__*/
      _jsxs("div", { className: "relative flex-1 flex flex-col items-center justify-center p-6 mt-20", children: [/*#__PURE__*/
        _jsx("h1", { className: "text-3xl font-bold mb-4", children: "Your Profile" }), /*#__PURE__*/
        _jsx("p", { className: "text-muted-foreground", children: "Manage your account and view your generated portfolios here." })] }
      )] }
    ));

}