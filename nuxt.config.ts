import { resolve } from 'node:path';

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['acceptHMRUpdate', 'defineStore', ['defineStore']],
      },
    ],
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-mongoose',
    '@sidebase/nuxt-auth',
  ],
  auth: {
    // @ts-ignore
    origin: process.env.ORIGIN,
    // baseURL: process.env.ORIGIN,
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },
  runtimeConfig: {
    dbUrl: process.env.MONGODB_URI,
    dbName: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER_NAME,
    pass: process.env.DATABASE_PASS,
    origin: process.env.ORIGIN,
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
    jwtAccessExpires: process.env.JWT_ACCESS_TOKEN_EXPIRES,
    jwtRefreshExpires: process.env.JWT_REFRESH_TOKEN_EXPIRES,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'title',
      charset: 'utf-8',
      meta: [],
      link: [],
    },
  },
  srcDir: './client',
  serverDir: './server',
  imports: {
    dirs: ['stores', '~stores', '~node_modules', '~server'],
  },
  alias: {
    cookie: resolve(__dirname, 'node_modules/cookie'),
  },
});
