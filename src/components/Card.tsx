import type { PropsWithChildren } from "react";
import { cn } from "@/lib/cn";

type CardProps = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}>;

const Card = ({ as: Component = "div", className, children }: CardProps): JSX.Element => {
  return (
    <Component
      className={cn(
        "rounded-apple bg-white p-6 shadow-card transition-shadow duration-300 dark:bg-[#1d1d1f] dark:shadow-none dark:border dark:border-separator",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Card;
