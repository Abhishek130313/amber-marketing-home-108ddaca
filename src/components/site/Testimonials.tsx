import { Star } from "lucide-react";
import a1 from "@/assets/avatar1.jpg";
import a2 from "@/assets/avatar2.jpg";
import a3 from "@/assets/avatar3.jpg";

const reviews = [
  { name: "Rohit Verma", role: "Hotel Owner, Kanpur", img: a1, text: "Websbond ne hamare hotel ki online presence badal di. Bookings 3x ho gayi!" },
  { name: "Neha Sharma", role: "Salon Owner, Lucknow", img: a2, text: "Professional team aur 24/7 support. Highly recommended!" },
  { name: "Amit Patel", role: "Kirana Store, Indore", img: a3, text: "Website itni achhi banayi ki customers khud message karne lage. Amazing!" },
  { name: "Vikram Singh", role: "Gym Owner, Jaipur", img: a2, text: "Unka digital marketing kaam karta hai. Har mahine new customers mil rahe hain." },
];

export const Testimonials = () => (
  <section className="py-20 lg:py-24">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl">
          Hamara <span className="text-accent">khushi</span> clients
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((r) => (
          <article key={r.name} className="bg-card rounded-3xl p-6 border border-border shadow-soft hover:shadow-card transition-all">
            <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars" role="img">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />)}
            </div>
            <p className="mt-4 text-foreground/80 leading-relaxed text-sm">"{r.text}"</p>
            <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
              <img src={r.img} alt={`${r.name} photo`} className="w-11 h-11 rounded-full object-cover" loading="lazy" />
              <div>
                <div className="font-semibold text-sm">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-10" aria-hidden="true">
        <span className="w-6 h-2 rounded-full bg-accent" />
        <span className="w-2 h-2 rounded-full bg-border" />
        <span className="w-2 h-2 rounded-full bg-border" />
      </div>
    </div>
  </section>
);
