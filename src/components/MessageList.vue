<template>
  <div class="message-list">
    <div class="message" v-for="message of data.messages" :key="message.date">
      <div class="friend-type">{{ message.friendType | toKorean }}</div>
      <div class="message-content">{{ message.message }}</div>
      <div class="date">{{ message.date | localDate }}</div>
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
  },
  filters: {
    toKorean(value) {
      if (!value) return "";
      if (value === "friend") {
        return "친구";
      } else if (value === "colleage") {
        return "동료";
      } else if (value === "family") {
        return "가족";
      }
    },
    localDate(value) {
      return new Date(value).toLocaleTimeString("kr-KO");
    }
  }
};
</script>

<style scoped>
.message-list {
  width: 600px;
}
.message {
  background-color: rgba(37, 99, 172, 0.5);
  margin: 8px;
  padding: 2px;
}

.friend-type {
  padding-left: 5px;
  padding-top: 5px;
  text-align: left;
  font-weight: bold;
}

.message-content {
  text-align: left;
  white-space: pre-line;
}

.date {
  font-size: 10px;
  text-align: right;
}
</style>
