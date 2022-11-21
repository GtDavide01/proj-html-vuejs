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
          temporibus earum consequatur ipsa laborum voluptatum quod nihil
          reiciendis eos.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          delectus exercitationem magnam voluptate explicabo incidunt rerum
          facilis velit placeat excepturi natus eius dolor facere accusamus,
          nisi nemo vitae itaque. Optio!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          mollitia numquam reiciendis magnam atque, minima nostrum architecto?
          Unde tenetur itaque, perferendis voluptatem, in obcaecati inventore
          voluptatibus sit blanditiis facere expedita?
        </p>
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
  width: 30%;
  margin-top: 130px;
  background-color: $fontocean;
  padding: 30px;
  h2 {
    color: white;
    font-size: 1.5rem;
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
