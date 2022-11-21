<!-- SCRIPT -->
<script>
import AppCardTeamVue from "./AppCardTeam.vue";
import { store } from "../store";
export default {
  name: "AppTeam",
  data() {
    return {
      store,
    };
  },
  components: {
    AppCardTeamVue,
  },
};
</script>
<!-- HTML -->
<template>
  <section class="team">
    <div class="container">
      <div class="teamcard">
        <div class="info">
          <h4>WE LIKE WHAT WE DO</h4>
          <h2><span>Team</span> of experts</h2>
          <p>
            Ethics and integrity are the bases on which our professionals build
            their careers. They are fundamentals that become daily attitudes.
          </p>
        </div>
        <div class="containercard">
          <AppCardTeamVue
            v-for="(card, index) in store.listTeam"
            :key="index"
            :img="card.img"
            :name="card.name"
            :role="card.role"
          />
        </div>
      </div>
      <div class="textpresident">
        <h2>President Speech</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe a
          tempore error distinctio quos quaerat, hic at magnam quia vel
          temporibus earumos.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          delectus exercitationem magnam voluptate explicabo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          mollitia numquam reiciendis magnam atque, minima nostrum architecto?
        </p>
        <p class="founder">T. Johnson</p>
        <div class="quotation">
          <i class="fa-solid fa-quote-right"></i>
        </div>
      </div>
    </div>
  </section>
</template>
<!-- CSS -->
<style lang="scss" scoped>
@use "../styles/partials/variabili" as *;
.container {
  display: flex;
}
h4 {
  padding-top: 100px;
  color: $fontocean;
  font-size: 0.8rem;
}
h2 {
  margin: 30px 0;
  font-size: 2.5rem;
  color: black;
  span {
    background-color: rgba(5, 130, 131, 0.2);
    color: $fontocean;
    border-radius: 4px;
    padding: 10px;
  }
}
.teamcard {
  width: 70%;
  p {
    line-height: 20px;
    color: grey;
  }
}
.textpresident {
  position: relative;
  text-align: left;
  border-radius: 5px;
  width: 30%;
  margin-top: 130px;
  margin-bottom: 100px;
  background-color: $fontocean;
  padding: 30px;
  h2 {
    margin-top: 5px;
    margin-bottom: 5px;
    color: white;
    font-size: 1.5rem;
  }
  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 20px;
    padding: 10px 0;
  }
  .founder {
    font-weight: 800;
    color: white;
    padding: 10px 0;
  }
  .quotation {
    position: absolute;
    right: 40px;
    bottom: 40px;
    font-size: 1.5rem;
    color: rgba(5, 130, 131, 0.9);
  }
}
.containercard {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
}
.info {
  width: 70%;
}
</style>
