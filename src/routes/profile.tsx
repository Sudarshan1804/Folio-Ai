import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [{ title: "Profile — FolioAI" }],
  }),
  component: Profile,
});

function Profile() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <Navbar />
      <div className="relative flex-1 flex flex-col items-center justify-center p-6 mt-20">
        <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
        <p className="text-muted-foreground">Manage your account and view your generated portfolios here.</p>
      </div>
    </main>
  );
}
