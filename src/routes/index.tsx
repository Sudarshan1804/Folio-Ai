import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Templates } from "@/components/landing/Templates";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FolioAI — Turn your resume into a stunning portfolio with AI" },
      { name: "description", content: "Upload your resume and let AI generate a premium, responsive portfolio website in seconds. Templates, live editor, one-click publish." },
      { property: "og:title", content: "FolioAI — AI Portfolio Generator" },
      { property: "og:description", content: "Resume in. Portfolio out. Premium AI-generated portfolio sites in 30 seconds." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Templates />
      <Testimonials />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
