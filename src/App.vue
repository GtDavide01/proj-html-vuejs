<!-- SCRIPT -->
<script>
// import
import AppHeaderVue from "./components/AppHeader.vue";
import AppJumbotronVue from "./components/AppJumbotron.vue";
import IntroducingVideoVue from "./components/IntroducingVideo.vue";
import ResultNumberVue from "./components/ResultNumber.vue";
export default {
  components: {
    AppHeaderVue,
    AppJumbotronVue,
    IntroducingVideoVue,
    ResultNumberVue,
  },
};
</script>

<!-- HTML -->
<template>
  <!-- header -->
  <AppHeaderVue />
  <!-- jumbotron -->
  <AppJumbotronVue />
  <!-- section video  -->
  <IntroducingVideoVue />
  <!-- section number -->
  <ResultNumberVue />
</template>

<!-- CSS -->
<style lang="scss">
@use "./styles/general.scss";
</style>
