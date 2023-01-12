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
  <div class="px-8 md:px-16 pb-8 flex flex-col gap-6">
    <div class="">
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="25"
        :breakpoints="{
          '768': {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }"
        class="text-buzz-purple"
        navigation
        :pagination="{ clickable: true }"
      >
        <swiper-slide
          v-for="idx in 5"
          :key="idx"
          class="rounded-lg overflow-hidden"
        >
          <img class="w-full h-full" src="~assets/img/woman.jpg" alt="" srcset="" />
        </swiper-slide>
      </swiper>
    </div>
    <div>
      <swiper
        :modules="modules"
        :slidesPerView="2"
        :spaceBetween="20"
        class="text-buzz-purple"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }"
        navigation
        :pagination="{ clickable: true }"
      >
        <swiper-slide
          v-for="idx in 4"
          :key="idx"
          class="rounded-lg overflow-hidden"
        >
          <img class="w-full h-full" src="~assets/img/woman.jpg" alt="" srcset="" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>