#!/usr/bin/env bash
set -euo pipefail

payload="$(cat)"

extract_patch_paths() {
  jq -r '
    .tool_input.command // ""
    | split("\n")[]
    | capture("^\\*\\*\\* (Add|Update) File: (?<path>.+)$")?
    | .path
  ' <<<"$payload"
}

extract_legacy_path() {
  jq -r '.tool_input.file_path // empty' <<<"$payload"
}

{
  extract_patch_paths
  extract_legacy_path
} \
  | awk 'NF && !seen[$0]++' \
  | while IFS= read -r file; do
      case "$file" in
        *.js|*.jsx|*.ts|*.tsx|*.vue)
          if [ -f "$file" ]; then
            npx eslint --fix "$file" 2>&1 | tail -5
          fi
          ;;
      esac
    done
