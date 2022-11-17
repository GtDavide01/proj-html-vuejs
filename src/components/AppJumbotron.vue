<!-- SCRIPT -->
<script>
// impoirt
import AppButtonVue from "./AppButton.vue";
export default {
  name: "AppJumbotron ",
  components: {
    AppButtonVue,
  },
};
</script>
<!-- HTML -->
<template>
  <section class="jumbotron">
    <div class="opaco">
      <div class="container">
        <header>
          <div class="left">
            <span class="special">NEX</span>
            <span>GEN</span>
          </div>
          <div class="right">
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>SERVICES</li>
              <li>TEAM</li>
              <li>BLOG</li>
              <li><i class="fa-regular fa-user"></i></li>
              <li><AppButtonVue text="GET IN TOUCH" /></li>
            </ul>
          </div>
        </header>
        <div class="centercontent">
          <h1>CIAO CIAO</h1>
        </div>
      </div>
    </div>
  </section>
</template>
<!-- CSS -->
<style lang="scss" scoped>
@use "../styles/partials/variabili" as *;
.jumbotron {
  height: 830px;
  background-image: url(../assets/img/bg-2.jpg);
  background-size: cover;
  .opaco {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    position: relative;
  }
}
header {
  align-items: center;
  padding: 30px 0;
  justify-content: space-between;
  display: flex;
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      color: white;
      margin: 0 15px;
    }
  }
  .left {
    span {
      font-size: 1.2rem;
      font-weight: 600;
      margin: 0 3px;
      color: $textheadercolor;
    }
    .special {
      background-color: rgba(5, 130, 131, 0.3);
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      padding-right: 5px;
      padding: 10px;
      padding-left: 30px;
      color: $fontocean;
    }
  }
}
.centercontent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
