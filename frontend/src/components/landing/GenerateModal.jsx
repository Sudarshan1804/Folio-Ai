import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Upload, Wand2, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { parseResumeText } from "@/lib/ai-parser";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export function GenerateModal({ templateId, templateName, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState(0);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const steps = [
  "Reading file contents...",
  "AI is analyzing your experience...",
  `Applying ${templateName} theme...`,
  "Finalizing portfolio..."];


  const handleUploadClick = () => {
    fileInputRef.current?.click();
    setError(null);
  };

  const handleGenerate = async () => {
    if (!file) return;

    setIsGenerating(true);
    setGenerationStep(0);
    setError(null);

    try {
      // 1. Read file contents
      let text = "";
      if (file.type === "application/pdf") {
        const pdfjsLib = await import('pdfjs-dist');
        pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
          'pdfjs-dist/build/pdf.worker.min.mjs',
          import.meta.url
        ).toString();

        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          text += content.items.map((item) => item.str).join(" ") + "\n";
        }
      } else {
        text = await file.text();
      }

      if (!text.trim()) {
        throw new Error("Could not extract any text from the document.");
      }

      // 2. Parse with AI
      setGenerationStep(1);
      const portfolioData = await parseResumeText(text);

      // 3. Save to localStorage
      setGenerationStep(2);
      localStorage.setItem('folio_ai_resume_data', JSON.stringify(portfolioData));

      // 4. Redirect
      setGenerationStep(3);
      setTimeout(() => {
        navigate({ to: `/preview/${templateId}` });
      }, 1000);

    } catch (err) {
      console.error("Generation error:", err);
      setError(err.message || "Failed to generate portfolio. Please try again.");
      setIsGenerating(false);
    }
  };

  return (/*#__PURE__*/
    _jsxs(Dialog, { open: isOpen, onOpenChange: (open) => {
        setIsOpen(open);
        if (!open) {
          // Reset state on close
          setTimeout(() => {
            setFile(null);
            setIsGenerating(false);
            setGenerationStep(0);
            setError(null);
          }, 300);
        }
      }, children: [/*#__PURE__*/
      _jsx(DialogTrigger, { asChild: true, children:
        children }
      ), /*#__PURE__*/
      _jsx(DialogContent, { className: "sm:max-w-md glass border-white/10 p-0 overflow-hidden", children: /*#__PURE__*/
        _jsxs("div", { className: "p-6", children: [/*#__PURE__*/
          _jsxs(DialogHeader, { className: "mb-2", children: [/*#__PURE__*/
            _jsxs(DialogTitle, { className: "text-2xl font-bold flex items-center gap-2", children: [/*#__PURE__*/
              _jsx(Wand2, { className: "w-5 h-5 text-primary" }), " Generate Portfolio"] }
            ), /*#__PURE__*/
            _jsxs(DialogDescription, { className: "text-muted-foreground text-base mt-1", children: ["Upload your resume to instantly generate a personalized website using the ", /*#__PURE__*/
              _jsx("span", { className: "text-foreground font-semibold", children: templateName }), " template."] }
            )] }
          ), /*#__PURE__*/

          _jsx("div", { className: "mt-8", children: /*#__PURE__*/
            _jsx(AnimatePresence, { mode: "wait", children:
              !isGenerating ? /*#__PURE__*/
              _jsxs(motion.div, {

                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -10 },
                className: "space-y-6", children: [/*#__PURE__*/


                _jsx("div", {
                  onClick: handleUploadClick,
                  className: `border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${file ? 'border-primary/50 bg-primary/5' : 'border-white/10 hover:border-primary/30 hover:bg-white/5'}`, children:

                  file ? /*#__PURE__*/
                  _jsxs("div", { className: "flex flex-col items-center gap-2 text-primary", children: [/*#__PURE__*/
                    _jsx(CheckCircle2, { className: "w-8 h-8" }), /*#__PURE__*/
                    _jsx("span", { className: "font-medium truncate max-w-[250px]", children: file.name }), /*#__PURE__*/
                    _jsx("span", { className: "text-xs text-muted-foreground mt-1", children: "Click to change file" })] }
                  ) : /*#__PURE__*/

                  _jsxs("div", { className: "flex flex-col items-center gap-2 text-muted-foreground", children: [/*#__PURE__*/
                    _jsx(Upload, { className: "w-8 h-8 mb-2 opacity-50" }), /*#__PURE__*/
                    _jsx("span", { className: "font-medium text-foreground", children: "Click to upload resume" }), /*#__PURE__*/
                    _jsx("span", { className: "text-xs", children: "PDF or TXT format" })] }
                  ) }

                ), /*#__PURE__*/
                _jsx("input", {
                  type: "file",
                  ref: fileInputRef,
                  className: "hidden",
                  accept: ".pdf,.txt",
                  onChange: (e) => {
                    const selectedFile = e.target.files?.[0];
                    if (selectedFile) {
                      setFile(selectedFile);
                      setError(null);
                    }
                  } }
                ),

                error && /*#__PURE__*/
                _jsxs("div", { className: "flex items-start gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg text-sm border border-red-400/20", children: [/*#__PURE__*/
                  _jsx(AlertCircle, { className: "w-4 h-4 shrink-0 mt-0.5" }), /*#__PURE__*/
                  _jsx("p", { children: error })] }
                ), /*#__PURE__*/



                _jsx("button", {
                  onClick: handleGenerate,
                  disabled: !file,
                  className: "w-full bg-aurora text-background font-medium px-4 py-3 rounded-xl glow transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-95 disabled:hover:scale-100", children:
                  "Generate with AI" }

                )] }, "upload"
              ) : /*#__PURE__*/

              _jsxs(motion.div, {

                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                className: "py-12 flex flex-col items-center justify-center space-y-6 text-center", children: [/*#__PURE__*/

                _jsxs("div", { className: "relative w-16 h-16 flex items-center justify-center", children: [/*#__PURE__*/
                  _jsx(Loader2, { className: "w-8 h-8 text-primary animate-spin" }), /*#__PURE__*/
                  _jsx("div", { className: "absolute inset-0 border-t-2 border-primary/30 rounded-full animate-spin", style: { animationDuration: '3s' } })] }
                ), /*#__PURE__*/

                _jsxs("div", { className: "space-y-2 h-16", children: [/*#__PURE__*/
                  _jsx("h3", { className: "text-lg font-semibold text-foreground", children:
                    steps[generationStep] }
                  ), /*#__PURE__*/
                  _jsx("p", { className: "text-sm text-muted-foreground", children: "Powered by Gemini AI" }

                  )] }
                ), /*#__PURE__*/


                _jsx("div", { className: "w-full h-2 bg-white/10 rounded-full overflow-hidden", children: /*#__PURE__*/
                  _jsx(motion.div, {
                    className: "h-full bg-primary",
                    initial: { width: "0%" },
                    animate: { width: `${(generationStep + 1) / steps.length * 100}%` },
                    transition: { duration: 0.5 } }
                  ) }
                )] }, "generating"
              ) }

            ) }
          )] }
        ) }
      )] }
    ));

}