<template>
  <div>
    <div class="bg-white min-h-[50vh] md:min-h-[24vh] flex flex-col gap-3 justify-center px-4 items-center">
      <h6 class="text-sm italic md:text-base font-lora text-dark/90 text-center">
        Undangan Online ini dibuat dengan sepenuh hati oleh
      </h6>
      <div class="flex flex-col items-center justify-center">
        <h6 class="text-xl md:text-2xl text-primary italic font-lora">
          Lilla dan Gabriel
        </h6>
        <h6 class="text-sm text-primary italic font-lora">
          {{ (new Date()).getFullYear() }}
        </h6>
      </div>
    </div>
  </div>
</template>
