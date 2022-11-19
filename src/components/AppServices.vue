<!-- SCRIPT -->
<script>
import AppCardVue from "./AppCard.vue";
import AppButtonVue from "./AppButton.vue";
export default {
  name: "AppServices",
  components: {
    AppButtonVue,
    AppCardVue,
  },
};
</script>
<!-- HTML -->
<template>
  <section class="service">
    <div class="container">
      <h4>OUR BUISENESS AREAS</h4>
      <h2>Excellence in<span>Services</span></h2>
      <div class="info">
        <div class="left">
          <p>
            We are leaders in proving consultancy services with a set of
            cutting-edge technologies and a team of experience and renowned
            professionals. These are some options that you can hire.
          </p>
        </div>
        <div class="right">
          <AppButtonVue text="SEE ALL" />
        </div>
      </div>
      <div class="containercard">
        <AppCardVue />
      </div>
    </div>
  </section>
</template>
<!-- CSS -->
<style lang="scss" scoped>
@use "../styles/partials/variabili" as *;
.service {
  background-color: $bgcolorservice;
}
h4 {
  padding-top: 100px;
  color: $fontocean;
  font-size: 0.8rem;
}
h2 {
  margin: 30px 0;
  font-size: 2.5rem;
  color: white;
  span {
    background-color: rgba(5, 130, 131, 0.2);
    padding: 10px;
  }
}
.info {
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  .left {
    width: 70%;
    p {
      line-height: 20px;
      color: white;
    }
  }
  .right {
    display: flex;
    justify-content: end;
    width: 30%;
  }
}
button {
  background: none;
}
.containercard {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
