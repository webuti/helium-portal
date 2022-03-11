export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  render: {
    csp: false,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Helium Portal |',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],

    link: [
      {
        rel: 'preconnect',
        href: 'https://adservice.google.com',
        crossorigin: true,
      },
      {
        rel: 'preconnect',
        href: 'https://pagead2.googlesyndication.com',
        crossorigin: true,
      },
      {
        rel: 'preconnect',
        href: 'https://tpc.googlesyndication.com',
        crossorigin: true,
      },
      {
        rel: 'preconnect',
        href: 'https://doubleclick.net',
        crossorigin: true,
      },
      {
        rel: 'preconnect',
        href: 'googleads.g.doubleclick.net',
        crossorigin: true,
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  loading: {
    color: 'blue',
    height: '5px',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  axios: {
    proxy: false,
    baseURL: 'https://api.heliumportal.com', // Used as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: 'https://api.heliumportal.com',
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: 'https://api.heliumportal.com',
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  loading: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  'google-adsense': {
    id: 'ca-pub-8368900943090301',
    pageLevelAds: false,
    overlayBottom: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/http',
    '@nuxtjs/google-adsense',
    'cookie-universal-nuxt',
    '@nuxtjs/i18n',
  ],

  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    locales: [
      {
        flag: 'us',
        code: 'en',
        dir: 'ltr',
        file: 'en-US.js',
        name: 'English',
      },
      {
        flag: 'de',
        code: 'de',
        dir: 'ltr',
        file: 'de-DE.js',
        name: 'Deutsch',
      },
      {
        flag: 'tr',
        code: 'tr',
        dir: 'ltr',
        file: 'tr-TR.js',
        name: 'Türkçe',
      },
      {
        flag: 'sa',
        code: 'ar',
        file: 'ar-AR.js',
        name: 'عربي',
        dir: 'rtl',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
  },
  googleFonts: {
    download: true,
    families: {
      Inter: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
