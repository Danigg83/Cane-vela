// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  components: [
    {
      path: '~/components',   // carpeta raíz
      pathPrefix: false       // nombres planos, <Header /> en lugar de <CommonHeader />
    }
  ],
  runtimeConfig: {
    // Variables privadas (no accesibles desde el cliente)
    supabaseServiceKey: process.env.SUPABASE_SERVICE_KEY,

    public: {
      // Variables públicas (accesibles desde el cliente)
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
    }
  }
})
