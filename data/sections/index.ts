import type { Section, TabId } from "../types";
import { aiPromptsSections } from "./ai-prompts";
import { bunSections } from "./bun";
import { dbSections } from "./db";
import { gitSections } from "./git";
import { linksSections } from "./links";
import { npmSections } from "./npm";
import { startSections } from "./start";
import { tailwindSections } from "./tailwind";
import { toolboxSections } from "./toolbox";

export const sections: Record<TabId, Section[]> = {
  start: startSections,
  toolbox: toolboxSections,
  tailwind: tailwindSections,
  db: dbSections,
  "ai-prompts": aiPromptsSections,
  npm: npmSections,
  bun: bunSections,
  git: gitSections,
  links: linksSections,
};
