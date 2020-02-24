<template>
  <div class="app__wrapper">
    <div class="btn-group">
      <div class="btn btn_default" @click="openModal">Login</div>
      <div class="btn btn_default">Шифр</div>
    </div>
    <div class="form">
      <div class="form__row">
        <div class="form__label">Исходный текст</div>
        <textarea class="form__control"/>
      </div>
      <div class="form__row">
        <select class="form__select">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="form__row">
        <div class="btn">Шифровать</div>
      </div>
      <div class="rezult"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Index',
  components: { },
  data() {
    return {}
  },
  created() {
  },
  mounted() {
  },
  destroyed() {
  },
  methods: {
    openModal() {
      this.$parent.$parent.openModalLogin()
    }
  }
}
</script>

<style lang="scss">
  @import "src/styles/_variables.scss";
  .btn-group {
    padding: 40px 30px;
  }
</style>
