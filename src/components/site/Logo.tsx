import { Link } from "react-router-dom";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className={`flex items-center gap-2.5 font-display font-extrabold text-xl ${light ? "text-background" : "text-foreground"}`}>
    <span className="relative grid place-items-center w-9 h-9 rounded-full border-[2.5px] border-accent">
      <span className="absolute inset-0 m-auto w-[120%] h-[2.5px] bg-accent rotate-45 rounded-full" />
    </span>
    DigiDesi
  </Link>
);
