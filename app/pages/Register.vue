<template>
    <nav class="flex flex-wrap gap-2 justify-center md:gap-4 w-full md:w-auto p-4">
          <NuxtLink to="/login" class="text-blue-600 hover:text-blue-800 font-medium">login</NuxtLink>
          <NuxtLink to="/register" class="text-blue-600 hover:text-blue-800 font-medium">Registrate</NuxtLink>
          
        </nav>
    <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold text-center text-blue-700 mb-6">Crear Cuenta</h2>
  
        <form @submit.prevent="handleRegister" class="space-y-4">
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
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Registrate
          </button>
        </form>
  
        <p class="text-sm text-center text-gray-600 mt-4">
          ¿Ya tienes cuenta?
          <NuxtLink to="/login" class="text-blue-600 hover:underline">Inicia sesión</NuxtLink>
        </p>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useAuth } from '~/composables/useAuth'
  
  const { register } = useAuth()
  
  const email = ref('')
  const password = ref('')
  
  const handleRegister = async () => {
    try {
      await register(email.value, password.value)
      navigateTo('/') // redirigir al inicio
    } catch (err: any) {
      alert(err.message)
    }
  }
  </script>
  