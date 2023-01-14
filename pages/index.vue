<script setup>
const route = useRoute();
const runtimeConfig = useRuntimeConfig();

const openInvitation = ref(false);
const openCover = ref(true);
const cover = ref();
const opening = ref();
const musicBackground = ref();
const isInit = ref(false);
const isPlay = ref(false);
const isFirstPlay = ref(true);

// Temp
const guest = ref(false);

// if (!route.params.guest) {
//   throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
// }

// const { find } = useStrapi()
// const { data:guest} = await find('guests', { filters: { slug: route.params.guest }})

// if (guest.length == 0) {
//   throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
// }

const invitation = ref({
  name: guest && guest.length > 0 ? guest[0].attributes.name : "Ahmad Junaidi",
  slug: guest && guest.length > 0 ? guest[0].attributes.slug : "ahmad-junaidi",
});

const audioVolumeIn = (q) => {
  if (q.volume) {
    var InT = 0;
    var setVolume = 0.2; // Target volume level for new song
    var speed = 0.005; // Rate of increase
    q.volume = InT;
    var eAudio = setInterval(function () {
      InT += speed;
      q.volume = InT.toFixed(1);
      if (InT.toFixed(1) >= setVolume) {
        clearInterval(eAudio);
      }
    }, 50);
  }
};

const playAudio = () => {
  // setTimeout(() => {
  musicBackground.value.play();
  // }, 2000);
};

const toggleAudio = () => {
  if (isPlay.value) {
    musicBackground.value.pause();
  } else {
    musicBackground.value.play();
  }
  isFirstPlay.value = false;
  isPlay.value = !isPlay.value;
};

const onEnded = () => {
  // console.log('MUSIC END');
}

const open = async () => {
  // const audio = document.querySelector("#musicBackground");

  if (!cover) {
    return false;
  }

  openInvitation.value = true;

  setTimeout(() => {
    isPlay.value = true;
    isFirstPlay.value = false;
  }, 200);

  setTimeout(() => {
    window.scrollTo({ top: opening.value.offsetTop, behavior: 'smooth' })
  cover.value.classList.add("-translate-y-screen");
  }, 150);

  setTimeout(() => {
    isInit.value = true;
  }, 500);
};
</script>

<template>
  <div class="w-full min-h-screen overflow-x-hidden relative">
    <div
      ref="cover"
      class="fixed z-50 cover-invitation h-screen inset-0 transition-all duration-1000"
    >
      <Cover :guest="invitation" @openInvitation="open" @play="playAudio" />
    </div>
    <div ref="opening" class="flex flex-col">
      <Opening :guest="invitation" />
      <Surah />
      <Pengantin />
      <Place />
      <Photo />
      <Date />
      <Wish />
      <Closing />
    </div>
    <div class="fixed bottom-6 z-40 right-4 lg:right-8">
      <audio loop ref="musicBackground" @ended="onEnded" id="music">
        <source
          src="~assets/audio/youve_got_a_friend_in_me-cavetown_cover.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
      <div class="flex flex-col gap-3" v-show="!isFirstPlay">
        <div
          @click="toggleAudio"
          class="
            h-12
            w-12
            bg-sage
            border border-white
            text-white
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
              class="w-6 h-6 m-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 5.25v13.5m-7.5-13.5v13.5"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 m-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
