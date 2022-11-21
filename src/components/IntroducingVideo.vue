<!-- SCRIPT -->
<script>
export default {
  name: "IntroducingVideo",
};
</script>
<!-- HTML -->
<template>
  <section class="videointro">
    <div class="container">
      <h4>INTRODUCTION VIDEO</h4>
      <h2>Advisory <span>Performance</span></h2>
      <p>
        Financial executives need to review thei strategies, operating models
        and capabilities so that their areas can generate sound information for
        better decision making.
      </p>
      <div class="imagevideo">
        <div class="opaco">
          <i class="fa-solid fa-play"></i>
          <div class="playocean">
            <i class="fa-solid fa-play"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<!-- CSS -->
<style lang="scss" scoped>
@use "../styles/partials/variabili" as *;
.container {
  text-align: center;
  margin-top: 100px;
  h4 {
    color: $fontocean;
    font-size: 0.8rem;
  }
  h2 {
    margin: 30px 0;
    font-size: 2.5rem;
    font-weight: 800;
    span {
      color: $fontocean;
      background-color: rgba(5, 130, 131, 0.2);
      padding: 10px;
      border-radius: 3px;
    }
  }
  p {
    margin: 30px 40px;
    width: 65%;
    margin: 0 auto;
    color: grey;
    line-height: 20px;
    margin-bottom: 50px;
  }
  .imagevideo {
    position: relative;
    background-image: url(../assets/img/video-1.jpg);
    background-size: cover;
    background-position: center;
    height: 370px;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 100px;
    .opaco {
      height: 100%;
      background-color: rgba(5, 130, 131, 0.3);
      position: relative;
    }

    i {
      position: absolute;
      top: 48%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: rgba(5, 130, 131, 0.9);
      z-index: 99;
      font-size: 5rem;
    }
    .playocean {
      i {
        cursor: pointer;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
}
</style>
