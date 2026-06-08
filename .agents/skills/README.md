# Project Skills

This repository keeps private, repo-specific agent skills in `.agents/skills/`.

## Layout

- `.agents/skills/` is the canonical skill directory.
- `.claude/skills` is a symlink to `.agents/skills` for Claude Code compatibility.

## Why This Layout

- Codex-style tooling can read `.agents/skills/`.
- Claude Code can read `.claude/skills/`.
- Keeping one real directory avoids maintaining duplicate skills.

## Maintenance

- Add, edit, rename, and delete skills under `.agents/skills/`.
- Do not edit through `.claude/skills/` when using Git pathspec-based commands.

## Git Note

Git may report `pathspec is beyond a symbolic link` if a command targets nested paths like `.claude/skills/foo/SKILL.md`.

Use repo-root operations instead:

```bash
git add -A .agents .claude
```

or simply:

```bash
git add -A
```
