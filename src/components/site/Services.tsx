import { ArrowRight, Globe, Megaphone, Search, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Globe, title: "Website Development", desc: "Fast, responsive aur SEO friendly websites.", color: "bg-accent/15 text-brand" },
  { icon: Megaphone, title: "Digital Marketing", desc: "Social media, ads aur campaigns that convert.", color: "bg-green-100 text-green-600" },
  { icon: Search, title: "SEO Optimization", desc: "Google me upar ranking ke liye best SEO.", color: "bg-blue-100 text-blue-600" },
  { icon: Headphones, title: "24/7 Human Support", desc: "Real log, real support, 24/7 available.", color: "bg-accent/15 text-brand" },
];

export const Services = () => (
  <section className="container py-20 lg:py-24">
    <div className="text-center max-w-2xl mx-auto mb-14">
      <div className="text-brand font-semibold text-xs uppercase tracking-wider">Services</div>
      <h2 className="mt-3 font-display font-extrabold text-4xl md:text-5xl">
        Ek hi jagah <span className="text-accent">sab kuch</span>
      </h2>
      <p className="mt-4 text-muted-foreground">Website se lekar 24/7 support tak. Affordable packages for small businesses.</p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map(({ icon: Icon, title, desc, color }) => (
        <article key={title} className="group bg-card rounded-3xl p-7 border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
          <div className={`w-14 h-14 rounded-2xl grid place-items-center mb-6 ${color}`}>
            <Icon className="w-7 h-7" strokeWidth={2.2} />
          </div>
          <h3 className="font-display font-bold text-xl mb-3 leading-tight">{title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
          <Link to="/services" className="mt-6 inline-flex items-center gap-1.5 text-brand font-semibold text-sm group-hover:gap-3 transition-all">
            Learn more <ArrowRight className="w-4 h-4" />
          </Link>
        </article>
      ))}
    </div>

    <div className="mt-10 text-center">
      <Link to="/services" className="inline-flex items-center gap-2 text-brand font-semibold">
        Saari services dekhein <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </section>
);
