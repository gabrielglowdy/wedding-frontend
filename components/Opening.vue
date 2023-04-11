<script setup>
import Flower2 from './flower/Flower2.vue';

const props = defineProps({
  guest: Object,
});

const emit = defineEmits();
</script>

<template>
  <div class="relative w-screen overflow-hidden min-h-screen bg-green-50">
    <div class="absolute inset-0">
      <img
        class="w-full h-full object-cover"
        src="~assets/img/flower/bg-flower.jpg"
        alt=""
      />
    </div>
    <div class="absolute top-0 left-0">
      <Flower2 class="w-56 md:w-96 text-primary object-scale-down"></Flower2>
    </div>
    <div class="absolute right-0 bottom-0">
      <Flower2 class="w-56 md:w-96 text-primary md:ml-auto object-scale-down rotate-180"></Flower2>
    </div>
    <div
      class="absolute inset-0 flex items-center flex-col top-1/3 -mt-12"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="850"
      data-aos-duration="750"
      data-aos-easing="ease-in-out"
    >
      <Logo class="text-primary-light h-24 object-cover" />
      <h2
        class="
          inset-x-0
          text-3xl
          font-moon-dance
          mt-6
          text-primary-light text-center
        "
      >
        The Wedding of
      </h2>
      <div class="flex flex-col items-center">
        <h2
          class="inset-x-0 text-6xl lg:text-7xl mt-2 font-lora text-primary-light"
        >
          Lilla &
        </h2>
        <h2
          class="inset-x-0 text-6xl lg:text-7xl mt-2 font-lora text-primary-light"
        >
          Gabriel
        </h2>
        <h6 class="text-primary-light/60 font-lora">- To Infinity and Beyond -</h6>
      </div>
      <img
        class="w-20 mt-2 object-scale-down"
        src="~assets/img/flower/flower-center.png"
        alt=""
      />
    </div>

    
  </div>
</template>