<script setup>

const surah = `"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri,supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang.
Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."`;
</script>
<template>
    <div
      class="px-8 py-24 bg-sage/10 overflow-hidden relative"
    >
      <div
        class="relative flex items-center h-full w-full md:max-w-6xl mx-auto"
      >
        <div data-aos="fade-up" data-aos-delay="300" class="flex flex-col mx-8 flex-auto gap-6">
          <p
            class="
              w-full
              text-md
              italic
              font-dancing-script
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
              text-2xl md:text-4xl
              font-moon-dance
              text-center
              break-words
              text-sage-pale
            "
          >
            Ar-Rum Ayat 21
          </p>
        </div>
      </div>
    </div>
</template>