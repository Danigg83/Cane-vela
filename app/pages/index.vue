<template>
  <!-- Hero Section -->
  <section class="flex-1 flex flex-col justify-center items-center text-center px-6 py-20 from-blue-100 via-blue-200 to-blue-300">
    <!-- Título -->
    <h2 class="text-5xl font-extrabold text-blue-800 mb-4">
      ¡Bienvenido al Club de Actividades Náuticas Eslora (CANE)
    </h2>

    <!-- Descripción -->
    <p class="text-lg text-blue-700 mb-6 max-w-xl">
      En <strong>CANE</strong> podrás disfrutar de la vela, cursos de navegación, actividades náuticas y eventos
      para toda la familia. Aprende a manejar embarcaciones, participa en regatas y vive la pasión por el mar
      en un entorno único.
    </p>

    <!-- Botones de acción -->
    <div class="flex flex-wrap justify-center gap-4">
      <NuxtLink to="/contact" class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
        Unirse al Club
      </NuxtLink>
      <NuxtLink to="/about" class="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition">
        Más información
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
// No requiere JS de momento
</script>
