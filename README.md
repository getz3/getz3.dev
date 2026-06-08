# getz3.dev

Website for the [Z3](https://github.com/getz3/z3) project.

## Setup

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Static Build

```bash
pnpm generate
```

The static output is generated into `.output/public`.

## Branching & Preview Deploy

| Branch | Purpose                  | Deploy                                  |
| ------ | ------------------------ | --------------------------------------- |
| `dev`  | Staging / default branch | GitHub Action deploys to Vercel         |
| `main` | Production placeholder   | To be confirmed after the site is ready |

Pull requests to `dev` run CI and create a Vercel preview through GitHub Actions. The workflow builds locally in Actions, prepares `.vercel/output/static`, and deploys with `vercel deploy --prebuilt`.

Required GitHub Actions secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
