import { Link } from "react-router-dom";
import logo3d from "@/assets/websbond-logo-3d.png";

type LogoProps = {
  light?: boolean;
  size?: "sm" | "md" | "lg";
};

const imgSizeMap: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "h-7 w-7",
  md: "h-9 w-9",
  lg: "h-12 w-12",
};

const textSizeMap: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-2xl",
};

export const Logo = ({ light = false, size = "md" }: LogoProps) => (
  <Link
    to="/"
    aria-label="Websbond home"
    className="inline-flex items-center gap-2 shrink-0"
  >
    <span
      className={`inline-flex items-center justify-center rounded-xl overflow-hidden ${
        light ? "" : "ring-1 ring-border/40 shadow-sm"
      }`}
      style={{ background: "#0a0f1c" }}
    >
      <img
        src={logo3d}
        alt=""
        width={512}
        height={512}
        loading="eager"
        decoding="async"
        className={`${imgSizeMap[size]} object-contain`}
      />
    </span>
    <span
      className={`font-display font-extrabold tracking-tight ${textSizeMap[size]} ${
        light ? "text-white" : "text-foreground"
      }`}
    >
      Websbond
    </span>
  </Link>
);
