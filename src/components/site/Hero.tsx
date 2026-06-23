import { ArrowRight, Play, Check, Globe, Search, Megaphone, Headphones, Sparkles } from "lucide-react";
import { useState, useRef, MouseEvent } from "react";
import { Link } from "react-router-dom";
import laptop from "@/assets/laptop.png";
import a1 from "@/assets/avatar1.jpg";
import a2 from "@/assets/avatar2.jpg";
import a3 from "@/assets/avatar3.jpg";

type FloatingCardProps = {
  icon: any;
  title: string;
  subtitle: string;
  className: string;
  color: string;
  details: string;
  bullets: string[];
  active: boolean;
  onToggle: () => void;
};

const FloatingCard = ({
  icon: Icon, title, subtitle, className, color, details, bullets, active, onToggle,
}: FloatingCardProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 10 });
  };

  const reset = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className={`absolute z-20 ${className} ${(hovered || active) ? "" : "animate-float"}`}>
      <button
        ref={ref}
        type="button"
        onClick={onToggle}
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        aria-expanded={active}
        aria-label={`${title} — ${active ? "hide" : "show"} details`}
        className={`group relative bg-card rounded-2xl p-4 flex items-center gap-3 text-left transition-all duration-300 will-change-transform ${
          active
            ? "shadow-float ring-2 ring-accent/60 -translate-y-1"
            : "shadow-card hover:shadow-float"
        }`}
        style={{
          transform: `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${
            hovered || active ? "scale(1.04)" : "scale(1)"
          }`,
        }}
      >
        <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 via-accent/0 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className={`relative w-11 h-11 rounded-xl grid place-items-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="relative">
          <div className="font-semibold text-sm whitespace-nowrap">{title}</div>
          <div className="text-xs text-muted-foreground whitespace-nowrap">{subtitle}</div>
        </div>
      </button>

      <div
        className={`absolute left-0 right-0 mt-2 origin-top transition-all duration-300 ${
          active
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
        }`}
      >
        <div className="bg-card rounded-2xl shadow-float ring-1 ring-border p-4 min-w-[240px]">
          <p className="text-xs text-muted-foreground leading-relaxed">{details}</p>
          <ul className="mt-2 space-y-1">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-xs font-medium">
                <Check className="w-3.5 h-3.5 text-green-500 shrink-0" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const cards = [
  {
    key: "web",
    icon: Globe,
    title: "Website Development",
    subtitle: "Modern & Fast",
    color: "bg-accent/15 text-brand",
    className: "top-4 left-0",
    details: "Lightning-fast, mobile-first websites built to convert visitors into customers.",
    bullets: ["Mobile responsive", "SEO-ready code", "1-week delivery"],
  },
  {
    key: "seo",
    icon: Search,
    title: "SEO Optimization",
    subtitle: "Rank on Google",
    color: "bg-green-100 text-green-700",
    className: "top-20 -right-2 [animation-delay:1s]",
    details: "On-page, technical & local SEO to put your business on Google's first page.",
    bullets: ["Keyword research", "Google Business setup", "Monthly reports"],
  },
  {
    key: "marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    subtitle: "Get More Customers",
    color: "bg-blue-100 text-blue-600",
    className: "bottom-32 -left-4 [animation-delay:2s]",
    details: "Targeted Meta & Google Ads with creatives that bring real, paying leads.",
    bullets: ["Ad creatives included", "Audience targeting", "ROI tracking"],
  },
  {
    key: "support",
    icon: Headphones,
    title: "24/7 Human Support",
    subtitle: "Real People, Real Help",
    color: "bg-accent text-accent-foreground",
    className: "bottom-6 right-0 [animation-delay:1.5s]",
    details: "Talk to real humans anytime — WhatsApp, call or email, in your language.",
    bullets: ["Hindi + English", "WhatsApp priority", "< 5 min response"],
  },
];

export const Hero = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-20 -right-32 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl" />
      <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-10 py-14 lg:py-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-accent/15 text-foreground font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-accent" /> Free Pilot Program — Limited Seats
          </div>
          <h1 className="mt-6 font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            Apni dukaan ko<br />
            <span className="text-accent">digital</span> banao.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Professional website, SEO, digital marketing, aur 24/7 real human support — ek affordable package mein. Small businesses ke liye.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-7 py-4 rounded-2xl hover:shadow-float transition">
              Free Consultation Lijiye <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/our-work" className="inline-flex items-center gap-2 bg-card border border-border font-semibold px-7 py-4 rounded-2xl hover:shadow-soft transition">
              <span className="grid place-items-center w-7 h-7 rounded-full bg-accent text-accent-foreground"><Play className="w-3 h-3 fill-current" /></span>
              Hamara Kaam Dekhein
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
            {["No Contract","7-Day Free Trial","24/7 Support","₹7,999 se Shuru"].map((t) => (
              <div key={t} className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> {t}</div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-5">
            <div className="flex -space-x-3">
              {[a1, a2, a3, a1].map((src, i) => (
                <img key={i} src={src} alt={`Happy Websbond client ${i + 1} avatar`} className="w-11 h-11 rounded-full ring-4 ring-background object-cover" />
              ))}
              <div className="w-11 h-11 rounded-full ring-4 ring-background bg-accent text-accent-foreground grid place-items-center text-xs font-bold">50+</div>
            </div>
            <div className="text-sm font-semibold">Happy Clients</div>
          </div>
        </div>

        <div className="relative h-[480px] lg:h-[560px]">
          <div className="absolute inset-6 rounded-3xl gradient-warm" />
          <img src={laptop} alt="Laptop showcasing Websbond client business dashboard" width={1024} height={768} fetchPriority="high" decoding="async"
               className="relative z-10 w-full h-full object-contain drop-shadow-2xl" />

          {cards.map((c) => (
            <FloatingCard
              key={c.key}
              icon={c.icon}
              title={c.title}
              subtitle={c.subtitle}
              color={c.color}
              className={c.className}
              details={c.details}
              bullets={c.bullets}
              active={activeKey === c.key}
              onToggle={() => setActiveKey(activeKey === c.key ? null : c.key)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
