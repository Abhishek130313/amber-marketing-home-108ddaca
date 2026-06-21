import { Mail, MapPin, Phone, Zap, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

export const Footer = () => (
  <footer className="bg-foreground text-background mt-12">
    <div className="container py-16 grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-4">
        <a href="#" className="flex items-center gap-2 font-display font-extrabold text-xl">
          <span className="grid place-items-center w-9 h-9 rounded-xl gradient-accent text-accent-foreground">
            <Zap className="w-5 h-5" strokeWidth={2.5} />
          </span>
          Brightline<span className="text-brand">.</span>
        </a>
        <p className="mt-5 text-background/70 max-w-sm">
          A modern creative agency building brands, products and growth engines for ambitious teams.
        </p>
        <div className="flex gap-3 mt-6">
          {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 grid place-items-center rounded-full bg-background/10 hover:bg-accent hover:text-accent-foreground transition">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="lg:col-span-2">
        <h4 className="font-display font-bold mb-5">Quick Links</h4>
        <ul className="space-y-3 text-background/70 text-sm">
          {["Home", "About", "Our Work", "Blog", "Contact"].map((l) => (
            <li key={l}><a href="#" className="hover:text-accent">{l}</a></li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-2">
        <h4 className="font-display font-bold mb-5">Services</h4>
        <ul className="space-y-3 text-background/70 text-sm">
          {["Web Design", "Development", "SEO", "Marketing", "Support"].map((l) => (
            <li key={l}><a href="#" className="hover:text-accent">{l}</a></li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-4">
        <h4 className="font-display font-bold mb-5">Stay in the loop</h4>
        <p className="text-background/70 text-sm mb-5">Get fresh insights, product updates and offers — straight to your inbox.</p>
        <form className="flex bg-background/10 rounded-full p-1.5">
          <input type="email" placeholder="Enter your email"
                 className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-background/50" />
          <button className="bg-accent text-accent-foreground p-3 rounded-full hover:scale-105 transition" aria-label="Subscribe">
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
        <ul className="mt-6 space-y-3 text-sm text-background/70">
          <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-accent" /> hello@brightline.agency</li>
          <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-accent" /> +1 (415) 555-0188</li>
          <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-accent" /> 240 Market St, San Francisco</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-background/10">
      <div className="container py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-background/60">
        <span>© 2026 Brightline Agency. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent">Privacy</a>
          <a href="#" className="hover:text-accent">Terms</a>
          <a href="#" className="hover:text-accent">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);
