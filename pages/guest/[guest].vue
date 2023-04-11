<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const strapi_url = runtimeConfig.public.strapiURL;
const openInvitation = ref(false);
const openCover = ref(false);
const cover = ref();
const opening = ref();
const musicBackground = ref();
const isInit = ref(false);
const isPlay = ref(false);
const isFirstPlay = ref(true);


if (!route.params.guest) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

definePageMeta({
  middleware: ["auth"]
})

const { update, find, findOne } = useStrapi();
const { data: guest } = await find("guests", {
  filters: { slug: route.params.guest },
});

// const url = runtimeConfig.public.baseURL + "guests";
// const { data: guest} = await useFetch(url + (route.params.guest ? '?filters[slug][$eq]=' + route.params.guest : ''))

if (guest.length == 0) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

const { data: categories } = await find("categories");

const selectedGuest = ref(guest[0]);
const invitation = ref({
  name: selectedGuest.value.attributes.name,
  slug: selectedGuest.value.attributes.slug,
});

const isOpenPlaylist = ref(false);
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
const selectedSong = ref([]);
const showSong = ref([]);
const songLists = ref([]);
const currentCategory = ref('acoustic');

const playAudio = () => {
  isPlay.value = true;
  musicBackground.value.play();
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const nextPlay = () => {
  currentPlay.value =
    currentPlay.value + 1 < selectedSong.value.length
      ? currentPlay.value + 1
      : 0;
  selectMusic(currentPlay.value);
  playAudio();
};

const mixPlay = () => {
  const tmpIndex = getRandomInt(selectedSong.value.length);
  currentPlay.value =
    tmpIndex != currentPlay.value
      ? tmpIndex
      : currentPlay.value + 1 < selectedSong.value.length
        ? currentPlay.value + 1
        : 0;
  selectMusic(currentPlay.value);
  playAudio();
};

const selectMusic = (index, category = currentCategory.value) => {
  if (songLists.value.length == 0) {
    return false;
  }
  selectedSong.value = songLists.value.filter((item) => item.attributes.category.data.attributes.slug === category).map((element) => {
    const data = element.attributes;
    return {
      title: data.title,
      artist: data.artist,
      url: data.url,
      category: data.category.data.attributes.slug,
      volume: data.volume ? data.volume / 100 : 1,
      mime: data.song.data.attributes.mime ? data.song.data.attributes.mime : 'audio/mpeg',
      src: strapi_url + data.song.data.attributes.url,
    }
  });
  currentCategory.value = selectedSong.value[index].category;
  musicBackground.value.src = selectedSong.value[index].src;
  musicBackground.value.volume = selectedSong.value[index].volume
    ? selectedSong.value[index].volume
    : 1;
  currentPlay.value = index;
};

const selectSong = (index, category) => {
  selectedCategory.value = category
  selectMusic(index, category);
  playAudio();
};

const playNewMusic = async (type) => {
  if (type == "muted" || type == "mute") {
    return;
  }

  const { data: songs } = await find("songs", {
    // filters: {
    //   category: {
    //     slug: type,
    //   },
    // },
    populate: ["song", 'category'],
  });
  songLists.value = songs
  selectedCategory.value = type
  currentCategory.value = type
  selectedSong.value = songLists.value.filter((item) => item.attributes.category.data.attributes.slug === type).map((element) => {
    const data = element.attributes;
    return {
      title: data.title,
      artist: data.artist,
      url: data.url,
      category: data.category.data.attributes.slug,
      volume: data.volume ? data.volume / 100 : 1,
      mime: data.song.data.attributes.mime ? data.song.data.attributes.mime : 'audio/mpeg',
      src: strapi_url + data.song.data.attributes.url,
    }
  });
  console.log(type, selectedSong.value);
  showSong.value = [...selectedSong.value]
  selectMusic(getRandomInt(selectedSong.value.length));

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
  selectedCategory.value = currentCategory.value
  isOpenPlaylist.value = false;
  getSongList()
};

const detail = ref(null);
const getDetail = async () => {
  detail.value = await find("wedding-detail", {
    populate: ["bride_photo", "groom_photo", "photos", "big_photos"],
  }).then((res) => {
    return res.data.attributes;
  });
};

const open = async () => {
  // const audio = document.querySelector("#musicBackground");

  if (!cover) {
    return false;
  }
  await getDetail();
  openCover.value = true;
  openInvitation.value = true;
  setTimeout(() => {
    //   window.scrollTo({ top: opening.value.offsetTop, behavior: "smooth" });
    cover.value.classList.add("-translate-y-screen");
    cover.value.classList.add("opacity-0");
  }, 150);

  setTimeout(() => {
    isInit.value = true;
  }, 500);

  const res = await update("guests", selectedGuest.value.id, {
    is_open: true,
  });
};
const submitRSVP = async (data) => {
  const res = await update("guests", selectedGuest.value.id, {
    can_come: data.can_come,
    person_come: data.can_come ? data.person : 0,
    is_confirm_rsvp: true,
  });

  showToast({
    type: 'success',
    title: 'Berhasil',
    body: 'RSVP Anda telah dikonfirmasi'
  })
};

const updateRSVP = async (data) => {
  const res = await update("guests", selectedGuest.value.id, {
    can_come: data.can_come,
    person_come: data.can_come ? data.person : 0,
    is_confirm_rsvp: true,
  });

  showToast({
    type: 'success',
    title: 'Berhasil',
    body: 'RSVP Anda telah diperbarui'
  })
};

const onSendWish = async () => {
  const res = await update("guests", selectedGuest.value.id, {
    is_sent_wish: true,
  });

  showToast({
    type: 'success',
    title: 'Berhasil',
    body: 'Pesan Anda berhasil dikirim'
  })
}

const toastShow = ref(false)
const toastType = ref('success')
const toastTitle = ref('')
const toastBody = ref('')

const showToast = (data) => {
  toastShow.value = true
  toastType.value = data.type
  toastTitle.value = data.title
  toastBody.value = data.body
  setTimeout(() => {
    toastShow.value = false
  }, 3000);
}

const onChangeCategory = async(val) => {
  selectedCategory.value = val
  getSongList()
}

const getSongList = () => {
  showSong.value = songLists.value.filter((item) => item.attributes.category.data.attributes.slug === selectedCategory.value).map((element) => {
    const data = element.attributes;
    return {
      title: data.title,
      artist: data.artist,
      category: data.category.data.attributes.slug,
      url: data.url,
      volume: data.volume ? data.volume / 100 : 1,
      mime: data.song.data.attributes.mime ? data.song.data.attributes.mime : 'audio/mpeg',
      src: strapi_url + data.song.data.attributes.url,
    }
  });
}
</script>

<template>
  <div class="w-full overflow-x-hidden relative">
    <div ref="cover" class="fixed z-50 cover-invitation inset-0 transition-all duration-1000">
      <Cover :guest="invitation" :category="categories" @openInvitation="open" @play="playNewMusic" />
    </div>
    <div>
      <div v-if="openCover" ref="opening" class="flex flex-col overflow-hidden">
        <Opening :guest="invitation" />
        <Surah />
        <Pengantin :data="detail" />
        <Place :data="detail" :guest="selectedGuest.attributes" />
        <Photo :photos="detail?.photos?.data" :big-photos="detail?.big_photos?.data" />
        <Date />
        <Rsvp :guest="selectedGuest.attributes" @submit="submitRSVP" @update="updateRSVP" />
        <Wish @toast="showToast" :name="invitation.name" :slug="invitation.slug"
          :is_sent="selectedGuest.attributes.is_sent_wish" @send="onSendWish" />
        <Closing />
      </div>
      <div class="fixed bottom-12 z-40 right-3">
        <audio ref="musicBackground" @ended="onEnded" id="music">
          <source :src="
            selectedSong.length > 0 ? selectedSong[currentPlay].src : null
          " :type="selectedSong.length > 0 ? selectedSong[currentPlay]?.mime : 'audio/mpeg'" />
          Your browser does not support the audio element.
        </audio>
        <div class="flex flex-col gap-3" v-show="!isFirstPlay">
          <div @click="openPlaylist" class="
                          cursor-pointer
                          bg-white
                          text-primary-light
                          border-primary border
                          p-3
                          rounded-full
                          h-12
                          w-12
                        ">
            <List />
          </div>
          <div @click="toggleShuffle" class="
                          cursor-pointer
                          border
                          p-3
                          rounded-full
                          h-12
                          w-12
                          bg-white
                          border-primary-light
                          text-primary-light
                        ">
            <Shuffle />
            <div v-if="isShuffle" class="w-1 h-1 bg-primary-light mx-auto rounded-full"></div>
          </div>
          <div @click="toggleAudio" class="
                          h-12
                          w-12
                          bg-primary-light
                          border border-white/30
                          text-white
                          cursor-pointer
                          rounded-full
                        ">
            <span class="h-full flex items-center">
              <svg v-if="isPlay" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 md:w-8 md:h-8 m-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 m-auto">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <SidePlaylist @select="selectSong" :currentCategory="currentCategory" :selected-category="selectedCategory" @selectCategory="onChangeCategory" :categories="categories" :songs="showSong" :selectedSong="currentPlay" :show="isOpenPlaylist"
        :isShuffle="isShuffle" :isPlay="isPlay" @toggle:shuffle="toggleShuffle" @toggle:play="toggleAudio" @next="onEnded"
        @close="closePlaylist" />
      <transition name="fade">
        <div v-show="isPlay" class="
                        fixed
                        bottom-0
                        z-40
                        left-0
                        right-0
                        text-white/90
                        px-4
                        py-1
                        bg-primary-light/80
                        md:right-0 md:w-96 md:ml-auto md:rounded-tl-lg
                      ">
          <span>
            {{ selectedSong[currentPlay]?.title }} -
            {{ selectedSong[currentPlay]?.artist }}
          </span>
        </div>
      </transition>
    </div>


    <div>
      <div
        :class="`fixed transition-all duration-500 border-2 ${toastType === 'success' ? 'border-primary-light' : (toastType === 'danger' ? 'border-red-700' : 'border-gray-700')} ${toastShow ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} z-100 top-8 inset-x-0 w-5/6 shadow-lg md:w-full max-w-md lg:max-w-xl bg-white p-2 gap-1 rounded-xl flex mx-auto items-center`">
        <div>
          <svg v-if="toastType === 'success'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-primary-light">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <svg v-else-if="toastType === 'danger'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-red-600">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>

        </div>
        <div class="flex flex-col">
          <h6 v-if="toastTitle" class="text-md font-semibold">{{ toastTitle }}</h6>
          <p v-if="toastBody" class="text-gray-700 text-sm">{{ toastBody }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
