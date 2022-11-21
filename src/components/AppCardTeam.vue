<!-- SCRIPT -->
<script>
export default {
  name: "AppCardTeam",
  props: {
    img: String,
    name: String,
    role: String,
  },
};
</script>
<!-- HTML -->
<template>
  <div class="card">
    <div class="image">
      <img src="../assets/img/${img}" alt="" />
      <div class="info">
        <h2>{{ name }}</h2>
        <p>{{ role }}</p>
        <div class="social">
          <ul>
            <li><i class="fa-brands fa-facebook-f"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-linkedin-in"></i></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- CSS -->
<style lang="scss" scoped>
@use "../styles/partials/variabili" as *;
.card {
  width: calc(100% / 2);
  margin: 25px 0;
  .image {
    display: flex;
    img {
      width: 30%;
      border-radius: 5px;
    }
    .info {
      padding: 10px 30px;
    }
  }
  h2 {
    font-size: 1.4rem;
    padding-bottom: 10px;
  }
  p {
    color: grey;
    font-size: 0.9rem;
    padding: 15px 0;
  }
  ul {
    padding: 0;
    display: flex;
    list-style-type: none;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      color: $fontocean;
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 50%;
      margin-right: 5px;
      background-color: rgba(5, 130, 131, 0.2);
    }
  }
}
</style>
