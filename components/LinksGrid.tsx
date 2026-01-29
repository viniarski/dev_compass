import type { Section } from "../data/types";

type LinksGridProps = {
  sections: Section[];
};

export function LinksGrid({ sections }: LinksGridProps) {
  return (
    <section className="grid items-start justify-items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {sections.map((section) => (
        <div key={section.title} className="grid content-start items-start gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-200">
            {section.kicker}
          </h3>
          <ul className="space-y-2 text-base text-white">
            {section.blocks
              .flatMap((block) => block.links ?? [])
              .map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white transition hover:text-teal-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
