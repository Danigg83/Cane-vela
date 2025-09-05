<template>
  <nav class="flex flex-wrap gap-2 justify-center md:gap-4 w-full md:w-auto p-4">
    <NuxtLink to="/login" class="text-blue-600 hover:text-blue-800 font-medium">Login</NuxtLink>
    <NuxtLink to="/register" class="text-blue-600 hover:text-blue-800 font-medium">Registrate</NuxtLink>
  </nav>

  <section class="flex items-center justify-center  from-blue-100 via-blue-200 to-blue-300 m-8">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <h2 class="text-3xl font-bold text-center text-blue-700 mb-6">Iniciar Sesión</h2>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <input
          v-model="email"
          type="email"
          placeholder="Correo electrónico"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Contraseña"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <!-- Mensaje de error -->
        <p v-if="errorMessage" class="text-red-600 text-sm text-center">
          {{ errorMessage }}
        </p>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-3 text-lg rounded-lg hover:bg-blue-700 transition"
        >
          Entrar
        </button>
      </form>

      <p class="text-sm text-center text-gray-600 mt-6">
        ¿No tienes cuenta?
        <NuxtLink to="/register" class="text-blue-600 hover:underline">Regístrate</NuxtLink>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '~/composables/useAuth'

const { login } = useAuth()

const email = ref('')
const password = ref('')
const errorMessage = ref('')

const handleLogin = async () => {
  errorMessage.value = ''

  if (password.value.length < 6) {
    errorMessage.value = 'La contraseña debe tener al menos 6 caracteres.'
    return
  }

  try {
    await login(email.value, password.value)
    navigateTo('/') // redirigir al inicio
  } catch (err: any) {
    errorMessage.value = err.message
  }
}
</script>
