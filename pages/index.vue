<script setup lang="ts">
const repoUrl = 'https://github.com/getz3/z3'

const navLinks = [
  { label: 'Quick Start', href: '#quick-start' },
  { label: 'Usage', href: '#usage' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'FAQs', href: '#faq' },
]

const features = [
  {
    icon: 'lucide:zap',
    title: 'Tiny & Fast',
    body: 'A single small binary built in Zig, running on the zio async coroutine runtime.',
  },
  {
    icon: 'lucide:shield-check',
    title: 'SigV4 Compatible',
    body: 'Full AWS Signature V4 auth — works with aws-cli, boto3, and major S3 SDKs.',
  },
  {
    icon: 'lucide:boxes',
    title: 'Core S3 API',
    body: 'Buckets and objects, ListObjectsV2, multipart uploads, range requests, batch delete.',
  },
  {
    icon: 'lucide:workflow',
    title: 'Simple by Design',
    body: 'A polyrole finite-state-machine core with plain file-backed local storage.',
  },
]

const buildLines = [
  '# Requires Zig 0.16',
  '',
  '# Build a release binary',
  'zig build -Doptimize=ReleaseFast',
  '',
  '# Run (listens on http://localhost:9000)',
  './zig-out/bin/z3',
  '',
  '# Run with options',
  './zig-out/bin/z3 --port=9000 --data-dir=./data --tmp=./tmp',
]

const awsLines = [
  'export AWS_ACCESS_KEY_ID=minioadmin',
  'export AWS_SECRET_ACCESS_KEY=minioadmin',
  '',
  'aws --endpoint-url http://localhost:9000 s3 mb s3://mybucket',
  'aws --endpoint-url http://localhost:9000 s3 cp file.txt s3://mybucket/',
  'aws --endpoint-url http://localhost:9000 s3 ls s3://mybucket/ --recursive',
  'aws --endpoint-url http://localhost:9000 s3 cp s3://mybucket/file.txt ./',
  'aws --endpoint-url http://localhost:9000 s3 rm s3://mybucket/file.txt',
]

const botoLines = [
  'import boto3',
  '',
  's3 = boto3.client(\'s3\',',
  '    endpoint_url=\'http://localhost:9000\',',
  '    aws_access_key_id=\'minioadmin\',',
  '    aws_secret_access_key=\'minioadmin\'',
  ')',
  '',
  's3.create_bucket(Bucket=\'test\')',
  's3.put_object(Bucket=\'test\', Key=\'hello.txt\', Body=b\'world\')',
  'print(s3.get_object(Bucket=\'test\', Key=\'hello.txt\')[\'Body\'].read())',
]

const facts = [
  { icon: 'lucide:server', label: 'Endpoint', value: 'http://localhost:9000' },
  { icon: 'lucide:folder', label: 'Data Directory', value: './data' },
  { icon: 'lucide:key-round', label: 'Default Credentials', value: 'minioadmin / minioadmin' },
]

const supported = [
  'Buckets — create, list, delete',
  'Objects — PUT, GET, HEAD, DELETE',
  'ListObjectsV2 (prefix, delimiter, pagination)',
  'Multipart uploads for large files',
  'Range requests (206 Partial Content)',
  'Batch delete & HeadBucket',
  'SigV4 auth with admin / writer / reader roles',
]

const underDevelopment = [
  'Versioning',
  'Lifecycle policies',
  'Bucket ACLs',
  'Pre-signed URLs',
  'Object tagging',
  'Encryption',
]

const projectLinks = [
  { icon: 'lucide:github', label: 'Source Code', desc: 'github.com/getz3/z3', href: repoUrl },
  { icon: 'lucide:book-open', label: 'API Reference', desc: 'Supported S3 endpoints', href: `${repoUrl}/blob/main/api.md` },
  { icon: 'simple-icons:zig', label: 'Zig', desc: 'The language Z3 is written in', href: 'https://ziglang.org/' },
  { icon: 'lucide:scale', label: 'MIT License', desc: '© 2026 EMQ Technologies Inc.', href: `${repoUrl}/blob/main/LICENSE.txt` },
]

