import type { Section } from "../types";

export const dbSections: Section[] = [
  {
    kicker: "DB",
    title: "Types and backups",
    blocks: [
      {
        title: "Generate types",
        code: [
          "supabase gen types typescript --linked --schema public > types/supabase.ts",
        ],
        tone: "teal",
      },
      {
        title: "Dump schema",
        code: ["supabase db dump --schema public --file schema.sql"],
        tone: "slate",
      },
      {
        title: "Backup",
        code: [
          "supabase login",
          "supabase link --project-ref <PROJECT_ID>",
          "supabase db dump -f backup_$(date+%Y%m%d).sql",
        ],
        tone: "amber",
      },
      {
        title: "Update CLI",
        code: ["supabase --version", "brew upgrade supabase/tap/supabase"],
        tone: "slate",
      },
    ],
  },
];
