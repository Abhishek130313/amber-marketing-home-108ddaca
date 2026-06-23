import { ArrowRight, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "./Logo";

const links = [
  { label: "Home", to: "/", from: "#ff6a00", to2: "#ffb300" },        // orange → amber
  { label: "Services", to: "/services", from: "#ffb300", to2: "#ff3d7f" }, // amber → pink
  { label: "Our Work", to: "/our-work", from: "#ff3d7f", to2: "#a855f7" }, // pink → purple
  { label: "About Us", to: "/about", from: "#a855f7", to2: "#3b82f6" }, // purple → blue
  { label: "Blog", to: "/blog", from: "#3b82f6", to2: "#10b981" },     // blue → green
  { label: "Contact", to: "/contact", from: "#10b981", to2: "#ff6a00" }, // green → orange
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40 shadow-[0_1px_0_0_hsl(var(--accent)/0.15)]">
      {/* Animated rainbow strip on top */}
      <div className="h-[3px] w-full bg-[linear-gradient(90deg,#ff6a00,#ffb300,#ff3d7f,#a855f7,#3b82f6,#10b981,#ff6a00)] bg-[length:300%_100%] animate-[shimmer_6s_linear_infinite]" />

      <div className="container flex items-center justify-between gap-4 h-16 sm:h-20 lg:h-24">
        <Logo size="md" />

        <nav className="hidden lg:flex items-center gap-1 text-base xl:text-lg font-bold">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              style={{ ["--from" as any]: l.from, ["--to" as any]: l.to2 }}
              className={({ isActive }) =>
                `group relative px-4 py-2 rounded-xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden ${
                  isActive ? "text-white" : "text-foreground/80 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Colorful gradient background — animates in on hover/active */}
                  <span
                    className={`pointer-events-none absolute inset-0 rounded-xl bg-[linear-gradient(135deg,var(--from),var(--to))] bg-[length:200%_200%] transition-all duration-500 ${
                      isActive
                        ? "opacity-100 scale-100 animate-[shimmer_4s_ease_infinite]"
                        : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 group-hover:animate-[shimmer_4s_ease_infinite]"
                    }`}
                  />
                  {/* Soft glow */}
                  <span
                    className={`pointer-events-none absolute inset-0 rounded-xl blur-xl transition-opacity duration-500 ${
                      isActive ? "opacity-60" : "opacity-0 group-hover:opacity-50"
                    } bg-[linear-gradient(135deg,var(--from),var(--to))]`}
                  />
                  {/* Sparkle on hover */}
                  <Sparkles
                    className={`pointer-events-none absolute -top-1 -right-1 w-3 h-3 text-white transition-all duration-500 ${
                      isActive ? "opacity-100 rotate-0" : "opacity-0 -rotate-45 group-hover:opacity-100 group-hover:rotate-0"
                    }`}
                  />
                  <span className="relative z-10 inline-block transition-transform duration-300 group-hover:scale-[1.06]">
                    {l.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex relative items-center gap-2 text-white font-semibold px-5 py-3 rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95 shadow-[0_10px_30px_-10px_hsl(24_100%_55%/0.6)]"
          >
            <span className="absolute inset-0 bg-[linear-gradient(135deg,#ff6a00,#ff3d7f,#a855f7,#3b82f6,#10b981,#ffb300,#ff6a00)] bg-[length:300%_100%] animate-[shimmer_5s_linear_infinite]" />
            <span className="relative z-10">Free Consultation</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
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
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                style={{ ["--from" as any]: l.from, ["--to" as any]: l.to2 }}
                className={({ isActive }) =>
                  `relative px-3 py-2 rounded-xl text-lg font-bold overflow-hidden transition-all ${
                    isActive ? "text-white" : "text-foreground"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`absolute inset-0 rounded-xl bg-[linear-gradient(135deg,var(--from),var(--to))] ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <span className="relative z-10">{l.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
