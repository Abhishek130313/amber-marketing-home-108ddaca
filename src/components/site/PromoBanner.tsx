import { ArrowRight, Gift } from "lucide-react";
import gift from "@/assets/giftbox.jpg";

export const PromoBanner = () => (
  <section className="container py-12">
    <div className="relative rounded-3xl bg-foreground text-background overflow-hidden p-10 lg:p-16 grid md:grid-cols-2 items-center gap-8">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full">
          <Gift className="w-4 h-4" /> Limited Offer
        </div>
        <h3 className="mt-5 font-display font-extrabold text-3xl md:text-5xl leading-tight">
          Get <span className="text-accent">30% off</span> your first project this month.
        </h3>
        <p className="mt-4 text-background/70 max-w-md">
          Book a free strategy session and unlock an exclusive launch discount — only available until the end of this quarter.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#" className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3.5 rounded-full hover:shadow-float transition-all">
            Claim Offer <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#" className="inline-flex items-center gap-2 border border-background/20 text-background font-semibold px-6 py-3.5 rounded-full hover:bg-background/10 transition">
            Book a Call
          </a>
        </div>
      </div>
      <div className="relative z-10 flex justify-center md:justify-end">
        <img src={gift} alt="Gift box" width={500} height={500} loading="lazy"
             className="w-72 md:w-96 rounded-3xl object-cover animate-float" />
      </div>
    </div>
  </section>
);
