import { ArrowUpRight } from "lucide-react";
import b1 from "@/assets/blog1.jpg";
import b2 from "@/assets/blog2.jpg";
import b3 from "@/assets/blog3.jpg";

const posts = [
  { img: b1, tag: "Strategy", date: "Jun 14, 2026", title: "How to build a high-performing remote design team in 2026" },
  { img: b2, tag: "Marketing", date: "Jun 09, 2026", title: "The marketing dashboard metrics that actually move revenue" },
  { img: b3, tag: "Design",    date: "Jun 02, 2026", title: "Wireframing essentials: turning rough ideas into shipping product" },
];

export const Blog = () => (
  <section className="container py-20 lg:py-28">
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
      <div>
        <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full">
          Latest Insights
        </div>
        <h2 className="mt-5 font-display font-extrabold text-4xl md:text-5xl max-w-xl">
          Read our <span className="text-brand">latest articles</span> & news
        </h2>
      </div>
      <a href="#" className="inline-flex items-center gap-2 font-semibold text-brand">View all posts <ArrowUpRight className="w-4 h-4" /></a>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {posts.map((p) => (
        <article key={p.title} className="group cursor-pointer">
          <div className="rounded-3xl overflow-hidden aspect-[4/3] mb-5">
            <img src={p.img} alt={p.title} width={800} height={600} loading="lazy"
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full">{p.tag}</span>
            <span className="text-muted-foreground">{p.date}</span>
          </div>
          <h3 className="font-display font-bold text-xl leading-snug group-hover:text-brand transition-colors">{p.title}</h3>
          <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-brand font-semibold text-sm">
            Read article <ArrowUpRight className="w-4 h-4" />
          </a>
        </article>
      ))}
    </div>
  </section>
);
