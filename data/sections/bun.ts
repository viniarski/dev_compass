import type { Section } from "../types";

export const bunSections: Section[] = [
  {
    kicker: "Setup",
    title: "Bun starter",
    blocks: [
      {
        title: "Create + run",
        code: [
          "bun create next-app@latest my-bun-app",
          "cd my-bun-app",
          "bun --bun run dev",
        ],
        tone: "slate",
      },
      {
        title: "Run & build",
        code: ["bun run dev", "bun run lint", "bun run build"],
        tone: "teal",
      },
    ],
  },
];
