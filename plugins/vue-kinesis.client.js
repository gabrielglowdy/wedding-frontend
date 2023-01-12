import { defineNuxtPlugin } from "#app";
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component(KinesisContainer);
  nuxtApp.vueApp.component(KinesisElement);
});