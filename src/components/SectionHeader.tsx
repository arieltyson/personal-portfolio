import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps): JSX.Element => {
  return (
    <header className={cn("flex flex-col gap-4", align === "center" && "items-center text-center", className)}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-widest text-text-secondary">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-headline font-semibold tracking-tight text-text-primary sm:text-display">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-lg leading-relaxed text-text-secondary">{description}</p>
      ) : null}
    </header>
  );
};

export default SectionHeader;
