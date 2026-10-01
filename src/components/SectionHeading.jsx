export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-sage-600">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl text-ink-900 sm:text-4xl">{title}</h2>
      {description && (
        <p className="text-base leading-relaxed text-ink-700/70">{description}</p>
      )}
    </div>
  );
}
