<!-- SCRIPT -->
<script>
import AppButtonVue from "./AppButton.vue";
export default {
  name: "AppNews",
  components: {
    AppButtonVue,
  },
};
</script>
<!-- HTML -->
<template>
  <section class="news">
    <div class="container">
      <div class="infoall">
        <div class="info">
          <h4>OUR EDITORIAL CONTENT</h4>
          <h2>Latest <span>News</span></h2>
          <p>
            Every week we publish content about what is best in the business
            world.
          </p>
        </div>
        <div class="buttonpage"><AppButtonVue text="SEE ALL" /></div>
      </div>
      <div class="cardcontainer">
        <div class="card">
          <div class="image">
            <img src="../assets/img/news-1.jpg" alt="" />
            <div class="text">
              <p>Increasing creativity is possible for everyone</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img src="../assets/img/news-2.jpg" alt="" />
            <div class="text">
              <p>Because market research is part of the business plan</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img src="../assets/img/news-3.jpg" alt="" />
            <div class="text"><p>Working from home is now a trend</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<!-- CSS -->
<style lang="scss" scoped>
@use "../styles/partials/variabili" as *;
.news {
  background-color: $bgnews;
  .infoall {
    display: flex;
  }
  .info {
    width: 70%;
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
    p {
      color: grey;
    }
  }
  .buttonpage {
    display: flex;
    justify-content: end;
    align-items: end;
    width: 30%;
  }
}
.cardcontainer {
  margin-top: 40px;
  padding-bottom: 100px;
  display: flex;
  gap: 2rem;
  img {
    width: 100%;
    border-radius: 10px;
  }
  .card {
    .image {
      position: relative;
      .text {
        position: absolute;
        text-align: center;
        color: white;
        bottom: 20px;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: 800;
        font-size: 1.6rem;
        width: 80%;
      }
    }
  }
}
</style>
