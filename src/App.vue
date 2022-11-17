<!-- SCRIPT -->
<script>
// import
import AppHeaderVue from "./components/AppHeader.vue";
import AppJumbotronVue from "./components/AppJumbotron.vue";
export default {
  components: {
    AppHeaderVue,
    AppJumbotronVue,
  },
};
</script>

<!-- HTML -->
<template>
  <!-- header -->
  <AppHeaderVue />
  <!-- jumbotron -->
  <AppJumbotronVue />
</template>

<!-- CSS -->
<style lang="scss">
@use "./styles/general.scss";
</style>
