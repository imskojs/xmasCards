<template>
  <div class="category">
    <select v-model="form.friendType">
      <option disabled value>카테고리를 선택하세요</option>
      <option value="colleage">동료</option>
      <option value="friend">친구</option>
      <option value="family">가족</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectCategory",
  data() {
    return {
      form: this.$globalData.form
    };
  }
};
</script>

<style scoped>
.category {
  margin: 10px;
  margin-bottom: 50px;
}
</style>
