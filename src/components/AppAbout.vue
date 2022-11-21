<!-- SCRIPT -->
<script>
import AppButtonVue from "./AppButton.vue";
import { store } from "../store";
export default {
  name: "AppAbout",
  data() {
    return {
      store,
    };
  },
  components: {
    AppButtonVue,
  },
};
</script>
<!-- HTML -->
<template>
  <section class="about">
    <div class="container">
      <div class="info">
        <span class="special">NEX</span> <span>GEN</span>
        <p>A functional HTML template for Corporate & Buiseness.</p>
        <ul>
          <li><i class="fa-solid fa-phone"></i> +1 (305) 1234-5678</li>
          <li><i class="fa-solid fa-envelope"></i> hello@example.com</li>
          <li><i class="fa-solid fa-location-dot"></i> Main Avenue , 987</li>
        </ul>
        <AppButtonVue text="GET IN TOUCH" />
      </div>
      <div class="card">
        <ul>
          <h2>About</h2>
          <li v-for="(li, index) in store.listAbout">
            <i class="fa-solid fa-angle-right"></i>{{ li }}
          </li>
        </ul>
      </div>
      <div class="card">
        <ul>
          <h2>Services</h2>
          <li v-for="(li, index) in store.listServices">
            <i class="fa-solid fa-angle-right"></i>{{ li }}
          </li>
        </ul>
      </div>
      <div class="card">
        <h2>Support</h2>
        <ul>
          <li v-for="(li, index) in store.listSupport">
            <i class="fa-solid fa-angle-right"></i>{{ li }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<!-- CSS -->
<style lang="scss" scoped>
@use "../styles/partials/variabili" as *;
.about {
  background-image: url(../assets/img/bg-7.jpg);
  background-size: cover;
  background-position: center;
}
.container {
  display: flex;
  gap: 2rem;
  padding-top: 150px;
  .info {
    width: 25%;
    span {
      font-size: 1.2rem;
      font-weight: 600;
      margin: 0 2px;
      color: $textheadercolor;
    }
    .special {
      background-color: rgba(5, 130, 131, 0.3);
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      padding-right: 1px;
      padding: 10px;
      padding-left: 30px;
      color: $fontocean;
    }
    p {
      color: #c0c3d0;
      padding: 30px 0;
      line-height: 20px;
    }
    ul {
      list-style: none;
      li {
        color: #c0c3d0;
        margin: 20px 0;
      }
    }
    button {
      background: none;
      margin-top: 20px;
      &:hover {
        background-color: $buttoncolor;
      }
    }
  }
  .card {
    background-color: rgba(121, 121, 121, 0.1);
    border-radius: 10px;
    margin-bottom: 150px;

    width: 25%;
    padding: 40px;
    h2 {
      color: white;
    }
    ul {
      list-style: none;
      li {
        color: #c0c3d0;
        cursor: pointer;
        margin: 20px 0;
        &:hover {
          color: $buttoncolor;
        }
        .fa-solid {
          font-size: 1.2rem;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
