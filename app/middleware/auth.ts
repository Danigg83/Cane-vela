// middleware/auth.ts
import { useAuth } from '~/composables/useAuth'

export default defineNuxtRouteMiddleware(async (to, from) => {
 /*  const { user } = useAuth()

  console.log('user en middleware auth:', user.value);
  
  // Espera a que el estado de usuario esté listo (opcional si es reactivo y persistente)
  if (!user.value) {
    // Redirige al login si no está logueado
    return navigateTo('/login')
  }

  // Si quieres solo usuarios con correo verificado
  if (user.value && !user.value.email_confirmed_at) {
    return navigateTo('/login')
  } */
})
