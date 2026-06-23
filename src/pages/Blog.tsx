import { ArrowRight, Search, Pencil, Code as Code2, ChartBar as BarChart3, Megaphone, TrendingUp, Wrench, Clock, ChevronLeft, ChevronRight, Send } from "lucide-react";
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
import { organizationSchema, breadcrumbSchema } from "@/lib/schemas";

const filters = [
  { label: "All Posts", icon: Pencil },
  { label: "Web Development", icon: Code2 },
  { label: "SEO", icon: BarChart3 },
  { label: "Digital Marketing", icon: Megaphone },
  { label: "Business Growth", icon: TrendingUp },
  { label: "Tools & Resources", icon: Wrench },
];

const featured = [
  { img: b1, cat: "WEB DEVELOPMENT", filterGroup: "Web Development", date: "May 10, 2024", title: "10 Must-Have Features for a High Converting Business Website", desc: "Yeh features aapki website ko sirf accha nahi, balki business growth machine bana dete hain.", author: "Rohit Verma", avatar: a1, read: "5 min read" },
  { img: b2, cat: "SEO", filterGroup: "SEO", date: "May 07, 2024", title: "SEO Checklist 2024: Rank Higher & Get More Customers", desc: "On-page, off-page aur technical SEO ki complete checklist jo real results deti hai.", author: "Amit Patel", avatar: a3, read: "6 min read" },
  { img: b3, cat: "DIGITAL MARKETING", filterGroup: "Digital Marketing", date: "May 03, 2024", title: "Social Media Marketing Strategy That Actually Works in 2024", desc: "Social media par sirf post karna kaafi nahi hota. Yeh strategy follow karo aur results dekho.", author: "Pooja Singh", avatar: a2, read: "7 min read" },
];

const more = [
  { img: b3, cat: "SEO", filterGroup: "SEO", date: "Apr 30, 2024", title: "Core Web Vitals: Improve Speed & Rank Better on Google", author: "Neha Sharma", avatar: a2, read: "4 min read" },
  { img: b1, cat: "BUSINESS GROWTH", filterGroup: "Business Growth", date: "Apr 28, 2024", title: "Brand Identity Kyu Important Hai? Complete Guide", author: "Vikram Singh", avatar: a3, read: "6 min read" },
  { img: b2, cat: "TOOLS & RESOURCES", filterGroup: "Tools & Resources", date: "Apr 25, 2024", title: "5 Free Tools Every Business Owner Should Use", author: "Rohit Verma", avatar: a1, read: "3 min read" },
];

const allPosts = [...featured, ...more];

const recent = [
  { title: "Local SEO: Apne Business ko Local Customers Tak Kaise Le Jaye", date: "May 12, 2024", cat: "SEO" },
  { title: "Email Marketing Best Practices for Higher Conversions", date: "May 09, 2024", cat: "Digital Marketing" },
  { title: "Good UI/UX = More Sales. Here's How!", date: "May 06, 2024", cat: "Web Development" },
  { title: "Paid Ads vs Organic: Kya Hai Behtar Aapke Business Ke Liye?", date: "May 02, 2024", cat: "Digital Marketing" },
];

const POSTS_PER_PAGE = 6;

const blogJsonLd = [
  organizationSchema,
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://websbond.com/blog",
    name: "Websbond Digital Marketing Blog",
    description: "Practical guides on website design, SEO, social media and digital growth for small businesses in India.",
    url: "https://websbond.com/blog",
    publisher: { "@id": "https://websbond.com/#organization" },
    inLanguage: ["en-IN", "hi"],
  },
];

