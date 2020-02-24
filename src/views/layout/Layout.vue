<template>
  <div class="app">
    <div class="app__wrap">
      <!-- <nav class="navbar">
        <ul class="navbar__list" role="menubar">
          <navbar v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" :default-active="activeMenu" />
        </ul>
      </nav> -->
      <app-main/>
    </div>
    <modal-login ref="modalLogin" :is-show="isShowModalLogin"/>
  </div>
</template>

<script>
import { ModalLogin, Navbar, AppMain } from './components'

const { body } = document

export default {
  name: 'Layout',
  components: {
    ModalLogin,
    Navbar,
    AppMain
  },
  data() {
    return {
      currentRoute: this.$route.path,
      isShowModalLogin: false
    }
  },
  computed: {
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    routes() {
      return this.$router.options.routes
    }
  },
  watch: {
    '$route'(to, from) {
      this.currentRoute = to.path
    }
  },
  methods: {
    openModalLogin() {
      console.log('open')
      this.isShowModalLogin = true
      body.classList.add('is-modal-open')
    },
    hideModalLogin() {
      this.isShowModalLogin = false
      body.classList.remove('is-modal-open')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .app {
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
