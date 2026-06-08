# getz3.dev

Website for the [Z3](https://github.com/getz3/z3) project.

## Environments

| Environment | URL                            | Notes                            |
| ----------- | ------------------------------ | -------------------------------- |
| Production  | <https://getz3.dev>            | Reserved; final hosting TBD      |
| Staging     | <https://getz3-dev.vercel.app> | Updated when `dev` is deployed   |
| PR Preview  | Generated per pull request     | Posted as a pull request comment |

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

# Staging build used by GitHub Actions
pnpm generate:test

# Preview generated output
pnpm preview
```

Output: `.output/public/`

## Branching & Preview Deploy

| Branch    | Purpose                  | Deploy                                  |
| --------- | ------------------------ | --------------------------------------- |
| `dev`     | Staging / default branch | GitHub Action deploys to Vercel         |
| `main`    | Production placeholder   | To be confirmed after the site is ready |
| `codex/*` | Working branches         | PR to `dev`, CI + Vercel preview        |

Pull requests to `dev` run CI and create a temporary Vercel preview through GitHub Actions. Merges to `dev` update the fixed dev URL. The workflow builds locally in Actions, prepares `.vercel/output/static`, and deploys with `vercel deploy --prebuilt`.

### Workflow

1. Create a working branch from `dev`
2. PR to `dev` -> CI checks + Vercel preview
3. Merge to `dev` -> fixed staging deploy updates
4. Production deploy path is decided after the site is ready

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
