<script setup>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
</script>
<template>
  <div class="relative px-8">
    <div class="absolute w-full h-full inset-0">
      <img
        src="~assets/img/flower/bg-flower.jpg"
        class="w-full h-full object-cover"
        alt=""
        srcset=""
      />
    </div>

    <ClientOnly>
      <KinesisContainer
        event="scroll"
        class="flex flex-col lg:flex-row gap-4 items-center py-16 mx-auto"
      >
        <KinesisElement
          type="rotate"
          :strength="-60"
          class="absolute -top-36 -right-36 w-76 md:w-2/3 md:-right-80 h-64"
          transformOrigin="top right"
        >
          <img
            src="~assets/img/flower/flower-1-alt.png"
            class="w-full h-full object-scale-down"
            alt=""
            srcset=""
          />
        </KinesisElement>
        <div class="flex flex-col items-center flex-auto">
          <div class="relative">
            <KinesisElement
              :strength="-60"
              class="
                overflow-hidden
                w-32
                h-44
                rounded-t-[100px] rounded-b-xl
                border-2 border-sage-pale
                p-0.5
              "
            >
              <img
                src="~assets/img/woman.jpg"
                class="w-full h-full object-cover scale-125"
                alt=""
                srcset=""
              />
            </KinesisElement>
            <KinesisElement
              type="rotate"
              transformOrigin="top left"
              :strength="80"
              class="absolute -bottom-6 -right-6 w-16 h-16"
            >
              <img
                class="w-full h-full object-scale-down"
                src="~assets/img/flower/flower-ring-2.png"
                alt=""
                srcset=""
              />
            </KinesisElement>
          </div>
          <KinesisElement
            tag="h6"
            :strength="-55"
            class="
              mt-6
              font-medium
              text-center
              font-satisfy
              text-sage-pale text-3xl
              md:text-4xl
            "
          >
            Lilla Anjani Birahmatika
          </KinesisElement>
          <KinesisElement
            tag="h6"
            :strength="-40"
            class="text-sm md:text-md mt-1 px-4 md:px-12 text-center font-lora"
          >
            Putri Ketiga dari Bapak Pulung Suwandaru
          </KinesisElement>
          <KinesisElement
            tag="h6"
            :strength="-35"
            class="text-sm md:text-md px-4 md:px-12 text-center font-lora">
            & Ibu Nuraini Pangewa
          </KinesisElement>
          <KinesisElement
            tag="h6"
            :strength="-40"
            class="text-xs mt-1 md:text-md italic text-center font-lora">
            (Jl. Karangrejo Timur III No. 38, Kec.Wonokromo, Surabaya)
          </KinesisElement>
        </div>
        <h6 class="text-4xl font-satisfy mt-2 text-sage-pale">&</h6>
        <div class="flex flex-col items-center flex-auto">
          <div class="relative">
            <KinesisElement
              :strength="-60"
              class="
                overflow-hidden
                w-32
                h-44
                rounded-t-[100px] rounded-b-xl
                border-2 border-sage-pale
                p-0.5
              "
            >
              <img
                src="~assets/img/men.webp"
                class="w-full h-full object-cover scale-125"
                alt=""
                srcset=""
              />
            </KinesisElement>
            <KinesisElement
              type="rotate"
              transformOrigin="top left"
              :strength="80"
              class="absolute -bottom-6 -right-6 w-16 h-16"
            >
              <img
                class="w-full h-full object-scale-down rotate-180"
                src="~assets/img/flower/flower-ring-1.png"
                alt=""
                srcset=""
              />
            </KinesisElement>
          </div>
          <KinesisElement
            tag="h6"
            :strength="-55"
            class="
              mt-6
              font-medium font-satisfy
              text-sage-pale text-center text-3xl
              md:text-4xl
            "
          >
            Achmad Gabriel Glowdy
          </KinesisElement>
          <div class="">
            <KinesisElement
              :strength="-40"
              class="
                text-sm
                md:text-md
                mt-1
                px-4
                md:px-12
                text-center
                font-lora
              "
            >
              Putra Kedua dari Bapak M. Dawam Ichsan
            </KinesisElement>
            <KinesisElement 
              :strength="-35"
              class="text-sm md:text-md px-4 md:px-12 text-center font-lora">
              & Ibu Listiyawati Suherini
            </KinesisElement>
          </div>
          <KinesisElement 
            :strength="-40"
            class="text-xs mt-1 md:text-md italic text-center font-lora">
            (Jl. Mastrip Gang VI / 6, Kec. Kanigaran, Probolinggo)
          </KinesisElement>
        </div>
      </KinesisContainer>
    </ClientOnly>
  </div>
</template>
