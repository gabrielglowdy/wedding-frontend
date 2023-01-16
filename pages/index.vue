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

const isOpenPlaylist = ref(false);

const invitation = ref({
  name: guest && guest.length > 0 ? guest[0].attributes.name : "Ahmad Junaidi",
  slug: guest && guest.length > 0 ? guest[0].attributes.slug : "ahmad-junaidi",
});

const toggleAudio = () => {
  if (isPlay.value) {
    musicBackground.value.pause();
  } else {
    musicBackground.value.play();
  }
  isFirstPlay.value = false;
  isPlay.value = !isPlay.value;
};

const isShuffle = ref(true);
const toggleShuffle = () => {
  isShuffle.value = !isShuffle.value;
};

const currentPlay = ref(0);
const selectedCategory = ref("acoustic");
const songs = {
  acoustic: [
    {
      title: `You've Got a Friend In Me`,
      artist: "Cavetown Cover",
      url: "https://www.youtube.com/watch?v=OFpTa2IfXts",
      src: "/audio/youve_got_a_friend_in_me-cavetown_cover.mp3",
    },
    {
      title: "Stand By Me",
      artist: "Boyce Avenue Cover",
      url: "https://www.youtube.com/watch?v=dU2UUkYoeBs",
      volume: 0.9,
      src: "/audio/Stand_By_Me_Ben_E.King_Boyce_Avenue_acoustic_cover.mp3",
    },
    {
      title: "Grow As We Go",
      artist: "Ben Platt ft. Sara Bareilles",
      url: "https://www.youtube.com/watch?v=mnrJTGT2u-s",
      volume: 0.9,
      src: "/audio/ben_platt_grow_as_we_go_ft_Sara_Bareilles.mp3",
    },
    {
      title: "Mother Tongue",
      artist: "Christina Rotondo Cover",
      url: "https://www.youtube.com/watch?v=DSUtDN_jbSs",
      volume: 0.9,
      src: "/audio/bring-me-the-horizon-mother-tongue-acoustic-christina-rotondo.mp3",
    },
  ],
  band: [
    {
      title: "Kamu",
      artist: "(Coboy Junior - Camela Putri Cover)",
      url: "https://www.youtube.com/watch?v=Ys6rvt4Cr78",
      volume: 0.9,
      src: "/audio/kamu-camela-putri.mp3",
    },
    {
      title: "Widodari",
      artist: "(Jagarta Cover)",
      url: "https://www.youtube.com/watch?v=P01sIOmjJXM",
      volume: 0.7,
      src: "/audio/jagarta-widodari.mp3",
    },
    {
      title: "Mind",
      artist: "Skrillex & Diplo ft. Kai",
      url: "https://www.youtube.com/watch?v=fDrTbLXHKu8",
      volume: 0.7,
      src: "/audio/skrillex-diplo_mind_ft_kai.mp3",
    },
    {
      title: "Mother Tongue",
      artist: "Bring Me The Horizon",
      url: "https://www.youtube.com/watch?v=RZekS_waLUY",
      volume: 0.7,
      src: "/audio/bring_me_the_horizon_mother_tongue.mp3",
    },
  ],
};
const playAudio = () => {
  isPlay.value = true;
  musicBackground.value.play();
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const nextPlay = () => {
  currentPlay.value =
    currentPlay.value + 1 < songs[selectedCategory.value].length
      ? currentPlay.value + 1
      : 0;
  selectMusic(currentPlay.value);
  playAudio();
};

const mixPlay = () => {
  const tmpIndex = getRandomInt(songs[selectedCategory.value].length);
  currentPlay.value =
    tmpIndex != currentPlay.value
      ? tmpIndex
      : currentPlay.value + 1 < songs[selectedCategory.value].length
      ? currentPlay.value + 1
      : 0;
  selectMusic(currentPlay.value);
  playAudio();
};

const selectMusic = (index) => {
  musicBackground.value.src = songs[selectedCategory.value][index].src;
  musicBackground.value.volume = songs[selectedCategory.value][index].volume
    ? songs[selectedCategory.value][index].volume
    : 1;
  currentPlay.value = index;
};

const selectSong = (index) => {
  selectMusic(index);
  playAudio();
};

const playNewMusic = (type) => {
  if (type == "muted") {
    return;
  }

  selectedCategory.value = type == "band" ? type : "acoustic";
  selectMusic(getRandomInt(songs[selectedCategory.value].length));

  setTimeout(() => {
    isPlay.value = true;
    isFirstPlay.value = false;
  }, 200);

  playAudio();
};

const onEnded = () => {
  if (isShuffle.value) {
    mixPlay();
  } else {
    nextPlay();
  }
};

const openPlaylist = () => {
  isOpenPlaylist.value = true;
};

const closePlaylist = () => {
  isOpenPlaylist.value = false;
};

const open = async () => {
  // const audio = document.querySelector("#musicBackground");

  if (!cover) {
    return false;
  }

  openInvitation.value = true;
  setTimeout(() => {
    window.scrollTo({ top: opening.value.offsetTop, behavior: "smooth" });
    cover.value.classList.add("-translate-y-screen");
    cover.value.classList.add("opacity-0");
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
      class="
        fixed
        z-50
        cover-invitation
        h-screen
        inset-0
        transition-all
        duration-1000
      "
    >
      <Cover :guest="invitation" @openInvitation="open" @play="playNewMusic" />
    </div>
    <div ref="opening" class="flex flex-col">
      <Opening :guest="invitation" />
      <Surah />
      <Pengantin data-scroll />
      <Place />
      <Photo />
      <Date />
      <Rsvp :guest="invitation" />
      <Wish />
      <Closing />
    </div>
    <div class="fixed bottom-12 z-40 right-3">
      <audio ref="musicBackground" @ended="onEnded" id="music">
        <source
          :src="songs[selectedCategory][currentPlay].src"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
      <div class="flex flex-col gap-3" v-show="!isFirstPlay">
        <div
          @click="openPlaylist"
          class="
            cursor-pointer
            bg-white
            text-sage-pale
            border-sage border
            p-3
            rounded-full
            h-12
            w-12
          "
        >
          <List />
        </div>
        <div
          @click="toggleShuffle"
          class="
            cursor-pointer
            border
            p-3
            rounded-full
            h-12
            w-12
            bg-white
            border-sage-pale
            text-sage-pale
          "
        >
          <Shuffle />
          <div
            v-if="isShuffle"
            class="w-1 h-1 bg-sage-pale mx-auto rounded-full"
          ></div>
        </div>
        <div
          @click="toggleAudio"
          class="
            h-12
            w-12
            bg-sage-pale
            border border-white/30
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
    <SidePlaylist
      @select="selectSong"
      :songs="songs[selectedCategory]"
      :selectedSong="currentPlay"
      :show="isOpenPlaylist"
      :isShuffle="isShuffle"
      :isPlay="isPlay"
      @toggle:shuffle="toggleShuffle"
      @toggle:play="toggleAudio"
      @next="onEnded"
      @close="closePlaylist"
    />
    <transition name="fade">
      <div
        v-show="isPlay"
        class="
          fixed
          bottom-0
          z-40
          inset-x-0
          text-white/90
          px-4
          py-1
          bg-sage-pale/80
        "
      >
        <span>
          {{ songs[selectedCategory][currentPlay].title }} -
          {{ songs[selectedCategory][currentPlay].artist }}
        </span>
      </div>
    </transition>
  </div>
</template>
