---
name: changelog
description: Generate a release changelog for getz3.dev by comparing origin/main and origin/dev branches. Use when the user asks for release notes, a changelog, or a summary of what changed between staging and production.
user-invocable: true
---

# Changelog Generator

Generate a concise changelog for the Z3 website by analyzing commits between `origin/main` (production) and `origin/dev` (staging).

## Workflow

### 1. Fetch latest remote branches

```bash
git fetch origin
```

### 2. Inspect commit differences

```bash
git log origin/main..origin/dev --no-merges --oneline
git log origin/main..origin/dev --no-merges --format="%H|||%s|||%b"
```

Read both commit subjects and bodies. Titles alone can miss deployment, SEO, or content context.

### 3. Group changes

Prefer a small number of user-relevant groups:

- Website content and copy
- UI and interaction polish
- SEO, sitemap, robots, and deploy behavior
- Maintenance, linting, dependencies, or build tooling

Skip implementation details that do not affect users, reviewers, or maintainers.

### 4. Write the changelog

If the user provides a version, use it. Otherwise ask for the version before writing a file.

- Filename: `CHANGELOG_v{version}.md` in the project root.
- If the file already exists, ask before overwriting.
- Keep the changelog tight: 3-6 bullets is usually enough for this site.

### 5. Verify

Run the relevant checks if the changelog accompanies release prep:

```bash
pnpm lint
pnpm typecheck
pnpm generate:staging
```

### 6. Report

Return the file path, number of commits analyzed, and the main release highlights.
