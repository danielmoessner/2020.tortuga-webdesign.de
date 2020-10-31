const path = require("path");
const purgecss = require("@fullhuman/postcss-purgecss");

export default {
  target: "static",
  /*
   ** Headers of the page
   */
  head: {
    title: "Tortuga Webdesign",
    htmlAttrs: {
      lang: "de"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Generate
   */
  generate: {
    fallback: "404.html"
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/styles/tailwind.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/lazysizes.client.js" }],
  /*
   ** Nuxt.js build-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/markdownit", "@nuxtjs/sitemap", "@nuxtjs/svg"],
  /*
   ** Sitemap Config
   */
  sitemap: {
    hostname: "https://tortuga-webdesign.de",
    routes: [
      "/blog/ressourcen",
      "/blog/webdesign-prozess",
      "/portfolio/franco-pioli-datenschutz-und-vereinsmanagement",
      "/portfolio/healed-me-i-won-the-lottery",
      "/portfolio/internationale-gesellschaft-orientalischer-christen-ev",
      // "/portfolio/katzenbetreuung-tigerfreund",
      "/portfolio/kristina-boess-yoga-und-coaching",
      "/portfolio/maschinenverleih-schaetz",
      "/portfolio/praeventionszentrum-muenchen-ost",
      "/portfolio/qc-quality-control",
      "/portfolio/rabe-sport-gmbh",
      "/portfolio/schaetz-bautrockner-verleih",
      "/portfolio/schaetz-shop-autozubehoer-fuer-ihren-mercedes",
      "/portfolio/sefa-sahin-kues-gutachter",
      "/portfolio/selma-selcuk-haarsysteme",
      "/portfolio/silke-tolkmitt-marketingmanagement",
      "/portfolio/sn-trockenbau-gmbh",
      "/portfolio/the-corner-house",
      "/portfolio/clever-und-entspannt-lernen"
    ]
  },
  /*
   ** Markdown Config
   ** See: https://github.com/markdown-it/markdown-it
   */
  markdownit: {
    injected: true,
    preset: "default",
    linkify: true,
    breaks: true
  },
  /*
   ** Build configuration
   */
  build: {
    devMiddleware: {
      headers: {
        "Cache-Control": "no-store",
        Vary: "*"
      }
    },
    extractCSS: true,
    postcss: {
      // preset: {
      //   features: {
      //     customProperties: false
      //   }
      // },
      plugins: {
        "postcss-import": {},
        tailwindcss: path.resolve(__dirname, "./tailwind.config.js"),
        "@fullhuman/postcss-purgecss":
          process.env.NODE_ENV === "production"
            ? {
                content: [
                  "./components/**/*.vue",
                  "./layouts/**/*.vue",
                  "./pages/**/*.vue"
                ],
                safelist: [
                  "body",
                  "html",
                  "nuxt-progress",
                  "__nuxt",
                  "__layout",
                  /-(leave|enter|appear)(|-(to|from|active))$/, // Normal transitions
                  /^nuxt-link(|-exact)-active$/, // Nuxt link classes
                  /^(?!cursor-move).+-move$/, // Move transitions
                  /data-v-.*/ // Keep scoped styles
                ],
                defaultExtractor: content => {
                  const broadMatches =
                    content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
                  const innerMatches =
                    content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
                  return broadMatches.concat(innerMatches);
                }
              }
            : false
      }
    },
    loaders: {
      scss: {
        prependData:
          '@import "./assets/styles/insert-into-every-component.scss";'
      }
    },
    // html: {
    //   minify: {
    //     collapseBooleanAttributes: true,
    //     decodeEntities: true,
    //     minifyCSS: false,
    //     minifyJS: false,
    //     processConditionalComments: true,
    //     removeEmptyAttributes: true,
    //     removeRedundantAttributes: true,
    //     trimCustomFragments: true,
    //     useShortDoctype: true
    //   }
    // },
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ["data-src", "src"];
        vue.transformAssetUrls.source = ["data-srcset", "srcset"];
      }
    }
  }
};
