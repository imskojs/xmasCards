<template>
  <div id="app">
    <SelectCategory :friendTypes="[ '동료', '친구', '가족' ]"/>
  </div>
</template>

<script>
import SelectCategory from "./components/SelectCategory.vue";

export default {
  name: "app",
  components: {
    SelectCategory
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
