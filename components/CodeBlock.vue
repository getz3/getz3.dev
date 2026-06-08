<script setup lang="ts">
const props = defineProps<{
  lines: string[]
  lang?: string
}>()

const copied = ref(false)

async function copy() {
  try {
    await navigator.clipboard.writeText(props.lines.join('\n'))
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
  catch {
    // Clipboard unavailable (e.g. insecure context) — fail silently.
  }
}

// Keywords matched anywhere by word boundary (safe for these languages).
const KEYWORDS: Record<string, string[]> = {
  python: ['import', 'from', 'as', 'print', 'def', 'class', 'return', 'None', 'True', 'False'],
}

// Commands highlighted only when they lead a line (avoids matching paths like ./zig-out).
const COMMANDS: Record<string, string[]> = {
  bash: ['zig', 'aws', 'export', 'python', 'pip', 'cd', 'curl'],
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function highlightPlain(text: string, lang?: string) {
  let out = escapeHtml(text)

  const keywords = lang ? KEYWORDS[lang] : undefined
  if (keywords?.length) {
    const re = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g')
    out = out.replace(re, '<span class="tok-keyword">$1</span>')
  }

  const commands = lang ? COMMANDS[lang] : undefined
  if (commands?.length) {
    const re = new RegExp(`^(\\s*)(${commands.join('|')})\\b`)
    out = out.replace(re, '$1<span class="tok-keyword">$2</span>')
  }

  if (lang === 'bash') {
    out = out.replace(/(^|\s)(--?[A-Z][\w-]*)/gi, '$1<span class="tok-flag">$2</span>')
  }

  return out
}

function highlight(line: string, lang?: string) {
  if (line === '')
    return ''
  if (line.trimStart().startsWith('#'))
    return `<span class="tok-comment">${escapeHtml(line)}</span>`

  // Pull string literals out first so keyword matching never touches them.
  const stringRe = /b?'[^']*'|"[^"]*"/g
  const parts: string[] = []
  let lastIndex = 0
  for (const match of line.matchAll(stringRe)) {
    const start = match.index ?? 0
    parts.push(highlightPlain(line.slice(lastIndex, start), lang))
    parts.push(`<span class="tok-string">${escapeHtml(match[0])}</span>`)
    lastIndex = start + match[0].length
  }
  parts.push(highlightPlain(line.slice(lastIndex), lang))
  return parts.join('')
}

const html = computed(() => props.lines.map(line => highlight(line, props.lang)).join('\n'))
</script>

<template>
  <div class="code-panel flex h-full min-w-0 flex-col overflow-hidden">
    <div
      class="
        flex shrink-0 items-center justify-between border-b border-white/5 px-4
        py-2.5
      "
    >
      <span class="font-mono text-xs text-(--site-faint)">{{ lang ?? 'bash' }}</span>
      <button
        type="button"
        class="
          inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs
          text-(--site-muted) transition-colors
          hover:text-(--site-ink)
        "
        :aria-label="copied ? 'Copied' : 'Copy to clipboard'"
        @click="copy"
      >
        <UIcon
          :name="copied ? 'lucide:check' : 'lucide:copy'"
          class="size-3.5"
          :class="copied ? 'text-emerald-400' : ''"
        />
        {{ copied ? 'Copied' : 'Copy' }}
      </button>
    </div>

    <div class="code-scroll flex-1 overflow-x-auto p-4">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <pre class="font-mono text-sm/7"><code v-html="html" /></pre>
    </div>
  </div>
</template>
