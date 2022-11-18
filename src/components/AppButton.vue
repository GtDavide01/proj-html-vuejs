<!-- SCRIPT -->
<script>
export default {
  name: "AppButton",
  props: {
    text: String,
  },
};
</script>
<!-- HTML -->
<template>
  <button>{{ text }}</button>
</template>
<!-- CSS -->
<style lang="scss" scoped>
@use "../styles/partials/variabili" as *;
button {
  color: white;
  background: none;
  border: 1px solid $buttoncolor;
  border-radius: 5px;
  padding: 14px 20px;
  font-weight: 500;
  font-family: "Codec Pro", sans-serif;
  font-size: 1rem;
  &:hover {
    background-color: $buttoncolor;
    cursor: pointer;
  }
}
</style>
