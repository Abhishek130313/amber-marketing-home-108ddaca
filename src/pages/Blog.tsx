import { ArrowRight, Search, Pencil, Code2, BarChart3, Megaphone, TrendingUp, Wrench, Clock, ChevronLeft, ChevronRight, Send } from "lucide-react";
import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import b1 from "@/assets/blog1.jpg";
import b2 from "@/assets/blog2.jpg";
import b3 from "@/assets/blog3.jpg";
import a1 from "@/assets/avatar1.jpg";
import a2 from "@/assets/avatar2.jpg";
import a3 from "@/assets/avatar3.jpg";
import laptop from "@/assets/laptop.png";

const filters = [
  { label: "All Posts", icon: Pencil },
  { label: "Web Development", icon: Code2 },
  { label: "SEO", icon: BarChart3 },
  { label: "Digital Marketing", icon: Megaphone },
  { label: "Business Growth", icon: TrendingUp },
  { label: "Tools & Resources", icon: Wrench },
];

const featured = [
  { img: b1, cat: "WEB DEVELOPMENT", date: "May 10, 2024", title: "10 Must-Have Features for a High Converting Business Website", desc: "Yeh features aapki website ko sirf accha nahi, balki business growth machine bana dete hain.", author: "Rohit Verma", avatar: a1, read: "5 min read" },
  { img: b2, cat: "SEO", date: "May 07, 2024", title: "SEO Checklist 2024: Rank Higher & Get More Customers", desc: "On-page, off-page aur technical SEO ki complete checklist jo real results deti hai.", author: "Amit Patel", avatar: a3, read: "6 min read" },
  { img: b3, cat: "DIGITAL MARKETING", date: "May 03, 2024", title: "Social Media Marketing Strategy That Actually Works in 2024", desc: "Social media par sirf post karna kaafi nahi hota. Yeh strategy follow karo aur results dekho.", author: "Pooja Singh", avatar: a2, read: "7 min read" },
];

const more = [
  { img: b3, cat: "SEO", date: "Apr 30, 2024", title: "Core Web Vitals: Improve Speed & Rank Better on Google", author: "Neha Sharma", avatar: a2, read: "4 min read" },
  { img: b1, cat: "BUSINESS GROWTH", date: "Apr 28, 2024", title: "Brand Identity Kyu Important Hai? Complete Guide", author: "Vikram Singh", avatar: a3, read: "6 min read" },
  { img: b2, cat: "TOOLS & RESOURCES", date: "Apr 25, 2024", title: "5 Free Tools Every Business Owner Should Use", author: "Rohit Verma", avatar: a1, read: "3 min read" },
];

const recent = [
  { title: "Local SEO: Apne Business ko Local Customers Tak Kaise Le Jaye", date: "May 12, 2024" },
  { title: "Email Marketing Best Practices for Higher Conversions", date: "May 09, 2024" },
  { title: "Good UI/UX = More Sales. Here's How!", date: "May 06, 2024" },
  { title: "Paid Ads vs Organic: Kya Hai Behtar Aapke Business Ke Liye?", date: "May 02, 2024" },
];

