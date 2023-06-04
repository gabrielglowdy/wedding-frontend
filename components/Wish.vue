<script setup>
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  is_sent: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'primary'
  }
})

const is_sent_wish = ref(props.is_sent);
const form = ref({
  name: props.name,
  message: "",
});

const wishes = ref([])
const isLoading = ref(false)
const errorText = ref('');

const { create, find, update } = useStrapi();
const emit = defineEmits();

const getWishes = async(limit=300) => {
  wishes.value =  (await find(`wishes?sort[0]=id%3Adesc&sort[1]=createdAt%3Adesc&pagination[pageSize]=${limit}`)).data
}

const sendWish = async() => {
  errorText.value = '';
  if (!form.value.message) {
    errorText.value = 'Tuliskan Ucapan dan Harapan Anda terlebih dahulu ya'
    return false
  }
  isLoading.value = true
  if (!form.value.name) {
    form.value.name = props.name
  }
  const res = await create('wishes', {
    name: form.value.name,
    message: form.value.message
  })
  

  is_sent_wish.value = true
  emit('send')
  getWishes();
  isLoading.value = false

}

onMounted(() => {
  getWishes()
});
</script>
<template>
  <div class="px-8 py-16 relative">
    <div class="absolute inset-0">
      <img
        src="~assets/img/flower/bg-flower.jpg"
        class="w-full opacity-30 h-full object-cover"
        alt=""
      />
    </div>
    <div class="relative h-full">
      <div class="absolute -left-24 -top-48">
        <img
          class="w-56 object-scale-down"
          src="~assets/img/flower/left-flower.png"
          alt=""
          srcset=""
        />
      </div>
      <div class="absolute -right-24 -bottom-48">
        <img
          class="w-56 object-scale-down"
          src="~assets/img/flower/right-flower.png"
          alt=""
          srcset=""
        />
      </div>
      <div
        class="
          relative
          h-full
          flex flex-col
          gap-3
          md:gap-12 md:grid md:grid-cols-2
        "
      >
        <div
          :class="
            `h-full
            bg-white
            shadow-md
            transition-all
            duration-300
            hover:shadow-lg
            border ${ color === 'terracotta' ? 'border-primary-terracotta' : 'border-primary-light'}
            rounded-lg
            py-6
            px-5
            md:p-8
            pb-12
            flex flex-col
            gap-6
            items-center
            `"
        >
          <h2 class="text-4xl text-center font-satisfy text-gray-800/80">
            Ucapan & Harapan
          </h2>
          <Line class="" :color="color" />
          <div
            v-if="!is_sent_wish"
            class="flex flex-col w-full px-0 md:px-8 gap-6"
          >
            <div class="flex flex-col gap-2">
              <label for="name" class="text-lg font-lora text-gray-800/80"
                >Nama</label
              >
              <input
                id="name"
                type="text"
                v-model="form.name"
                :class="`
                  border
                  rounded-md
                  ${color === 'terracotta' ? 'focus:border-primary-terracotta focus:ring-primary-terracotta border-primary-terracotta' : 'focus:border-primary-light focus:ring-primary-light border-primary-light'}
                `"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label for="pesan" class="text-lg font-lora text-gray-800/80"
                >Pesan</label
              >
              <textarea
                name="pesan"
                id="pesan"
                v-model="form.message"
                :class="`
                  border
                  rounded-md
                  ${color === 'terracotta' ? 'focus:border-primary-terracotta focus:ring-primary-terracotta border-primary-terracotta' : 'focus:border-primary-light focus:ring-primary-light border-primary-light'}
                `"
              ></textarea>
            </div>
            <h6 :class="{ 'opacity-0' : !errorText}" class="text-red-500 text-sm text-center">{{ errorText }}</h6>
            <div class="cursor-pointer">
              <div @click="sendWish"
                :class="`
                  ${ color === 'terracotta' ? 'bg-primary-terracotta' : 'bg-primary-light'}
                  py-3
                  px-4
                  rounded-lg
                  font-lora
                  text-white text-center
                `"
              >
                Kirim
              </div>
            </div>
          </div>
          <div v-else>
            <h6 class="font-lora text-gray-800/80 text-center md:text-left">
              Terima kasih atas ucapan dan harapan yang telah Anda kirimkan :)
            </h6>
          </div>
        </div>
        <Line
          :color="color"
          data-aos="fade-right"
          data-aos-anchor-placement="right-left"
          data-aos-delay="350"
          data-aos-duration="550"
          data-aos-easing="ease-in-out"
          class="mx-auto px-auto mt-7 inline-block md:hidden"
        />
        <div class="h-full flex flex-col gap-3 items-center">
          <h2
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="150"
            data-aos-duration="750"
            data-aos-easing="ease-in-out"
            class="text-5xl text-center hidden md:inline-block font-moon-dance"
          >
            Ucapan
          </h2>
          <Line :color="color" class="flex-auto mt-3 hidden md:inline-block" />
          <div
            :class="`
              flex flex-col
              gap-3
              mt-8
              md:mt-0
              h-80
              md:h-96
              scrollbar-thin
              ${color === 'terracotta' ? 'scrollbar-track-primary-terracotta/10 scrollbar-thumb-primary-terracotta/80' : 'scrollbar-track-primary-light/10 scrollbar-thumb-primary-light/80'}
              scrollbar-thumb-rounded-full
            `"
          >
            <div
              v-for="(data, index) in wishes"
              :key="index"
              :class="`
                border
                bg-white
                shadow-none
                transition-all
                duration-300
                hover:shadow-lg
                ${ color === 'terracotta' ? 'border-primary-terracotta' : 'border-primary-light'}
                px-6
                py-4
                rounded-lg
                flex flex-col
              `"
            >
              <h6 class="text-md text-dark/80 font-lora">{{ data.attributes.name }}</h6>
              <h6 class="text-sm text-dark/70 mt-1 font-lora">
                {{ data.attributes.message }}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>