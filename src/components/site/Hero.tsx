import { ArrowRight, Play, Check, Globe, Search, Megaphone, Headphones, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import laptop from "@/assets/laptop.png";
import a1 from "@/assets/avatar1.jpg";
import a2 from "@/assets/avatar2.jpg";
import a3 from "@/assets/avatar3.jpg";

const FloatingCard = ({
  icon: Icon, title, subtitle, className, color,
}: { icon: any; title: string; subtitle: string; className: string; color: string }) => (
  <div className={`absolute bg-card rounded-2xl shadow-card p-4 flex items-center gap-3 animate-float ${className}`}>
    <div className={`w-11 h-11 rounded-xl grid place-items-center ${color}`}>
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <div className="font-semibold text-sm whitespace-nowrap">{title}</div>
      <div className="text-xs text-muted-foreground whitespace-nowrap">{subtitle}</div>
    </div>
  </div>
);

export const Hero = () => {
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
                <img key={i} src={src} alt="Client" className="w-11 h-11 rounded-full ring-4 ring-background object-cover" />
              ))}
              <div className="w-11 h-11 rounded-full ring-4 ring-background bg-accent text-accent-foreground grid place-items-center text-xs font-bold">50+</div>
            </div>
            <div className="text-sm font-semibold">Happy Clients</div>
          </div>
        </div>

        <div className="relative h-[480px] lg:h-[560px]">
          <div className="absolute inset-6 rounded-3xl gradient-warm" />
          <img src={laptop} alt="Laptop showcasing dashboard" width={1024} height={768}
               className="relative z-10 w-full h-full object-contain drop-shadow-2xl" />

          <FloatingCard icon={Globe} title="Website Development" subtitle="Modern & Fast"
            color="bg-accent/15 text-brand" className="top-4 left-0 z-20" />
          <FloatingCard icon={Search} title="SEO Optimization" subtitle="Rank on Google"
            color="bg-green-100 text-green-700" className="top-20 -right-2 z-20 [animation-delay:1s]" />
          <FloatingCard icon={Megaphone} title="Digital Marketing" subtitle="Get More Customers"
            color="bg-blue-100 text-blue-600" className="bottom-32 -left-4 z-20 [animation-delay:2s]" />
          <FloatingCard icon={Headphones} title="24/7 Human Support" subtitle="Real People, Real Help"
            color="bg-accent text-accent-foreground" className="bottom-6 right-0 z-20 [animation-delay:1.5s]" />
        </div>
      </div>
    </section>
  );
};
