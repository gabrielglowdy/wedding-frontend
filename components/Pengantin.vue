<script setup>
const runtimeConfig = useRuntimeConfig();
const strapi_url = runtimeConfig.public.strapiURL;

const props = defineProps({
  data: {
    type: Object,
    defualt: null
  }
})
</script>
<template>
  <div v-if="data" class="relative px-8">
    <div class="absolute w-full h-full inset-0">
      <img
        src="~assets/img/flower/bg-flower.jpg"
        class="w-full h-full object-cover"
        alt=""
        srcset=""
      />
    </div>
    <div
      class="relative flex flex-col lg:flex-row gap-4 items-center py-16 mx-auto"
    >
      <div class="flex flex-col items-center flex-auto">
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="350" data-aos-duration="500" data-aos-easing="ease-in-out" class="relative">
          <div
            class="
              overflow-hidden
              w-32
              h-44
              rounded-t-[100px] rounded-b-xl
              border-2 border-primary-light
              p-0.5
            "
          >
            <img
              :src="strapi_url + data.bride_photo.data.attributes.url"
              class="w-full h-full object-cover scale-125"
              alt=""
              srcset=""
            />
          </div>
          <div
            class="absolute -bottom-6 -right-6 w-16 h-16"
          >
            <img
              class="w-full h-full object-scale-down"
              src="~assets/img/flower/flower-ring-2.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <h6
          data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-delay="450" data-aos-duration="700" data-aos-easing="ease-in-out"
          class="
            mt-6
            font-medium
            text-center
            font-satisfy
            text-primary-light text-3xl
            md:text-4xl
          "
        >
          {{ data.bride }}
        </h6>
        <h6
          data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-delay="550" data-aos-duration="600" data-aos-easing="ease-in-out"
          class="text-sm md:text-md mt-1 px-4 md:px-12 text-center font-lora"
        >
          {{ data.bride_label }} {{ data.father_label }} {{ data.bride_father }}
        </h6>
        <h6
          data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-delay="650" data-aos-duration="650" data-aos-easing="ease-in-out"
          class="text-sm md:text-md px-4 md:px-12 text-center font-lora"
        >
          & {{ data.mother_label }} {{ data.bride_mother }}
        </h6>
        <h6
          data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="750" data-aos-duration="650" data-aos-easing="ease-in-out"
          class="text-xs mt-1 md:text-md italic text-center font-lora"
        >
          ({{ data.bride_address }})
        </h6>
      </div>
      <h6 data-aos="zoom-in" data-aos-anchor-placement="top-bottom" data-aos-delay="350" data-aos-duration="500" data-aos-easing="ease-in-out" class="text-4xl font-satisfy mt-2 text-primary-light w-full text-center">&</h6>
      <div class="flex flex-col items-center flex-auto">
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="350" data-aos-easing="ease-in-out" class="relative">
          <div
            class="
              overflow-hidden
              w-32
              h-44
              rounded-t-[100px] rounded-b-xl
              border-2 border-primary-light
              p-0.5
            "
          >
            <img
              :src="strapi_url + data.groom_photo.data.attributes.url"
              class="w-full h-full object-cover scale-125"
              alt=""
              srcset=""
            />
          </div>
          <div
            class="absolute -bottom-6 -right-6 w-16 h-16"
          >
            <img
              class="w-full h-full object-scale-down rotate-180"
              src="~assets/img/flower/flower-ring-1.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <h6
          data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="450" data-aos-easing="ease-in-out"
          class="
            mt-6
            font-medium font-satisfy
            text-primary-light text-center text-3xl
            md:text-4xl
          "
        >
          {{ data.groom }}
        </h6>
        <div class="">
          <h6
            data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="550" data-aos-duration="650" data-aos-easing="ease-in-out"
            class="text-sm md:text-md mt-1 px-4 md:px-12 text-center font-lora"
          >
            {{ data.groom_label }} {{ data.father_label }} {{ data.groom_father }}
          </h6>
          <h6
            data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="650" data-aos-duration="750" data-aos-easing="ease-in-out"
            class="text-sm md:text-md px-4 md:px-12 text-center font-lora"
          >
            & {{ data.mother_label }} {{ data.groom_mother }}
          </h6>
        </div>
        <h6
          data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="750" data-aos-duration="850" data-aos-easing="ease-in-out"
          class="text-xs mt-1 md:text-md italic text-center font-lora"
        >
          ({{ data.groom_address }})
        </h6>
      </div>
    </div>
  </div>
</template>
