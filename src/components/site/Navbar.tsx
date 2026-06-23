import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "./Logo";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Our Work", to: "/our-work" },
  { label: "About Us", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-border/60">
      <div className="container flex items-center justify-between gap-4 h-16 sm:h-20 lg:h-24">
        <Logo size="md" />
        <nav className="hidden lg:flex items-center gap-1 text-base xl:text-lg font-bold">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `group relative px-4 py-2 rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${
                  isActive
                    ? "text-brand bg-brand/10 shadow-[0_6px_24px_-10px_hsl(var(--brand)/0.55)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/40"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10 inline-block transition-transform duration-300 group-hover:scale-[1.04]">
                    {l.label}
                  </span>
                  <span
                    className={`pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-1 h-[3px] rounded-full bg-gradient-to-r from-brand to-accent transition-all duration-300 ${
                      isActive ? "w-7 opacity-100" : "w-0 opacity-0 group-hover:w-7 group-hover:opacity-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden sm:inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-5 py-3 rounded-2xl hover:shadow-float hover:-translate-y-0.5 transition-all">
            Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-2">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={() => setOpen(false)}
                className={({ isActive }) => `py-2 text-lg font-bold ${isActive ? "text-brand" : "text-foreground"}`}>
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
