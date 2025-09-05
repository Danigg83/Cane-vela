<template>
  <nav class="flex flex-wrap gap-2 justify-center md:gap-4 w-full md:w-auto p-4">
    <NuxtLink to="/login" class="text-blue-600 hover:text-blue-800 font-medium">Login</NuxtLink>
    <NuxtLink to="/register" class="text-blue-600 hover:text-blue-800 font-medium">Registrarse</NuxtLink>
  </nav>

  <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <h2 class="text-3xl font-bold text-center text-blue-700 mb-6">Crear Cuenta</h2>

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

        <!-- Mensaje de error -->
        <p v-if="errorMessage" class="text-red-600 text-lg text-center font-medium">
          {{ errorMessage }}
        </p>

        <!-- Mensaje de éxito -->
        <p v-if="successMessage" class="text-green-600 text-lg text-center font-medium">
          {{ successMessage }}
        </p>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-3 text-lg rounded-lg hover:bg-blue-700 transition"
        >
          Registrate
        </button>
      </form>

      <p class="text-sm text-center text-gray-600 mt-6">
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
const errorMessage = ref('')
const successMessage = ref('')

const handleRegister = async () => {
  errorMessage.value = ''
  successMessage.value = ''

  if (password.value.length < 6) {
    errorMessage.value = 'La contraseña debe tener al menos 6 caracteres.'
    return
  }

  try {
    await register(email.value, password.value)
    successMessage.value = '✅ Registro exitoso. Revisa tu correo para verificar la cuenta antes de iniciar sesión.'
    email.value = ''
    password.value = ''
  } catch (err: any) {
    errorMessage.value = err.message
  }
}
</script>
