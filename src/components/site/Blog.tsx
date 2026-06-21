import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import b1 from "@/assets/blog1.jpg";
import b2 from "@/assets/blog2.jpg";
import b3 from "@/assets/blog3.jpg";

const posts = [
  { img: b1, date: "May 15, 2024", title: "Local SEO: Apne business ko Google me kaise layein", read: "5 min read" },
  { img: b2, date: "May 10, 2024", title: "Social Media Marketing: 2024 ke latest trends", read: "6 min read" },
  { img: b3, date: "May 06, 2024", title: "Digital Advertising: Small budget me bada result", read: "4 min read" },
];

export const Blog = () => (
  <section className="container py-16 lg:py-20">
    <div className="flex items-center justify-between mb-8">
      <div className="text-brand font-semibold text-xs uppercase tracking-wider">Latest from Blog</div>
      <Link to="/blog" className="inline-flex items-center gap-2 font-semibold text-brand text-sm">
        Saare articles dekhein <ArrowRight className="w-4 h-4" />
      </Link>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {posts.map((p) => (
        <article key={p.title} className="group cursor-pointer rounded-3xl overflow-hidden border border-border bg-card shadow-soft hover:shadow-card transition-all">
          <div className="relative aspect-[16/10] overflow-hidden">
            <img src={p.img} alt={p.title} width={800} height={500} loading="lazy"
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <span className="absolute top-4 left-4 bg-background/90 backdrop-blur text-xs font-semibold px-3 py-1 rounded-full">{p.date}</span>
          </div>
          <div className="p-6">
            <h3 className="font-display font-bold text-lg leading-snug group-hover:text-brand transition-colors">{p.title}</h3>
            <div className="mt-3 text-xs text-muted-foreground">{p.read}</div>
          </div>
        </article>
      ))}
    </div>
  </section>
);
