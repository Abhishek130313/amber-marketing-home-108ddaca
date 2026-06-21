import { ArrowUpRight, Code2, LineChart, Palette, Rocket } from "lucide-react";

const services = [
  { icon: Code2, title: "Web Development", desc: "Pixel-perfect, performant websites engineered with modern stacks and best-in-class accessibility." },
  { icon: Palette, title: "Brand & Design", desc: "Identity systems, UI/UX and content that gives your brand a distinctive, premium voice." },
  { icon: LineChart, title: "SEO & Analytics", desc: "Data-driven optimization that compounds organic traffic and converts visitors into customers." },
  { icon: Rocket, title: "Growth Marketing", desc: "Full-funnel paid, social and email campaigns engineered to scale ROAS efficiently." },
];

export const Services = () => (
  <section className="container py-20 lg:py-28">
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full">
          Our Services
        </div>
        <h2 className="mt-5 font-display font-extrabold text-4xl md:text-5xl">
          Everything you need to <span className="text-brand">grow online</span>.
        </h2>
      </div>
      <p className="text-muted-foreground max-w-md">
        From discovery to launch and beyond — we partner with you across every phase of your digital journey.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map(({ icon: Icon, title, desc }, i) => (
        <article key={title}
          className={`group rounded-3xl p-7 border transition-all hover:-translate-y-1 ${
            i === 1 ? "bg-foreground text-background border-foreground" : "bg-card border-border shadow-soft hover:shadow-card"
          }`}>
          <div className={`w-14 h-14 rounded-2xl grid place-items-center mb-6 ${
            i === 1 ? "bg-accent text-accent-foreground" : "bg-accent/20 text-brand"
          }`}>
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-xl mb-3">{title}</h3>
          <p className={`text-sm leading-relaxed ${i === 1 ? "text-background/70" : "text-muted-foreground"}`}>{desc}</p>
          <a href="#" className="mt-6 inline-flex items-center gap-1.5 text-brand font-semibold text-sm group-hover:gap-3 transition-all">
            Learn More <ArrowUpRight className="w-4 h-4" />
          </a>
        </article>
      ))}
    </div>
  </section>
);
