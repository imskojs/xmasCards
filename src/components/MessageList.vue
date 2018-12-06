<template>
  <div class="message-list">
    <div class="message" v-for="message of data.messages" :key="message.id">
      <div class="friend-type">{{ message.friendType }}</div>
      <div class="message">{{ message.message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageArea",
  data() {
    return {
      data: this.$globalData.data
    };
  }
};
</script>

<style scoped>
.message-area {
  width: 600px;
  height: 300px;
}
</style>
