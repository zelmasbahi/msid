import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'
// import { textAdPlugin } from './textAdMdPlugin'

// Arabic Navigation (root)
const navAr: ThemeConfig['nav'] = [
  {
    text: '📱 +212 779-164257',
    link: 'https://wa.me/212779164257'
  },
  {
    text: 'المسيد',
    link: '/'
  },
  {
    text: 'دوافعنا',
    link: '/motivation'
  },
  {
    text: 'مبادئنا',
    link: '/principles'
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
  },
  {
    text: '🚀 التسجيل',
    link: '/enroll'
  },
  {
    text: '🇬🇧 English',
    link: '/en/'
  },
  {
    text: '🇩🇪 Deutsch',
    link: '/de/'
  }
]

// German Navigation
const navDe: ThemeConfig['nav'] = [
  {
    text: '📱 +212 779-164257',
    link: 'https://wa.me/212779164257'
  },
  {
    text: 'MSID',
    link: '/de/'
  },
  {
    text: 'Unsere Motivation',
    link: '/de/motivation'
  },
  {
    text: 'Unsere Prinzipien',
    link: '/de/principles'
  },
  {
    text: 'Unsere Angebote',
    link: '/de/offers'
  },
  {
    text: 'Unser Ansatz',
    link: '/de/approach'
  },
  {
    text: 'Preise',
    link: '/de/sponsor/'
  },
  {
    text: 'FAQ',
    link: '/de/about/faq'
  },
  {
    text: '🚀 Anmelden',
    link: '/de/enroll'
  },
  {
    text: '🇸🇦 العربية',
    link: '/'
  },
  {
    text: '🇬🇧 English',
    link: '/en/'
  }
]

// English Navigation
const navEn: ThemeConfig['nav'] = [
  {
    text: '📱 +212 779-164257',
    link: 'https://wa.me/212779164257'
  },
  {
    text: 'MSID',
    link: '/en/'
  },
  {
    text: 'Our Motivation',
    link: '/en/motivation'
  },
  {
    text: 'Our Principles',
    link: '/en/principles'
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
  },
  {
    text: '🚀 Enroll',
    link: '/en/enroll'
  },
  {
    text: '🇸🇦 العربية',
    link: '/'
  },
  {
    text: '🇩🇪 Deutsch',
    link: '/de/'
  }
]

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  sitemap: {
    hostname: 'https://msid.ma'
  },

  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],

  // Ignore dead links for now since we're in development
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: '/msid-logo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/msid-logo.jpg' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { property: 'og:url', content: 'http://msid.ma/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'MSID online' }],
    ['meta', { property: 'og:image', content: '/msid-logo.jpg' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'MSID online المسيد عن بعد'
      }
    ],
    ['meta', { name: 'twitter:site', content: '@msidonline' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:image', content: '/msid-logo.jpg' }]
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
        // logo: {
        //   src: '/msid-logo.jpg',
        //   alt: 'MSID Logo'
        // },
        nav: navAr,
        socialLinks: [
          {
            icon: 'facebook',
            link: 'https://www.facebook.com/profile.php?id=61583318579479'
          }
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
        // logo: {
        //   src: '/msid-logo.jpg',
        //   alt: 'MSID Logo'
        // },
        nav: navEn,
        socialLinks: [
          {
            icon: 'facebook',
            link: 'https://www.facebook.com/profile.php?id=61583318579479'
          }
        ],
        footer: {
          license: {
            text: 'MSID Online School',
            link: 'https://msid.ma'
          },
          copyright: `Copyright © 2025 MSID Online School`
        }
      }
    },
    de: {
      label: 'Deutsch',
      lang: 'de-DE',
      title: 'MSID Online Schule',
      description: 'Identität durch Bildung bewahren',
      themeConfig: {
        nav: navDe,
        socialLinks: [
          {
            icon: 'facebook',
            link: 'https://www.facebook.com/profile.php?id=61583318579479'
          }
        ],
        footer: {
          license: {
            text: 'MSID Online Schule',
            link: 'https://msid.ma'
          },
          copyright: `Copyright © 2025 MSID Online Schule`
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
