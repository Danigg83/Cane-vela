<template>

<div class="bg-[var(--color-primary)] text-white p-4 animate-fade-in">
  index admin
</div>

</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>
