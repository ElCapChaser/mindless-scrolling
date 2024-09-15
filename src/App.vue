<template>
  <label for="platform-select"></label>
  <select name="platform-select" id="platform-select" v-model="selected">
    <option value="youtube">Youtube</option>
    <option value="linkedin">Linkedin</option>
  </select>
  <SearchBar  @keyUp="onKeyUp"/>
</template>

<script>
import { ref } from 'vue'
import SearchBar from './components/SearchBar.vue'

export default {
  name: 'App',
  components: {
    SearchBar
  },
  setup() {
    const selected = ref("default")
    const onKeyUp = (name) => {
      if (selected.value === "youtube") {
        // open a new tab with the string of the search as query params.
        window.open(`https://www.youtube.com/results?search_query=${name}`)
      } else {
        console.log('to be implemented')
      }
    }

    return {
      selected,
      onKeyUp
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
