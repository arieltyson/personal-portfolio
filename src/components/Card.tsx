import type { PropsWithChildren } from "react";
import { cn } from "@/lib/cn";

type CardVariant = "default" | "glow" | "gradient";

type CardProps = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  variant?: CardVariant;
  hue?: number;
}>;

const Card = ({ as: Component = "div", className, variant = "default", hue, children }: CardProps): JSX.Element => {
  const base = "relative rounded-apple transition-all duration-500 ease-out";

  if (variant === "glow") {
    return (
      <Component
        className={cn(base, "card-glow group", className)}
        style={hue !== undefined ? { "--card-hue": hue } as React.CSSProperties : undefined}
      >
        <div className="relative z-10">{children}</div>
      </Component>
    );
  }

  if (variant === "gradient") {
    return (
      <Component className={cn(base, "card-gradient group", className)}>
        <div className="relative z-10">{children}</div>
      </Component>
    );
  }

  return (
    <Component
      className={cn(
        base,
        "card-default group bg-white p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 dark:bg-[#1d1d1f] dark:shadow-none dark:border dark:border-separator dark:hover:border-white/20",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Card;
