import { Users, Trophy, Globe, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "2.5K+", label: "Happy Clients" },
  { icon: Trophy, value: "180+", label: "Awards Won" },
  { icon: Globe, value: "45+", label: "Countries Served" },
  { icon: TrendingUp, value: "98%", label: "Success Rate" },
];

export const StatsBar = () => (
  <section className="container -mt-2">
    <div className="bg-card rounded-3xl shadow-card border border-border/60 grid grid-cols-2 md:grid-cols-4 divide-x divide-border/60">
      {stats.map(({ icon: Icon, value, label }) => (
        <div key={label} className="p-6 lg:p-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-accent/20 text-brand grid place-items-center shrink-0">
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
