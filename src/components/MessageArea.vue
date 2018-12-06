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
      if (this.validated(this.form)) {
        let sentMessages = this.$globalData.data.messages;
        this.form.date = Date.now();
        sentMessages.unshift(Object.assign({}, this.form));
        this.clearForm(this.form);
      }
    },
    // HELPER
    clearForm(form) {
      form.friendType = "";
      form.message = "";
      form.date = null;
    },

    validated(form) {
      if (form.friendType == "") {
        window.alert("카테고리를 선택해주세요");
        return false;
      } else if (form.message == "") {
        window.alert("메세지를 입력해주세요");
        return false;
      }
      return true;
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
