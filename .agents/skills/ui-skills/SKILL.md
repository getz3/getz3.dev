---
name: ui-skills
description: UI development constraints for the getz3.dev Nuxt site. Auto-apply when creating or modifying Vue components, page layouts, styles, animations, or interactive controls.
user-invocable: false
---

# UI Skills

Use these rules when changing the Z3 website UI.

## Stack

- Use Nuxt 4, Vue 3, TypeScript, Nuxt UI v4, and Tailwind CSS 4.
- Use existing project patterns before introducing new components or dependencies.
- Use Nuxt UI components for controls with keyboard or focus behavior.
- Use `<UIcon name="collection:icon" />` for icons.
- Keep icons used in client-rendered UI listed in `nuxt.config.ts` under `icon.clientBundle.icons`.

## Visual System

- Preserve the current compact dark developer-site feel.
- Prefer existing site variables from `assets/css/tailwind.css`: `--site-bg`, `--site-ink`, `--site-muted`, `--site-faint`, `--site-border`, `--site-panel`, and `--site-zig`.
- Keep the accent color restrained and aligned with the Zig amber/orange identity.
- Avoid adding decorative gradients, blobs, large blurred shapes, or broad palette shifts unless explicitly requested.
- Use Tailwind defaults for spacing, radius, and shadows before arbitrary values.

## Layout

- Write mobile-first styles and use Tailwind default breakpoints only: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`.
- Use stable dimensions for repeated UI, code panels, icon buttons, and cards so hover/copy states do not shift layout.
- Keep text within its container at mobile and desktop widths.
- Do not use `h-screen`; use `min-h-screen` or `h-dvh` depending on the need.
- Use `size-*` for square icons/buttons when possible.

## Components and Accessibility

- Add `aria-label` to icon-only buttons and links.
- Use semantic landmarks (`header`, `main`, `section`, `nav`) and useful `aria-label` values for navigation.
- External links should use `target="_blank"` and `rel="noreferrer"`.
- Use `NuxtLink` for internal navigation and Nuxt UI `to` props where already established.
- Never block paste in inputs or textareas.
- Show errors next to the action that produced them if forms are introduced.

## Code Blocks

- Preserve command text exactly; do not wrap commands in a way that changes copy behavior.
- Keep code panels horizontally scrollable.
- If adding syntax highlighting in `components/CodeBlock.vue`, escape HTML before injecting highlighted output.
- Clipboard failures may be silent for non-critical copy buttons.

## Motion

- Use motion sparingly and only where it improves comprehension.
- Animate compositor properties (`transform`, `opacity`) rather than layout properties.
- Keep interaction feedback short, generally under 200ms.
- Respect `prefers-reduced-motion` when adding custom looping or large animations.
- Avoid animating large blurred or backdrop-filter surfaces.

## Content

- Keep copy accurate for Z3: minimalist S3-compatible server in Zig, useful for local development and testing.
- Do not imply Z3 is production-ready, distributed, or a full S3 replacement unless the upstream project changes.
- Keep examples aligned with defaults used on the page: localhost endpoint and `z3admin` credentials.
