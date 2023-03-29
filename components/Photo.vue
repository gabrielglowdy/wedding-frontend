<script setup>
const props = defineProps({
  photos: Array,
  bigPhotos: Array,
});
const runtimeConfig = useRuntimeConfig();
const strapi_url = runtimeConfig.public.strapiURL;

const isDownBigPhoto = ref(false);
const startXBigPhoto = ref(0);
const scrollLeftBigPhoto = ref(null);
const bigPhotosElem = ref();

const isDownPhoto = ref(false);
const startXPhoto = ref(0);
const scrollLeftPhoto = ref(null);
const photosElem = ref();

const onDownBigPhoto = (e) => {
  isDownBigPhoto.value = true;
  // bigPhotosElem.value.classList.add("active");
  bigPhotosElem.value.classList.remove("cursor-grab");
  bigPhotosElem.value.classList.add("cursor-grabbing");
  startXBigPhoto.value = e.pageX - bigPhotosElem.value.offsetLeft;
  scrollLeftBigPhoto.value = bigPhotosElem.value.scrollLeft;
};

const onLeaveBigPhoto = (e) => {
  isDownBigPhoto.value = false;
  // bigPhotosElem.value.classList.remove("active");
  bigPhotosElem.value.classList.remove("cursor-grabbing");
  bigPhotosElem.value.classList.add("cursor-grab");
};

const onMoveBigPhoto = (e) => {
  if (!isDownBigPhoto.value) {
    return;
  }
  e.preventDefault();
  const x = e.pageX - bigPhotosElem.value.offsetLeft;
  const walk = (x - startXBigPhoto.value) * 1.5;
  bigPhotosElem.value.scrollLeft = scrollLeftBigPhoto.value - walk;
};

const onDownPhoto = (e) => {
  isDownPhoto.value = true;
  photosElem.value.classList.remove("cursor-grab");
  photosElem.value.classList.add("cursor-grabbing");
  startXPhoto.value = e.pageX - photosElem.value.offsetLeft;
  scrollLeftPhoto.value = photosElem.value.scrollLeft;
};

const onLeavePhoto = (e) => {
  isDownPhoto.value = false;
  photosElem.value.classList.remove("cursor-grabbing");
  photosElem.value.classList.add("cursor-grab");
};

const onMovePhoto = (e) => {
  if (!isDownPhoto.value) {
    return;
  }
  e.preventDefault();
  const x = e.pageX - photosElem.value.offsetLeft;
  const walk = (x - startXPhoto.value) * 1.5;
  photosElem.value.scrollLeft = scrollLeftPhoto.value - walk;
};
</script>
<template>
  <div class="px-8 md:px-16 pb-8 flex flex-col gap-4">
    <div
      v-if="photos && photos.length > 0"
      ref="photosElem"
      data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="450" data-aos-easing="ease-in-out"
      @mousedown="onDownPhoto"
      @mouseleave="onLeavePhoto"
      @mouseup="onLeavePhoto"
      @mousemove="onMovePhoto"
      class="
        md:max-w-4xl md:mx-auto md:mt-3
        overflow-scroll
        cursor-grab
        scrollbar-thin
        scrollbar-track-sage/10
        scrollbar-thumb-sage-pale/80
        scrollbar-thumb-rounded-full
        pb-3
      "
    >
      <div class="flex gap-4 w-full">
        <div
          v-for="(item, idx) in photos"
          :key="idx"
          class="flex-none w-[200px] rounded-lg overflow-hidden"
        >
          <img
            class="w-full h-64 object-cover"
            :src="strapi_url + item.attributes.url"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
    <div
      ref="bigPhotosElem"
      @mousedown="onDownBigPhoto"
      @mouseleave="onLeaveBigPhoto"
      @mouseup="onLeaveBigPhoto"
      @mousemove="onMoveBigPhoto"
      class="
        md:max-w-4xl md:mx-auto md:mt-3
        overflow-scroll
        cursor-grab
        scrollbar-thin
        scrollbar-track-sage/10
        scrollbar-thumb-sage-pale/80
        scrollbar-thumb-rounded-full
        pb-3
      "
    >
      <div class="flex gap-3 w-full">
        <div
          v-for="(item, idx) in bigPhotos"
          :key="idx"
          class="flex-none w-[76vw] md:w-[400px] rounded-lg overflow-hidden"
        >
          <img
            class="w-full h-96 object-cover"
            :src="strapi_url + item.attributes.url"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  </div>
</template>