<template>
    <main class="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex flex-col">
      
      <!-- Header -->
      <header class="bg-white shadow-md py-6">
        <div class="container mx-auto px-6 flex justify-between items-center">
          <h1 class="text-3xl font-bold text-blue-700">Mi Proyecto Nuxt</h1>
          <nav class="space-x-4">
            <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Inicio</a>
            <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Acerca</a>
            <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Contacto</a>
          </nav>
        </div>
      </header>
  
      <!-- Hero Section -->
      <section class="flex-1 flex flex-col justify-center items-center text-center px-6">
        <h2 class="text-5xl font-extrabold text-blue-800 mb-4">¡Bienvenido a Nuxt 3 + Tailwind!</h2>
        <p class="text-lg text-blue-700 mb-6 max-w-xl">Esta es una página de inicio de ejemplo con diseño responsive usando Tailwind CSS. Puedes personalizar colores, tipografías y componentes fácilmente.</p>
        <div class="space-x-4">
          <button class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">Comenzar</button>
          <button class="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition">Aprender más</button>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-white shadow-inner py-6 mt-auto">
        <div class="container mx-auto text-center text-blue-600">
          &copy; 2025 Mi Proyecto Nuxt. Todos los derechos reservados.
        </div>
      </footer>
  
    </main>
  </template>
  
  <script setup>
  // No es necesario JS para esta página de inicio
  </script>
  