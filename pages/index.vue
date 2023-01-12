<script setup>
const openInvitation = ref(false);
const openCover = ref(true);
const cover = ref();
const musicBackground = ref();
const isInit = ref(false);
const isPlay = ref(false);

const invitation = ref({
  name: "Guest",
  slug: "guest",
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

const toggleAudio = () => {
  if (isPlay.value) {
    musicBackground.value.pause();
  } else {
    musicBackground.value.play();
  }
  isPlay.value = !isPlay.value;
};

const open = async () => {
  // const audio = document.querySelector("#musicBackground");

  if (!cover) {
    return false;
  }

  openInvitation.value = true;

  if (musicBackground) {
    setTimeout(() => {
      console.log("AUDIO");
      musicBackground.value.volume = 0.5;
      musicBackground.value.play();
      isPlay.value = true;
    }, 200);
  }

  // setTimeout(() => {
  cover.value.classList.add("-translate-y-screen");
  // }, 150);

  setTimeout(() => {
    isInit.value = true;
  }, 500);
};
</script>

<template>
  <div class="w-full overflow-x-hidden relative">
    <div
      ref="cover"
      class="fixed z-50 cover-invitation inset-0 transition-all duration-1000"
    >
      <InvitationCover
        class=""
        :open="openCover"
        :guest="invitation"
        @openInvitation="open"
      />
    </div>
    <div ref="opening" class="flex flex-col" v-show="openInvitation">
      <Hero />
      <Surah />
      <Pengantin />
      <Place />
      <Photo />
      <Date />
      <Wish />
      <Closing />
    </div>
    <div class="fixed bottom-6 z-40 right-4">
      <audio loop ref="musicBackground">
        <source
          src="~assets/audio/Randy_Newman_-_Youve_Got_a_Friend_in_Me.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
      <div class="flex flex-col gap-3">
        <div
          @click="toggleAudio"
          class="h-12 w-12 bg-buzz-purple border border-white text-white cursor-pointer rounded-full"
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
