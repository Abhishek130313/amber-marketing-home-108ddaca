import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const serviceLinks = [
  "Website Development",
  "Digital Marketing",
  "SEO Optimization",
  "24/7 Support",
  "Brand Identity",
  "Social Media",
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const Footer = () => (
  <footer className="bg-[hsl(214_55%_8%)] text-background mt-12">
    <div className="container py-16 grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-3">
        <Logo light size="lg" />
        <p className="mt-6 text-background/70 max-w-xs leading-relaxed">
          India ki digital agency for<br />small businesses.
        </p>
        <div className="flex gap-3 mt-6">
          {[
            { Icon: WhatsAppIcon, label: "Chat on WhatsApp", href: "https://wa.me/919876543210" },
            { Icon: Facebook, label: "Follow us on Facebook", href: "https://facebook.com/websbond" },
            { Icon: Instagram, label: "Follow us on Instagram", href: "https://instagram.com/websbond" },
            { Icon: Linkedin, label: "Connect on LinkedIn", href: "https://linkedin.com/company/websbond" },
            { Icon: Youtube, label: "Watch us on YouTube", href: "https://youtube.com/@websbond" },
          ].map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 grid place-items-center rounded-full bg-background/10 hover:bg-accent hover:text-accent-foreground transition"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="lg:col-span-2">
        <h4 className="font-display font-bold mb-5">Quick Links</h4>
        <ul className="space-y-3 text-background/70 text-sm">
          {[
            ["Home", "/"],
            ["Services", "/services"],
            ["Our Work", "/our-work"],
            ["About Us", "/about"],
            ["Blog", "/blog"],
            ["Contact", "/contact"],
          ].map(([l, to]) => (
            <li key={l}>
              <Link to={to} className="hover:text-accent transition-colors">
                {l}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-2">
        <h4 className="font-display font-bold mb-5">Services</h4>
        <ul className="space-y-3 text-background/70 text-sm">
          {serviceLinks.map((l) => (
            <li key={l}>
              <Link to="/services" className="hover:text-accent transition-colors">
                {l}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-2">
        <h4 className="font-display font-bold mb-5">Contact Info</h4>
        <ul className="space-y-3 text-background/70 text-sm">
          <li className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-accent shrink-0" aria-hidden="true" /> +91 98765 43210
          </li>
          <li className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-accent shrink-0" aria-hidden="true" /> hello@websbond.com
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent shrink-0" aria-hidden="true" /> Indore, MP, India
          </li>
          <li className="flex items-center gap-2">
            <span className="w-4 h-4 grid place-items-center text-accent shrink-0" aria-hidden="true">●</span>
            Mon - Sat: 10AM - 9PM
          </li>
        </ul>
      </div>

      <div className="lg:col-span-3">
        <h4 className="font-display font-bold mb-5">Newsletter</h4>
        <p className="text-background/70 text-sm mb-4">Digital tips, offers aur updates seedhe aapke inbox me.</p>
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="footer-email" className="sr-only">Email address for newsletter</label>
          <input
            id="footer-email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full bg-background/10 border border-background/10 rounded-xl px-4 py-3 text-sm outline-none placeholder:text-background/50 focus:border-accent"
          />
          <button type="submit" className="w-full bg-accent text-accent-foreground font-semibold py-3 rounded-xl hover:opacity-90 transition">
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div className="border-t border-background/10">
      <div className="container py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-background/60">
        <span>© 2024 Websbond. All rights reserved.</span>
        <div className="flex gap-6">
          <Link to="/privacy-policy" className="hover:text-accent">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-accent">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  </footer>
);
