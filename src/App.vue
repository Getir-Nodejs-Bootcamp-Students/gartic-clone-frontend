<template>
  <div>
    <div class="main-wrapper">
      <div id="background-image"></div>
      <canvas id="background-canvas" width="1920" height="800"></canvas>
      <router-view />
    </div>
  </div>
</template>
<script>
import "./app.scss";
import initBackgroundCanvas from "@/helpers/initBackgroundCanvas";
export default {
  name: "App",
  created() {},
  mounted() {
    //initBackgroundCanvas();
  },
};
</script>
