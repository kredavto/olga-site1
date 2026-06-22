import { Link } from "react-router-dom";

interface LogoProps {
  /** Hide the wordmark and show only the emblem */
  iconOnly?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const markSize: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-14 h-14",
};

const textSize: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-3xl",
};

const Logo = ({ iconOnly = false, className = "", size = "md" }: LogoProps) => (
  <Link to="/" className={`flex items-center gap-2 group ${className}`} aria-label="«ФИНДРАЙВ» — на главную">
    <img
      src="/findrive-mark.svg"
      alt="«ФИНДРАЙВ»"
      className={`${markSize[size]} rounded-lg transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(217,169,59,0.55)]`}
    />
    {!iconOnly && (
      <span className={`font-heading font-extrabold tracking-wide ${textSize[size]} neon-gold uppercase`}>
        «ФИНДРАЙВ»
      </span>
    )}
  </Link>
);

export default Logo;
