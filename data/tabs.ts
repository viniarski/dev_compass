import type { TabId } from "./types";

export const tabs: { id: TabId; label: string; subtitle: string }[] = [
  {
    id: "start",
    label: "Start",
    subtitle: "From zero to a running Next.js app in minutes.",
  },
  {
    id: "toolbox",
    label: "Toolbox",
    subtitle: "Daily drivers for setup and diagnostics.",
  },
  {
    id: "tailwind",
    label: "Tailwind",
    subtitle: "Utility snippets and layout recipes you reuse often.",
  },
  {
    id: "db",
    label: "DB",
    subtitle: "Supabase types, schema, and backups.",
  },
  {
    id: "ai-prompts",
    label: "AI Prompts",
    subtitle: "Reusable prompts for shipping faster with confidence.",
  },
  {
    id: "npm",
    label: "npm",
    subtitle: "Testing, maintenance, and release workflows.",
  },
  {
    id: "bun",
    label: "Bun",
    subtitle: "Bun-first setup and scripts.",
  },
  {
    id: "git",
    label: "Git",
    subtitle: "Version control safety checks and recovery.",
  },
  {
    id: "links",
    label: "Links",
    subtitle: "Your daily driver pages, grouped and documented.",
  },
];
