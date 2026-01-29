import type { Section } from "../types";

export const startSections: Section[] = [
  {
    kicker: "Install",
    title: "",
    blocks: [
      {
        title: "",
        desc:
          "Installing Homebrew",
        code: [
          "/bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\"",
        ],
        tone: "teal",
      },
      {
        title: "",
        desc:
          "Extra steps:",
        code: [
          "echo 'eval \"$(which brew) shellenv\"' >> ~/.zshrc",
          "source ~/.zshrc",
        ],
        tone: "slate",
      },
      {
        title: "",
        desc: "Confirm brew is installed correctly:",
        code: ["brew doctor"],
        tone: "amber",
      },
      {
        title: "",
        desc:
          "Installing additional tools:",
        code: ["brew install tree"],
        tone: "slate",
      },
      {
        title: "",
        desc: "Installing oh-my-zsh",
        code: [
          "sh -c \"$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)\"",
        ],
        tone: "teal",
      },
      {
        title: "",
        desc: "Install NVM",
        code: [
          "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash",
          "source ~/.zshrc",
        ],
        tone: "slate",
      },
      {
        title: "",
        desc: "Install Node.js 22.x",
        code: ["nvm install 22", "node --version"],
        tone: "amber",
      },
    ],
  },
  {
    kicker: "Project",
    title: "Create a Next.js app",
    blocks: [
      {
        title: "Bun starter",
        desc: "Lightning-fast create flow with sensible defaults.",
        code: [
          "bun create next-app@latest my-bun-app",
          "cd my-bun-app",
          "bun --bun run dev",
        ],
        tone: "slate",
      },
      {
        title: "npm starter",
        desc: "Classic setup with the official initializer.",
        code: [
          "npx create-next-app@latest my_app",
          "cd my_app",
          "npm run dev",
        ],
        tone: "teal",
      },
    ],
  },
];
