<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'ArogFly',
  meta: [
    { name: 'description', content: 'argofly' },
    { name: 'keywords', content: 'salechaty,argofly' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  script: [
    { innerHTML: 'console.log(\'ArogFly!\')' }
  ]
});

useSeoMeta({
  title: 'ArogFly',
  ogTitle: 'ArogFly',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});
</script>

<style>
</style>
