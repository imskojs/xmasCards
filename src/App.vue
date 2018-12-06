<template>
  <div id="app">
    <SelectCategory :friendTypes="[ '동료', '친구', '가족' ]"/>
    <MessageArea/>
    <MessageList/>
  </div>
</template>

<script>
import SelectCategory from "./components/SelectCategory.vue";
import MessageArea from "./components/MessageArea.vue";
import MessageList from "./components/MessageList.vue";

export default {
  name: "app",
  components: {
    SelectCategory,
    MessageArea,
    MessageList
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
