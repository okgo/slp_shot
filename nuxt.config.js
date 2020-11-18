export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'SLP SHOT, INC Steve Lee Parsons - Vintage and modern guns, Luxury Mechanical Watches',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'SLP SHOT, INC Steve Lee Parsons - Vintage and modern guns, Luxury Mechanical Watches' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:ital,wght@0,400;0,500;0,700;0,800;1,300&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#0C1B42' },
  /*
  ** Global CSS
  */
  css: ['~/assets/styles/main'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
