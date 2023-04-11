<script setup>
import Flower1Alt from './flower/Flower1Alt.vue';

const surah = `"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan diantaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."`;
</script>
<template>
  <div class="px-8 py-24 bg-primary/10 overflow-hidden min-h-screen relative">
    <div
      class="
        absolute
        -bottom-12
        -left-48
        w-76
        md:w-2/3 md:-left-56
        lg:-left-64
        xl:-left-96
        h-64
      "
    >
      <Flower1Alt class="w-full h-full object-scale-down text-primary"/>
      <img
        src="~assets/img/flower/flower-1-alt.png"
        class="w-full h-full object-scale-down"
        alt=""
        srcset=""
      />
    </div>
    <div class="relative flex items-center h-full w-full md:max-w-6xl mx-auto">
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        class="flex flex-col mx-8 flex-auto gap-6"
      >
        <p
          class="
            w-full
            text-md
            md:text-lg
            italic
            font-dancing-script
            md:max-w-2xl
            mx-auto
            text-center
            break-words
            text-dark/60
          "
        >
          {{ surah }}
        </p>
        <p
          class="
            w-full
            text-2xl
            md:text-4xl
            font-moon-dance
            text-center
            break-words
            text-primary-light
          "
        >
          Ar-Rum Ayat 21
        </p>
      </div>
    </div>
  </div>
</template>