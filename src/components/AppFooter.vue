<!-- SCRIPT -->
<script>
export default {
  name: "AppFooter",
};
</script>
<!-- HTML -->
<template>
  <footer>
    <div class="container">
      <div class="left">
        <p>Enjoy the low price. We are tracking any intention of privacy.</p>
      </div>
      <div class="right">
        <p>
          © 2020 NEXGEN is Proudly Powered by <a href="">Davide Fiorini</a>.
        </p>
      </div>
    </div>
  </footer>
</template>
<!-- CSS -->
<style lang="scss" scoped>
@use "../styles/partials/variabili" as *;
footer {
  height: 100px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left {
    width: 40%;
  }
  .right {
    width: 40%;
    a {
      color: $fontocean;
      text-decoration: none;
    }
  }
}
</style>
