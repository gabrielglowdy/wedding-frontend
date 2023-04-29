<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

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

const isShowSelectedPhoto = ref(false)
const selectedPhotoUrl = ref('')
const selectedPhoto = ref({})

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

const onSelectPhoto = (photo) => {
  selectedPhoto.value = photo
  isShowSelectedPhoto.value = true
}

const closeSelectedPhoto = () => {
  isShowSelectedPhoto.value = false
  // selectedPhoto.value = {}
}

const splideOption = {
  rewind: true,
  autoWidth: true,
  gap: '0.75em',
  pagination: false,
  autoplay: true
}
</script>
<template>
  <div class="px-8 md:px-16 pb-8 flex flex-col gap-4">
    <div v-if="photos && photos.length > 0" ref="photosElem" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
      data-aos-duration="450" data-aos-easing="ease-in-out" class="
        md:max-w-4xl md:mx-auto md:mt-3
        overflow-scroll
        cursor-grab
        scrollbar-thin
        scrollbar-track-primary/10
        scrollbar-thumb-primary-light/80
        scrollbar-thumb-rounded-full
        pb-3
      ">
      <Splide :options="splideOption" aria-label="My Favorite Images">
        <SplideSlide v-for="(item, idx) in photos" :key="idx">
          <div
            class="transition-all flex flex-col group md:hover:rotate-3 items-center duration-500 rounded-lg">
            <img class="h-[32vh] w-full max-w-[80vw] md:max-w-none group-hover:scale-90 transition-all duration-1000 group-hover:duration-300 object-cover md:object-scale-down cursor-pointer rounded-lg" :src="strapi_url + item.attributes.url"
              @click="onSelectPhoto(item)" alt="" srcset="" />
          </div>
        </SplideSlide>
      </Splide>
    </div>
    <div ref="bigPhotosElem" class="
        md:max-w-4xl md:mx-auto md:mt-3
        overflow-scroll
        cursor-grab
        scrollbar-thin
        scrollbar-track-primary/10
        scrollbar-thumb-primary-light/80
        scrollbar-thumb-rounded-full
        pb-3
      ">
      <Splide :options="splideOption" aria-label="My Favorite Images">
        <SplideSlide v-for="(item, idx) in bigPhotos" :key="idx">
          <div class="group md:hover:-rotate-2 hover:-translate-y-2 h-[36vh] transition-all duration-1000 hover:scale-90 hover:duration-300 md:h-[46vh] max-w-lg object-scale-down rounded-lg overflow-hidden">
            <img class="max-w-[60vw] md:w-full h-full transition-all duration-1000 group-hover:duration-300 object-cover cursor-pointer" :src="strapi_url + item.attributes.url"
              @click="onSelectPhoto(item)" alt="" srcset="" />
          </div>
        </SplideSlide>
      </Splide>
    </div>

    <div class="">
      <TransitionRoot :show="isShowSelectedPhoto && !!selectedPhoto" as="template" enter="duration-300 ease-out"
        enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100"
        leave-to="opacity-0">
        <Dialog as="div" @close="closeSelectedPhoto" class="relative z-50">
          <TransitionChild enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
            leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-black/30" />
          </TransitionChild>

          <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-3 text-center">
              <TransitionChild enter="duration-500 ease-out" enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95">
                <DialogPanel
                  class="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle>
                    <div class="flex items-center gap-3">
                      <h6 class="flex-auto text-lg font-lora line-clamp-1">{{ selectedPhoto.attributes.alternativeText ||
                        selectedPhoto.attributes.caption || `Foto
                        Prewedding` }}</h6>
                      <div @click="closeSelectedPhoto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="w-6 h-6 cursor-pointer">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                  </DialogTitle>

                  <div class="mt-4 flex flex-col max-h-[76vh] gap-3 justify-center items-center">
                    <img class="flex-auto h-full max-h-[64vh] md:h-auto w-auto object-scale-down rounded-md"
                      :src="strapi_url + selectedPhoto.attributes.url" alt="" srcset="">

                    <h6 v-if="selectedPhoto.attributes.caption" class="font-lora italic text-dark/80">{{ selectedPhoto.attributes.caption }}</h6>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </div>
  </div>
</template>