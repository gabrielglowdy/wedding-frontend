<script setup>
const emit = defineEmits();

const props = defineProps({
  show: Boolean,
  songs: Array,
  selectedSong: Number,
  isShuffle: Boolean,
  isPlay: Boolean,
  categories: Array,
  selectedCategory: String,
  currentCategory: String
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
  }, 600);
};

const selectSong = (index) => {
  emit("select", index, props.selectedCategory);
  // close();
};

const toggleShuffle = () => {
  emit("toggle:shuffle");
};

const togglePlay = () => {
  emit("toggle:play");
};

const nextPlay = () => {
  emit("next");
};

const selectCategory = (type) => {
  emit('selectCategory', type)
}
</script>
<template>
  <transition name="fade">
    <div class="transition-all duration-500" :class="{ 'translate-x-full' : !show }">
      <div class="fixed inset-0 z-40">
        <div
          @click="close"
          class="relative w-full h-screen  transition-all duration-300"
          :class="{'bg-gray-900/40' : isShow, 'bg-gray-900/0' : !isShow}"
        ></div>
      </div>
      <div
        class="fixed inset-y-0 z-50 transition-all duration-1000 w-full md:w-3/5 lg:w-1/3 "
        :class="{ 'right-0 translate-x-0': isShow, '-right-12 translate-x-full': !isShow }"
      >
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
            h-screen
            w-full
            flex flex-col
          "
        >
          <div @click="close" class="mb-6 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div>
            <h6 class="text-2xl text-center font-lora mb-3">Playlist</h6>
            <Line class="mb-3" />
          </div>
          <div class="flex flex-wrap items-center gap-3 mb-3 justify-center">
            <div v-for="(item, index) in categories.filter((item) => item.attributes.slug !== 'mute')" :key="index">
              <div @click="selectCategory(item.attributes.slug)" :class="`font-lora text-dark/80 capitalize pb-2 transition-all duration-500 border-b-2 ${selectedCategory === item.attributes.slug ? 'border-primary': 'border-transparent'} `" >{{ item.attributes.name }}</div>
            </div>
          </div>
          <div
            class="
              flex flex-col flex-auto
              gap-1
              overflow-y-scroll
              mb-6
              scrollbar-thin
              scrollbar-track-primary/10
              scrollbar-thumb-primary-light/80
              scrollbar-thumb-rounded-full
            "
          >
            <div
              class="py-2 px-3 rounded-md flex items-center cursor-pointer"
              :class="{ 'bg-primary/5 shadow-md shadow-primary/5 text-primary': (index == selectedSong && song.category === currentCategory) }"
              v-for="(song, index) in songs"
              :key="index"
            >
              <div class="flex flex-col w-full" @click="selectSong(index)">
                <h6 class="text-lg font-lora">{{ song.title }}</h6>
                <h6
                  class="font-lora text-sm"
                  :class="{
                    'text-primary-light/70': (index == selectedSong && song.category == currentCategory),
                    'text-gray-400': (index != selectedSong || song.category != currentCategory),
                  }"
                >
                  {{ song.artist }}
                </h6>
              </div>
            </div>
          </div>
          <div class="flex gap-3 items-center justify-center">
            <div
              @click="toggleShuffle"
              class="
                cursor-pointer
                border
                p-3
                rounded-full
                h-12
                w-12
                border-primary-light
                text-primary-light
              "
            >
              <Shuffle />
              <div
                v-if="isShuffle"
                class="w-1 h-1 bg-primary-light mx-auto rounded-full"
              ></div>
            </div>
            <div
              @click="togglePlay"
              class="
                h-12
                w-12
                text-primary-light
                border border-primary-light
                cursor-pointer
                rounded-full
              "
            >
              <span class="h-full flex items-center">
                <svg
                  v-if="isPlay"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 md:w-8 md:h-8 m-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                  />
                </svg>

                <svg
                  v-else
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-7 h-7 m-auto"
                >
                  <path
                    d="M9.525 18.025C9.19167 18.2417 8.854 18.254 8.512 18.062C8.17067 17.8707 8 17.575 8 17.175V6.825C8 6.425 8.17067 6.129 8.512 5.937C8.854 5.74567 9.19167 5.75834 9.525 5.975L17.675 11.15C17.975 11.35 18.125 11.6333 18.125 12C18.125 12.3667 17.975 12.65 17.675 12.85L9.525 18.025Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
            <div
              @click="nextPlay"
              class="
                cursor-pointer
                border
                p-2
                rounded-full
                h-12
                w-12
                text-primary-light
                border-primary-light
              "
            >
              <Next />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>