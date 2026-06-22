import { ArrowRight, Sparkles, CheckCircle2, Users, Trophy, Rocket, Smile, Coins, Clock, TrendingUp, Monitor, ShoppingBag, Search, Megaphone, Palette, Layers, ChevronLeft, ChevronRight, ChevronDown, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import laptop from "@/assets/laptop.png";
import b1 from "@/assets/blog1.jpg";
import b2 from "@/assets/blog2.jpg";
import b3 from "@/assets/blog3.jpg";

const filters = [
  { label: "All Projects", icon: Layers },
  { label: "Website Development", icon: Monitor },
  { label: "eCommerce", icon: ShoppingBag },
  { label: "SEO", icon: Search },
  { label: "Digital Marketing", icon: Megaphone },
  { label: "Branding", icon: Palette },
];

const projects = [
  { name: "TechNova", category: "SaaS Website", desc: "Modern SaaS website with clean UI/UX and high converting flow.", icon: Monitor, img: b1 },
  { name: "UrbanWear", category: "eCommerce Website", desc: "High performance eCommerce store with advanced filtering & secure checkout.", icon: ShoppingBag, img: b2 },
  { name: "RankBoost", category: "SEO Campaign", desc: "Complete SEO campaign that increased organic traffic by 240% in 6 months.", icon: Search, img: b3 },
  { name: "FreshBites", category: "Restaurant Website", desc: "Beautiful restaurant website with online ordering and table booking.", icon: Leaf, img: b1 },
];

const stats = [
  { icon: Rocket, val: "240%", label: "Avg. Traffic Increase", color: "bg-accent/15 text-brand" },
  { icon: Smile, val: "3.5x", label: "Avg. Lead Growth", color: "bg-green-100 text-green-600" },
  { icon: Coins, val: "90%", label: "Client Retention", color: "bg-accent/15 text-brand" },
  { icon: Clock, val: "24/7", label: "Project Support", color: "bg-blue-100 text-blue-600" },
  { icon: TrendingUp, val: "₹20Cr+", label: "Revenue Generated", color: "bg-purple-100 text-purple-600" },
];

const OurWorkPage = () => {
  const [active, setActive] = useState("All Projects");
  return (
    <Layout>
      <SEO title="Our Work — Websbond Case Studies & Client Projects" description="See websites, SEO campaigns and digital marketing projects Websbond has delivered for small businesses across India. Real results, real clients." path="/our-work" />
      {/* Hero */}
      <section className="container grid lg:grid-cols-2 gap-12 py-14 lg:py-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-accent/15 text-foreground font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-accent" /> Our Portfolio
          </div>
          <h1 className="mt-6 font-display font-extrabold text-5xl md:text-6xl leading-[1.05]">
            Work that speaks<br /><span className="text-accent">results.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-lg">
            Har project humare liye ek nayi kahani hoti hai. Yahan dekhiye kaise humne businesses ko digital me grow kiya.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
            {[{ icon: CheckCircle2, val: "50+", l: "Projects Delivered" }, { icon: Users, val: "30+", l: "Happy Clients" }, { icon: Trophy, val: "5+", l: "Industries Served" }].map(({ icon: Icon, val, l }) => (
              <div key={val} className="bg-card border border-border rounded-2xl p-4 shadow-soft">
                <div className="w-9 h-9 rounded-xl bg-accent/15 text-brand grid place-items-center mb-3"><Icon className="w-4 h-4" /></div>
                <div className="font-display font-extrabold text-xl">{val}</div>
                <div className="text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[420px] lg:h-[500px]">
          <div className="absolute inset-6 rounded-3xl gradient-warm" />
          <img src={laptop} alt="Laptop showcasing Websbond client project" className="relative z-10 w-full h-full object-contain" />
          <div className="absolute top-8 -right-2 bg-card rounded-2xl shadow-card p-5 w-60 z-20">
            <div className="flex items-center gap-2 mb-2"><Leaf className="w-4 h-4 text-accent" /><span className="font-bold text-sm">AuraSkin</span></div>
            <div className="text-xs font-semibold text-muted-foreground mb-2">eCommerce Website</div>
            <p className="text-xs text-muted-foreground">Modern eCommerce website with premium design & seamless performance.</p>
            <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand">View Case Study <ArrowRight className="w-3 h-3" /></a>
          </div>
          <div className="absolute bottom-4 right-1/2 translate-x-1/2 flex items-center gap-3 bg-card rounded-full shadow-soft px-3 py-2 z-20">
            <button className="w-7 h-7 rounded-full border border-border grid place-items-center"><ChevronLeft className="w-4 h-4" /></button>
            <div className="flex gap-1.5"><span className="w-6 h-1.5 rounded-full bg-accent" /><span className="w-1.5 h-1.5 rounded-full bg-border" /><span className="w-1.5 h-1.5 rounded-full bg-border" /></div>
            <button className="w-7 h-7 rounded-full border border-border grid place-items-center"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container pb-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex flex-wrap gap-2">
            {filters.map(({ label, icon: Icon }) => (
              <button key={label} onClick={() => setActive(label)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition ${active === label ? "bg-foreground text-background border-foreground" : "bg-card border-border hover:border-foreground"}`}>
                <Icon className="w-4 h-4" /> {label}
              </button>
            ))}
          </div>
          <button className="inline-flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-2.5 text-sm font-semibold">
            Latest First <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Projects */}
      <section className="container py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map(({ name, category, desc, icon: Icon, img }) => (
            <article key={name} className="bg-card rounded-3xl border border-border overflow-hidden shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
              <img src={img} alt={name} className="w-full aspect-[4/3] object-cover" />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2"><Icon className="w-4 h-4 text-brand" /><h3 className="font-display font-bold">{name}</h3></div>
                <div className="text-xs font-semibold text-muted-foreground mb-2">{category}</div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{desc}</p>
                <a href="#" className="inline-flex items-center gap-1.5 text-brand font-semibold text-sm">View Case Study <ArrowRight className="w-4 h-4" /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <section className="container py-10">
        <div className="bg-card rounded-3xl border border-border grid grid-cols-2 md:grid-cols-5 divide-x divide-border shadow-soft">
          {stats.map(({ icon: Icon, val, label, color }) => (
            <div key={label} className="p-5 flex items-center gap-3">
              <div className={`w-11 h-11 rounded-xl grid place-items-center ${color}`}><Icon className="w-5 h-5" /></div>
              <div>
                <div className="font-display font-extrabold text-xl">{val}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner title="Aapka project humara next" highlight="success story ho sakta hai." subtitle="Chaliye, milkar kuch naya create karte hain." ctaLabel="Free Consultation Lijiye" />
    </Layout>
  );
};

export default OurWorkPage;
