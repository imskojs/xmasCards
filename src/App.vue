<template>
  <div id="app">
    <SelectCategory :friendTypes="[ '동료', '친구', '가족' ]"/>
    <MessageArea/>
  </div>
</template>

<script>
import SelectCategory from "./components/SelectCategory.vue";
import MessageArea from "./components/MessageArea.vue";

export default {
  name: "app",
  components: {
    SelectCategory,
    MessageArea
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
