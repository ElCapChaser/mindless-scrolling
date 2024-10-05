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
  
  export default {
    setup(props, {emit}) {

      const selected = ref("default");
      const options = Platforms.PlatformsEnum;
      const handleSelect = () => {
        emit("selected", selected.value)
      }
      return {
        selected,
        handleSelect,
        options
        
      }
    }
  };
</script>

  