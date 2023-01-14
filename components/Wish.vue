<script setup>
import { KinesisContainer, KinesisElement } from "vue-kinesis";

const form = ref({
  name: "",
  message: "",
});

const messages = [
  {
    name: "Name",
    message: "Pesan",
  },
  {
    name: "Name",
    message: "Pesan",
  },
  {
    name: "Name",
    message: "Pesan",
  },
  {
    name: "Name",
    message: "Pesan",
  },
  {
    name: "Name",
    message: "Pesan",
  },
  {
    name: "Name",
    message: "Pesan",
  },
  {
    name: "Name",
    message: "Pesan",
  },
  {
    name: "Name",
    message: "Pesan",
  },
];
</script>
<template>
  <ClientOnly>
    <div class="px-8 py-16 relative">
      <div class="absolute inset-0">
        <img
          src="~assets/img/flower/bg-flower.jpg"
          class="w-full opacity-30 h-full object-cover"
          alt=""
        />
      </div>
      <KinesisContainer event="scroll" class="relative h-full">
        <KinesisElement
          type="translate"
          transformOrigin="bottom left"
          :strength="-175"
          class="absolute -left-24 -top-48"
        >
          <img
            class="w-56 object-scale-down"
            src="~assets/img/flower/left-flower.png"
            alt=""
            srcset=""
          />
        </KinesisElement>
        <KinesisElement
          type="translate"
          transformOrigin="bottom right"
          :strength="-75"
          class="absolute -right-24 -bottom-48"
        >
          <img
            class="w-56 object-scale-down"
            src="~assets/img/flower/right-flower.png"
            alt=""
            srcset=""
          />
        </KinesisElement>
        <div
          class="relative h-full flex flex-col gap-3 md:gap-12 md:grid md:grid-cols-2"
        >
          <div
            class="
              h-full
              bg-white
              shadow-md
              transition-all
              duration-300
              hover:shadow-lg
              border border-sage-pale
              rounded-lg
              py-6
              px-5
              md:p-8
              pb-12
              flex flex-col
              gap-6
              items-center
            "
          >
            <h2 class="text-5xl text-center font-moon-dance text-gray-800/80">
              Ucapan & Harapan
            </h2>
            <Line class="" />
            <div class="flex flex-col w-full px-0 md:px-8 gap-6">
              <div class="flex flex-col gap-2">
                <label for="name" class="text-2xl font-satisfy text-gray-800/80"
                  >Nama</label
                >
                <input
                  id="name"
                  type="text"
                  v-model="form.name"
                  class="
                    border
                    rounded-md
                    focus:border-sage-pale focus:ring-sage-pale
                    border-sage-pale
                  "
                />
              </div>
              <div class="flex flex-col gap-2">
                <label
                  for="pesan"
                  class="text-2xl font-satisfy text-gray-800/80"
                  >Pesan</label
                >
                <textarea
                  name="pesan"
                  id="pesan"
                  v-model="form.message"
                  class="
                    border
                    rounded-md
                    focus:border-sage-pale focus:ring-sage-pale
                    border-sage-pale
                  "
                ></textarea>
              </div>
              <div class="cursor-pointer">
                <div
                  class="
                    bg-sage-pale
                    py-3
                    px-4
                    rounded-lg
                    font-lora
                    text-white text-center
                  "
                >
                  Kirim
                </div>
              </div>
            </div>
          </div>
          <Line class="mx-auto px-auto mt-7 inline-block md:hidden" />
          <div class="h-full flex flex-col gap-3">
            <h2
              class="
                text-5xl text-center
                hidden
                md:inline-block
                font-moon-dance
              "
            >
              Ucapan
            </h2>
            <Line class="flex-auto mt-3 hidden md:inline-block" />
            <div
              class="
                flex flex-col
                gap-3
                mt-8
                md:mt-0
                h-80
                md:h-96
                scrollbar-thin
                scrollbar-track-sage-pale/10
                scrollbar-thumb-sage-pale/80
                scrollbar-thumb-rounded-full
              "
            >
              <div
                v-for="(data, index) in messages"
                :key="index"
                class="
                  border
                  bg-white
                  shadow-none
                  transition-all
                  duration-300
                  hover:shadow-lg
                  border-sage-pale
                  px-8
                  py-4
                  rounded-lg
                  flex flex-col
                "
              >
                <h6 class="text-lg font-satisfy">{{ data.name }}</h6>
                <h6 class="text-lg font-dancing-script">
                  "{{ data.message }}"
                </h6>
              </div>
            </div>
          </div>
        </div>
      </KinesisContainer>
    </div>
  </ClientOnly>
</template>