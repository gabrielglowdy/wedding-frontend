<script setup>
onMounted(() => {
  const body = document.querySelector('body')
  body.classList.add('scrollbar-thin')
  body.classList.add('scrollbar-track-buzz-purple/30')
  body.classList.add('scrollbar-thumb-buzz-purple')
  body.classList.add('scrollbar-thumb-rounded-full')
});
</script>

<template>
  <div class="scroll-smooth ">
    <slot />
  </div>
</template>
