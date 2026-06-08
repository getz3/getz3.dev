import tailwindcss from '@tailwindcss/vite'

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || process.env.BASE_URL || 'https://getz3.dev'
const isProductionIndexable = process.env.ROBOTS_SITE_ENV === 'production'

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  app: {
    head: {
      title: 'Z3',
      titleTemplate: '%s | Z3',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/z3-icon.svg' },
      ],
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          key: 'description',
          name: 'description',
          content: 'Z3 is a minimalist S3 server in Zig.',
        },
        { key: 'author', name: 'author', content: 'Z3 Project' },
        { key: 'og:title', property: 'og:title', content: 'Z3' },
        {
          key: 'og:description',
          property: 'og:description',
          content: 'Minimalist S3 server in Zig.',
        },
        { key: 'og:type', property: 'og:type', content: 'website' },
        { key: 'og:url', property: 'og:url', content: siteUrl },
      ],
    },
  },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'motion-v/nuxt',
    '@formkit/auto-animate/nuxt',
  ],

  css: [
    '~/assets/css/tailwind.css',
  ],

  ui: {
    fonts: true,
    colorMode: false,
  },

  fonts: {
    provider: 'local',
    defaults: {
      weights: [400, 500, 700],
      styles: ['normal'],
      subsets: ['latin'],
    },
  },

  icon: {
    clientBundle: {
      icons: [
        'lucide:arrow-up-right',
        'lucide:book-open',
        'lucide:boxes',
        'lucide:check',
        'lucide:circle-dashed',
        'lucide:copy',
        'lucide:folder',
        'lucide:github',
        'lucide:key-round',
        'lucide:lock',
        'lucide:scale',
        'lucide:server',
        'lucide:shield-check',
        'lucide:terminal',
        'lucide:workflow',
        'lucide:zap',
        'simple-icons:python',
        'simple-icons:zig',
      ],
    },
  },

  site: {
    indexable: isProductionIndexable,
    name: 'Z3',
    url: siteUrl,
  },

  robots: {
    sitemap: isProductionIndexable ? ['/sitemap.xml'] : [],
  },

  sitemap: {
    autoLastmod: true,
    defaults: {
      changefreq: 'weekly',
    },
    exclude: isProductionIndexable ? [] : ['/**'],
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  typescript: {
    shim: false,
  },

  nitro: {
    prerender: {
      routes: ['/robots.txt', '/sitemap.xml'],
    },
  },

  experimental: {
    defaults: {
      nuxtLink: {
        prefetch: process.env.NODE_ENV === 'production',
      },
    },
  },

  compatibilityDate: '2024-07-05',
})
