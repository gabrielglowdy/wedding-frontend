import { defineNuxtPlugin } from "#app";
import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.AOS = new AOS.init({
    // disable: window.innerWidth < 640,
    // offset: 200,
    duration: 600,
    mirror: true,
    easing: 'ease-in-out-cubic',
    // once: true
  });
});

// export default ({ app }) => {
//   app.AOS = new AOS.init({
//     // disable: window.innerWidth < 640,
//     // offset: 200,
//     duration: 600,
//     easing: 'ease-in-out-cubic',
//     // once: true
//   }); // or any other options you need
// };

