<template>
  <div>
    <h1>首页</h1>
    <div>
      <button @click="setLocale('zh_CN')">
        中文
      </button>
      <button @click="setLocale('en_US')">
        English
      </button>
      <p>{{ $t('hello') }}</p>
      {{ locale }}
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n();

console.log(locale.value);
</script>
