<script setup>
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
  <div class="px-8 py-16 relative">
    <div class="absolute inset-0">
      <img
        src="~assets/img/pacitan.jpg"
        class="w-full opacity-30 h-full object-cover"
        alt=""
      />
    </div>
    <div class="relative h-full">
      <div
        class="
          h-full
          flex flex-col
          gap-3
          md:gap-12 md:grid md:grid-cols-2
        "
      >
        <div
          class="
            h-full
            bg-white
            shadow-none
            transition-all
            duration-300
            hover:shadow-lg
            border border-buzz-purple
            rounded-lg
            py-6 px-5 md:p-8
            pb-12
            flex flex-col
            gap-6
            items-center
          "
        >
          <h2 class="text-5xl text-center font-moon-dance">Ucapan & Harapan</h2>
          <Line class="" />
          <div class="flex flex-col w-full px-0 md:px-8 gap-6">
            <div class="flex flex-col gap-2">
              <label for="name" class="text-2xl font-satisfy">Nama</label>
              <input
                id="name"
                type="text"
                v-model="form.name"
                class="
                  border
                  rounded-md
                  focus:border-buzz-purple focus:ring-buzz-purple
                  border-buzz-purple
                "
              />
            </div>
            <div class="flex flex-col gap-2">
              <label for="pesan" class="text-2xl font-satisfy">Pesan</label>
              <textarea
                name="pesan"
                id="pesan"
                v-model="form.message"
                class="
                  border
                  rounded-md
                  focus:border-buzz-purple focus:ring-buzz-purple
                  border-buzz-purple
                "
              ></textarea>
            </div>
            <div class="cursor-pointer">
              <div
                class="
                  bg-buzz-purple
                  py-3
                  px-4
                  rounded-lg
                  font-semibold
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
          <h2 class="text-5xl text-center hidden md:inline-block font-moon-dance">Ucapan</h2>
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
              scrollbar-track-buzz-purple/30
              scrollbar-thumb-buzz-purple
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
                border-buzz-purple
                px-8
                py-4
                rounded-lg
                flex flex-col
              "
            >
              <h6 class="text-lg font-satisfy">{{ data.name }}</h6>
              <h6 class="text-lg font-dancing-script">"{{ data.message }}"</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>