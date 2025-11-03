import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'
// import { textAdPlugin } from './textAdMdPlugin'

// Arabic Navigation (root)
const navAr: ThemeConfig['nav'] = [
  {
    text: 'المسيد',
    link: '/'
  },
  {
    text: 'دوافعنا',
    link: '/motivation'
  },
  {
    text: 'عروضنا',
    link: '/offers'
  },
  {
    text: 'منهجيتنا',
    link: '/approach'
  },
  {
    text: 'الأسعار',
    link: '/sponsor/'
  },
  {
    text: 'الأسئلة الشائعة',
    link: '/about/faq'
  }
]

// English Navigation
const navEn: ThemeConfig['nav'] = [
  {
    text: 'MSID',
    link: '/en/'
  },
  {
    text: 'Our Motivation',
    link: '/en/motivation'
  },
  {
    text: 'Our Offers',
    link: '/en/offers'
  },
  {
    text: 'Our Approach',
    link: '/en/approach'
  },
  {
    text: 'Pricing',
    link: '/en/sponsor/'
  },
  {
    text: 'FAQ',
    link: '/en/about/faq'
  }
]

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  sitemap: {
    hostname: 'https://msid.ma'
  },

  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { property: 'og:url', content: 'http://msid.ma/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'MSID online' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'MSID online المسيد عن بعد'
      }
    ],
    ['meta', { name: 'twitter:site', content: '@msidonline' }],
    ['meta', { name: 'twitter:card', content: 'summary' }]
  ],

  // Locales configuration
  locales: {
    root: {
      label: 'العربية',
      lang: 'ar',
      dir: 'rtl',
      title: 'MSID online المسيد عن بعد',
      description: 'MSID online المسيد عن بعد',
      themeConfig: {
        nav: navAr,
        socialLinks: [
          { icon: 'facebook', link: 'https://facebook.com/msidonline' }
        ],
        footer: {
          license: {
            text: 'MSID Online School',
            link: 'https://msid.ma'
          },
          copyright: `حقوق المؤلف © 2025 MSID Online School`
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'MSID Online School',
      description: 'Preserving Identity Through Education',
      themeConfig: {
        nav: navEn,
        socialLinks: [
          { icon: 'facebook', link: 'https://facebook.com/msidonline' }
        ],
        footer: {
          license: {
            text: 'MSID Online School',
            link: 'https://msid.ma'
          },
          copyright: `Copyright © 2025 MSID Online School`
        }
      }
    }
  },

  themeConfig: {
    // Global theme config (shared across all locales)
    // No need for localeLinks - VitePress automatically creates a language switcher based on the locales config above
  },

  markdown: {
    theme: 'github-dark',
    config(md) {
      md.use(headerPlugin)
      // .use(textAdPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  }
})
