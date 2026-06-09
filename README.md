# getz3.dev

Website for the [Z3](https://github.com/getz3/z3) project.

## Environments

| Environment | URL                         | Notes                        |
| ----------- | --------------------------- | ---------------------------- |
| Production  | <https://getz3.dev>         | Public site                  |
| Staging     | <https://staging.getz3.dev> | Preview of the `dev` branch  |
| PR Preview  | Generated per pull request  | Temporary preview for review |

## Tech Stack

- **Framework**: Nuxt 4 + Vue 3 + TypeScript
- **UI**: Nuxt UI v4 + Tailwind CSS 4
- **SEO**: `@nuxtjs/robots` + `@nuxtjs/sitemap`
- **Motion**: `motion-v` + `@formkit/auto-animate`
- **Runtime**: Node.js 22 + pnpm 10.16.1

## Setup

```bash
# Node.js 22+ required (see .nvmrc)
nvm use

# Enable Corepack (auto-uses pnpm version from packageManager field)
corepack enable

# Install dependencies
pnpm install --frozen-lockfile
```

## Development

```bash
# Dev server at localhost:3000
pnpm dev

# Lint
pnpm lint

# Type check
pnpm typecheck
```

## Build (SSG)

```bash
# Static build
pnpm generate

# Staging build
pnpm generate:staging

# Production build
pnpm generate:prod

# Preview generated output
pnpm preview
```

Output: `.output/public/`

## Project Structure

```bash
├── .github/workflows/     # CI and Vercel preview deploy
├── _references/initial/   # Initial logo/prototype references, not public assets
├── assets/css/            # Tailwind entry styles
├── pages/                 # Nuxt routes
├── app.vue                # App shell
├── app.config.ts          # Nuxt UI theme tokens
└── nuxt.config.ts         # Nuxt modules and static-site config
```
