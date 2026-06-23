import { useState } from "react";
import { Sparkles, Phone, Mail, MessageCircle, MapPin, Send, Shield, Users, CircleCheck as CheckCircle2 } from "lucide-react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import { toast } from "@/hooks/use-toast";

const contactCards = [
  { icon: Phone, title: "Call Us", value: "+91 98765 43210", sub: "Mon - Sat: 10AM - 9PM", color: "bg-accent/15 text-brand" },
  { icon: Mail, title: "Email Us", value: "hello@websbond.com", sub: "We reply within 24 hours", color: "bg-accent/15 text-brand" },
  { icon: MessageCircle, title: "WhatsApp", value: "+91 98765 43210", sub: "Chat with us instantly", color: "bg-green-100 text-green-600" },
  { icon: MapPin, title: "Visit Us", value: "Indore, Madhya Pradesh", sub: "India - 452001", color: "bg-purple-100 text-purple-600" },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const empty: FormState = { name: "", email: "", phone: "", subject: "", message: "" };

const ContactPage = () => {
  const [form, setForm] = useState<FormState>(empty);
  const [submitting, setSubmitting] = useState(false);

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill all required fields.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setForm(empty);
    toast({ title: "Message sent!", description: "Hum jaldi hi aapse contact karenge." });
  };

  return (
    <Layout>
      <SEO title="Contact Websbond — Free Consultation, Call or WhatsApp" description="Get in touch with Websbond — call, WhatsApp or email our Indore team. Free consultation for websites, SEO and digital marketing in India." path="/contact" />

      {/* Hero */}
      <section className="container grid lg:grid-cols-2 gap-12 py-14 lg:py-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-accent/15 text-foreground font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-accent" aria-hidden="true" /> Let's Connect
          </div>
          <h1 className="mt-6 font-display font-extrabold text-5xl md:text-6xl leading-[1.05]">
            Let's build something<br />
            <span className="text-accent">amazing together.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-lg">
            Have a project in mind? Let's discuss how we can help you grow your business with smart digital solutions.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-2xl">
            {[
              { icon: CheckCircle2, t: "Quick Response", s: "We reply within 24 hrs" },
              { icon: Users, t: "Expert Support", s: "Talk to real people" },
              { icon: Shield, t: "No Obligations", s: "100% Free Consultation" },
            ].map(({ icon: Icon, t, s }) => (
              <div key={t} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-accent/15 text-brand grid place-items-center shrink-0" aria-hidden="true">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{t}</div>
                  <div className="text-xs text-muted-foreground">{s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[320px] lg:h-[420px] rounded-3xl overflow-hidden bg-[hsl(214_55%_8%)]">
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full border-[3px] border-accent relative">
                <div className="absolute inset-0 m-auto w-[120%] h-[3px] bg-accent rotate-45 top-1/2 -translate-y-1/2 rounded-full" />
              </div>
              <div className="mt-4 font-display font-extrabold text-3xl text-accent" style={{ textShadow: "0 0 20px hsl(42 100% 55% / 0.6)" }}>Websbond</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="container grid md:grid-cols-2 lg:grid-cols-4 gap-5 pb-10">
        {contactCards.map(({ icon: Icon, title, value, sub, color }) => (
          <div key={title} className="bg-card rounded-3xl border border-border p-5 shadow-soft hover:shadow-card transition-all flex items-start gap-4">
            <div className={`w-12 h-12 rounded-full grid place-items-center shrink-0 ${color}`} aria-hidden="true">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-muted-foreground">{title}</div>
              <div className="font-bold mt-0.5">{value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Form + Location */}
      <section className="container pb-10">
        <div className="bg-card rounded-3xl border border-border shadow-soft p-6 md:p-10 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display font-bold text-2xl">Send us a message</h2>
            <p className="text-sm text-muted-foreground mt-1 mb-6">Fill out the form and our team will get back to you soon.</p>
            <form onSubmit={onSubmit} className="space-y-4" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="sr-only">Your Name</label>
                  <input
                    id="contact-name"
                    required
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={set("name")}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">Your Email</label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    placeholder="Your Email *"
                    value={form.email}
                    onChange={set("email")}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="sr-only">Phone Number</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={set("phone")}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="sr-only">Subject</label>
                  <input
                    id="contact-subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={set("subject")}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">Your Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Tell us about your project or requirement... *"
                  value={form.message}
                  onChange={set("message")}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent resize-none"
                />
              </div>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 bg-foreground text-background font-semibold px-6 py-3 rounded-2xl hover:opacity-90 transition disabled:opacity-60"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  {submitting ? "Sending..." : "Send Message"}
                </button>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="w-4 h-4" aria-hidden="true" /> Your information is safe with us.
                </div>
              </div>
            </form>
          </div>

          <div>
            <h2 className="font-display font-bold text-2xl">Our Location</h2>
            <p className="text-sm text-muted-foreground mt-1 mb-6">We're based in Indore and work with clients worldwide.</p>
            <div className="relative rounded-2xl overflow-hidden border border-border aspect-square">
              <iframe
                title="Websbond office location in Indore, India"
                src="https://www.openstreetmap.org/export/embed.html?bbox=75.83%2C22.70%2C75.92%2C22.75&layer=mapnik&marker=22.7196%2C75.8577"
                className="w-full h-full"
                loading="lazy"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[hsl(214_55%_8%)] text-background rounded-2xl px-4 py-3 shadow-card pointer-events-none">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span className="font-bold text-sm">Websbond</span>
                </div>
                <div className="text-xs text-background/70 mt-0.5">Indore, MP, India</div>
                <div className="text-xs text-background/70">452001</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner title="Ready to grow your" highlight="business?" subtitle="Let's turn your ideas into results." />
    </Layout>
  );
};

export default ContactPage;
