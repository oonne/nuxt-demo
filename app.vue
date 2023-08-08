<template>
  <div>
    <!-- <NuxtWelcome /> -->

    123
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'NuxtDemo',
  meta: [
    { name: 'description', content: 'some description' }
  ],
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>