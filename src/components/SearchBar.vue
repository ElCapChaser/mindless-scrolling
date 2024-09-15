<template>
    <label for="search-input"></label>
    <input type="text" id="search-input" name="search-input" v-model="name" v-on:keyup.enter="() => $emit('key-up', name)">
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HelloWorld',
  emits: ["key-up"],
  setup() {
    const name = ref("Steven")

    return {
      name
    }
  },
}
</script>

<style scoped>
</style>
