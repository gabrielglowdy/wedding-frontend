<script setup>
import VueCountdown from "@chenfengyuan/vue-countdown";

const date = Date.parse("03 Jun 2023 10:00:00 GMT+7");
const dateNow = new Date().getTime();
const dateDiff = date - dateNow;
</script>

<template>
  <div class="pb-8 px-8 md:px-16">
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="150"
      data-aos-duration="450"
      data-aos-easing="ease-in-out"
      class="
        bg-white
        p-8
        border border-sage-pale
        rounded-lg
        md:max-w-xl md:mx-auto
      "
    >
      <ClientOnly>
        <vue-countdown
          :time="dateDiff"
          v-slot="{ days, hours, minutes, seconds }"
        >
          <div class="grid grid-cols-4 gap-3 items-center font-lora">
            <div class="flex flex-col items-center">
              <h5 class="text-3xl text-sage-pale">{{ days }}</h5>
              <h5 class="text-gray-800/80">Hari</h5>
            </div>
            <div class="flex flex-col items-center">
              <h5 class="text-3xl text-sage-pale">{{ hours }}</h5>
              <h5 class="text-gray-800/80">Jam</h5>
            </div>
            <div class="flex flex-col items-center">
              <h5 class="text-3xl text-sage-pale">{{ minutes }}</h5>
              <h5 class="text-gray-800/80">Menit</h5>
            </div>
            <div class="flex flex-col items-center">
              <h5 class="text-3xl text-sage-pale">{{ seconds }}</h5>
              <h5 class="text-gray-800/80">Detik</h5>
            </div>
          </div>
        </vue-countdown>
      </ClientOnly>
    </div>
    <div class="mt-6 mx-auto flex flex-col items-center">
      <a
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="350"
        data-aos-duration="750"
        data-aos-easing="ease-in-out"
        href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230603T030000Z%2F20230603T053000Z&details=&location=Gedung%20BK3S%20Jatim%2C%20Jalan%20Raya%20Tenggilis%2C%20Tenggilis%20Mejoyo%2C%20Surabaya%20City%2C%20East%20Java&text=Undangan%20Pernikahan%20Lilla%20Gabriel"
        class="bg-sage-pale py-3 font-lora text-white px-6 rounded-full mx-auto flex items-center gap-2"
      >
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
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>
        </span>
        Simpan Kalender
      </a>
    </div>
  </div>
</template>