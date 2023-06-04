<script setup>
import Flower10 from './flower/Flower10.vue';
import Flower13 from './flower/Flower13.vue';

const runtimeConfig = useRuntimeConfig();

const nuxtApp = useNuxtApp();
const dayjs = nuxtApp.dayjs

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
  guest: {
    type: Object
  },
  color: {
    type: String,
    default: 'primary'
  },
  title : {
    type: String,
    default : 'acara pernikahan'
  },
  eventType : {
    type: String,
    default : 'akad'
  }
});

const getHour = (hour_string) => {
  if (!hour_string) {
    return ''
  }
  const time = hour_string.split('.')[0].split(':');
  return time[0] + ":" + time[1]
}

</script>
<template>
  <div class="relative">
    <div class="absolute -left-8 top-64">
      <Flower13 :class="`h-56 object-scale-down mt-12 ${color === 'terracotta' ? 'text-primary-terracotta' : 'text-primary'}`" />
    </div>
    <div class="absolute -right-2 top-96">
      <Flower10 :class="`h-56 object-scale-down mt-12 ${color === 'terracotta' ? 'text-primary-terracotta' : 'text-primary'}`" />
    </div>
    <div :class="`py-16 ${color === 'terracotta' ? 'bg-primary-terracotta/5' : 'bg-primary/5'}`">
      <h6 data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="300" class="
              text-center
              font-medium font-moon-dance
              text-2xl
              md:text-3xl
              px-6
              text-dark/70
            ">
        Assalamu'alaikum Warahmatullahi Wabarakatuh
      </h6>
      <h6 data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="400" class="
              text-xs
              md:text-base md:max-w-5xl md:mx-auto
              word-break
              text-center
              w-full
              text-dark/60
              mt-2
              font-lora
              px-6
            ">
        Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud untuk
        mengundang Bapak/Ibu/Sauadara/i untuk hadir pada {{ title }} kami
        yang insya Allah akan dilaksanakan pada:
      </h6>
    </div>
    <div class=""></div>
    <div class="relative px-4 py-16 lg:px-36">
      <div class="flex flex-col lg:grid lg:grid-cols-3 gap-3 items-center">
        <Line :color="color" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="250" data-aos-duration="600"
          data-aos-easing="ease-in-out" class="lg:hidden inline-block" />
        <div class="flex flex-col items-center gap-3">
          <h6 data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="450" data-aos-duration="600"
            data-aos-easing="ease-in-out" class="text-2xl font-satisfy mt-3 text-gray-800/80">
            {{ dayjs(data?.akad_date).format("dddd") }}
          </h6>
          <h6 data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="650" data-aos-duration="600"
            data-aos-easing="ease-in-out" :class="`text-4xl font-satisfy ${color === 'terracotta' ? 'text-primary-terracotta' : 'text-primary-light'}`">
            {{ dayjs(data?.akad_date).format("DD MMMM YYYY") }}
          </h6>
        </div>
        <Line :color="color" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="850" data-aos-duration="500"
          data-aos-easing="ease-in-out" class="lg:hidden inline-block" />
        <div class="flex-auto flex flex-col items-center gap-3">
          <div v-if="guest?.invite_akad" class="flex flex-col items-center gap-3">
            <h6 data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="350" data-aos-duration="500"
              data-aos-easing="ease-in-out" class="text-2xl font-satisfy mt-3 text-gray-800/80">
              {{ (eventType == 'akad' ? 'Akad Nikah' : (guest?.invite_akad ? 'Sesi 1' : 'Waktu')) }}
            </h6>
            <h6 data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="450" data-aos-duration="500"
              data-aos-easing="ease-in-out" :class="`text-3xl font-satisfy ${color === 'terracotta' ? 'text-primary-terracotta' : 'text-primary-light'}`">
              {{ getHour(data?.akad_start) }} - {{ getHour(data?.akad_end) }}
            </h6>
          </div>
          <div v-if="guest?.invite_reception" class="flex flex-col items-center gap-3">
            <h6 data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="650" data-aos-duration="500"
              data-aos-easing="ease-in-out" class="text-2xl font-satisfy mt-8 text-gray-800/80">
              {{ (eventType == 'akad' ? 'Resepsi' : (guest?.invite_akad ? 'Sesi 2' : 'Waktu')) }}
            </h6>
            <h6 data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="850" data-aos-duration="500"
              data-aos-easing="ease-in-out" :class="`text-3xl font-satisfy ${color === 'terracotta' ? 'text-primary-terracotta' : 'text-primary-light'}`">
              {{ getHour(data?.reception_start) }} - {{ getHour(data?.reception_end) }}
            </h6>
          </div>
        </div>
        <Line :color="color" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="350" data-aos-duration="500"
          data-aos-easing="ease-in-out" class="lg:hidden inline-block" />
        <div class="flex flex-col items-center gap-3 text-center">
          <h6 data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="450" data-aos-duration="500"
            data-aos-easing="ease-in-out" class="text-2xl mt-8 font-satisfy text-gray-800/80">
            Tempat
          </h6>
          <h6 data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="650" data-aos-duration="500"
            data-aos-easing="ease-in-out" :class="`text-3xl font-satisfy ${color === 'terracotta' ? 'text-primary-terracotta' : 'text-primary-light'}`">
            {{ data.place }}
          </h6>
          <h6 data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="750" data-aos-duration="500"
            data-aos-easing="ease-in-out" class="text-sm text-center break-words italic px-8 text-gray-800/80">
            {{ data.place_address }}
          </h6>
        </div>
      </div>
      <div class="flex items-center w-full flex-col mt-8">
        <a data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="750"
          data-aos-easing="ease-in-out" :href="data.place_url" :class="`
                ${color === 'terracotta' ? 'bg-primary-terracotta' : 'bg-primary-light'}
                py-3
                px-6
                rounded-full
                mt-3
                text-xl text-white
                font-lora
                mx-auto
              `">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 inline">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
            </svg>
          </span>
          <span> Google Maps </span>
        </a>
      </div>
    </div>
  </div>
</template>