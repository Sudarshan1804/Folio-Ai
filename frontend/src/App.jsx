import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Templates from "./pages/templates";
import Profile from "./pages/profile";
import PreviewBento from "./pages/preview.bento";
import PreviewDark from "./pages/preview.dark";
import PreviewFuturistic from "./pages/preview.futuristic";
import PreviewGlass from "./pages/preview.glass";
import PreviewNotion from "./pages/preview.notion";
import PreviewTerminal from "./pages/preview.terminal";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/preview/bento" element={<PreviewBento />} />
        <Route path="/preview/dark" element={<PreviewDark />} />
        <Route path="/preview/futuristic" element={<PreviewFuturistic />} />
        <Route path="/preview/glass" element={<PreviewGlass />} />
        <Route path="/preview/notion" element={<PreviewNotion />} />
        <Route path="/preview/terminal" element={<PreviewTerminal />} />
        {/* Dynamic preview routes */}
        <Route path="/preview/bento/:id" element={<PreviewBento />} />
        <Route path="/preview/dark/:id" element={<PreviewDark />} />
        <Route path="/preview/futuristic/:id" element={<PreviewFuturistic />} />
        <Route path="/preview/glass/:id" element={<PreviewGlass />} />
        <Route path="/preview/notion/:id" element={<PreviewNotion />} />
        <Route path="/preview/terminal/:id" element={<PreviewTerminal />} />
      </Routes>
    </Router>
  );
}

export default App;

