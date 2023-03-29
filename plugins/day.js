import dayjs from "dayjs";
import "dayjs/locale/id";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { defineNuxtPlugin } from "#app";

const today = dayjs;
today.locale('id')


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.dayjs = today
});
