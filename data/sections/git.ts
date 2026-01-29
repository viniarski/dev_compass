import type { Section } from "../types";

export const gitSections: Section[] = [
  {
    kicker: "Setup",
    title: "Configure Git and GitHub",
    blocks: [
      {
        title: "Register for GitHub",
        desc:
          "Create a free GitHub account to use as your VCS provider.",
        code: ["https://github.com/signup"],
        tone: "slate",
      },
      {
        title: "Configure Git locally",
        desc:
          "Replace the placeholders with your details. Your email must match GitHub.",
        code: [
          "git config --global user.name \"YOUR FULL NAME\"",
          "git config --global user.email \"YOUR EMAIL ADDRESS\"",
          "git config --global init.defaultBranch main",
        ],
        tone: "teal",
      },
      {
        title: "Generate SSH keys",
        desc:
          "Generate a key pair and keep the private key safe. You can press Enter for defaults.",
        code: ["ssh-keygen"],
        tone: "amber",
      },
      {
        title: "Print your public key",
        desc:
          "Copy the output and add it in GitHub: Settings > SSH and GPG keys > New SSH key.",
        code: ["cat ~/.ssh/id_rsa.pub", "cat ~/.ssh/id_ed25519.pub"],
        tone: "slate",
      },
      {
        title: "Confirm it works",
        desc: "Type yes when asked to confirm the host key.",
        code: ["ssh git@github.com"],
        tone: "teal",
      },
    ],
  },
  {
    kicker: "Daily",
    title: "Common pushes",
    blocks: [
      {
        title: "Commit + push",
        code: ["git add .", "git commit -m \"update\"", "git push"],
        tone: "teal",
      },
      {
        title: "Branch + commit",
        code: [
          "git checkout -b feat/my-change",
          "git add .",
          "git commit -m \"update\"",
          "git push -u origin feat/my-change",
        ],
        tone: "amber",
      },
      {
        title: "Quick status",
        code: ["git status -sb", "git log --oneline -5"],
        tone: "slate",
      },
    ],
  },
  {
    kicker: "Recovery",
    title: "Reset a commit",
    blocks: [
      {
        title: "Force reset",
        code: [
          "git fetch origin",
          "git checkout main",
          "git reset --hard 3daxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          "git push --force-with-lease origin main",
        ],
        tone: "amber",
      },
    ],
  },
];
