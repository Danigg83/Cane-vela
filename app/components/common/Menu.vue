<template>

  <!-- Menú -->
  <nav class="flex flex-wrap gap-2 md:gap-4 w-full md:w-auto">
    <NuxtLink to="/" class="text-blue-600 hover:text-blue-800 font-medium">Inicio</NuxtLink>
    <NuxtLink to="/about" class="text-blue-600 hover:text-blue-800 font-medium">Acerca</NuxtLink>
    <NuxtLink to="/contact" class="text-blue-600 hover:text-blue-800 font-medium">Contacto</NuxtLink>
    <NuxtLink v-if="!user" to="/login" class="text-blue-600 hover:text-blue-800 font-medium">Login/Registrate</NuxtLink>
    <NuxtLink v-if="user" to="/admin" class="text-blue-600 hover:text-blue-800 font-medium">Admin</NuxtLink>
    <NuxtLink v-if="user" to="/admin/account" class="text-blue-600 hover:text-blue-800 font-medium">Account</NuxtLink>
    <!-- <NuxtLink to="/blog" class="text-blue-600 hover:text-blue-800 font-medium">Blog</NuxtLink> -->
    <!-- <NuxtLink to="/extra" class="text-blue-600 hover:text-blue-800 font-medium">Contacto 2</NuxtLink> -->
    <!-- Botón de logout -->
    <button v-if="user" @click="handleLogout" class="text-red-600 hover:text-red-800 font-medium">
      Logout
    </button>
  </nav>

</template>

<script setup>
const { user, logout } = useAuth()

const handleLogout = async () => {
  try {
    await logout()
    navigateTo('/') // redirigir al login
  } catch (err) {
    console.error(err.message)
  }
}
</script>