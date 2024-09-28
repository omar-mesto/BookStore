<template>
  <div class="w-full py-5 max-w-screen-lg mx-auto">
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="4"
      :loop="true"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }"
      :spaceBetween="45"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
      }"
      :modules="[SwiperEffectCoverflow, SwiperAutoplay]"
      class="w-full"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image.src" :alt="image.alt" class="w-[200px] md:w-[150px] md:pt-0 pt-10 cursor-pointer" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
interface Props {
  image: {
    src: string;
    alt: string;
  };
}
const images = [
  { src: '/imageHeader1.png', alt: 'Book Cover' },
  { src: '/imageHeader2.png', alt: 'Book Cover' },
  { src: '/imageHeader3.png', alt: 'Book Cover' },
  { src: '/imageHeader4.png', alt: 'Book Cover' },
  { src: '/imageHeader1.png', alt: 'Book Cover' },
  { src: '/imageHeader2.png', alt: 'Book Cover' },
  { src: '/imageHeader3.png', alt: 'Book Cover' },
  { src: '/imageHeader4.png', alt: 'Book Cover' },
];
defineProps<Props>();
</script>