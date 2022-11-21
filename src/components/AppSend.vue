<!-- SCRIPT -->
<script>
import AppButtonVue from "./AppButton.vue";
export default {
  name: "AppSend",
  components: {
    AppButtonVue,
  },
};
</script>
<!-- HTML -->
<template>
  <section class="send">
    <div class="container">
      <div class="info">
        <h4>SEND A MESSAGE</h4>
        <h2>Get In <span>Touch</span></h2>
        <p>We will respond to your message as soon as possible</p>
        <div class="row">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <div class="row">
          <input type="text" placeholder="Phone" />
          <select name="" id="">
            <option value="" placeholder="">More Info</option>
          </select>
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <br />
        <AppButtonVue text="SEND" />
      </div>
      <div class="example">
        <h2>Example Inc.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Preasent diam lacus , dapibus sed imperdiet consecteur.</p>
        <ul>
          <li><i class="fa-solid fa-phone"></i> +1 (305) 1234-5678</li>
          <li><i class="fa-solid fa-envelope"></i> hello@example.com</li>
          <li><i class="fa-solid fa-location-dot"></i> Main Avenue , 987</li>
        </ul>
        <AppButtonVue text="VIEW MAP" />
      </div>
    </div>
  </section>
</template>
<!-- CSS -->
<style lang="scss" scoped>
@use "../styles/partials/variabili" as *;
.container {
  display: flex;
  .info {
    width: 60%;
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
      line-height: 20px;
    }
    .row {
      display: flex;
      input {
        margin: 7px 0;
        margin-right: 10px;
        padding: 13px 15px;
        width: 40%;
        border: none;
        outline: none;
        background-color: #ececec;
        border-radius: 3px;
        font-family: "Codec Pro", sans-serif;
      }
      select {
        margin: 7px 0;
        margin-right: 10px;
        padding: 13px 15px;
        width: 40%;
        border: none;
        outline: none;
        background-color: #ececec;
        border-radius: 3px;
        color: grey;
        font-family: "Codec Pro", sans-serif;
      }
    }
    textarea {
      margin: 7px 0;
      margin-right: 10px;
      padding: 13px 15px;
      width: 40%;
      border: none;
      outline: none;
      background-color: #ececec;
      border-radius: 3px;
      color: grey;
      font-family: "Codec Pro", sans-serif;
      width: 82%;
    }
    button {
      margin-top: 20px;
      margin-bottom: 100px;
    }
  }
  .example {
    button {
      background: white;
      color: $buttoncolor;
      &:hover {
        background-color: $buttoncolor;
        color: white;
      }
    }
    width: 30%;
    h2 {
      margin-top: 100px;
    }
    p {
      color: grey;
      line-height: 20px;
      margin: 20px 0;
    }
    ul {
      list-style: none;
      li {
        color: $buttoncolor;
        margin: 15px 0;
        .fa-solid {
          line-height: 30px;
          text-align: center;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background-color: rgba(5, 130, 131, 0.2);
        }
      }
    }
  }
}
</style>
