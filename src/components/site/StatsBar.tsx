import { Users, Smile, Headphones, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Clients Served", color: "bg-accent/15 text-brand" },
  { icon: Smile, value: "98%", label: "Client Satisfaction", color: "bg-green-100 text-green-600" },
  { icon: Headphones, value: "24/7", label: "Human Support", color: "bg-blue-100 text-blue-600" },
  { icon: TrendingUp, value: "3x", label: "Avg. Revenue Growth", color: "bg-accent/15 text-brand" },
];

export const StatsBar = () => (
  <section className="container">
    <div className="bg-card rounded-3xl shadow-card border border-border/60 grid grid-cols-2 md:grid-cols-4 divide-x divide-border/60">
      {stats.map(({ icon: Icon, value, label, color }) => (
        <div key={label} className="p-6 lg:p-8 flex items-center gap-4">
          <div className={`w-12 h-12 rounded-2xl grid place-items-center shrink-0 ${color}`}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <div className="font-display font-extrabold text-2xl lg:text-3xl">{value}</div>
            <div className="text-xs lg:text-sm text-muted-foreground">{label}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
