<!-- SCRIPT -->
<script>
export default {
  name: "AppHeader",
};
</script>
<!-- HTML -->
<template>
  <header>
    <div class="container">
      <!-- header div left -->
      <div class="left">
        <i class="fa-solid fa-clock"></i> Open Hours: Mon - Sat - 9:00 - 18:00
      </div>
      <!-- header div right -->
      <div class="right">
        <ul>
          <li><i class="fa-solid fa-phone"></i> +1 (305) 1234-5678</li>
          <li><i class="fa-solid fa-envelope"></i> hello@example.com</li>
          <li><i class="fa-brands fa-facebook-f"></i></li>
          <li><i class="fa-brands fa-twitter"></i></li>
          <li><i class="fa-brands fa-linkedin-in"></i></li>
        </ul>
      </div>
    </div>
  </header>
</template>
<!-- CSS -->
<style lang="scss" scoped>
@use "../styles/partials/variabili" as *;
header {
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  font-size: 0.8rem;
  background-color: $headerbg;
  color: $textheadercolor;
  .container {
    display: flex;
    justify-content: space-between;
  }
  ul {
    list-style: none;
    display: flex;
    li {
      margin: 0 10px;
      &:hover {
        color: $fontocean;
        cursor: pointer;
      }
    }
  }
}
</style>
