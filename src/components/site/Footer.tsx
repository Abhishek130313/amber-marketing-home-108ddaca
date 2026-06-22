import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="bg-[hsl(214_55%_8%)] text-background mt-12">
    <div className="container py-16 grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-3">
        <Logo light size="lg" />
        <p className="mt-6 text-background/70 max-w-xs leading-relaxed">
          India ki digital agency for<br />small businesses.
        </p>
        <div className="flex gap-3 mt-6">
          {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 grid place-items-center rounded-full bg-background/10 hover:bg-accent hover:text-accent-foreground transition" aria-label="Social">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="lg:col-span-2">
        <h4 className="font-display font-bold mb-5">Quick Links</h4>
        <ul className="space-y-3 text-background/70 text-sm">
          {[["Home","/"],["Services","/services"],["Our Work","/our-work"],["About Us","/about"],["Blog","/blog"],["Contact","/contact"]].map(([l,to]) => (
            <li key={l}><Link to={to} className="hover:text-accent transition-colors">{l}</Link></li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-2">
        <h4 className="font-display font-bold mb-5">Services</h4>
        <ul className="space-y-3 text-background/70 text-sm">
          {["Website Development","Digital Marketing","SEO Optimization","24/7 Support","Brand Identity","Social Media"].map((l) => (
            <li key={l}><a href="#" className="hover:text-accent transition-colors">{l}</a></li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-2">
        <h4 className="font-display font-bold mb-5">Contact Info</h4>
        <ul className="space-y-3 text-background/70 text-sm">
          <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> +91 98765 43210</li>
          <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" /> hello@websbond.com</li>
          <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Indore, MP, India</li>
          <li className="flex items-center gap-2"><span className="w-4 h-4 grid place-items-center text-accent">●</span> Mon - Sat: 10AM - 9PM</li>
        </ul>
      </div>

      <div className="lg:col-span-3">
        <h4 className="font-display font-bold mb-5">Newsletter</h4>
        <p className="text-background/70 text-sm mb-4">Digital tips, offers aur updates seedhe aapke inbox me.</p>
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <input type="email" aria-label="Newsletter email address" placeholder="Enter your email"
                 className="w-full bg-background/10 border border-background/10 rounded-xl px-4 py-3 text-sm outline-none placeholder:text-background/50 focus:border-accent" />
          <button className="w-full bg-accent text-accent-foreground font-semibold py-3 rounded-xl hover:opacity-90 transition">
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div className="border-t border-background/10">
      <div className="container py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-background/60">
        <span>© 2024 Websbond. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent">Privacy Policy</a>
          <a href="#" className="hover:text-accent">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>
);
