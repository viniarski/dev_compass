import type { Section } from "../types";

export const npmSections: Section[] = [
  {
    kicker: "Testing",
    title: "Checks and coverage",
    blocks: [
      {
        title: "Typecheck",
        code: [
          "npx tsc --noEmit",
          "npx tsc --noEmit --watch --preserveWatchOutput",
        ],
        tone: "slate",
      },
      {
        title: "Tests",
        code: ["npm run test:e2e", "npx vitest", "npm run test:coverage"],
        tone: "teal",
      },
      {
        title: "Lint + format",
        code: ["npm run lint -- --fix", "npx prettier --write ."],
        tone: "amber",
      },
    ],
  },
  {
    kicker: "Dev server",
    title: "Run modes",
    blocks: [
      {
        title: "Turbo + ports",
        code: ["npm run dev -- --turbo", "npm run dev -- -p 3001"],
        tone: "teal",
      },
      {
        title: "Prod mode",
        code: ["npm run build && npm run start"],
        tone: "slate",
      },
      {
        title: "Bundle analysis",
        code: ["npx next build && npx next-bundle-analyzer"],
        tone: "amber",
      },
    ],
  },
  {
    kicker: "Maintenance",
    title: "Cleanups and updates",
    blocks: [
      {
        title: "Clean install",
        code: ["rm -rf node_modules", "rm package-lock.json", "npm install"],
        tone: "teal",
      },
      {
        title: "Clear Next cache",
        code: ["rm -rf .next/cache"],
        tone: "amber",
      },
      {
        title: "Dependencies",
        code: [
          "npm outdated",
          "npm update",
          "npx npm-check-updates -u && npm install",
        ],
        tone: "slate",
      },
    ],
  },
];
