// plugins/initAuth.client.ts
export default defineNuxtPlugin(async () => {
    const { initUser } = useAuth()
    await initUser()
  })
  