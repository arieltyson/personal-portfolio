import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "glass";

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
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  const variants: Record<Variant, string> = {
    primary:
      "bg-accent text-white hover:bg-accent-hover shadow-sm",
    ghost:
      "text-accent hover:underline underline-offset-4",
    glass:
      "border border-black/10 bg-black/[0.06] text-text-primary backdrop-blur-md hover:bg-black/[0.10] dark:border-white/[0.25] dark:bg-white/[0.15] dark:text-white dark:hover:bg-white/[0.22]",
  };

  if ("href" in props && props.href) {
    const { href, variant = "primary", className, children, ...anchorProps } = props;

    return (
      <a href={href} className={cn(baseStyles, variants[variant], className)} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { type = "button", variant = "primary", className, children, ...buttonProps } = props;

  return (
    <button type={type} className={cn(baseStyles, variants[variant], className)} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
