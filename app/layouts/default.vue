<template>
    
      <main  class="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex flex-col">

  <!-- Header -->
  <header class="bg-white shadow-md py-6">
        <div class="container mx-auto px-6 flex justify-between items-center">
          <h1 class="text-3xl font-bold text-blue-700"><NuxtLink to="/">CANE - Vela</NuxtLink></h1>
          <nav class="space-x-4">
            <NuxtLink to=""></NuxtLink>
            <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Inicio</a>
            <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Acerca</a>
            <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Contacto</a>
          </nav>
        </div>
      </header>

        <NuxtPage />
         <!-- Footer -->
      <footer class="bg-white shadow-inner py-6 mt-auto">
        <div class="container mx-auto text-center text-blue-600">
          &copy; 2025 Mi Proyecto Nuxt. Todos los derechos reservados.
        </div>
      </footer>

      </main>
     
  
     
      
  </template>
  
  <script setup>
  
  </script>