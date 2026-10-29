export const Section = ({ id, eyebrow, title, children }) => (
  <section id={id} className="scroll-mt-24 py-16 sm:py-20">
    <p className="text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</p>
    <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
    <div className="mt-10">{children}</div>
  </section>
);

// Renders **bold** segments inside plain strings from the profile data.
export const RichText = ({ text }) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") ? (
      <strong key={i} className="font-semibold text-ink">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );

export const Tag = ({ children }) => (
  <span className="rounded-md border border-line bg-bg px-2.5 py-1 text-xs font-medium text-muted">
    {children}
  </span>
);
