<script setup>
const props = defineProps({
  guest: Object,
});
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
        <img
          class="w-56 md:w-1/2 object-scale-down"
          src="~assets/img/flower/flower-2.png"
          alt=""
        />
      </div>
      <div class="absolute right-0 bottom-0">
        <img
          class="w-56 md:w-1/2 md:ml-auto object-scale-down rotate-180"
          src="~assets/img/flower/flower-2.png"
          alt=""
        />
      </div>
      <div class="absolute inset-0 flex items-center flex-col top-1/3 -mt-12">
        <Logo class="text-sage-pale h-24 object-cover" />
        <h2 class="inset-x-0 text-3xl font-moon-dance mt-6 text-sage-pale text-center">
          The Wedding of
        </h2>
        <div class="flex flex-col items-center">
          <h2 class="inset-x-0 text-6xl lg:text-7xl mt-2 font-lora text-sage-pale">
            Lilla &
          </h2>
          <h2 class="inset-x-0 text-6xl lg:text-7xl mt-2 font-lora text-sage-pale">
            Gabriel
          </h2>
        </div>
        <img
          class="w-20 mt-4 object-scale-down"
          src="~assets/img/flower/flower-center.png"
          alt=""
        />
      </div>
    </div>
</template>