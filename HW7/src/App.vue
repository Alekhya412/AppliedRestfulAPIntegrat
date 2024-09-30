<template>
  <div id="app">
    <h1>Bible Verse Application</h1>
    <RandomVerse />
    <SpecificVerse />
  </div>
</template>

<script>
import RandomVerse from "./components/RandomVerse.vue";
import SpecificVerse from "./components/SpecificVerse.vue";

export default {
  name: "App",
  components: {
    RandomVerse,
    SpecificVerse,
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
}

h1 {
  margin-bottom: 20px;
}
</style>
