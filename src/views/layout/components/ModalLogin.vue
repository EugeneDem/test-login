<template>
  <div :class="['modal modal_login', { 'is-open-modal': isShow }]">
    <div class="modal__wrap">
      <div class="modal__head">
        <div class="modal__title">
          <div class="modal__title-inner">
            Авторизация
            <span class="modal__title-icon-wrap">
              <img src="@/assets/img/key-icon.png" class="modal__title-icon">
            </span>
          </div>
        </div>
      </div>
      <div class="modal__body">
        <form class="modal__form" autocomplete="on">
          <div class="modal__form-row">
            <div class="input-group input-group_email">
              <input class="input-group__control" type="text" placeholder="Email" name="email" autocomplete="off">
              <div class="input-group__error">Сообщение об ошибке</div>
            </div>
          </div>
          <div class="modal__form-row">
            <div class="input-group input-group_pass has-error">
              <input class="input-group__control" type="password" placeholder="Пароль" autocomplete="off" name="password">
              <div class="input-group__error">Сообщение об ошибке</div>
            </div>
          </div>
          <div class="modal__form-row">
            <div class="btn">Войти</div>
          </div>
        </form>
      </div>
      <div class="modal__footer">
        <div class="modal__footer-links">
          <a href="#/register" class="modal__footer-link modal__footer-link_bold">Регистрация</a>
          <a href="#/restore" class="modal__footer-link">Забыли пароль?</a>
        </div>
      </div>
    </div>
    <div class="modal__overlay" @click="hideModalLogin()" />
  </div>
</template>

<script>
export default {
  name: 'ModalLogin',
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    hideModalLogin() {
      this.$parent.hideModalLogin()
    }
  }
}
</script>

<style lang="scss">

</style>
