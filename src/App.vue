<template>
  <div id="app" class="container is-fluid">
    <h1 class="title">Superhero!</h1>
    <h2 class="subtitle">Find your favorite hero... or villain</h2>
    <SuperHero />
  </div>
</template>

<script>
import SuperHero from "./components/SuperHero.vue";

export default {
  name: "App",
  components: {
    SuperHero,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 35px;
}
</style>
