<template>
  <div class="app__wrapper">
    <div class="btn-group">
      <div class="btn btn_default" @click="openModal">Login</div>
      <div class="btn btn_default" @click="showCrypt">Шифр</div>
    </div>
    <template v-if="onCrypt">
      <shift />
    </template>
  </div>
</template>

<script>
import Shift from './components/Shift'

export default {
  name: 'Index',
  components: { Shift },
  data() {
    return {
      onCrypt: false
    }
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
    },
    showCrypt() {
      this.onCrypt = !this.onCrypt
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