const BlogPage = () => {
  const [active, setActive] = useState("All Posts");
  return (
    <Layout>
      <SEO title="Blog — Digital Marketing & SEO Tips for Indian Small Businesses" description="Practical guides on websites, SEO, social media and digital growth for small businesses in India — written by the Websbond team." path="/blog" />
      {/* Hero */}
      <section className="container grid lg:grid-cols-2 gap-12 py-14 lg:py-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-accent/15 text-foreground font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full">
            <Pencil className="w-3.5 h-3.5 text-accent" /> Our Blog
          </div>
          <h1 className="mt-6 font-display font-extrabold text-5xl md:text-6xl leading-[1.05]">
            Insights that help<br />your business <span className="text-accent">grow.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-lg">
            Digital tips, marketing strategies, SEO guides aur business growth insights — sab kuch ek jagah.
          </p>
        </div>
        <div className="relative h-[320px] lg:h-[400px]">
          <div className="absolute inset-6 rounded-3xl gradient-warm" />
          <img src={laptop} alt="Laptop displaying Websbond blog articles" className="relative z-10 w-full h-full object-contain" />
        </div>
      </section>

      {/* Filters + content grid */}
      <section className="container grid lg:grid-cols-[1fr_320px] gap-10 pb-10">
        <div>
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map(({ label, icon: Icon }) => (
              <button key={label} onClick={() => setActive(label)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition ${active === label ? "bg-foreground text-background border-foreground" : "bg-card border-border hover:border-foreground"}`}>
                <Icon className="w-4 h-4" /> {label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {featured.map((p) => (
              <article key={p.title} className="bg-card rounded-3xl border border-border overflow-hidden shadow-soft hover:shadow-card transition-all group">
                <img src={p.img} alt={p.title} className="w-full aspect-[16/10] object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-accent/15 text-brand text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">{p.cat}</span>
                    <span className="text-xs text-muted-foreground">{p.date}</span>
                  </div>
                  <h3 className="font-display font-bold leading-snug group-hover:text-brand transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <img src={p.avatar} alt={p.author} className="w-7 h-7 rounded-full object-cover" />
                      <span className="text-xs font-semibold">{p.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" /> {p.read}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {more.map((p) => (
              <article key={p.title} className="bg-card rounded-3xl border border-border overflow-hidden shadow-soft hover:shadow-card transition-all">
                <div className="flex gap-4 p-4">
                  <img src={p.img} alt={p.title} className="w-24 h-24 rounded-2xl object-cover shrink-0" />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-accent/15 text-brand text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">{p.cat}</span>
                    </div>
                    <h3 className="font-semibold text-sm leading-snug line-clamp-2">{p.title}</h3>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <img src={p.avatar} alt="" className="w-5 h-5 rounded-full object-cover" />
                      <span>{p.author}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-10">
            <button className="w-10 h-10 rounded-xl border border-border grid place-items-center"><ChevronLeft className="w-4 h-4" /></button>
            {[1,2,3].map((n) => (
              <button key={n} className={`w-10 h-10 rounded-xl font-semibold ${n === 1 ? "bg-foreground text-background" : "border border-border"}`}>{n}</button>
            ))}
            <span className="w-10 h-10 grid place-items-center">...</span>
            <button className="w-10 h-10 rounded-xl border border-border font-semibold">8</button>
            <button className="w-10 h-10 rounded-xl border border-border grid place-items-center"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" aria-label="Search blog articles" placeholder="Search articles..."
                   className="w-full bg-card border border-border rounded-2xl pl-11 pr-4 py-3 text-sm outline-none focus:border-accent" />
          </div>

          <div className="bg-card border border-border rounded-3xl p-5 shadow-soft">
            <h4 className="font-display font-bold mb-4">Recent Posts</h4>
            <ul className="space-y-4">
              {recent.map((r) => (
                <li key={r.title} className="flex gap-3">
                  <div className="w-14 h-14 rounded-xl bg-accent/15 shrink-0 grid place-items-center text-brand font-bold text-xs">SEO</div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-snug line-clamp-2">{r.title}</p>
                    <div className="text-xs text-muted-foreground mt-1">{r.date}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl p-6 bg-gradient-to-br from-[hsl(214_55%_8%)] to-[hsl(214_60%_14%)] text-background">
            <div className="flex items-center gap-2 mb-3 text-accent"><Send className="w-4 h-4" /><span className="font-display font-bold">Stay Updated</span></div>
            <p className="text-sm text-background/70 mb-4">Digital tips, trends aur strategies seedhe aapke inbox mein.</p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" aria-label="Newsletter email address" placeholder="Enter your email" className="w-full bg-background/10 border border-background/10 rounded-xl px-4 py-2.5 text-sm outline-none placeholder:text-background/50" />
              <button className="w-full bg-accent text-accent-foreground font-semibold py-2.5 rounded-xl">Subscribe</button>
            </form>
            <p className="text-[10px] text-background/50 mt-2">No spam. Unsubscribe anytime.</p>
          </div>
        </aside>
      </section>

      <CtaBanner title="Want more" highlight="leads, sales and growth?" subtitle="Let's build the right strategy for your business." />
    </Layout>
  );
};

export default BlogPage;
