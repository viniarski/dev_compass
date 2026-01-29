import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import type { Section, TabId } from "../data/types";
import { CommandBox } from "./CommandBox";

function toneClasses(tone: "teal" | "amber" | "slate" | undefined) {
  switch (tone) {
    case "amber":
      return "border-amber-200/70 bg-amber-50/60 text-amber-950";
    case "teal":
      return "border-teal-200/70 bg-teal-50/60 text-teal-950";
    default:
      return "border-slate-200/70 bg-white/80 text-slate-900";
  }
}

type SectionAccordionProps = {
  sections: Section[];
  activeTab: TabId;
  sectionOpen: Record<string, boolean>;
  onToggle: (key: string) => void;
  promptOpen: Record<string, boolean>;
  onTogglePrompt: (key: string) => void;
  isMinimalTab: boolean;
};

export function SectionAccordion({
  sections,
  activeTab,
  sectionOpen,
  onToggle,
  promptOpen,
  onTogglePrompt,
  isMinimalTab,
}: SectionAccordionProps) {
  return (
    <>
      {sections.map((section, sectionIndex) => {
        const key = `${activeTab}:${section.kicker}`;
        const isOpen = sectionOpen[key];
        const isInstall =
          activeTab === "start" && section.kicker === "Install";
        const isPromptTab = activeTab === "ai-prompts";

        return (
          <section
            key={`${section.kicker}-${sectionIndex}`}
            className="grid gap-5"
          >
            <button
              type="button"
              onClick={() => onToggle(key)}
              className="flex items-center gap-3 text-left"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-200">
                {section.kicker}
              </span>
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-white/80 text-xl">
                {isOpen ? (
                  <FiChevronUp aria-hidden="true" />
                ) : (
                  <FiChevronDown aria-hidden="true" />
                )}
              </span>
            </button>
            {section.title && isOpen ? (
              <h2 className="text-2xl font-semibold text-white">
                {section.title}
              </h2>
            ) : null}
            <div
              className={`grid gap-5 ${
                isInstall || isPromptTab ? "" : "lg:grid-cols-2"
              } ${isOpen ? "" : "hidden"}`}
            >
              {section.blocks.map((block, blockIndex) => {
                const promptKey = `${activeTab}:${section.kicker}:${sectionIndex}:${blockIndex}`;
                const isPromptOpen = promptOpen[promptKey];
                const visibleLines =
                  isPromptTab && block.code
                    ? isPromptOpen
                      ? block.code
                      : block.code.slice(0, 5)
                    : block.code;

                return (
                <article
                  key={`${section.kicker}-${blockIndex}`}
                  className={
                    isMinimalTab
                      ? "border-0 bg-transparent p-0 shadow-none"
                      : `rounded-3xl border p-6 shadow-[0_25px_60px_-40px_rgba(15,23,42,0.8)] ${toneClasses(
                          block.tone
                        )}`
                  }
                >
                  <div className="flex flex-col gap-3">
                    {block.title ? (
                      <h3 className="text-lg font-semibold">{block.title}</h3>
                    ) : null}
                    {block.desc ? (
                      <p
                        className={
                          isMinimalTab
                            ? "text-sm whitespace-pre-line text-white/70"
                            : "text-sm whitespace-pre-line text-slate-700/80"
                        }
                      >
                        {block.desc}
                      </p>
                    ) : null}
                    {block.bullets ? (
                      <ul
                        className={
                          isMinimalTab
                            ? "space-y-2 text-sm text-white/70"
                            : "space-y-2 text-sm text-slate-700/80"
                        }
                      >
                        {block.bullets.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {visibleLines && visibleLines.length > 0 ? (
                      <CommandBox
                        lines={visibleLines}
                        indexKey={`${section.kicker}-${blockIndex}`}
                        variant={activeTab === "ai-prompts" ? "prompt" : "command"}
                        expandable={isPromptTab && (block.code?.length ?? 0) > 5}
                        expanded={isPromptOpen}
                        onToggle={() => onTogglePrompt(promptKey)}
                      />
                    ) : null}
                  </div>
                </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </>
  );
}
