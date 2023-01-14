<script setup>
onMounted(() => {
  const body = document.querySelector('body')
  body.classList.add('scrollbar-thin')
  body.classList.add('scrollbar-track-sage/10')
  body.classList.add('scrollbar-thumb-sage-pale/80')
  body.classList.add('scrollbar-thumb-rounded-full')
  body.classList.add('overflow-x-hidden')
  body.classList.add('w-screen')
});
</script>

<template>
  <div class="scroll-smooth w-screen">
    <slot />
  </div>
</template>
