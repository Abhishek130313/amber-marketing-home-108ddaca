import { ArrowRight, Check, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

type Trust = { label: string; sub?: string };

export const CtaBanner = ({
  title,
  highlight,
  subtitle,
  trustItems = [
    { label: "No Contract", sub: "Work on your terms" },
    { label: "No Hidden Charges", sub: "Transparent pricing" },
    { label: "Cancel Anytime", sub: "Complete flexibility" },
  ],
  ctaLabel = "Free Consultation",
  ctaTo = "/contact",
}: {
  title: string;
  highlight?: string;
  subtitle?: string;
  trustItems?: Trust[];
  ctaLabel?: string;
  ctaTo?: string;
}) => (
  <section className="container py-10">
    <div className="relative rounded-3xl bg-gradient-to-br from-[hsl(214_55%_8%)] to-[hsl(214_60%_14%)] text-background overflow-hidden px-6 md:px-10 py-7 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
      <div className="absolute -top-16 -left-8 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className="w-14 h-14 rounded-2xl bg-background/10 grid place-items-center shrink-0">
          <Rocket className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="font-display font-bold text-2xl md:text-3xl leading-snug">
            {title} {highlight && <span className="text-accent">{highlight}</span>}
          </h3>
          {subtitle && <p className="text-background/70 text-sm mt-1">{subtitle}</p>}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-6">
        {trustItems.map((t) => (
          <div key={t.label} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-accent shrink-0" />
            <div>
              <div className="font-semibold text-sm">{t.label}</div>
              {t.sub && <div className="text-xs text-background/60">{t.sub}</div>}
            </div>
          </div>
        ))}
      </div>
      <Link to={ctaTo} className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3.5 rounded-2xl hover:shadow-float transition-all whitespace-nowrap">
        {ctaLabel} <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </section>
);
