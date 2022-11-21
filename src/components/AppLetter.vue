<!-- SCRIPT -->
<script>
import AppButtonVue from "./AppButton.vue";
export default {
  name: "AppLetter",
  components: {
    AppButtonVue,
  },
};
</script>
<!-- HTML -->
<template>
  <section class="newsletter">
    <div class="container">
      <div class="info">
        <h4>NEWSLETTER</h4>
        <h2><span>Know</span> First</h2>
        <p>
          Follow closely and receive content about our company and the news of
          the current market.
        </p>
      </div>
      <div class="email">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <AppButtonVue text="SUBSCRIBE" />
      </div>
    </div>
  </section>
</template>
<!-- CSS -->
<style lang="scss" scoped>
@use "../styles/partials/variabili" as *;
.newsletter {
  background-color: #111117;
}
.container {
  display: flex;
  width: 50%;
  padding-bottom: 100px;
  .info {
    width: 45%;
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
        color: white;
        border-radius: 4px;
        padding: 10px;
      }
    }
    p {
      color: grey;
      line-height: 20px;
    }
  }
  .email {
    width: 55%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-left: 20px;
    input {
      width: 70%;
      margin: 5px 0;
      padding: 15px 10px;
      border-radius: 5px;
      border: none;
      outline: none;
      background-color: #1d1d23;
      color: white;
      font-family: "Codec Pro", sans-serif;
    }
    button {
      width: 30%;
      margin: 10px 0;
    }
  }
}
</style>
