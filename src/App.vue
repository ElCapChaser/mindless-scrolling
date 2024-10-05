<template>
  <section
  class="center-screen"
  >
    <div class="container">
        <div class="is-flex" >
          <PlatformSelect @selected="handleSelected"></PlatformSelect>
          <SearchBar @keyUp="onKeyUp" />
        </div>
    </div>
  </section> 
  <BuyMeACoffee></BuyMeACoffee>
</template>

<script>
import { ref } from "vue";
import SearchBar from "./components/SearchBar.vue";
import PlatformSelect from "./components/PlatformSelect.vue";
import BuyMeACoffee from "./components/BuyMeACoffee.vue";
import Platforms from "./enums/Platforms.js"

export default {
  name: "App",
  components: {
    SearchBar,
    PlatformSelect,
    BuyMeACoffee,
  },
  setup() {
    const selected = ref("default");
    const onKeyUp = name => {
      if (selected.value === Platforms.PlatformsEnum.youtube) {
        // open a new tab with the string of the search as query params.
        window.open(`https://www.youtube.com/results?search_query=${name}`);
      } else {
        console.log("to be implemented");
      }
    };
    const handleSelected = (selectedValue) => {
      selected.value = selectedValue;
    }


    return {
      selected,
      onKeyUp,
      handleSelected,
    };
  },
};
</script>

<style>
@import 'bulma/css/bulma.css';

.center-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 90vh;
}
</style>
