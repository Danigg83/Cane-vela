<template>
    <!-- Header -->
    <header class="bg-white shadow-md py-6">
      <div class="container mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
  
        <!-- Título -->
        <h1 class="text-3xl font-bold text-blue-700">
          <NuxtLink to="/">CANE - Vela</NuxtLink>
        </h1>
  
        <!-- Menú -->
        <nav class="flex flex-wrap gap-2 md:gap-4 w-full md:w-auto">
          <NuxtLink to="/" class="text-blue-600 hover:text-blue-800 font-medium">Inicio</NuxtLink>
          <NuxtLink to="/about" class="text-blue-600 hover:text-blue-800 font-medium">Acerca</NuxtLink>
          <NuxtLink to="/contact" class="text-blue-600 hover:text-blue-800 font-medium">Contacto</NuxtLink>
          <NuxtLink to="/blog" class="text-blue-600 hover:text-blue-800 font-medium">Blog</NuxtLink>
          <NuxtLink to="/extra" class="text-blue-600 hover:text-blue-800 font-medium">Contacto 2</NuxtLink>
        </nav>
  
      </div>
    </header>
  </template>
  
  <script setup>
  </script>
  