<!-- SCRIPT -->
<script>
export default {
  name: "AppCard",
  props: {
    icon: String,
    title: String,
    description: String,
  },
};
</script>
<!-- HTML -->
<template>
  <div class="card">
    <div class="containercard">
      <p>
        <i><i :class="`${icon}`"></i></i>
      </p>
      <h2>{{ title }}</h2>
      <span>{{ description }}</span>
      <div class="arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  </div>
</template>
<!-- CSS -->
<style lang="scss" scoped>
@use "../styles/partials/variabili" as *;
.card {
  margin: 15px 15px;
  border-radius: 5px;
  padding: 40px;
  background-color: $bgcard;
  width: calc(100% / 3 - 30px);
  p {
    color: $fontocean;
    font-size: 2.5rem;
  }
  h2 {
    color: white;
    padding: 20px 0;
  }
  span {
    color: white;
    line-height: 20px;
  }
  .containercard {
    width: 90%;
    position: relative;
  }
  .arrow {
    position: absolute;
    font-size: 1.5rem;
    color: $buttoncolor;
    top: 5px;
    right: -20px;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    &:hover {
      background-color: $buttoncolor;
      color: white;
      cursor: pointer;
    }
  }
}
</style>
