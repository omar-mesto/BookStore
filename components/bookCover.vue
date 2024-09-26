<template>
    <div class="mx-auto">
      <img :src="image.src" :alt="image.alt" class="w-[200px] md:w-[400px] md:pt-0 pt-10 cursor-pointer" />
    </div>
  </template>
  
  <script setup lang="ts">
  interface Props {
    image: {
      src: string;
      alt: string;
    };
  }
  
  defineProps<Props>();
  </script>