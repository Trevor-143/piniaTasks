<template>
  <HeaderMain />
  <Navi />
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import HeaderMain from "./components/HeaderMain.vue"
import Navi from "./components/Navigation.vue"

export default {
  components: {
    HeaderMain,
    Navi
  }
}

</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  background-image: linear-gradient(to top left, rgba(132, 255, 0, 0.4) 0%, white 40%, white 50%, rgba(224, 241, 32, 0.6) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
#app {
  max-width: 800px;
  width: 100%;
  min-height: 100vh;
}

</style>
