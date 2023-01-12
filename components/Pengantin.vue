<script setup>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

</script>
<template>
  <div class="relative px-8">
      <div class="absolute w-full h-full inset-0 bg-buzz-purple/10">
        <img src="~assets/img/cloud.jpg" class="w-full h-full opacity-20 object-cover" alt="" srcset="">
      </div>
      <ClientOnly>
        <KinesisContainer
        event="scroll"
        class="flex flex-col lg:flex-row gap-4 items-center py-24 mx-auto"
      >
        <KinesisElement
          type="translate"
          transformOrigin="left"
          :maxX="10"
          :originX="50"
          :strength="30"
          class="flex flex-col items-center flex-auto"
        >
          <img
            src="~assets/img/woman.jpg"
            class="
              w-36
              h-36
              object-cover
              rounded-xl
              border-2 border-buzz-purple
              p-0.5
            "
            alt=""
            srcset=""
          />
          <h6 class="mt-4 font-medium text-center font-satisfy text-buzz-purple text-3xl md:text-4xl">
            Lilla Anjani Birahmatika
          </h6>
          <h6 class="text-sm md:text-md mt-1 px-4 md:px-12 text-center font-lora">
            Putri Ketiga dari Bapak Pulung Suwandaru
          </h6>
          <h6 class="text-sm md:text-md mt-1 px-4 md:px-12 text-center font-lora">
            & Ibu Nuraini Pangewa
          </h6>
          <h6 class="text-sm md:text-md italic text-center font-lora">
            (Jl. Karangrejo Timur III Nomor 38, Surabaya)
          </h6>
        </KinesisElement>
        <h6 class="text-4xl font-satisfy">&</h6>
        <KinesisElement
          type="translate"
          transformOrigin="right"
          :originX="100"
          :strength="30"
          class="flex flex-col items-center flex-auto"
        >
          <img
            src="~assets/img/men.webp"
            class="
              w-36
              h-36
              object-cover
              rounded-xl
              border-2 border-buzz-purple
              p-0.5
            "
            alt=""
            srcset=""
          />
          <h6 class="mt-4 font-medium font-satisfy text-buzz-purple text-center text-3xl md:text-4xl">
            Achmad Gabriel Glowdy
          </h6>
          <div class="">
            <h6 class="text-sm md:text-md mt-1 px-4 md:px-12 text-center font-lora">
              Putra Kedua dari Bapak Muhammad Dawam Ichsan
            </h6>
            <h6 class="text-sm md:text-md mt-1 px-4 md:px-12 text-center font-lora">
              & Ibu Listiyawati Suherini
            </h6>
          </div>
          <h6 class="text-sm md:text-md italic text-center font-lora">
            (Jl. Mastrip Gang VI / 6, Kecamatan Kanigaran, Probolinggo)
          </h6>
        </KinesisElement>
        </KinesisContainer>
      </ClientOnly>
  </div>
</template>
