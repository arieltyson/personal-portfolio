import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost";

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsAnchor = AnchorHTMLAttributes<HTMLAnchorElement> &
  BaseProps & {
    href: string;
  };

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> &
  BaseProps & {
    href?: undefined;
  };

type ButtonProps = ButtonAsAnchor | ButtonAsButton;

const Button = (props: ButtonProps): JSX.Element => {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300";

  const variants: Record<Variant, string> = {
    primary:
      "bg-cyan-300 text-slate-950 shadow-sm hover:bg-cyan-200",
    ghost: "border border-white/14 bg-transparent text-slate-100 hover:bg-white/8"
  };

  if ("href" in props && props.href) {
    const { href, variant = "primary", className, children, ...anchorProps } = props;

    return (
      <a href={href} className={cn(baseStyles, variants[variant], className)} {...anchorProps}>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </a>
    );
  }

  const { type = "button", variant = "primary", className, children, ...buttonProps } = props;

  return (
    <button type={type} className={cn(baseStyles, variants[variant], className)} {...buttonProps}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export default Button;
