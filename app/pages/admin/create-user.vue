<template>
  <div class="flex justify-center items-start p-6">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4 text-center">Crear nuevo usuario</h2>

      <form @submit.prevent="handleCreateUser" class="flex flex-col gap-4">
        <input v-model="displayName" placeholder="Nombre completo" class="border p-2 rounded" />
        <input v-model="email" type="email" placeholder="Correo electrónico" class="border p-2 rounded" />
        <input v-model="password" type="password" placeholder="Contraseña" class="border p-2 rounded" />
        <input v-model="confirmPassword" type="password" placeholder="Confirmar contraseña" class="border p-2 rounded" />

        <button type="submit" class="bg-lime-500 text-white p-3 rounded hover:bg-lime-600 transition">
          Crear usuario
        </button>
      </form>

      <p v-if="message" class="text-green-500 mt-2">{{ message }}</p>
      <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '~/composables/useAuth'

const { createUser } = useAuth()

const displayName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const message = ref('')
const error = ref('')

const handleCreateUser = async () => {
  message.value = ''
  error.value = ''

  if (password.value !== confirmPassword.value) {
    error.value = 'Las contraseñas no coinciden ❌'
    return
  }

  if (password.value.length < 6) {
    error.value = 'La contraseña debe tener al menos 6 caracteres ❌'
    return
  }

  try {
    const res: any = await createUser(email.value, password.value, displayName.value)
    message.value = res.message
    email.value = ''
    password.value = ''
    confirmPassword.value = ''
    displayName.value = ''
  } catch (err: any) {
    error.value = err.message
  }
}
</script>
