<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<template>
  <div class="px-8 md:px-16 pb-8 flex flex-col gap-4">
    <div class="md:max-w-4xl md:mx-auto">
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="20"
        :breakpoints="{
          '768': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }"
        class="text-buzz-purple"
        :pagination="{ 
          clickable: true,
          bulletActiveClass: 'active'
        }"
      >
        <swiper-slide
          v-for="idx in 5"
          :key="idx"
          class="rounded-lg overflow-hidden"
        >
          <img
            class="w-full h-full"
            src="~assets/img/woman.jpg"
            alt=""
            srcset=""
          />
        </swiper-slide>
      </swiper>
    </div>
    <div class="md:max-w-4xl md:mx-auto md:mt-3">
      <swiper
        :modules="modules"
        :slidesPerView="2"
        :spaceBetween="15"
        class="text-buzz-purple"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 40,
          }
        }"
        :pagination="{ 
          clickable: true, 
          bulletActiveClass: 'active'
         }"
      >
        <swiper-slide
          v-for="idx in 4"
          :key="idx"
          class="rounded-lg overflow-hidden"
        >
          <img
            class="w-full h-full"
            src="~assets/img/woman.jpg"
            alt=""
            srcset=""
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>