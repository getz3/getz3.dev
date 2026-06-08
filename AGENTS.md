# AGENTS.md

Core rules for AI agents in this repo. For setup, commands, tech stack, environments, and directory overview, read `README.md`.

## Implementation Rules

- Before adding UI or content, inspect existing pages, components, and styles to see whether the work can reuse or extend them.
- Prefer small, reusable components over duplicating large template blocks in pages.
- Keep page files focused on page data, layout composition, and SEO; move repeatable UI into components.
- Follow the existing visual language and CSS utilities before introducing new patterns.
- Do not add i18n, stores, APIs, server routes, or dependencies unless the task clearly requires them.
- Do not edit generated output: `.nuxt/`, `.output/`, `dist`, or `node_modules/`.

## UI Rules

- Use existing site CSS variables from `assets/css/tailwind.css` for colors and surfaces.
- Use Nuxt UI controls for interactive elements when practical.
- If adding a client-rendered icon, add it to `nuxt.config.ts` `icon.clientBundle.icons`.
- Add `aria-label` to icon-only buttons/links.
- Keep code examples horizontally scrollable and copyable; command text must remain exact.

## Deployment-Sensitive Changes

When changing SEO, robots, sitemap, site URLs, or deploy behavior, verify both staging and production build scripts.
