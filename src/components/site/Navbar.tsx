import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";

const links = ["Home", "Services", "Our Work", "About Us", "Blog", "Contact"];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="container flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2 font-display font-extrabold text-xl">
          <span className="grid place-items-center w-9 h-9 rounded-xl gradient-accent text-accent-foreground">
            <Zap className="w-5 h-5" strokeWidth={2.5} />
          </span>
          Brightline<span className="text-brand">.</span>
        </a>
        <nav className="hidden lg:flex items-center gap-9 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <a key={l} href="#" className="hover:text-foreground transition-colors">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:inline-flex items-center gap-2 bg-accent-y text-accent-foreground font-semibold px-5 py-3 rounded-full hover:shadow-float hover:-translate-y-0.5 transition-all">
            Free Consultation
            <span className="w-2 h-2 rounded-full bg-foreground/80" />
          </a>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) => <a key={l} href="#" className="py-2">{l}</a>)}
          </div>
        </div>
      )}
    </header>
  );
};
