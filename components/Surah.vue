<script setup>
import { KinesisContainer, KinesisElement } from "vue-kinesis";

const surah = `"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri,supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang.
Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."`;
</script>
<template>
  <ClientOnly>
    <KinesisContainer
      event="scroll"
      class="px-8 h-screen bg-buzz-purple/10 overflow-hidden relative"
    >
      <KinesisElement type="depth" class="absolute w-full h-full inset-0">
        <img
          src="~assets/img/mosque.jpg"
          class="
            hue-rotate-90
            opacity-20
            w-full
            h-full
            object-cover object-bottom
          "
          alt=""
          srcset=""
        />
      </KinesisElement>
      <div
        class="relative flex items-center h-full w-full md:max-w-6xl mx-auto"
      >
        <div class="flex flex-col mx-8 flex-auto gap-6">
          <KinesisElement
            tag="p"
            :strength="80"
            type="translate"
            class="
              w-full
              text-xl md:text-2xl
              italic
              font-dancing-script
              text-center
              break-words
              text-dark/60
            "
          >
            {{ surah }}
          </KinesisElement>
          <KinesisElement
            tag="p"
            :strength="80"
            type="translate"
            class="
              w-full
              text-2xl md:text-4xl
              font-moon-dance
              text-center
              break-words
              text-buzz-purple
            "
          >
            Ar-Rum Ayat 21
          </KinesisElement>
        </div>
      </div>
    </KinesisContainer>
  </ClientOnly>
</template>