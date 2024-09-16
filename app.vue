<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'ArogFly',
  meta: [
    { name: 'description', content: 'argofly' }
  ],
  script: [
    { innerHTML: 'console.log(\'ArogFly!\')' }
  ]
});
</script>

<style>
</style>
