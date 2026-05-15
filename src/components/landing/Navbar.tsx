import { Link, useNavigate } from "@tanstack/react-router";
import { Sparkles, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { getAuthToken, clearAuthToken } from "@/lib/auth";

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      setIsLoggedIn(true);
      // Fetch user data
      fetch("/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.id) {
            setUser(data);
          } else {
            // Token might be invalid
            clearAuthToken();
            setIsLoggedIn(false);
          }
        })
        .catch(() => {
          setIsLoggedIn(false);
        });
    }
  }, []);

  const handleSignOut = () => {
    clearAuthToken();
    setIsLoggedIn(false);
    setUser(null);
    navigate({ to: "/" });
  };

  const links = [
    { label: "Features", href: "#features" },
    { label: "Templates", href: "#templates" },
    { label: "How it works", href: "#how" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <nav className="glass rounded-2xl px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-display font-semibold">
            <span className="relative grid place-items-center w-8 h-8 rounded-lg bg-aurora glow">
              <Sparkles className="w-4 h-4 text-background" />
            </span>
            <span className="text-base">Folio<span className="text-gradient">AI</span></span>
          </Link>
          <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <>
                <div className="hidden lg:block text-xs text-muted-foreground mr-2">
                  Hi, <span className="text-foreground font-medium">{user?.name || "there"}</span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground px-3 py-2 transition-colors"
                >
                  Sign out
                  <LogOut className="w-4 h-4" />
                </button>
              </>
            ) : (
              <>
                <Link to="/signin" className="hidden sm:inline-flex text-sm text-muted-foreground hover:text-foreground px-3 py-2">
                  Sign in
                </Link>
                <Link to="/signup" className="text-sm font-medium bg-aurora text-background px-4 py-2 rounded-xl hover:opacity-90 transition-opacity">
                  Get started
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
