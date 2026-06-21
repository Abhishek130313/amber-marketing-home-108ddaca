import { ArrowRight, Play, Star, Check, Code, Search, Megaphone, Headphones } from "lucide-react";
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
      <div className="font-semibold text-sm">{title}</div>
      <div className="text-xs text-muted-foreground">{subtitle}</div>
    </div>
  </div>
);

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-20 -right-32 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full bg-brand/10 blur-3xl" />

      <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-10 py-16 lg:py-24 items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 bg-brand/10 text-brand font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" /> Pilot Program · Limited Seats
          </div>
          <h1 className="mt-6 font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            We Build <span className="highlight-accent text-brand">Bold Brands</span> & <span className="highlight-accent text-brand">Scale Growth</span> Digitally.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            A full-stack creative agency helping ambitious teams design beautiful products, launch campaigns and grow with measurable results.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#" className="inline-flex items-center gap-2 bg-foreground text-background font-semibold px-7 py-4 rounded-full hover:opacity-90 transition">
              Start a Project <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 bg-card border border-border font-semibold px-7 py-4 rounded-full hover:shadow-soft transition">
              <span className="grid place-items-center w-7 h-7 rounded-full bg-accent text-accent-foreground"><Play className="w-3 h-3 fill-current" /></span>
              Watch Demo
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-medium"><Check className="w-4 h-4 text-brand" /> No Credit Card</div>
            <div className="flex items-center gap-2 text-sm font-medium"><Check className="w-4 h-4 text-brand" /> 14-Day Free Trial</div>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <div className="flex -space-x-3">
              {[a1, a2, a3].map((src, i) => (
                <img key={i} src={src} alt="Client" className="w-11 h-11 rounded-full ring-4 ring-background object-cover" />
              ))}
              <div className="w-11 h-11 rounded-full ring-4 ring-background bg-accent text-accent-foreground grid place-items-center text-xs font-bold">+2k</div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                <span className="ml-2 text-foreground font-semibold text-sm">4.9/5</span>
              </div>
              <div className="text-xs text-muted-foreground">Trusted by 2,000+ founders worldwide</div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative h-[480px] lg:h-[560px]">
          <div className="absolute inset-6 rounded-3xl gradient-warm" />
          <img src={laptop} alt="Laptop showcasing dashboard" width={1024} height={768}
               className="relative z-10 w-full h-full object-contain drop-shadow-2xl" />

          <FloatingCard icon={Code} title="Website Dev" subtitle="React · Next.js"
            color="bg-brand/15 text-brand" className="top-4 -left-2 z-20" />
          <FloatingCard icon={Search} title="SEO Optimization" subtitle="+248% traffic"
            color="bg-accent text-accent-foreground" className="top-28 -right-2 z-20 [animation-delay:1s]" />
          <FloatingCard icon={Megaphone} title="Digital Marketing" subtitle="Multi-channel"
            color="bg-foreground text-background" className="bottom-28 -left-4 z-20 [animation-delay:2s]" />
          <FloatingCard icon={Headphones} title="24/7 Support" subtitle="Always online"
            color="bg-brand text-brand-foreground" className="bottom-6 right-2 z-20 [animation-delay:1.5s]" />
        </div>
      </div>
    </section>
  );
};
