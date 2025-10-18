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
  className
}: SectionHeaderProps): JSX.Element => {
  return (
    <header className={cn("flex flex-col gap-3", align === "center" && "items-center text-center", className)}>
      {eyebrow ? (
        <span className="inline-flex max-w-fit items-center rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-medium text-slate-200/85">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-[2.4rem]">{title}</h2>
      {description ? <p className="max-w-3xl text-base text-slate-300/85 sm:text-lg">{description}</p> : null}
    </header>
  );
};

export default SectionHeader;
