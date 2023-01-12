<script setup>
const openInvitation = ref(false);
const openCover = ref(true);
const cover = ref();
const musicBackground = ref();
const isInit = ref(false);

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
    }, 200)
  }
  
  // setTimeout(() => {
    cover.value.classList.add("-translate-y-full");
  // }, 150);

  setTimeout(() => {
    isInit.value = true;
  }, 500);
};
</script>

<template>
  <div class="w-full overflow-hidden relative">
    <div
      ref="cover"
      class="fixed z-30 cover-invitation inset-0 transition-all duration-1000"
    >
      <InvitationCover
        class=""
        :open="openCover"
        :guest="invitation"
        @openInvitation="open"
      />
    </div>
    <div ref="opening" class="flex flex-col" v-show="openInvitation">
      <Hero :init="isInit" />
      <Surah />
      <Pengantin />
      <Place />
      <Photo />
      <Date />
      <Wish />
    </div>
    <div class="fixed bottom-0 inset-x-0 w-full">
      <audio controls loop ref="musicBackground">
        <source
          src="/audio/Randy_Newman_-_You've_Got_a_Friend_in_Me.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  </div>
</template>
