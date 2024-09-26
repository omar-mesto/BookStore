<template>
  <header class="bg-[#f3efe3]">
      <div class="grid grid-cols-1 md:grid-cols-6 max-w-screen-lg flex-wrap items-center justify-between mx-auto p-4 md:p-4 lg:p-4 pt-0">
        <div class="text-left col-span-4">
          <h2 class="uppercase mb-2 text-[#4d4d4d] font-semibold tracking-wider">Chatcn Taraws</h2>
          <h1 class="playfair-display text-7xl mb-4 md:text-6xl lg:text-[6vw] ">Latest Books<br>Recording Books</h1>
          <div class="flex gap-10 items-center pt-5">
            <button class="btn w-32 h-10 hover:bg-gray-800 hover:text-[#f3efe3] border rounded-full border-black text-center">Open Title</button>
            <p class="text-gray-600">Latest Books Snatch to the chonbion an reeding<br> reeding formented be the plorib</p>
          </div>
        </div>
        <div class="col-span-2 grid md:justify-end justify-center md:pt-0 pt-8">
          <img src="/imageHeader.png" alt="Icon image" class="imageHeader w-[300px]"/>
        </div>
      </div>
      <div class="grid grid-cols-1 max-w-screen-lg justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 mx-auto py-10">
        <BookCover v-for="(image, index) in images" :key="index" :image="image" />
      </div>
  </header>
</template>
<script setup lang="ts">
const images = [
  { src: '/imageHeader1.png', alt: 'Book Cover' },
  { src: '/imageHeader2.png', alt: 'Book Cover' },
  { src: '/imageHeader3.png', alt: 'Book Cover' },
  { src: '/imageHeader4.png', alt: 'Book Cover' },
];
</script>
<style scoped lang="scss">
</style>  