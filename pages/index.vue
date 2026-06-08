<script setup lang="ts">
const projectLinks = [
  {
    label: 'Source',
    href: 'https://github.com/getz3/z3',
    icon: 'lucide:github',
  },
  {
    label: 'Zig',
    href: 'https://ziglang.org/',
    icon: 'simple-icons:zig',
  },
]

const statusItems = [
  'Nuxt static scaffold',
  'Vercel preview target',
  'Design references archived',
]

useSeoMeta({
  title: 'Minimalist S3 server in Zig',
  description: 'Z3 is a minimalist S3 server in Zig.',
})
</script>

<template>
  <div class="min-h-screen overflow-hidden text-neutral-950">
    <header class="site-container flex items-center justify-between gap-4 py-6">
      <NuxtLink to="/" class="flex items-center gap-3" aria-label="Z3 home">
        <span
          class="
            flex size-10 items-center justify-center rounded-md bg-neutral-900
            text-lg font-black text-amber-300
          "
        >
          Z
        </span>
        <span class="text-lg font-bold">Z3</span>
      </NuxtLink>

      <nav class="flex items-center gap-2" aria-label="Project links">
        <UButton
          v-for="link in projectLinks"
          :key="link.href"
          :to="link.href"
          target="_blank"
          rel="noreferrer"
          color="neutral"
          variant="ghost"
          size="md"
          :icon="link.icon"
          :aria-label="link.label"
        />
      </nav>
    </header>

    <main>
      <section
        class="
          site-container grid min-h-[calc(100vh-88px)] items-center gap-12 py-16
          lg:grid-cols-[1.05fr_0.95fr] lg:py-24
        "
      >
        <div>
          <Motion
            :initial="{ opacity: 0, y: 18 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.55 }"
          >
            <p
              class="
                mb-5 inline-flex items-center gap-2 rounded-md border
                border-neutral-300 bg-white/65 px-3 py-1.5 text-sm font-medium
                text-neutral-700 shadow-sm
              "
            >
              <UIcon name="lucide:check-circle-2" class="size-4 text-amber-500" />
              Static preview scaffold is ready
            </p>

            <h1
              class="
                max-w-3xl text-5xl leading-[1.02] font-black text-balance
                sm:text-6xl
                lg:text-7xl
              "
            >
              Minimalist S3 server in Zig.
            </h1>

            <p
              class="
                mt-7 max-w-2xl text-lg/8 text-neutral-700
                sm:text-xl
              "
            >
              Z3 keeps the project website small for now: a clean Nuxt static base, ready for Vercel previews and the next design pass.
            </p>

            <div
              class="
                mt-9 flex flex-col gap-3
                sm:flex-row
              "
            >
              <UButton
                to="https://github.com/getz3/z3"
                target="_blank"
                rel="noreferrer"
                color="primary"
                variant="solid"
                size="xl"
                trailing-icon="lucide:arrow-up-right"
              >
                View Source
              </UButton>

              <UButton
                to="https://github.com/getz3/getz3.dev"
                target="_blank"
                rel="noreferrer"
                color="neutral"
                variant="outline"
                size="xl"
                trailing-icon="lucide:arrow-up-right"
              >
                Website Repo
              </UButton>
            </div>
          </Motion>
        </div>

        <aside class="relative">
          <div
            class="absolute inset-0 translate-8 rounded-lg bg-amber-300/50"
          />
          <div
            class="
              relative rounded-lg border border-neutral-800 bg-neutral-950 p-5
              shadow-2xl
            "
          >
            <div
              class="
                mb-5 flex items-center justify-between border-b border-white/10
                pb-4
              "
            >
              <div class="flex gap-2">
                <span class="size-3 rounded-full bg-red-400" />
                <span class="size-3 rounded-full bg-amber-300" />
                <span class="size-3 rounded-full bg-emerald-400" />
              </div>
              <div class="flex items-center gap-2 text-sm text-neutral-400">
                <UIcon name="lucide:terminal" class="size-4" />
                getz3.dev
              </div>
            </div>

            <pre class="overflow-x-auto text-sm/7 text-neutral-200"><code><span
              class="text-neutral-500"
            ># Build</span>
pnpm install --frozen-lockfile
pnpm generate

<span class="text-neutral-500"># Output</span>
.output/public

<span class="text-neutral-500"># Deploy</span>
pnpm dlx vercel</code></pre>
          </div>

          <ul
            v-auto-animate class="
              mt-6 grid gap-3
              sm:grid-cols-3
              lg:grid-cols-1
            "
          >
            <li
              v-for="item in statusItems"
              :key="item"
              class="
                flex items-center gap-3 rounded-md border border-neutral-300
                bg-white/70 px-4 py-3 text-sm font-medium text-neutral-800
                shadow-sm
              "
            >
              <UIcon name="lucide:box" class="size-4 text-amber-600" />
              {{ item }}
            </li>
          </ul>
        </aside>
      </section>
    </main>
  </div>
</template>
