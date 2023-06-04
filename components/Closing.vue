<script setup>
const props = defineProps({
  data: {
    type: Object,
    defualt: null
  },
  color: {
    type: String,
    default: 'primary'
  },
  swap: {
    type: Boolean,
    default: false
  },
})
</script>
<template>
  <div>
    <div class="relative w-full h-screen p-8 bg-gray-800">
      <div :class="`absolute inset-0 ${color==='terracotta' ? 'bg-primary-terracotta/30' : 'bg-primary-light/30'}`">
        <video
          class="w-full h-full object-cover opacity-20"
          autoplay
          playsinline
          muted
          loop
        >
          <source v-if="color==='primary'" src="~assets/video/video-9.mp4" type="video/mp4" />
          <source v-else src="~assets/video/video-prewed.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="relative">
        <div class="flex flex-col gap-3 text-center text-white/80 items-center">
          <p
            class="
              w-full
              break-words
              px-2
              md:px-12
              mt-4
              md:mt-16
              font-lora
              text-sm
              md:text-lg
            "
          >
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i dapat berkenan hadir dan memberikan do'a restu
          </p>

          <div>
            <p class="mt-8 text-sm md:text-xl font-lora px-2 md:px-8">
              Keluarga {{ data.father_label }} {{ swap ? data.groom_father : data.bride_father }} &
            </p>
            <p class="text-sm md:text-xl font-lora px-16">
              {{ data.mother_label }} {{ swap ? data.groom_mother : data.bride_mother }}
            </p>
          </div>
          <p class="my-1 md:my-3 text-4xl font-lora">&</p>
          <div>
            <p class="text-sm md:text-xl font-lora md:px-8">
              Keluarga {{ data.father_label }} {{ swap ? data.bride_father : data.groom_father }} &
            </p>
            <p class="text-sm md:text-xl font-lora px-16">
              {{ data.mother_label }} {{ swap ? data.bride_mother : data.groom_mother }}
            </p>
          </div>
          <div>
            <Logo class="text-white/60 h-16 mt-6 object-cover" />
            <h6 class="text-5xl mb-8 mb:0 mt-4 font-moon-dance">
              Lilla & Gabriel
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>