<!-- SCRIPT -->
<script>
// import
import AppHeaderVue from "./components/AppHeader.vue";
import AppJumbotronVue from "./components/AppJumbotron.vue";
import IntroducingVideoVue from "./components/IntroducingVideo.vue";
import ResultNumberVue from "./components/ResultNumber.vue";
import AppServicesVue from "./components/AppServices.vue";
import AppTeamVue from "./components/AppTeam.vue";
import AppNewsVue from "./components/AppNews.vue";
import AppLetterVue from "./components/AppLetter.vue";
import AppSendVue from "./components/AppSend.vue";
import AppAboutVue from "./components/AppAbout.vue";
import AppFooterVue from "./components/AppFooter.vue";
export default {
  components: {
    AppHeaderVue,
    AppJumbotronVue,
    IntroducingVideoVue,
    ResultNumberVue,
    AppServicesVue,
    AppTeamVue,
    AppNewsVue,
    AppLetterVue,
    AppSendVue,
    AppAboutVue,
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
  <!-- section services -->
  <AppServicesVue />
  <!-- section team -->
  <AppTeamVue />
  <!-- section news -->
  <AppNewsVue />
  <!-- section newsletter -->
  <AppLetterVue />
  <!-- section send  -->
  <AppSendVue />
  <!-- section about -->
  <AppAboutVue />
</template>

<!-- CSS -->
<style lang="scss">
@use "./styles/general.scss";
</style>
