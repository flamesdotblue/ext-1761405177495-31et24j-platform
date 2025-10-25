import { useMemo } from "react";
import { Home, Cake, Cookie } from "lucide-react";

const links = [
  { href: "#/", label: "Home", icon: Home },
  { href: "#/cakes", label: "Cakes", icon: Cake },
  { href: "#/chocolates", label: "Chocolates", icon: Cookie },
  { href: "#/about", label: "About" },
];

export default function Header() {
  const current = useMemo(() => (window.location.hash || "#/").replace(/^#/, ""), []);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-rose-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#/" className="flex items-center gap-3 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-pink-500 text-white shadow">
            🎂
          </span>
          <div className="leading-tight">
            <div className="font-extrabold text-lg tracking-tight">Sweet Petals Bakery</div>
            <div className="text-xs text-slate-500">Cakes • Chocolates • Joy</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-2">
          {links.map((l) => {
            const Icon = l.icon;
            const active = (window.location.hash || "#/").replace(/^#/, "") === l.href.replace(/^#/, "");
            return (
              <a
                key={l.href}
                href={l.href}
                className={
                  "px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors " +
                  (active
                    ? "bg-rose-100 text-rose-700"
                    : "text-slate-600 hover:text-rose-700 hover:bg-rose-50")
                }
              >
                {Icon ? <Icon className="h-4 w-4" /> : null}
                {l.label}
              </a>
            );
          })}
        </nav>
        <a
          href="mailto:hello@sweetpetals.local"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-600 text-white text-sm font-semibold shadow hover:bg-rose-700"
        >
          Order Inquiry
        </a>
      </div>
      <div className="md:hidden border-t border-rose-100">
        <nav className="mx-auto max-w-6xl px-4 py-2 flex items-center gap-2 overflow-x-auto">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-full text-sm text-slate-700 bg-rose-50 hover:bg-rose-100"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