const faqs = [
  {
    label: 'What is Z3?',
    content: 'Z3 is a minimalist S3 server in Zig, built for local development and testing.',
  },
  {
    label: 'Is Z3 distributed?',
    content: 'No. Z3 is, and will remain, a single-node server optimized for local development and testing.',
  },
  {
    label: 'Is Z3 ready for production use?',
    content: 'No. Z3 is in the early stages of active development.',
  },
  {
    label: 'Why Zig?',
    content: 'Zig compiles to tiny, fast binaries, giving Z3 near-instant boot times and minimal memory usage.',
  },
  {
    label: 'How can I contribute?',
    content: 'Z3 is MIT-licensed. Visit the GitHub repository to submit bug reports, feature requests, or pull requests.',
  },
]

useSeoMeta({
  title: 'Z3 — Minimalist S3 Server in Zig',
  description: 'Z3 is a minimalist, tiny-binary S3 server written in Zig. AWS SigV4 compatible — works with aws-cli, boto3, and major SDKs. Ideal for S3 development and testing.',
  ogTitle: 'Z3 — Minimalist S3 Server in Zig',
  ogDescription: 'A minimalist, tiny-binary S3 server written in Zig. SigV4 compatible, works with aws-cli and boto3. For S3 development and testing.',
})
</script>

