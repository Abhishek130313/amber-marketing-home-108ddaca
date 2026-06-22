import { Link } from "react-router-dom";
import logo3d from "@/assets/websbond-logo-3d.png";

export const Logo = ({ light = false }: { light?: boolean }) => (
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
        className="h-12 md:h-14 w-12 md:w-14 object-contain"
      />
    </span>
  </Link>
);
