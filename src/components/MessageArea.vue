<template>
  <div class="message">
    <textarea class="message-area" v-model="form.message"></textarea>
  </div>
</template>

<script>
export default {
  name: "MessageArea",
  data() {
    return {
      form: this.$globalData.form
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
