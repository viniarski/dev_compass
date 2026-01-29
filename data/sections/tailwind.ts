import type { Section } from "../types";

export const tailwindSections: Section[] = [
  {
    kicker: "Install",
    title: "Install Tailwind CSS with Next.js",
    blocks: [
      {
        title: "Create your project",
        desc:
          "Start with a new Next.js project (Create Next App).",
        code: [
          "npx create-next-app@latest my-project --typescript --eslint --app",
          "cd my-project",
        ],
        tone: "slate",
      },
      {
        title: "Install Tailwind CSS",
        desc: "Install @tailwindcss/postcss and peer dependencies.",
        code: ["npm install tailwindcss @tailwindcss/postcss postcss"],
        tone: "teal",
      },
      {
        title: "Configure PostCSS Plugins",
        desc: "Create postcss.config.mjs and add the plugin.",
        code: [
          "const config = {",
          "  plugins: {",
          "    \"@tailwindcss/postcss\": {},",
          "  },",
          "};",
          "export default config;",
        ],
        tone: "amber",
      },
      {
        title: "Import Tailwind CSS",
        desc: "Add this to ./app/globals.css.",
        code: ["@import \"tailwindcss\";"],
        tone: "slate",
      },
      {
        title: "Start your build process",
        desc: "Run the dev server.",
        code: ["npm run dev"],
        tone: "teal",
      },
      {
        title: "Start using Tailwind",
        desc: "Example component.",
        code: [
          "export default function Home() {",
          "  return (",
          "    <h1 className=\"text-3xl font-bold underline\">",
          "      Hello world!",
          "    </h1>",
          "  )",
          "}",
        ],
        tone: "amber",
      },
    ],
  },
];
