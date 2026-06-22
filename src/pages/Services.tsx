import { ArrowRight, Play, Check, Globe, Search, Megaphone, Palette, Headphones, Share2, Briefcase, Users, Trophy, ChevronDown, Rocket, TrendingUp, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import laptop from "@/assets/laptop.png";

const services = [
  { icon: Globe, title: "Website Development", color: "bg-accent/15 text-brand", desc: "Fast, responsive aur SEO friendly websites jo aapke business ko online ek strong pehchaan dein.", features: ["Custom Design","Responsive Layout","Fast Loading","SEO Friendly"] },
  { icon: Search, title: "SEO Optimization", color: "bg-green-100 text-green-700", desc: "Google me upar ranking aur zyada traffic ke liye complete SEO solution.", features: ["On-Page SEO","Technical SEO","Keyword Research","Rank on Google"] },
  { icon: Megaphone, title: "Digital Marketing", color: "bg-purple-100 text-purple-700", desc: "Social media, ads aur campaigns ke through zyada leads aur customers paayen.", features: ["Facebook & Instagram Ads","Google Ads","Lead Generation","Conversion Tracking"] },
  { icon: Palette, title: "Brand Identity", color: "bg-blue-100 text-blue-700", desc: "Aapke brand ki pehchaan jo logo, colors, typography se lekar brand guidelines tak complete ho.", features: ["Logo Design","Brand Colors","Typography","Brand Guidelines"] },
  { icon: Headphones, title: "24/7 Human Support", color: "bg-accent/15 text-brand", desc: "Real log, real support. 24/7 available on WhatsApp, call aur email.", features: ["WhatsApp Support","Call Support","Email Support","Quick Response"] },
  { icon: Share2, title: "Social Media Management", color: "bg-pink-100 text-pink-700", desc: "Aapke social media ko professional tareeke se manage karke brand awareness badhayein.", features: ["Content Creation","Post Scheduling","Page Management","Performance Reports"] },
];

const pricing = [
  { name: "Starter", icon: Rocket, color: "bg-purple-100 text-purple-600", desc: "Small businesses ke liye perfect shuruaat.", price: "₹7,999", features: ["5 Page Website","Responsive Design","Basic SEO","3 Months Support"], highlight: false },
  { name: "Growth", icon: TrendingUp, color: "bg-green-100 text-green-600", desc: "Growing businesses ke liye best choice.", price: "₹14,999", features: ["Unlimited Pages","Advanced SEO","Social Media Management","6 Months Support"], highlight: true },
  { name: "Premium", icon: Crown, color: "bg-accent/15 text-brand", desc: "Advanced features ke saath complete digital solution.", price: "₹29,999", features: ["Everything in Growth","Digital Marketing (Ads)","Brand Identity","12 Months Support"], highlight: false },
];

const faqs = [
  ["Website banane me kitna time lagega?","Aam taur par 2-4 hafte. Aapki requirements ke hisab se."],
  ["SEO results kab tak dikhne lagte hain?","Initial improvements 1-2 mahine me. Strong results 3-6 mahine me dikhte hain."],
  ["Kya aap domain aur hosting provide karte hain?","Haan, hum domain aur hosting setup me poori madad karte hain."],
  ["Kya support lifetime milega?","Plan ke hisab se support included hai, baad me affordable rates par extend kar sakte hain."],
  ["Koi hidden charges hain?","Nahi. Jo price quote ho, wahi final. Koi hidden charges nahi."],
  ["Payment kaise karna hai?","UPI, bank transfer, credit/debit card — sab options available hain."],
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen(!open)} className="w-full text-left bg-card border border-border rounded-2xl p-5 hover:shadow-soft transition">
      <div className="flex items-center justify-between gap-4">
        <span className="font-semibold">{q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </div>
      {open && <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p>}
    </button>
  );
};

