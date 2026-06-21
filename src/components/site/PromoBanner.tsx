import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import gift from "@/assets/giftbox.jpg";

export const PromoBanner = () => (
  <section className="container py-10">
    <div className="relative rounded-3xl bg-gradient-to-br from-[hsl(214_55%_8%)] to-[hsl(214_60%_14%)] text-background overflow-hidden p-10 lg:p-14 grid md:grid-cols-2 items-center gap-8">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 70% 50%, hsl(42 100% 55% / 0.3) 0%, transparent 50%)",
      }} />
      <div className="relative z-10">
        <div className="text-accent font-semibold text-xs uppercase tracking-wider">Free Pilot Program</div>
        <h3 className="mt-4 font-display font-extrabold text-3xl md:text-5xl leading-tight">
          Pehle 3 clients ko<br />
          <span className="text-accent">free website.</span>
        </h3>
        <p className="mt-4 text-background/70 max-w-md">
          Absolutely free website + 1 month support. Sirf domain cost (₹1,000). Koi risk nahi, koi hidden charges nahi.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3.5 rounded-2xl hover:shadow-float transition-all">
            Free Consultation Lijiye <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/services" className="inline-flex items-center gap-2 border border-background/20 text-background font-semibold px-6 py-3.5 rounded-2xl hover:bg-background/10 transition">
            Pricing Dekhein
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {["No Contract","No Hidden Charges","Cancel Anytime"].map((t) => (
            <div key={t} className="flex items-center gap-1.5 text-background/80"><Check className="w-4 h-4 text-green-400" /> {t}</div>
          ))}
        </div>
      </div>
      <div className="relative z-10 flex justify-center md:justify-end">
        <img src={gift} alt="Gift box" width={500} height={500} loading="lazy"
             className="w-64 md:w-96 rounded-3xl object-cover animate-float" />
      </div>
    </div>
  </section>
);
