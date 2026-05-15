import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="grid place-items-center w-7 h-7 rounded-lg bg-aurora">
            <Sparkles className="w-3.5 h-3.5 text-background" />
          </span>
          <span className="font-display font-semibold">Folio<span className="text-gradient">AI</span></span>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} FolioAI. Crafted for creators, by creators.</p>
        <div className="flex gap-5 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Twitter</a>
          <a href="#" className="hover:text-foreground">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
