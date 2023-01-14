<script setup>
const props = defineProps({
  guest: Object,
});

const playVideo = ref(false);

const emit = defineEmits();

const wantToOpenRight = ref(false);
const wantToOpenLeft = ref(false);

const openInvitation = () => {
  emit("play");
  emit("openInvitation");
};
</script>

<template>
  <div class="relative w-screen h-screen bg-gray-900">
    <div class="w-full h-full bg-gray-900">
      <div
        :class="{ 'opacity-0': playVideo }"
        class="absolute inset-0 bg-sage/30"
      >
        <img
          src="~assets/img/bg-2.jpg"
          class="
            transition-all
            duration-300
            w-full
            h-full
            object-cover
            opacity-60
          "
          alt=""
          srcset=""
        />
      </div>
      <div class="absolute inset-0 bg-sage/30">
        <video
          @play="playVideo = true"
          class="w-full h-full object-cover opacity-60"
          autoplay
          playsinline
          muted
          loop
        >
          <source
            src="~assets/video/video-2.mp4"
            type="video/mp4"
            poster="~assets/img/bg-2.jpg"
          />
        </video>
      </div>
      <div class="absolute inset-0 flex items-center flex-col top-1/3 -mt-32">
        <h2 class="inset-x-0 text-xl font-lora text-white text-center">
          We invite you to
        </h2>
        <h2 class="inset-x-0 text-xl font-lora text-white text-center">
          Celebrate our Wedding
        </h2>
        <Logo class="text-white mt-6 h-24 object-cover" />
        <div class="flex flex-col items-center">
          <h2 class="inset-x-0 text-5xl mt-6 font-lora text-white text-center">
            Lilla & Gabriel
          </h2>
        </div>
        <div v-if="guest" class="flex flex-col items-center mt-12">
          <div class="text-white">
            <h6>Kepada Yth:</h6>
          </div>
          <div class="text-white mt-3">
            <h6 class="text-2xl">{{ guest.name }}</h6>
          </div>
          <a
            @click.prevent="openInvitation"
            class="
              mt-12
              bg-sage
              cursor-pointer
              duration-1000
              shadow-buzz-green
              hover:duration-300
              border-2 border-sage/50
              backdrop-blur-lg
              drop-shadow-lg
              py-3
              px-5
              rounded-lg
            "
          >
            <span class="font-lora text-dark/70 flex items-center gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 inline"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                  />
                </svg>
              </span>
              <span class="my-auto"> Buka Undangan </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>