<template>
  <div class="app__content">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.fullPath
    }
  }
}
</script>
