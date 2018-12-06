<template>
  <div class="message">
    <textarea class="message-area" v-model="form.message"></textarea>
    <div class="button-container">
      <button @click="send()">보내기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageArea",
  data() {
    return {
      form: this.$globalData.form
    };
  },
  methods: {
    send() {
      let sentMessages = this.$globalData.data.messages;
      this.form.date = Date.now();
      sentMessages.unshift(Object.assign({}, this.form));
      this.clearForm(this.form);
    },
    clearForm(form) {
      form.friendType = "";
      form.message = "";
      form.date = null;
    }
  }
};
</script>

<style scoped>
.message-area {
  width: 600px;
  height: 300px;
}
</style>
