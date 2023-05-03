<script setup>
import {
  Switch,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
} from "@headlessui/vue";
import Flower12 from "./flower/Flower12.vue";
const emit = defineEmits();

const props = defineProps({
  guest: Object,
});

const person_array = [1, 2];
const form = ref({
  name: props.guest.name ? props.guest.name : "",
  can_come: props.guest.is_confirm_rsvp ? props.guest.can_come : false,
  person: props.guest.is_confirm_rsvp ? props.guest.person_come : 1,
});

const is_confirm = ref(props.guest?.is_confirm_rsvp)

const submitRSVP = () => {
  emit("submit", form.value);
  is_confirm.value = true
};

const updateRSVP = () => {
  emit("update", form.value);
};
</script>
<template>
  <div class="min-h-screen w-screen relative py-16 px-8">
    <div class="absolute inset-0">
      <img
        src="~assets/img/flower/bg-flower.jpg"
        class="w-full opacity-30 h-full object-cover"
        alt=""
      />
    </div>
    <div class="absolute -left-16 -top-6">
      <Flower12 class="h-56 object-scale-down text-primary"></Flower12>
    </div>
    <div class="relative h-full">
      <div
        class="
          h-full
          bg-white
          shadow-md
          max-w-xl
          mx-auto
          transition-all
          duration-300
          hover:shadow-lg
          border border-primary-light
          rounded-lg
          py-6
          px-5
          md:p-8
          pb-12
          md:pb-12
          flex flex-col
          gap-6
          items-center
        "
      >
        <div class="flex flex-col gap-2">
          <h2 class="text-3xl text-center font-satisfy text-gray-800/80">
            RSVP
          </h2>
          <h6
            v-if="is_confirm"
            class="
              font-lora
              text-center text-gray-800/80 text-xs
              md:text-sm
              max-w-lg
            "
          >
            Terima kasih telah menkonfirmasi
            {{ guest.can_come ? "kehadiran" : "ketidakhadiran" }} Anda
          </h6>
          <h6
            v-else
            class="
              font-lora
              text-center text-gray-800/80 text-xs
              md:text-sm
              max-w-lg
            "
          >
            Bantu kami mempersiapkan jamuan yang hangat untuk anda semua dengan
            mengirimkan konfirmasi kehadiran melalui form berikut ini
          </h6>
        </div>
        <Line class="" />
        <div class="flex flex-col w-full px-0 md:px-8 gap-6">
          <div class="flex flex-col gap-2">
            <label for="name" class="text-lg font-lora text-gray-800/80"
              >Nama</label
            >
            <input
              id="name"
              type="text"
              disabled
              v-model="form.name"
              class="
                border
                rounded-md
                bg-gray-100
                text-gray-500
                focus:border-primary-light focus:ring-primary-light
                border-gray-800/20
              "
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="kehadiran" class="text-lg font-lora text-gray-800/80"
              >Konfirmasi Kehadiran</label
            >
            <div class="flex gap-2">
              <Switch
                v-model="form.can_come"
                :class="form.can_come ? 'bg-primary-light' : 'bg-gray-200'"
                class="
                  relative
                  inline-flex
                  h-6
                  w-11
                  border
                  items-center
                  rounded-full
                "
              >
                <span class="sr-only">Enable notifications</span>
                <span
                  :class="form.can_come ? 'translate-x-6' : 'translate-x-1'"
                  class="
                    inline-block
                    h-4
                    w-4
                    transform
                    rounded-full
                    bg-white
                    transition
                  "
                />
              </Switch>
              <h6
                class="font-lora"
                :class="form.can_come ? 'text-primary-light/80' : 'text-red-800/80'"
              >
                {{ form.can_come ? "Hadir" : "Tidak Hadir" }}
              </h6>
            </div>
          </div>
          <div
            @click="is_confirm ? updateRSVP() : submitRSVP()"
            class="cursor-pointer"
          >
            <div
              :class="{
                'bg-primary-light text-white ': !is_confirm,
                'bg-primary/20 text-primary-light pale border border-primary-light':
                  is_confirm,
              }"
              class="py-3 px-4 rounded-lg font-lora text-center"
            >
              {{ is_confirm ? "Perbarui" : "Kirim" }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>