const ServicesPage = () => (
  <Layout>
    <SEO title="Services — Websites, SEO, Digital Marketing & Support | Websbond" description="Explore Websbond services: website development, SEO, paid ads, brand identity, social media management and 24/7 human support — transparent pricing from ₹7,999." path="/services" jsonLd={servicesJsonLd} />
      {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-12 py-14 lg:py-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-accent/15 text-foreground font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full">
            <Briefcase className="w-3.5 h-3.5 text-accent" /> Services
          </div>
          <h1 className="mt-6 font-display font-extrabold text-5xl md:text-6xl leading-[1.05]">
            Ek Complete<br />
            <span className="text-accent">Digital</span> Solution.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg">
            Website se lekar SEO aur 24/7 support tak, sab kuch ek jagah. Aap business badhao, digital hum sambhaalenge.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-7 py-4 rounded-2xl hover:shadow-float transition">
              Free Consultation Lijiye <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/our-work" className="inline-flex items-center gap-2 bg-card border border-border font-semibold px-7 py-4 rounded-2xl hover:shadow-soft transition">
              <span className="grid place-items-center w-7 h-7 rounded-full bg-accent text-accent-foreground"><Play className="w-3 h-3 fill-current" /></span>
              Hamara Kaam Dekhein
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            {["No Contract","No Hidden Charges","Cancel Anytime"].map((t) => (
              <div key={t} className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> {t}</div>
            ))}
          </div>
        </div>
        <div className="relative h-[420px] lg:h-[500px]">
          <div className="absolute inset-6 rounded-3xl gradient-warm" />
          <img src={laptop} alt="Laptop showcasing Websbond services dashboard" className="relative z-10 w-full h-full object-contain" />
          {[
            { icon: Briefcase, val: "20+", label: "Services to grow your business online", cls: "top-4 right-0" },
            { icon: Users, val: "50+", label: "Businesses trust us", cls: "top-1/2 -right-2" },
            { icon: Trophy, val: "5+ Years", label: "Of delivering results", cls: "bottom-8 right-4" },
          ].map(({ icon: Icon, val, label, cls }) => (
            <div key={val} className={`absolute ${cls} bg-card rounded-2xl shadow-card p-4 flex items-start gap-3 w-52 z-20`}>
              <div className="w-9 h-9 rounded-xl bg-accent/15 text-brand grid place-items-center shrink-0"><Icon className="w-4 h-4" /></div>
              <div>
                <div className="font-bold text-sm">{val}</div>
                <div className="text-xs text-muted-foreground leading-tight">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="container py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl">Hamari <span className="text-accent">Services</span></h2>
        <p className="mt-3 text-muted-foreground">Aapke business ke liye best digital solutions.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc, features, color }) => (
          <article key={title} className="bg-card rounded-3xl p-7 border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl grid place-items-center ${color}`}><Icon className="w-6 h-6" /></div>
              <h3 className="font-display font-bold text-lg">{title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-5">{desc}</p>
            <ul className="space-y-2 mb-6">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-green-500" /> {f}</li>
              ))}
            </ul>
            <button className="inline-flex items-center gap-1.5 border border-border px-4 py-2 rounded-xl text-sm font-semibold hover:bg-accent hover:text-accent-foreground hover:border-accent transition">
              Learn more about this service <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </article>
        ))}
      </div>
    </section>

    {/* Pricing */}
    <section className="container py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl">Simple <span className="text-accent">Pricing</span>, No Surprises</h2>
        <p className="mt-3 text-muted-foreground">Transparent pricing packages jo aapke business ko grow karne me madad karein.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {pricing.map(({ name, icon: Icon, color, desc, price, features, highlight }) => (
          <div key={name} className={`relative bg-card rounded-3xl p-7 border-2 ${highlight ? "border-accent shadow-float" : "border-border shadow-soft"}`}>
            {highlight && <span className="absolute top-5 right-5 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>}
            <div className={`w-12 h-12 rounded-xl grid place-items-center mb-4 ${color}`}><Icon className="w-6 h-6" /></div>
            <h3 className="font-display font-bold text-xl">{name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{desc}</p>
            <div className="mt-5 font-display font-extrabold text-4xl">{price}<span className="text-base font-normal text-muted-foreground">/mo</span></div>
            <ul className="mt-6 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-green-500" /> {f}</li>
              ))}
            </ul>
            <Link to="/contact" className={`mt-7 inline-flex items-center justify-center w-full font-semibold py-3 rounded-2xl transition ${highlight ? "bg-accent text-accent-foreground hover:shadow-float" : "border border-border hover:bg-foreground hover:text-background"}`}>
              Choose Plan
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
        {["No Contract","No Hidden Charges","Cancel Anytime"].map((t) => (
          <div key={t} className="flex items-center gap-2 text-muted-foreground"><Check className="w-4 h-4 text-green-500" /> {t}</div>
        ))}
      </div>
    </section>

    {/* FAQ */}
    <section className="container py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl">FA<span className="text-accent">Qs</span></h2>
        <p className="mt-3 text-muted-foreground">Aapke kuch important sawaalon ke jawaab.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {faqs.map(([q, a]) => <FAQItem key={q} q={q} a={a} />)}
      </div>
    </section>

    <CtaBanner title="Ready to grow your" highlight="business?" subtitle="Chaliye, aapke business ko online next level par le chalte hain." ctaLabel="Free Consultation Lijiye" />
  </Layout>
);

export default ServicesPage;
