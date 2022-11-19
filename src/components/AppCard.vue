<!-- SCRIPT -->
<script>
export default {
  name: "AppCard",
};
</script>
<!-- HTML -->
<template>
  <div class="card">
    <div class="containercard">
      <p>
        <i><i class="fa-solid fa-network-wired"></i></i>
      </p>
      <h2>Audit & Assurance</h2>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
  </div>
  <div class="card">
    <div class="containercard">
      <p>
        <i><i class="fa-solid fa-network-wired"></i></i>
      </p>
      <h2>Audit & Assurance</h2>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
  </div>
  <div class="card">
    <div class="containercard">
      <p>
        <i><i class="fa-solid fa-network-wired"></i></i>
      </p>
      <h2>Audit & Assurance</h2>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
  </div>
  <div class="card">
    <div class="containercard">
      <p>
        <i><i class="fa-solid fa-network-wired"></i></i>
      </p>
      <h2>Audit & Assurance</h2>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
  </div>
  <div class="card">
    <div class="containercard">
      <p>
        <i><i class="fa-solid fa-network-wired"></i></i>
      </p>
      <h2>Audit & Assurance</h2>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
  </div>
  <div class="card">
    <div class="containercard">
      <p>
        <i><i class="fa-solid fa-network-wired"></i></i>
      </p>
      <h2>Audit & Assurance</h2>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
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
    width: 80%;
  }
}
</style>
