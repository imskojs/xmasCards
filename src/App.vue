<template>
  <div id="app">
    <SelectCategory/>
    <MessageArea/>
    <div class="message-list-container">
      <MessageList/>
    </div>
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

.message-list-container {
  display: flex;
  justify-content: center;
}
</style>
