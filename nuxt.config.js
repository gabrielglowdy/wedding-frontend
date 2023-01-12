// https://nuxt.com/docs/api/configuration/nuxt-config 


export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'The Wedding of Lilla & Gabriel',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Wedding' }
      ],
      link:[
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
        }
      ]
    }
  },
  ssr:false,
  static: true,
  
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
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
