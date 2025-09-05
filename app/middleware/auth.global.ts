// middleware/auth.global.ts
export default defineNuxtRouteMiddleware(async (to, from) => {
    const { user, getUser } = useAuth()
    
    // Cargar usuario actual
    await getUser()
  
    // Solo proteger rutas que empiezan por /admin
    /* if (to.path.startsWith('/admin') && !user.value) {
      return navigateTo('/login')
    } */
  
    // Si hay usuario y navega a login o register => home
    if (user.value && (to.path === '/login' || to.path === '/register')) {
      return navigateTo('/admin')
    }
  })
  