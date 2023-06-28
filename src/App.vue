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
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,800&display=swap');

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
