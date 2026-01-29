import type { Section } from "../types";

export const toolboxSections: Section[] = [
  {
    kicker: "Schema",
    title: "Schema view",
    blocks: [
      {
        title: "Tree view",
        code: ["tree -I 'node_modules|.next'"],
        tone: "slate",
      },
    ],
  },
  {
    kicker: "Security",
    title: "SSH keychain",
    blocks: [
      {
        title: "Fix password prompts",
        code: [
          "eval \"$(ssh-agent -s)\"",
          "ssh-add --apple-use-keychain ~/.ssh/id_ed25519",
          "ssh-add -K ~/.ssh/id_ed25519",
        ],
        tone: "teal",
      },
    ],
  },
  {
    kicker: "Editor",
    title: "VS Code",
    blocks: [
      {
        title: "Enable CLI",
        desc: "Open VS Code from terminal.",
        code: ["code ."],
        tone: "slate",
      },
      {
        title: "Codex",
        desc: "Open Codex CLI.",
        code: ["codex"],
        tone: "teal",
      },
      {
        title: "OpenCode",
        desc: "OpenCode AI.",
        code: ["https://opencode.ai/"],
        tone: "slate",
      },
      {
        title: "Claude",
        desc: "Open Claude CLI.",
        code: ["claude"],
        tone: "amber",
      },
    ],
  },
  {
    kicker: "Diagnostics",
    title: "Stay sane while debugging",
    blocks: [
      {
        title: "Ports & processes",
        code: [
          "lsof -i :3000",
          "kill -9 $(lsof -t -i :3000)",
          "ps aux | rg node",
        ],
        tone: "amber",
      },
      {
        title: "System health",
        code: ["df -h", "du -sh ./*", "brew doctor"],
        tone: "teal",
      },
    ],
  },
];
