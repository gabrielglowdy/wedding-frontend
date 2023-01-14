var XMLHttpRequest = require('xhr2');
const getRoutes = async () => {
  const url = "http://localhost:1337/api/guests";
  const res = await new Promise((resolve) => {
    let xobj = new XMLHttpRequest();
    xobj.open('GET', url);
    xobj.onreadystatechange = async () => {
      if (xobj.readyState == 4 && xobj.status == "200") {
        const routeLists = [];
        const json = JSON.parse(xobj.responseText);
        json.data.forEach(element => {
          routeLists.push('/guest/' + element.attributes.slug)
        });
        resolve(routeLists)
      }
    };
    xobj.send();
  })

  return res;
}

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'The Wedding of Lilla & Gabriel',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Wedding' }
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
        }
      ]
    }
  },
  modules: [
    '@nuxtjs/strapi',
  ],
  strapi: {
    url: process.env.STRAPI_URL || `http://localhost:1337`,
    entities: ['guests'],
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
    },
    private: {
      apiKey: '8d4db23f2b723d2122793c818407194660bd92ea7b2edcddb9ca3946cbec64f8fdf6dbc4b89f980c6b461021a37e6b9166b2e4dd57d077e1120793f1e0595ca7cea760a199c4f48be0314b67c395222591149192c65965677cd5c8907c96da8787e9330f0d62c813d21f6d2ca1f8da16d92d522cdf0075cabde8a6427b480dec'
    }
  },
  ssr: false,
  static: true,

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
