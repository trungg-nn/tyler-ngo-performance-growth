import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="font-semibold tracking-wide">Tyler Ngo</Link>
          <div className="flex items-center gap-4 text-sm">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className={location.pathname === l.to ? "text-primary" : "text-muted-foreground hover:text-foreground"}>
                {l.label}
              </Link>
            ))}
            <button onClick={toggle} className="rounded-full border border-border px-3 py-1.5 text-xs">
              {dark ? <span className="inline-flex items-center gap-1"><Sun size={14} /> Light</span> : <span className="inline-flex items-center gap-1"><Moon size={14} /> Dark</span>}
            </button>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
