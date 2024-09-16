<template>
  <div>
    <img src="~/assets/img/logo.png">
    <NuxtLink v-for="item of navList" :key="item.name" :to="item.path">
      {{ item.name }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">

const { t } = useI18n();

const navList = computed(() => {
  return [
    {
      name: t('home'),
      path: '/',
    },
    {
      name: t('intro'),
      path: '/intro',
    },
    {
      name: t('about'),
      path: '/about',
    },
  ];
});
</script>
