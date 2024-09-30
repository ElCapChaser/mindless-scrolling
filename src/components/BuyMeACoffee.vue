<template>
  <div></div>
</template>
<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      const script = document.createElement("script");
      script.setAttribute("data-name", "BMC-Widget");
      script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
      script.setAttribute("data-id", "stevenlovescoding");
      script.setAttribute("data-description", "Support me on Buy me a coffee!");
      script.setAttribute(
        "data-message",
        "Thank you for visiting my website. If this app has helped you in anyway, consider buying us a coffee. ✨😎"
      );
      script.setAttribute("data-color", "#FFDD00");
      script.setAttribute("data-position", "Right");
      script.setAttribute("data-x_margin", "18");
      script.setAttribute("data-y_margin", "18");
      script.async = true;
      document.head.appendChild(script);

      script.onload = function () {
        const event = new Event("DOMContentLoaded", {
          bubbles: false,
          cancelable: false,
        });
        window.dispatchEvent(event);
      };
    });
  },
};
</script>
<!-- <script 
    data-name="BMC-Widget" 
    data-cfasync="false" 
    src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" 
    data-id="stevenlovescoding" 
    data-description="Support me on Buy me a coffee!" 
    data-message="" 
    data-color="#5F7FFF" 
    data-position="Right" 
    data-x_margin="18" 
    data-y_margin="18">
</script> -->
