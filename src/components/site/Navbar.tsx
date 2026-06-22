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
        <nav className="hidden lg:flex items-center gap-9 text-base xl:text-lg font-bold">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative pb-1 transition-colors ${isActive ? "text-foreground after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-brand after:rounded-full" : "text-muted-foreground hover:text-foreground"}`
              }
            >
              {l.label}
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
