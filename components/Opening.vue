<script setup>
import { KinesisContainer, KinesisElement } from "vue-kinesis";

const props = defineProps({
  guest: Object,
});
</script>

<template>
  <ClientOnly>
    <KinesisContainer event="scroll" class="relative w-screen overflow-hidden h-screen bg-green-50">
      <div class="absolute inset-0">
        <img
          class="w-full h-full object-cover"
          src="~assets/img/flower/bg-flower.jpg"
          alt=""
        />
      </div>
      <KinesisElement :strength="-50" type="rotate" transformOrigin="top left" class="absolute top-0 left-0">
        <img
          class="w-56 md:w-1/2 object-scale-down"
          src="~assets/img/flower/flower-2.png"
          alt=""
        />
      </KinesisElement>
      <KinesisElement :strength="50" type="rotate" transformOrigin="bottom right" class="absolute right-0 bottom-0">
        <img
          class="w-56 md:w-1/2 md:ml-auto object-scale-down rotate-180"
          src="~assets/img/flower/flower-2.png"
          alt=""
        />
      </KinesisElement>
      <KinesisElement :strength="250" type="translate" class="absolute inset-0 flex items-center flex-col top-1/3 -mt-12">
        <Logo data-aos="fade-up" data-aos-delay="350" data-aos-duration="500" data-aos-easing="ease-in-out" class="text-sage-pale h-24 object-cover" />
        <h2 data-aos="fade-up" data-aos-delay="450" data-aos-duration="550" data-aos-easing="ease-in-out" class="inset-x-0 text-lg font-lora mt-6 text-sage-pale text-center">
          The Wedding of
        </h2>
        <div class="flex flex-col items-center">
          <h2 data-aos="fade-up" data-aos-delay="550" data-aos-duration="500" data-aos-easing="ease-in-out" class="inset-x-0 text-6xl lg:text-7xl mt-2 font-lora text-sage-pale">
            Lilla &
          </h2>
          <h2 data-aos="fade-up" data-aos-delay="650" data-aos-duration="500" data-aos-easing="ease-in-out" class="inset-x-0 text-6xl lg:text-7xl mt-2 font-lora text-sage-pale">
            Gabriel
          </h2>
        </div>
        <img
          data-aos="fade-up" data-aos-delay="750" data-aos-duration="500" data-aos-easing="ease-in-out"
          class="w-20 mt-4 object-scale-down"
          src="~assets/img/flower/flower-center.png"
          alt=""
        />
      </KinesisElement>
    </KinesisContainer>
  </ClientOnly>
</template>