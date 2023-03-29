<script setup>
  const isTypePassword = ref(false)
  const colors = [
    {
      name: 'Green',
      class: 'bg-green-500',
    },
    {
      name: 'Yellow',
      class: 'bg-yellow-500'
    },
    {
      name: 'Blue',
      class: 'bg-blue-500'
    },
    {
      name: 'Indigo',
      class: 'bg-indigo-500'
    }
  ]

  const form = ref({
    email: '',
    password: ''
  })

  const typing = () => {
    if (form.value.password === '') {
      isTypePassword.value = false
      return
    }
    isTypePassword.value = true
  }
  const doneTyping = () => {
    isTypePassword.value = false
  }
</script>
<template>
  <div class="w-screen h-screen bg-indigo-200">
    <div class="flex h-full w-full items-center gap-8 justify-center">
      <div :class="`w-64 h-96 p-8 bg-white rounded-2xl shadow-lg shadow-red-300/20 transition hover:duration-500 duration-1000 transform ${ isTypePassword ? 'scale-50 =rotate-12 -skew-x-[26deg] skew-y-[26deg]' : ''} flex flex-col gap-3`">
        <h6>Login Dialog</h6>
        <div class="flex flex-col gap-1">
          <label for="Email">Email</label>
          <input type="text" class="" placeholder="input your text">
        </div>
        <div class="flex flex-col gap-1">
          <label for="Email">Password</label>
          <input v-model="form.password" @input="typing"  @focusin="typing" @focusout="doneTyping" type="password" class="" placeholder="input your text">
        </div>
        <button class="p-3 font-semibold bg-blue-200 rounded-lg text-blue-800">Submit</button>
      </div>
      <div class="flex flex-col gap-4 group">
        <div class="bg-red-400 p-8 text-center rounded-lg shadow-lg shadow-red-500/30">
          <h6>Hello There</h6>
        </div>
        <div class="flex gap-3">
          <div v-for="(color, index) in colors" :key="index" :class="`${ color.class }  rounded-lg hover:rounded-3xl transition-all hover:translate-y-4 cursor-pointer hover:scale-110 hover:rotate-90 duration-1000 hover:duration-300 p-3 w-24 h-24 justify-center flex items-center`">
            <h6>{{ color.name }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
