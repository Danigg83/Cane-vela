<template>
  <div class="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg mt-10">
    <h1 class="text-3xl font-bold mb-6 text-center text-blue-700">Editar perfil</h1>

    <form @submit.prevent="updateProfile" class="flex flex-col gap-4">
      <!-- Email (solo lectura) -->
      <div class="flex flex-col">
        <label class="text-gray-600 mb-1">Correo electrónico</label>
        <input
          :value="user?.email"
          readonly
          class="border p-3 rounded bg-gray-100 cursor-not-allowed"
        />
      </div>

      <!-- Nombre -->
      <div class="flex flex-col">
        <label class="text-gray-600 mb-1">Nombre completo</label>
        <input v-model="displayName" placeholder="Nombre completo" class="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-lime-500" />
      </div>

      <!-- Teléfono -->
      <div class="flex flex-col">
        <label class="text-gray-600 mb-1">Teléfono</label>
        <input v-model="phone" placeholder="Teléfono" class="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-lime-500" />
      </div>

      <!-- Contraseña nueva -->
      <div class="flex flex-col">
        <label class="text-gray-600 mb-1">Nueva contraseña</label>
        <input v-model="newPassword" type="password" placeholder="Nueva contraseña" class="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-lime-500" />
      </div>

      <!-- Confirmar contraseña -->
      <div class="flex flex-col">
        <label class="text-gray-600 mb-1">Confirmar contraseña</label>
        <input v-model="confirmPassword" type="password" placeholder="Confirmar contraseña" class="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-lime-500" />
      </div>

      <!-- Botón guardar -->
      <button type="submit" class="bg-lime-500 text-white p-3 rounded-lg hover:bg-lime-600 transition text-lg font-semibold">
        Guardar cambios
      </button>
    </form>

    <!-- Mensajes -->
    <p v-if="message" class="text-green-600 mt-4 text-center font-medium text-lg">{{ message }}</p>
    <p v-if="error" class="text-red-600 mt-4 text-center font-medium text-lg">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuth } from '~/composables/useAuth'

const { user, getUser, updateUser } = useAuth()

const displayName = ref('')
const phone = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const message = ref('')
const error = ref('')

onMounted(async () => {
  if (!user.value) await getUser()
  displayName.value = user.value?.user_metadata?.display_name || ''
  phone.value = user.value?.user_metadata?.phone || ''
})

const updateProfile = async () => {
  message.value = ''
  error.value = ''

  // Validar contraseña solo si se ha rellenado
  if (newPassword.value || confirmPassword.value) {
    if (newPassword.value !== confirmPassword.value) {
      error.value = 'Las contraseñas no coinciden ❌'
      return
    }
    if (newPassword.value.length < 6) {
      error.value = 'La contraseña debe tener al menos 6 caracteres ❌'
      return
    }
  }

  try {
    await updateUser({
      display_name: displayName.value,
      phone: phone.value,
      password: newPassword.value || undefined
    })
    message.value = 'Perfil actualizado correctamente ✅'
    newPassword.value = ''
    confirmPassword.value = ''
  } catch (err: any) {
    error.value = err.message
  }
}
</script>
