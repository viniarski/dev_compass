export type TabId =
  | "start"
  | "toolbox"
  | "tailwind"
  | "db"
  | "ai-prompts"
  | "npm"
  | "bun"
  | "git"
  | "links";

export type Block = {
  title: string;
  desc?: string;
  code?: string[];
  bullets?: string[];
  links?: LinkItem[];
  tone?: "teal" | "amber" | "slate";
};

export type LinkItem = {
  label: string;
  url: string;
  desc: string;
};

export type Section = {
  kicker: string;
  title: string;
  blocks: Block[];
};
