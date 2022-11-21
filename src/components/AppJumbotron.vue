<!-- SCRIPT -->
<script>
// impoirt
import AppButtonVue from "./AppButton.vue";
import { store } from "../store";
export default {
  name: "AppJumbotron ",
  data() {
    return {
      store,
    };
  },
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
              <li v-for="(li, index) in store.listHeader">{{ li }}</li>
              <li><i class="fa-regular fa-user"></i></li>
            </ul>
            <AppButtonVue text="GET IN TOUCH" />
          </div>
        </header>
        <div class="centercontent">
          <h1>Financial Risk</h1>
          <p>
            The right outcomes depend on continuos rigor in governance, models,
            and processes across the finance funcition.
          </p>
          <div class="buttoncontent">
            <AppButtonVue text="GET IN TOUCH" />
            <AppButtonVue class="bgnone" text="READ MORE" />
          </div>
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
      margin: 0 2px;
      color: $textheadercolor;
    }
    .special {
      background-color: rgba(5, 130, 131, 0.3);
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      padding-right: 1px;
      padding: 10px;
      padding-left: 30px;
      color: $fontocean;
    }
  }
}
.centercontent {
  width: 35%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  h1 {
    font-size: 4rem;
  }
  p {
    color: $textheadercolor;
    padding-top: 30px;
    line-height: 20px;
  }
}
.bgnone {
  background: none;
}
.right {
  display: flex;
}
.buttoncontent {
  margin-top: 20px;
  button {
    margin: 0 10px;
  }
}
</style>
