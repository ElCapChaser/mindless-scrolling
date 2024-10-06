<template>
    <div class="select">
        <label for="platform-select"></label>
        <select name="platform-select" id="platform-select" v-model="selected" @change="handleSelect">
            <option :value="options.youtube">{{ options.youtube }}</option>
        </select>
    </div>
</template>
  
<script>
  import { ref } from "vue";
  import Platforms from "./../enums/Platforms.js"
  import URLSearchParamsHandler from "./../composables/URLSearchParamsHandler"

  export default {
    setup(props, {emit}) {
      const preSelected = URLSearchParamsHandler(Platforms.QueryParams.platform);
      const selected = ref(preSelected || "default");
      const options = Platforms.PlatformsEnum;
      const handleSelect = () => {
        emit("selected", selected.value)
      }

      // Emit the value immediately if a preselect exists.
      if (preSelected) {
        handleSelect()
      }
      return {
        selected,
        handleSelect,
        options
        
      }
    }
  };
</script>

  