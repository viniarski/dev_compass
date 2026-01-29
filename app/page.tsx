"use client";

import { useMemo, useState } from "react";
import { LinksGrid } from "../components/LinksGrid";
import { SectionAccordion } from "../components/SectionAccordion";
import { TabChips } from "../components/TabChips";
import { sections } from "../data/sections";
import { tabs } from "../data/tabs";
import type { TabId } from "../data/types";

const minimalTabs = new Set<TabId>([
  "ai-prompts",
  "start",
  "toolbox",
  "tailwind",
  "db",
  "npm",
  "bun",
  "git",
]);

function buildSectionOpen() {
  const entries = Object.entries(sections).flatMap(([tabId, tabSections]) =>
    tabSections.map((section) => {
      const key = `${tabId}:${section.kicker}`;
      const isInstall = tabId === "start" && section.kicker === "Install";
      return [key, !isInstall] as const;
    })
  );
  return Object.fromEntries(entries);
}

function buildPromptOpen() {
  const entries = Object.entries(sections).flatMap(([tabId, tabSections]) =>
    tabSections.flatMap((section, sectionIndex) =>
      section.blocks.map((_, blockIndex) => {
        const key = `${tabId}:${section.kicker}:${sectionIndex}:${blockIndex}`;
        return [key, false] as const;
      })
    )
  );
  return Object.fromEntries(entries);
}

export default function Home() {
  const [active, setActive] = useState<TabId>("start");
  const [sectionOpen, setSectionOpen] = useState<Record<string, boolean>>(
    buildSectionOpen
  );
  const [promptOpen, setPromptOpen] = useState<Record<string, boolean>>(
    buildPromptOpen
  );

  const activeTab = useMemo(
    () => tabs.find((tab) => tab.id === active) ?? tabs[0],
    [active]
  );

  const isMinimalTab = minimalTabs.has(active);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.2),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(245,158,11,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.95),rgba(15,23,42,0.75)_40%,rgba(2,6,23,0.95))]" />
      </div>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-14 md:px-10 lg:px-14">
        <header className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-teal-200">
              Dev Compass
            </span>
          </div>
          <TabChips tabs={tabs} active={active} onChange={setActive} />
        </header>

        <div className="grid gap-10">
          {activeTab.id === "links" ? (
            <LinksGrid sections={sections.links} />
          ) : (
            <SectionAccordion
              sections={sections[active]}
              activeTab={active}
              sectionOpen={sectionOpen}
              onToggle={(key) =>
                setSectionOpen((prev) => ({ ...prev, [key]: !prev[key] }))
              }
              promptOpen={promptOpen}
              onTogglePrompt={(key) =>
                setPromptOpen((prev) => ({ ...prev, [key]: !prev[key] }))
              }
              isMinimalTab={isMinimalTab}
            />
          )}
        </div>
      </main>
    </div>
  );
}
