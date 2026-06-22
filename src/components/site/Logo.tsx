import { Link } from "react-router-dom";
import logo3d from "@/assets/websbond-logo-3d.png";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" aria-label="Websbond home" className="flex items-center">
    <img
      src={logo3d}
      alt="Websbond logo"
      width={1536}
      height={1024}
      loading="eager"
      decoding="async"
      className={`h-10 md:h-12 w-auto object-contain drop-shadow-md ${light ? "brightness-110" : ""}`}
    />
  </Link>
);
