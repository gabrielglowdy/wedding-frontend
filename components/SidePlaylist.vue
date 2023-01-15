<script setup>
const emit = defineEmits();

const props = defineProps({
  show: Boolean,
  songs: Array,
  selectedSong: Number,
});

const isShow = ref(false);

onMounted(() => {
  isShow.value = props.show;
});

watch(
  () => props.show,
  (val, prevVal) => {
    isShow.value = val;
  }
);

const close = () => {
  isShow.value = false;
  setTimeout(() => {
    emit("close");
  }, 300);
};

const selectSong = (index) => {
  emit("select", index);
  close();
};
</script>
<template>
  <transition name="fade">
    <div v-if="show">
      <div class="fixed inset-0 z-40">
        <div
          @click="close"
          class="relative w-full h-screen bg-gray-900/40"
        ></div>
      </div>
      <div class="fixed inset-y-0 z-50" :class="{ 'w-full md:w-1/3 right-0': isShow, 'w-0 -right-12': !isShow }">
        <div
          class="
            absolute
            transition-all
            duration-500
            inset-y-0
            bg-white
            rounded-none
            md:rounded-l-xl
            p-8
            h-full
            w-full
          "
        >
          <div @click="close" class="mb-6 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div>
            <h6 class="text-xl font-moon-dance mb-2">Playlist</h6>
          </div>
          <div class="flex flex-col">
            <div
              class="py-1 flex items-center cursor-pointer"
              v-for="(song, index) in songs"
              :key="index"
            >
              <div class="">
                <h6 @click="selectSong(index)" :class="{ 'text-sage-pale': index == selectedSong }">
                  {{ song.title }} - {{ song.artist }}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>