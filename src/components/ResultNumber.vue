<!-- SCRIPT -->
<script>
export default {
  name: "ResultNumber",
};
</script>
<!-- HTML -->
<template>
  <div class="resultn">
    <section class="container">
      <h4>WHAT ARE WE DOING</h4>
      <h2><span>Results</span> in Numbers</h2>
      <ul>
        <li>
          <p>128</p>
          <p class="subtitle">Certifications</p>
        </li>
        <li>
          <p>230</p>
          <p class="subtitle">Employees</p>
        </li>
        <li>
          <p>517</p>
          <p class="subtitle">Customers</p>
        </li>
        <li>
          <p>94</p>
          <p class="subtitle">Countries-Served</p>
        </li>
      </ul>
    </section>
  </div>
</template>
<!-- CSS -->
<style lang="scss" scoped>
@use "../styles/partials/variabili" as *;
.resultn {
  background-image: url(../assets/img/bg-7.jpg);
}
.container {
  text-align: center;
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
      padding: 10px;
    }
  }
  ul {
    margin-top: 100px;
    display: flex;
    list-style: none;
    justify-content: space-between;
    li {
      p {
        color: $fontocean;
        font-size: 2rem;
        font-weight: 900;
      }
      .subtitle {
        font-size: 1.2rem;
        padding: 20px;
        color: white;
        margin-bottom: 100px;
      }
      margin: 0 30px;
    }
  }
}
</style>
