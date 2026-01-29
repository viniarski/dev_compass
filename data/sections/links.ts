import type { Section } from "../types";

export const linksSections: Section[] = [
  {
    kicker: "Platforms",
    title: "Deploy, data, and infrastructure",
    blocks: [
      {
        title: "Cloud & backend",
        desc: "Core platforms you reach for when shipping production apps.",
        links: [
          {
            label: "Vercel",
            url: "https://vercel.com/",
            desc: "Frontend cloud for building and deploying modern web experiences.",
          },
          {
            label: "Supabase",
            url: "https://supabase.com/",
            desc: "Postgres development platform with auth, storage, APIs, and realtime.",
          },
          {
            label: "Google Cloud Console",
            url: "https://console.cloud.google.com/",
            desc: "Google Cloud dashboard for deploying apps, data, and AI workloads.",
          },
          {
            label: "Neon",
            url: "https://neon.com/",
            desc: "Serverless Postgres built for modern engineering teams.",
          },
          {
            label: "Upstash",
            url: "https://upstash.com/",
            desc: "Serverless data platform for Redis, queues, and edge workloads.",
          },
        ],
        tone: "slate",
      },
    ],
  },
  {
    kicker: "Operations",
    title: "Observe, measure, and message",
    blocks: [
      {
        title: "Monitoring & analytics",
        desc: "Keep uptime and product insights in one quick checklist.",
        links: [
          {
            label: "Sentry",
            url: "https://sentry.io/",
            desc: "Error tracking and performance monitoring for apps.",
          },
          {
            label: "UptimeRobot",
            url: "https://uptimerobot.com/",
            desc: "Uptime monitoring and alerts for sites and endpoints.",
          },
          {
            label: "PostHog",
            url: "https://posthog.com/",
            desc: "Product analytics with session replay, feature flags, and experiments.",
          },
          {
            label: "Resend",
            url: "https://resend.com/",
            desc: "Email API for developers to send transactional or marketing mail.",
          },
        ],
        tone: "amber",
      },
    ],
  },
  {
    kicker: "Workflow",
    title: "Dev stack essentials",
    blocks: [
      {
        title: "Code + runtime",
        desc: "Where you keep repos and move fast locally.",
        links: [
          {
            label: "GitHub",
            url: "https://github.com/",
            desc: "Developer platform to build, scale, and ship software.",
          },
          {
            label: "Bun",
            url: "https://bun.com/",
            desc: "Fast all-in-one JavaScript toolkit (runtime, bundler, tests, packages).",
          },
        ],
        tone: "teal",
      },
    ],
  },
  {
    kicker: "Design",
    title: "Design references and assets",
    blocks: [
      {
        title: "Visual inspiration",
        desc: "Grab visuals and UI patterns without context switching.",
        links: [
          {
            label: "Mobbin",
            url: "https://mobbin.com/",
            desc: "UI/UX inspiration library with real-world app flows.",
          },
          {
            label: "Figma",
            url: "https://www.figma.com/",
            desc: "Collaborative design and prototyping for product teams.",
          },
          {
            label: "Unsplash",
            url: "https://unsplash.com/",
            desc: "Free high-quality photos and visual assets.",
          },
          {
            label: "AnyWebP",
            url: "https://anywebp.com/",
            desc: "Free WebP converter that runs in the browser with no uploads.",
          },
        ],
        tone: "slate",
      },
      {
        title: "Design tools",
        desc: "Quick utilities for icons, diagrams, and layout systems.",
        links: [
          {
            label: "Favicon Converter",
            url: "https://favicon.io/favicon-converter/",
            desc: "Generate favicons from PNG, JPG, or SVG files.",
          },
          {
            label: "React Icons",
            url: "https://react-icons.github.io/react-icons/",
            desc: "Icon packs for React with a single import API.",
          },
          {
            label: "Relume",
            url: "https://www.relume.io/",
            desc: "Library of website sections and style guides for builders.",
          },
          {
            label: "draw.io",
            url: "https://www.drawio.com/",
            desc: "Free online diagramming for flowcharts and systems.",
          },
        ],
        tone: "slate",
      },
    ],
  },
  {
    kicker: "AI",
    title: "Assistant lineup",
    blocks: [
      {
        title: "Chat assistants",
        desc: "Shortcuts for brainstorming, coding, and research.",
        links: [
          {
            label: "ChatGPT",
            url: "https://chatgpt.com/",
            desc: "OpenAI’s AI assistant for everyday tasks and coding help.",
          },
          {
            label: "Claude",
            url: "https://claude.ai/",
            desc: "Anthropic’s assistant for writing, analysis, and code.",
          },
          {
            label: "Grok",
            url: "https://grok.com/",
            desc: "xAI’s assistant, available on web and mobile.",
          },
          {
            label: "Gemini",
            url: "https://gemini.google.com/",
            desc: "Google’s Gemini AI models and chat experience.",
          },
        ],
        tone: "amber",
      },
    ],
  },
  {
    kicker: "Web builders",
    title: "Ship landing pages fast",
    blocks: [
      {
        title: "No/low-code builders",
        desc: "Quickly stand up marketing pages or prototypes.",
        links: [
          {
            label: "Framer",
            url: "https://framer.com/",
            desc: "Site builder with CMS, animations, and fast publishing.",
          },
          {
            label: "Webflow",
            url: "https://webflow.com/",
            desc: "Visual website builder and CMS for custom sites.",
          },
          {
            label: "Lovable",
            url: "https://lovable.dev/",
            desc: "Build apps and websites by chatting with AI.",
          },
        ],
        tone: "teal",
      },
    ],
  },
  {
    kicker: "Launch",
    title: "Launch and community",
    blocks: [
      {
        title: "Go live & meet founders",
        desc: "Places to ship, validate, and meet peers.",
        links: [
          {
            label: "Product Hunt",
            url: "https://www.producthunt.com/",
            desc: "Discover and launch new tech products.",
          },
          {
            label: "Indie Hackers",
            url: "https://www.indiehackers.com/",
            desc: "Community for building profitable online businesses.",
          },
          {
            label: "Gamma",
            url: "https://gamma.app/",
            desc: "AI tool for presentations, docs, and fast websites.",
          },
        ],
        tone: "slate",
      },
    ],
  },
];