const BlogPage = () => {
  const [active, setActive] = useState("All Posts");
  const [page, setPage] = useState(1);

  const filteredPosts = active === "All Posts"
    ? allPosts
    : allPosts.filter((p) => p.filterGroup === active);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const pagePosts = filteredPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);
  const featuredPosts = pagePosts.slice(0, 3);
  const morePosts = pagePosts.slice(3);

  const changePage = (n: number) => {
    if (n >= 1 && n <= totalPages) setPage(n);
  };

  const changeFilter = (label: string) => {
    setActive(label);
    setPage(1);
  };

  return (
    <Layout>
      <SEO
        title="Digital Marketing & SEO Blog for Indian Small Businesses | Websbond"
        description="Free guides on website design, SEO tips, Google Ads, social media marketing and business growth for small businesses in India. Updated weekly by the Websbond team."
        path="/blog"
        jsonLd={blogJsonLd}
      />

      {/* Hero */}
      <section className="container grid lg:grid-cols-2 gap-12 py-14 lg:py-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-accent/15 text-foreground font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full">
            <Pencil className="w-3.5 h-3.5 text-accent" aria-hidden="true" /> Our Blog
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
          <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter posts by category">
            {filters.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => changeFilter(label)}
                aria-pressed={active === label}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition ${
                  active === label ? "bg-foreground text-background border-foreground" : "bg-card border-border hover:border-foreground"
                }`}
              >
                <Icon className="w-4 h-4" aria-hidden="true" /> {label}
              </button>
            ))}
          </div>

          {pagePosts.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">No posts found in this category yet.</div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {featuredPosts.map((p) => (
                  <article key={p.title} className="bg-card rounded-3xl border border-border overflow-hidden shadow-soft hover:shadow-card transition-all group">
                    <img src={p.img} alt={p.title} className="w-full aspect-[16/10] object-cover" />
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-accent/15 text-brand text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">{p.cat}</span>
                        <span className="text-xs text-muted-foreground">{p.date}</span>
                      </div>
                      <h2 className="font-display font-bold leading-snug group-hover:text-brand transition-colors">{p.title}</h2>
                      <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                      <div className="mt-4 flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <img src={p.avatar} alt={`${p.author} photo`} className="w-7 h-7 rounded-full object-cover" />
                          <span className="text-xs font-semibold">{p.author}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" aria-hidden="true" /> {p.read}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {morePosts.length > 0 && (
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  {morePosts.map((p) => (
                    <article key={p.title} className="bg-card rounded-3xl border border-border overflow-hidden shadow-soft hover:shadow-card transition-all">
                      <div className="flex gap-4 p-4">
                        <img src={p.img} alt={p.title} className="w-24 h-24 rounded-2xl object-cover shrink-0" />
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-accent/15 text-brand text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">{p.cat}</span>
                          </div>
                          <h3 className="font-semibold text-sm leading-snug line-clamp-2">{p.title}</h3>
                          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                            <img src={p.avatar} alt={`${p.author} photo`} className="w-5 h-5 rounded-full object-cover" />
                            <span>{p.author}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="flex justify-center gap-2 mt-10" aria-label="Blog pagination">
              <button
                onClick={() => changePage(page - 1)}
                disabled={page === 1}
                aria-label="Previous page"
                className="w-10 h-10 rounded-xl border border-border grid place-items-center disabled:opacity-40"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => changePage(n)}
                  aria-label={`Page ${n}`}
                  aria-current={n === page ? "page" : undefined}
                  className={`w-10 h-10 rounded-xl font-semibold ${n === page ? "bg-foreground text-background" : "border border-border"}`}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => changePage(page + 1)}
                disabled={page === totalPages}
                aria-label="Next page"
                className="w-10 h-10 rounded-xl border border-border grid place-items-center disabled:opacity-40"
              >
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </nav>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
            <label htmlFor="blog-search" className="sr-only">Search blog articles</label>
            <input
              id="blog-search"
              type="search"
              placeholder="Search articles..."
              className="w-full bg-card border border-border rounded-2xl pl-11 pr-4 py-3 text-sm outline-none focus:border-accent"
            />
          </div>

          <div className="bg-card border border-border rounded-3xl p-5 shadow-soft">
            <h3 className="font-display font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {recent.map((r) => (
                <li key={r.title} className="flex gap-3">
                  <div className="w-14 h-14 rounded-xl bg-accent/15 shrink-0 grid place-items-center text-brand font-bold text-xs" aria-hidden="true">
                    {r.cat.split(" ")[0]}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-snug line-clamp-2">{r.title}</p>
                    <div className="text-xs text-muted-foreground mt-1">{r.date}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl p-6 bg-gradient-to-br from-[hsl(214_55%_8%)] to-[hsl(214_60%_14%)] text-background">
            <div className="flex items-center gap-2 mb-3 text-accent">
              <Send className="w-4 h-4" aria-hidden="true" />
              <span className="font-display font-bold">Stay Updated</span>
            </div>
            <p className="text-sm text-background/70 mb-4">Digital tips, trends aur strategies seedhe aapke inbox mein.</p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">Newsletter email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full bg-background/10 border border-background/10 rounded-xl px-4 py-2.5 text-sm outline-none placeholder:text-background/50"
              />
              <button type="submit" className="w-full bg-accent text-accent-foreground font-semibold py-2.5 rounded-xl">
                Subscribe
              </button>
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
