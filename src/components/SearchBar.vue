<template>
  <label for="search-input"></label>
  <input
    class="input"
    type="text"
    id="search-input"
    autofocus
    placeholder="Searching for"
    name="search-input"
    v-model="name"
    v-on:keyup.enter="() => $emit('key-up', name)"
  />
</template>

<script>
import { ref } from "vue";

export default {
  emits: ["key-up"],
  setup() {
    const name = ref("");

    return {
      name,
    };
  },
};
</script>

<style scoped></style>
