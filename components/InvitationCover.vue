<script setup>
const props = defineProps({
  guest: Object,
});

const emit = defineEmits();

const wantToOpenRight = ref(false);
const wantToOpenLeft = ref(false);

const openInvitation = () => {
  const sfx = document.querySelector('#openSfx');
  if (sfx) {
    sfx.play()
  }
  setTimeout(() => {
    wantToOpenRight.value = true;
  }, 500);
  setTimeout(() => {
    wantToOpenLeft.value = true;
  }, 1500);
  setTimeout(() => {
    emit("openInvitation");
  }, 2000);
};
</script>
<template>
  <div
    class="
      bg-dark
      w-full
      h-screen
      px-8
      relative
      overflow-hidden
      group
      transition-all
      duration-500
    "
  >
    <div class="absolute bottom-0 inset-x-0 h-64 w-full overflow-hidden">
      <div class="relative h-full w-full">
        <div
          class="
            absolute
            animate-glow
            top-1/2
            -inset-x-8
            mt-24
            h-96
            blur-3xl
            transition-all
            duration-1000
            group-hover:duration-300
            opacity-30
            group-hover:opacity-50
            bg-gradient-to-r
            from-buzz-green
            to-buzz-purple
          "
        ></div>
      </div>
    </div>
    <div
      class="
        absolute
        inset-y-0
        transition-all
        duration-1000
        pt-36
        flex
        items-center
      "
      :class="{
        '-left-24 md:-left-12': !wantToOpenLeft,
        '-left-12 md:left-0': wantToOpenLeft,
      }"
    >
      <div class="w-56 md:w-96 h-auto">
        <LeftHand />
      </div>
    </div>
    <div
      class="
        absolute
        inset-y-0
        transition-all
        duration-1000
        pt-44
        flex
        items-center
      "
      :class="{
        '-right-24 md:-right-12': !wantToOpenRight,
        '-right-12 md:right-0': wantToOpenRight,
      }"
    >
      <div class="w-56 md:w-96 h-auto">
        <RightHand />
      </div>
    </div>
    <div class="absolute inset-0">
      <div class="flex h-full items-center text-white">
        <div class="flex flex-auto text-center flex-col items-center gap-1">
          <h6 class="font-moon-dance text-3xl">The Wedding of</h6>
          <h2 class="font-montserrat text-5xl md:text-7xl">Lilla & Gabriel</h2>
          <h6 class="mt-2 font-dancing-script italic">
            To Infinity and Beyond
          </h6>

          <div class="flex flex-col items-center mt-16">
            <div class="text-white">
              <h6>Kepada Yth:</h6>
            </div>
            <div v-if="guest" class="text-white mt-3">
              <h6 class="text-2xl">{{ guest.name }}</h6>
            </div>
            <a
              @click.prevent="openInvitation"
              class="
                mt-12
                bg-buzz-purple
                md:bg-white
                cursor-pointer
                duration-1000
                shadow-buzz-green
                hover:duration-300 hover:bg-buzz-purple
                md:bg-opacity-10
                border-2 border-buzz-purple/50
                backdrop-blur-lg
                drop-shadow-lg
                py-3
                px-5
                rounded-lg
              "
            >
              <span class="font-semibold text-white">Buka Undangan</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <audio id="openSfx">
      <source
        src="~assets/audio/To-Infinity-and-Beyond-sfx.mp3"
        type="audio/mpeg"
      />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>