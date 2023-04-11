<template>
  <div>
    <div class="relative w-full h-screen p-8 bg-gray-800">
      <div class="absolute inset-0 bg-primary-light/30">
        <video
          class="w-full h-full object-cover opacity-20"
          autoplay
          playsinline
          muted
          loop
        >
          <source src="~assets/video/video-9.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="relative">
        <div class="flex flex-col gap-3 text-center text-white/80 items-center">
          <p
            class="
              w-full
              break-words
              px-2
              md:px-12
              mt-4
              md:mt-16
              font-lora
              text-md
              md:text-lg
            "
          >
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i dapat berkenan hadir dan memberikan do'a restu
          </p>

          <div>
            <p class="mt-8 text-md md:text-xl font-lora px-2 md:px-8">
              Keluarga Bapak Pulung Suwandaru &
            </p>
            <p class="text-md md:text-xl font-lora px-16">
              Ibu Nuraini Pangewa
            </p>
          </div>
          <p class="my-1 md:my-3 text-4xl font-lora">&</p>
          <div>
            <p class="text-md md:text-xl font-lora px-2 md:px-8">
              Keluarga Bapak Muhammad Dawam Ichsan &
            </p>
            <p class="text-md md:text-xl font-lora px-16">
              Ibu Listiyawati Suherini
            </p>
          </div>
          <div>
            <Logo class="text-white/60 h-16 mt-6 object-cover" />
            <h6 class="text-5xl mb-8 mb:0 mt-4 font-moon-dance">
              Lilla & Gabriel
            </h6>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 inset-x-0 bg-primary-light pb-6 md:pb-0 bg-opacity-10 rounded-t-lg backdrop-blur">
        <div class="text-white/60 py-4 md:py-2 text-center flex items-center gap-2 justify-center">
          <h6 class="text-sm md:text-base font-lora">
            Dibuat oleh Lilla & Gabriel | 2023
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>