<script setup>
import VueCountdown from "@chenfengyuan/vue-countdown";

const date = Date.parse("03 Jun 2023 10:00:00 GMT+7");
const dateNow = new Date().getTime();
const dateDiff = date - dateNow;
</script>

<template>
  <div class="pb-8 px-8 md:px-16">
    <div class="bg-white p-8 border border-buzz-purple rounded-lg">
      <ClientOnly>
        <vue-countdown
          :time="dateDiff"
          v-slot="{ days, hours, minutes, seconds }"
        >
          <div class="grid grid-cols-4 gap-3 items-center font-lora">
            <div class="flex flex-col gap-1 items-center">
              <h5 class="text-3xl text-buzz-purple">{{ days }}</h5>
              <h5>Hari</h5>
            </div>
            <div class="flex flex-col gap-1 items-center">
              <h5 class="text-3xl text-buzz-purple">{{ hours }}</h5>
              <h5>Jam</h5>
            </div>
            <div class="flex flex-col gap-1 items-center">
              <h5 class="text-3xl text-buzz-purple">{{ minutes }}</h5>
              <h5>Menit</h5>
            </div>
            <div class="flex flex-col gap-1 items-center">
              <h5 class="text-3xl text-buzz-purple">{{ seconds }}</h5>
              <h5>Detik</h5>
            </div>
          </div>
        </vue-countdown>
      </ClientOnly>
    </div>
    <div class="mt-6 mx-auto flex flex-col items-center">
      <a
        href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230603T030000Z%2F20230603T053000Z&details=&location=Gedung%20BK3S%20Jatim%2C%20Jalan%20Raya%20Tenggilis%2C%20Tenggilis%20Mejoyo%2C%20Surabaya%20City%2C%20East%20Java&text=Undangan%20Pernikahan%20Lilla%20Gabriel"
        class="
          bg-buzz-purple
          py-3
          font-lora
          text-white
          px-6
          rounded-full
          mx-auto
        "
      >
        Simpan Kalender
      </a>
    </div>
  </div>
</template>