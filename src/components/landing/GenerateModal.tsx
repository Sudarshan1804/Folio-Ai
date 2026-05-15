import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Upload, X, Wand2, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { parseResumeText } from "@/lib/ai-parser";

export function GenerateModal({ 
  templateId, 
  templateName, 
  children,
  initialFile = null
}: { 
  templateId: string, 
  templateName: string, 
  children: React.ReactNode,
  initialFile?: File | null
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState<File | null>(initialFile);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Update file if initialFile changes
  useEffect(() => {
    if (initialFile) {
      setFile(initialFile);
    }
  }, [initialFile]);

  // Auto-trigger generation if modal is opened with a file already selected
  useEffect(() => {
    if (isOpen && (initialFile || file) && !isGenerating && !error) {
      handleGenerate(initialFile || file || undefined);
    }
  }, [isOpen, initialFile, file, isGenerating, error]);

  const steps = [
    "Reading file contents...",
    "AI is analyzing your experience...",
    `Applying ${templateName} theme...`,
    "Finalizing portfolio..."
  ];

  const handleUploadClick = () => {
    fileInputRef.current?.click();
    setError(null);
  };

  const handleGenerate = async (fileToUse?: File) => {
    const currentFile = fileToUse || file;
    if (!currentFile) return;
    
    setIsGenerating(true);
    setGenerationStep(0);
    setError(null);

    try {
      // 1. Read file contents
      let text = "";
      if (currentFile.type === "application/pdf") {
        const pdfjsLib = await import('pdfjs-dist');
        pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
          'pdfjs-dist/build/pdf.worker.min.mjs',
          import.meta.url
        ).toString();
        
        const arrayBuffer = await currentFile.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          text += content.items.map((item: any) => item.str).join(" ") + "\n";
        }
      } else {
        text = await currentFile.text();
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

    } catch (err: any) {
      console.error("Generation error:", err);
      setError(err.message || "Failed to generate portfolio. Please try again.");
      setIsGenerating(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
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
    }}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md glass border-white/10 p-0 overflow-hidden">
        <div className="p-6">
          <DialogHeader className="mb-2">
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <Wand2 className="w-5 h-5 text-primary" /> Generate Portfolio
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base mt-1">
              Upload your resume to instantly generate a personalized website using the <span className="text-foreground font-semibold">{templateName}</span> template.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-8">
            <AnimatePresence mode="wait">
              {!isGenerating ? (
                <motion.div 
                  key="upload"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  {/* Upload Area */}
                  <div 
                    onClick={handleUploadClick}
                    className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${file ? 'border-primary/50 bg-primary/5' : 'border-white/10 hover:border-primary/30 hover:bg-white/5'}`}
                  >
                    {file ? (
                      <div className="flex flex-col items-center gap-2 text-primary">
                        <CheckCircle2 className="w-8 h-8" />
                        <span className="font-medium truncate max-w-[250px]">{file.name}</span>
                        <span className="text-xs text-muted-foreground mt-1">Click to change file</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-muted-foreground">
                        <Upload className="w-8 h-8 mb-2 opacity-50" />
                        <span className="font-medium text-foreground">Click to upload resume</span>
                        <span className="text-xs">PDF or TXT format</span>
                      </div>
                    )}
                  </div>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept=".pdf,.txt" 
                    onChange={(e) => {
                      const selectedFile = e.target.files?.[0];
                      if (selectedFile) {
                        setFile(selectedFile);
                        setError(null);
                      }
                    }}
                  />

                  {error && (
                    <div className="flex items-start gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg text-sm border border-red-400/20">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <p>{error}</p>
                    </div>
                  )}

                  {/* Generate Action */}
                  <button
                    onClick={() => handleGenerate()}
                    disabled={!file}
                    className="w-full bg-aurora text-background font-medium px-4 py-3 rounded-xl glow transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-95 disabled:hover:scale-100"
                  >
                    Generate with AI
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="generating"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 flex flex-col items-center justify-center space-y-6 text-center"
                >
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-primary animate-spin" />
                    <div className="absolute inset-0 border-t-2 border-primary/30 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
                  </div>
                  
                  <div className="space-y-2 h-16">
                    <h3 className="text-lg font-semibold text-foreground">
                      {steps[generationStep]}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Powered by Gemini AI
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary"
                      initial={{ width: "0%" }}
                      animate={{ width: `${((generationStep + 1) / steps.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
