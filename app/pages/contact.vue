<template>
    <section class="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 flex flex-col items-center py-20 px-6">
      <h1 class="text-4xl font-extrabold text-blue-800 mb-6">Contacto</h1>
  
      <p class="text-lg text-blue-700 mb-10 text-center max-w-xl">
        ¿Quieres más información sobre nuestras actividades, cursos o eventos?
        Escríbenos y nos pondremos en contacto contigo lo antes posible.
      </p>
  
      <!-- Formulario de contacto -->
      <form class="w-full max-w-lg bg-white rounded-lg shadow p-8 space-y-6">
        <div>
          <label class="block text-blue-700 font-semibold mb-2">Nombre</label>
          <input type="text" placeholder="Tu nombre"
            class="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
  
        <div>
          <label class="block text-blue-700 font-semibold mb-2">Correo electrónico</label>
          <input type="email" placeholder="tu@email.com"
            class="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
  
        <div>
          <label class="block text-blue-700 font-semibold mb-2">Mensaje</label>
          <textarea rows="4" placeholder="Escribe tu mensaje aquí"
            class="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
  
        <button type="submit"
          class="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-blue-700 transition">
          Enviar
        </button>
      </form>
  
      <!-- Información adicional -->
      <div class="mt-12 text-center text-blue-700">
        <p><strong>📍 Dirección:</strong> Puerto Deportivo, Eslora</p>
        <p><strong>📞 Teléfono:</strong> +34 600 123 456</p>
        <p><strong>✉️ Email:</strong> info@clubeslora.com</p>
      </div>
    </section>
  </template>
  
  <script setup>
  // No necesita lógica aún
  </script>
  