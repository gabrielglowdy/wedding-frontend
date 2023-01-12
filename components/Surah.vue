<script setup>
const surah = `"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri,supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang.
Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."`;
</script>
<template>
  <div class="max-w-screen h-screen bg-blue-200 overflow-hidden relative">
    <div class="absolute w-full h-full inset-0">
      <img src="~assets/img/mosque.jpg" class="hue-rotate-90 opacity-20 w-full h-full object-cover object-bottom" alt="" srcset="">
    </div>
    <div class="relative flex items-center h-full w-full max-w-6xl mx-auto">
      <div class="flex flex-col mx-8 flex-auto gap-6">
        <p class="w-full text-2xl italic font-dancing-script text-center break-words text-dark/60">{{ surah }}</p>
        <p class="w-full text-4xl font-moon-dance text-center break-words text-buzz-purple">Ar-Rum Ayat 21</p>
      </div>
    </div>
  </div>
</template>