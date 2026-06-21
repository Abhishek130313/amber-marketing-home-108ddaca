import { Quote, Star } from "lucide-react";
import a1 from "@/assets/avatar1.jpg";
import a2 from "@/assets/avatar2.jpg";
import a3 from "@/assets/avatar3.jpg";

const reviews = [
  { name: "Maya Patel", role: "Founder, Northwind", img: a1, text: "Brightline rebuilt our brand from scratch — the rebrand drove a 3x increase in qualified leads within the first quarter." },
  { name: "James Carter", role: "CMO, Lumen Labs", img: a3, text: "Their team feels like an extension of ours. Strategic, fast, and genuinely invested in the outcome of every sprint." },
  { name: "Sofia Alvarez", role: "CEO, Wavebox", img: a2, text: "Best agency partner we've worked with. Beautiful design, rigorous engineering and measurable growth." },
];

export const Testimonials = () => (
  <section className="bg-surface py-20 lg:py-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 bg-card text-foreground font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full shadow-soft">
          Testimonials
        </div>
        <h2 className="mt-5 font-display font-extrabold text-4xl md:text-5xl">
          Loved by <span className="text-brand">2,500+</span> teams worldwide
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <article key={r.name} className="bg-card rounded-3xl p-7 shadow-soft hover:shadow-card transition-all">
            <Quote className="w-8 h-8 text-accent fill-accent" />
            <div className="flex gap-0.5 text-accent mt-4">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="mt-4 text-foreground/80 leading-relaxed">"{r.text}"</p>
            <div className="mt-6 flex items-center gap-3 pt-6 border-t border-border">
              <img src={r.img} alt={r.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
              <div>
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