<template>
  <div class="min-h-screen overflow-x-clip text-(--site-ink)">
    <!-- Header -->
    <header
      class="
        sticky top-0 z-50 border-b border-(--site-border) bg-(--site-bg)/80
        backdrop-blur-md
      "
    >
      <div class="site-container flex h-16 items-center justify-between gap-4">
        <NuxtLink to="/" class="flex items-center gap-2.5" aria-label="Z3 home">
          <img
            src="/z3-icon.svg" alt="Z3 logo" width="32" height="32" class="
              size-8
            "
          >
          <span class="text-lg font-bold tracking-tight">Z3</span>
        </NuxtLink>

        <nav
          class="
            hidden items-center gap-7 text-sm font-medium text-(--site-muted)
            md:flex
          " aria-label="Page sections"
        >
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="
              transition-colors
              hover:text-(--site-ink)
            "
          >{{ link.label }}</a>
        </nav>

        <div class="flex items-center gap-2">
          <UButton
            to="https://ziglang.org/"
            target="_blank"
            rel="noreferrer"
            color="neutral"
            variant="ghost"
            icon="simple-icons:zig"
            aria-label="Zig language"
          />
          <UButton
            :to="repoUrl"
            target="_blank"
            rel="noreferrer"
            color="primary"
            variant="solid"
            icon="lucide:github"
          >
            <span
              class="
                hidden
                sm:inline
              "
            >GitHub</span>
          </UButton>
        </div>
      </div>
    </header>

    <main>
      <!-- Hero -->
      <section
        class="
          site-container py-20
          lg:py-28
        "
      >
        <Motion
          :initial="{ opacity: 0, y: 18 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.55 }"
          class="flex flex-col items-center text-center"
        >
          <div class="relative mb-8">
            <div
              class="
                absolute inset-0 -z-10 rounded-full bg-(--site-zig)/20 blur-2xl
              "
            />
            <img
              src="/z3-icon.svg" alt="Z3 logo" width="96" height="96" class="
                size-20
                sm:size-24
              "
            >
          </div>

          <h1
            class="
              max-w-3xl text-5xl leading-[1.05] font-black text-balance
              sm:text-6xl
              lg:text-7xl
            "
          >
            Minimalist S3 Server in Zig.
          </h1>

          <p class="mt-6 max-w-2xl text-lg/8 text-(--site-muted)">
            Z3 is a tiny, fast S3 server with full AWS SigV4 auth and no AI. It works with
            <code class="text-(--site-ink)">aws-cli</code>, <code
              class="text-(--site-ink)"
            >boto3</code>,
            and major SDKs — ideal for S3 development and testing.
          </p>

          <div
            class="
              mt-9 flex flex-col gap-3
              sm:flex-row
            "
          >
            <UButton
              :to="repoUrl"
              target="_blank"
              rel="noreferrer"
              color="primary"
              variant="solid"
              size="xl"
              icon="lucide:github"
              trailing-icon="lucide:arrow-up-right"
            >
              View on GitHub
            </UButton>
            <UButton
              to="#quick-start"
              color="neutral"
              variant="outline"
              size="xl"
              icon="lucide:terminal"
            >
              Quick Start
            </UButton>
          </div>
        </Motion>
      </section>

      <!-- Value strip -->
      <section class="site-container pb-8">
        <div
          class="
            grid gap-px overflow-hidden rounded-xl border border-(--site-border)
            bg-(--site-border)
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          <div
            v-for="feature in features"
            :key="feature.title"
            class="bg-(--site-surface) p-6"
          >
            <UIcon :name="feature.icon" class="size-5 text-(--site-zig)" />
            <h3 class="mt-4 font-semibold">
              {{ feature.title }}
            </h3>
            <p class="mt-2 text-sm/6 text-(--site-muted)">
              {{ feature.body }}
            </p>
          </div>
        </div>
      </section>

      <!-- Quick start -->
      <section id="quick-start" class="site-container scroll-mt-20 py-16">
        <div class="mb-8 max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight">
            Quick Start
          </h2>
          <p class="mt-3 text-(--site-muted)">
            Build the binary and run a local S3 endpoint. No dependencies beyond Zig.
          </p>
        </div>

        <div
          class="
            grid items-stretch gap-6
            lg:grid-cols-[1.4fr_1fr]
          "
        >
          <CodeBlock :lines="buildLines" lang="bash" />

          <ul class="grid content-start gap-3">
            <li
              v-for="fact in facts"
              :key="fact.label"
              class="
                flex items-center gap-3 rounded-lg border border-(--site-border)
                bg-(--site-surface) px-4 py-3
              "
            >
              <UIcon :name="fact.icon" class="size-4 shrink-0 text-(--site-zig)" />
              <div class="min-w-0">
                <p class="text-xs text-(--site-faint)">
                  {{ fact.label }}
                </p>
                <p class="truncate font-mono text-sm">
                  {{ fact.value }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <!-- Usage -->
      <section id="usage" class="site-container scroll-mt-20 py-16">
        <div class="mb-8 max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight">
            Usage
          </h2>
          <p class="mt-3 text-(--site-muted)">
            Point any S3 client at the endpoint. Here it is with the AWS CLI and the boto3 SDK.
          </p>
        </div>

        <div
          class="
            grid items-stretch gap-6
            lg:grid-cols-2
          "
        >
          <div class="flex min-w-0 flex-col">
            <h3
              class="
                mb-3 flex items-center gap-2 text-sm font-semibold
                text-(--site-muted)
              "
            >
              <UIcon name="lucide:terminal" class="size-4" />
              AWS CLI
            </h3>
            <CodeBlock :lines="awsLines" lang="bash" class="flex-1" />
          </div>
          <div class="flex min-w-0 flex-col">
            <h3
              class="
                mb-3 flex items-center gap-2 text-sm font-semibold
                text-(--site-muted)
              "
            >
              <UIcon name="simple-icons:python" class="size-4" />
              Python (boto3)
            </h3>
            <CodeBlock :lines="botoLines" lang="python" class="flex-1" />
          </div>
        </div>
      </section>

      <!-- Capabilities & status -->
      <section id="capabilities" class="site-container scroll-mt-20 py-16">
        <div class="mb-8 max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight">
            Capabilities
          </h2>
          <p class="mt-3 text-(--site-muted)">
            A subset of the AWS S3 REST API, with more on the way. Z3 is in active early development.
          </p>
        </div>

        <div
          class="
            grid gap-6
            md:grid-cols-2
          "
        >
          <div
            class="
              rounded-xl border border-(--site-border) bg-(--site-surface) p-6
            "
          >
            <h3
              class="
                text-sm font-semibold tracking-wide text-(--site-faint)
                uppercase
              "
            >
              Supported Now
            </h3>
            <ul class="mt-4 space-y-2.5">
              <li
                v-for="item in supported"
                :key="item"
                class="flex items-start gap-3 text-sm/6"
              >
                <UIcon
                  name="lucide:check" class="
                    mt-0.5 size-4 shrink-0 text-(--site-zig)
                  "
                />
                {{ item }}
              </li>
            </ul>
          </div>

          <div
            class="
              rounded-xl border border-(--site-border) bg-(--site-surface) p-6
            "
          >
            <h3
              class="
                text-sm font-semibold tracking-wide text-(--site-faint)
                uppercase
              "
            >
              Under Development
            </h3>
            <ul class="mt-4 space-y-2.5">
              <li
                v-for="item in underDevelopment"
                :key="item"
                class="flex items-start gap-3 text-sm/6 text-(--site-muted)"
              >
                <UIcon
                  name="lucide:circle-dashed" class="
                    mt-0.5 size-4 shrink-0 text-(--site-faint)
                  "
                />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <p class="mt-6 flex items-start gap-2.5 text-sm text-(--site-muted)">
          <UIcon
            name="lucide:lock" class="
              mt-0.5 size-4 shrink-0 text-(--site-faint)
            "
          />
          TLS is not included — terminate HTTPS with a reverse proxy such as nginx or caddy.
        </p>
      </section>

      <!-- FAQ -->
      <section id="faq" class="site-container scroll-mt-20 py-16">
        <div class="mb-8 max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight">
            FAQs
          </h2>
        </div>

        <UAccordion :items="faqs" />
      </section>

      <!-- Project links -->
      <section class="site-container py-16">
        <div
          class="
            grid gap-px overflow-hidden rounded-xl border border-(--site-border)
            bg-(--site-border)
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          <a
            v-for="link in projectLinks"
            :key="link.href"
            :href="link.href"
            target="_blank"
            rel="noreferrer"
            class="
              group flex flex-col bg-(--site-surface) p-6 transition-colors
              hover:bg-(--site-elevated)
            "
          >
            <div class="flex items-center justify-between">
              <UIcon :name="link.icon" class="size-5 text-(--site-zig)" />
              <UIcon
                name="lucide:arrow-up-right" class="
                  size-4 text-(--site-faint) transition-colors
                  group-hover:text-(--site-ink)
                "
              />
            </div>
            <h3 class="mt-4 font-semibold">
              {{ link.label }}
            </h3>
            <p class="mt-1 text-sm text-(--site-muted)">
              {{ link.desc }}
            </p>
          </a>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-(--site-border)">
      <div
        class="
          site-container flex flex-col items-center justify-between gap-4 py-10
          sm:flex-row
        "
      >
        <div class="flex items-center gap-2.5">
          <img
            src="/z3-icon.svg" alt="Z3 logo" width="24" height="24" class="
              size-6
            "
          >
          <span class="font-semibold">Z3</span>
        </div>
        <p class="text-sm text-(--site-muted)">
          Open Source Under the MIT License. Written in Zig.
        </p>
        <UButton
          :to="repoUrl"
          target="_blank"
          rel="noreferrer"
          color="neutral"
          variant="ghost"
          icon="lucide:github"
          aria-label="Z3 on GitHub"
        />
      </div>
    </footer>
  </div>
</template>
