import type { PropsWithChildren } from "react";
import { cn } from "@/lib/cn";

type GlassCardProps = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}>;

const GlassCard = ({ as: Component = "div", className, children }: GlassCardProps): JSX.Element => {
  return (
    <Component
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/12 bg-white/6 p-6 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.8)] backdrop-blur-xl",
        className
      )}
    >
      <span className="noise-overlay opacity-10" />
      <div className="relative z-10">{children}</div>
    </Component>
  );
};

export default GlassCard;
