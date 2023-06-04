export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Undangan Acara Syukuran Lilla & Gabriel',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Undangan Acara Syukuran Lilla & Gabriel' },
        { name: 'og:description', content: 'Undangan Acara Syukuran Lilla & Gabriel' },
        { name: 'og:image', content: 'https://content.lillagabriel.com/uploads/MSA_5733_a612dcb10b.JPG?updated_at=2023-05-03T15:33:24.411Z'  },
        { name: 'twitter:card', content: `summary_large_image` },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        }, {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true
        }, {
          href: "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Lora:ital,wght@0,400;0,500;1,400&family=Montserrat:ital,wght@0,400;0,500;0,600;1,300;1,500&family=Moon+Dance&family=Satisfy&display=swap",
          rel: "stylesheet"
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    }
  },
  modules: [
    '@nuxtjs/strapi',
    '@nuxt/image-edge'
  ],
  image: {
    domains: [process.env.STRAPI_URL, 'http://localhost:1337']
  },
  strapi: {
    url: process.env.STRAPI_URL || `http://localhost:1337`,
    entities: ['guests'],
    token: process.env.STRAPI_TOKEN || '',
    cookie: process.env.STRAPI_TOKEN || ''
  },
  nitro: {
    prerender: {
      routes: []
    }
  },
  // hooks: {
  //   async 'nitro:config'(config) {
  //     const thisRoutes = await getRoutes();
  //     config.prerender.routes.push(...thisRoutes);
  //   }
  // },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:1337/api/',
      strapiURL: process.env.STRAPI_URL || 'http://localhost:1337',
      user: process.env.USER || 'to_infinity_and_beyond',
      code: process.env.PASSWORD ||'akjsdha(A8hjasjh*!&@',
      thumbnail_url: 'https://content.lillagabriel.com/uploads/IMG_1976_b2e1c07ce6.jpg?updated_at=2023-05-03T15:36:15.427Z' 
    },
    private: {
      apiKey: '',
      strapi_token: process.env.STRAPI_TOKEN || ''
    }
  },
  ssr: false,
  // static: true,

  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  purgeCSS: {
    whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
  },
  build: {
    rollupOptions: {
      external: [
        /^node:.*/,
      ]
    }
  },
  googleFonts: {
    download: true,
    display: 'swap',
    families: {
      Roboto: true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
      'Moon Dance': [400]
    }
  }
})
