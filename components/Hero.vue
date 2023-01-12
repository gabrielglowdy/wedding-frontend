<script setup>
const props = defineProps({
  isInit: Boolean
});

const initData = ref(props.isInit)
const showOpening = ref(false)

onMounted(() => {
  console.log('Mounted HERO');
  setTimeout(() => {
    showOpening.value = true
  }, 500);
});

</script>
<template>
  <div
    id="opening"
    class="
      bg-gradient-to-b
      from-blue-200
      to-blue-300
      h-screen
      w-screen
      relative
      overflow-hidden
      group
    "
  >
    <div class="absolute inset-y-16 w-full h-full overflow-hidden">
      <div class="flex flex-col gap-16">
        <div v-for="idx in 55" :key="idx">
          <div class="relative">
            <div
              class="flex gap-16 animate-marquee"
              :class="{
                'animate-marquee': idx != 2 && idx != 5 && idx != 3 || idx != 6,
                'animate-marquee-slow': idx % 2 == 0 || idx % 5 == 0,
                'animate-marquee-medium': idx == 3 || idx == 6,
              }"
            >
              <div v-for="index in 55" :key="index" class="text-white">
                <Cloud />
              </div>
            </div>
            <!-- <div
              class="absolute inset-y-0 flex gap-16 animate-marquee2"
              :class="{
                'ml-8': idx == 2 || idx == 5,
                '-ml-10': idx == 3 || idx == 6,
              }"
            >
              <div v-for="index in 15" :key="index" class="text-white">
                <Cloud />
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div v-show="showOpening" class="absolute inset-0">
      <div class="flex h-full items-center text-dark/80">
        <div
          class="
            flex flex-none
            w-auto
            mx-auto
            flex-col
            items-center
            gap-1
            bg-buzz-purple
            duration-1000
            shadow-buzz-green
            bg-opacity-10
            border-2 border-white
            backdrop-blur-lg
            drop-shadow-lg
            py-3
            px-5
            rounded-lg
          "
        >
          <h6 class="font-moon-dance text-3xl">The Wedding of</h6>
          <h2 class="font-montserrat font-semibold text-6xl md:text-7xl">
            Lilla & Gabriel
          </h2>
          <h6 class="mt-2 font-dancing-script italic">
            "To Infinity and Beyond"
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>