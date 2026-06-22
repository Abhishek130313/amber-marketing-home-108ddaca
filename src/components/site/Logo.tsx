import { Link } from "react-router-dom";
import logo3d from "@/assets/websbond-logo-3d.png";

type LogoProps = {
  light?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizeMap: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "h-9 w-9 sm:h-10 sm:w-10",
  md: "h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 lg:h-14 lg:w-14",
  lg: "h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20",
};

export const Logo = ({ light = false, size = "md" }: LogoProps) => (
  <Link
    to="/"
    aria-label="Websbond home"
    className="inline-flex items-center shrink-0"
  >
    <span
      className={`inline-flex items-center justify-center rounded-2xl overflow-hidden ${
        light ? "" : "ring-1 ring-border/40 shadow-sm"
      }`}
      style={{ background: "#0a0f1c" }}
    >
      <img
        src={logo3d}
        alt="Websbond logo"
        width={512}
        height={512}
        loading="eager"
        decoding="async"
        className={`${sizeMap[size]} object-contain`}
      />
    </span>
  </Link>
);
