import { Sparkles, Target, Eye, Heart, CheckCircle2, Users, Trophy, Smile, Star } from "lucide-react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import laptop from "@/assets/laptop.png";
import a1 from "@/assets/avatar1.jpg";
import a2 from "@/assets/avatar2.jpg";
import a3 from "@/assets/avatar3.jpg";

const values = [
  { icon: Heart, title: "Honesty First", desc: "Transparent pricing, no hidden charges, no false promises." },
  { icon: Users, title: "Real People", desc: "Asli insaan support karte hain, bots nahi." },
  { icon: Trophy, title: "Quality Driven", desc: "Har project me premium quality, har time." },
  { icon: Smile, title: "Client Success", desc: "Aapki growth hi humari success hai." },
];

const process = [
  { n: "01", t: "Discovery", d: "Aapke business ko samajhna." },
  { n: "02", t: "Strategy", d: "Best plan banana." },
  { n: "03", t: "Execution", d: "Quality delivery." },
  { n: "04", t: "Growth", d: "Long-term support." },
];

const AboutPage = () => (
  <Layout>
    <SEO title="About Websbond — India's Digital Agency for Small Businesses" description="Websbond is an Indore-based digital agency helping small businesses grow online with affordable websites, SEO and real human support." path="/about" />
      {/* Hero */}
    <section className="container grid lg:grid-cols-2 gap-12 py-14 lg:py-20 items-center">
      <div>
        <div className="inline-flex items-center gap-2 bg-accent/15 text-foreground font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-accent" /> About Us
        </div>
        <h1 className="mt-6 font-display font-extrabold text-5xl md:text-6xl leading-[1.05]">
          India ki <span className="text-accent">digital agency</span> for small businesses.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-lg">
          Websbond me hum small businesses ke liye affordable, premium quality digital solutions banate hain. Real human support ke saath.
        </p>
      </div>
      <div className="relative h-[360px] lg:h-[440px]">
        <div className="absolute inset-6 rounded-3xl gradient-warm" />
        <img src={laptop} alt="Websbond team" className="relative z-10 w-full h-full object-contain" />
      </div>
    </section>

    {/* Mission / Vision */}
    <section className="container grid md:grid-cols-2 gap-6 py-10">
      {[
        { icon: Target, title: "Our Mission", desc: "Har chote business ko digital duniya me strong pehchaan dilana, affordable price aur top quality ke saath." },
        { icon: Eye, title: "Our Vision", desc: "2030 tak India ke 1 lakh+ small businesses ko digital-first banana — ek family ki tarah support karte hue." },
      ].map(({ icon: Icon, title, desc }) => (
        <div key={title} className="bg-card border border-border rounded-3xl p-8 shadow-soft">
          <div className="w-14 h-14 rounded-2xl bg-accent/15 text-brand grid place-items-center mb-5"><Icon className="w-6 h-6" /></div>
          <h3 className="font-display font-bold text-2xl mb-2">{title}</h3>
          <p className="text-muted-foreground">{desc}</p>
        </div>
      ))}
    </section>

    {/* Values */}
    <section className="container py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl">Our <span className="text-accent">Values</span></h2>
        <p className="mt-3 text-muted-foreground">Yeh principles humare har kaam me dikhte hain.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-card rounded-3xl p-6 border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-accent/15 text-brand grid place-items-center mb-4"><Icon className="w-6 h-6" /></div>
            <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Process */}
    <section className="container py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl">Our <span className="text-accent">Process</span></h2>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {process.map(({ n, t, d }) => (
          <div key={n} className="bg-card rounded-3xl p-6 border border-border shadow-soft">
            <div className="font-display font-extrabold text-4xl text-accent mb-3">{n}</div>
            <h3 className="font-display font-bold text-lg">{t}</h3>
            <p className="text-sm text-muted-foreground mt-1">{d}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Statistics */}
    <section className="container py-10">
      <div className="bg-card rounded-3xl border border-border grid grid-cols-2 md:grid-cols-4 divide-x divide-border shadow-soft">
        {[
          { icon: Users, val: "50+", label: "Clients Served" },
          { icon: Trophy, val: "5+", label: "Years Experience" },
          { icon: CheckCircle2, val: "100+", label: "Projects Delivered" },
          { icon: Smile, val: "98%", label: "Satisfaction" },
        ].map(({ icon: Icon, val, label }) => (
          <div key={label} className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent/15 text-brand grid place-items-center"><Icon className="w-6 h-6" /></div>
            <div>
              <div className="font-display font-extrabold text-2xl">{val}</div>
              <div className="text-xs text-muted-foreground">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Testimonials */}
    <section className="container py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl">Client <span className="text-accent">love</span></h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: "Rohit Verma", role: "Hotel Owner, Kanpur", img: a1, text: "Websbond ne hamare hotel ki online presence badal di. Bookings 3x ho gayi!" },
          { name: "Neha Sharma", role: "Salon Owner, Lucknow", img: a2, text: "Professional team aur 24/7 support. Highly recommended!" },
          { name: "Amit Patel", role: "Kirana Store, Indore", img: a3, text: "Website itni achhi banayi ki customers khud message karne lage." },
        ].map((r) => (
          <article key={r.name} className="bg-card rounded-3xl p-6 border border-border shadow-soft">
            <div className="flex gap-0.5 text-accent">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
            <p className="mt-4 text-foreground/80 text-sm">"{r.text}"</p>
            <div className="mt-5 flex items-center gap-3 pt-5 border-t border-border">
              <img src={r.img} alt={r.name} className="w-11 h-11 rounded-full object-cover" />
              <div><div className="font-semibold text-sm">{r.name}</div><div className="text-xs text-muted-foreground">{r.role}</div></div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <CtaBanner title="Chalo, milkar kuch" highlight="bada banaate hain." subtitle="Aapka business, humari expertise — perfect combo." />
  </Layout>
);

export default AboutPage;
