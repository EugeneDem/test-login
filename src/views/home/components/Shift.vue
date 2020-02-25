<template>
  <div class="form">
    <div class="form__row">
      <div class="form__label">Исходный текст</div>
      <textarea ref="inputText" class="form__control"/>
    </div>
    <div class="form__row">
      <div class="form__label">Сдвиг</div>
      <select v-model="selected" class="form__select">
        <option v-for="(item, ind) in rotate" :key="ind" :value="item">{{ item }}</option>
      </select>
    </div>
    <div class="form__row">
      <div class="form__label">Алфавит</div>
      <select v-model="language_sel" class="form__select" @change="onChange($event)">
        <option v-for="(item, ind) in language" :key="ind" :value="item.value">{{ item.name }}</option>
      </select>
    </div>
    <div class="form__row">
      <div class="form__label">Операция</div>
      <select class="form__select" @change="onChangeCrypt($event)">
        <option v-for="(item, ind) in encrypt" :key="ind" :value="item.value">{{ item.name }}</option>
      </select>
    </div>
    <div class="form__row">
      <template v-if="typeCrypt === 'encrypted'">
        <div class="btn" @click="shiftIn()">Зашифровать</div>
      </template>
      <template v-else>
        <div class="btn" @click="shiftOut()">Расшифровать</div>
      </template>
    </div>
    <div ref="rezult" class="rezult" />
  </div>
</template>

<script>

export default {
  name: 'Shift',
  data() {
    return {
      language: [
        {
          'name': 'Русский',
          'value': 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'
        },
        {
          'name': 'Английский',
          'value': 'ABCDEFGHIJKLMNOPQRSTVUWXYZ'
        }
      ],
      encrypt: [
        {
          'name': 'Зашифровать',
          'value': 'encrypted'
        },
        {
          'name': 'Расшифровать',
          'value': 'decrypted'
        }
      ],
      rotate: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
      selected: 3,
      language_sel: 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
      typeCrypt: 'encrypted'
    }
  },
  created() {
  },
  mounted() {
  },
  destroyed() {
  },
  methods: {
    onChange(e) {
      this.language_sel = e.target.value
    },
    onChangeCrypt(e) {
      this.typeCrypt = e.target.value
    },
    shiftAlphabet(shift) {
      let shiftedAlphabet = ''
      let currentLetter = ''
      for (let i = 0; i < this.language_sel.length; i++) {
        currentLetter = (this.language_sel[i + shift] === undefined) ? (this.language_sel[i + shift - this.language_sel.length]) : (this.language_sel[i + shift])
        shiftedAlphabet = shiftedAlphabet.concat(currentLetter)
      }
      return shiftedAlphabet
    },
    shiftIn() {
      const message = this.$refs.inputText.value
      const rotn = parseInt(this.selected)
      const shiftedAlphabet = this.shiftAlphabet(rotn)
      let encryptedMessage = ''

      for (let i = 0; i < message.length; i++) {
        const isUpperCase = message[i].toUpperCase() === message[i]
        const indexOfLetter = this.language_sel.indexOf(message[i].toUpperCase())
        if (indexOfLetter !== -1) {
          encryptedMessage = encryptedMessage.concat((isUpperCase) ? shiftedAlphabet[indexOfLetter].toUpperCase() : shiftedAlphabet[indexOfLetter].toLowerCase())
        } else {
          encryptedMessage = encryptedMessage.concat(message[i])
        }
      }

      this.$refs.rezult.innerText = encryptedMessage
    },
    shiftOut() {
      const message = this.$refs.inputText.value
      const rotn = parseInt(this.selected)
      const shiftedAlphabet = this.shiftAlphabet(rotn)
      let decryptMessage = ''

      for (let i = 0; i < message.length; i++) {
        const isUpperCase = message[i].toUpperCase() === message[i]
        const indexOfLetter = shiftedAlphabet.indexOf(message[i].toUpperCase())
        const encryptedLetter = this.language_sel[indexOfLetter]
        if (encryptedLetter === undefined) {
          decryptMessage = decryptMessage.concat(message[i])
        } else {
          decryptMessage = decryptMessage.concat((isUpperCase) ? this.language_sel[indexOfLetter].toUpperCase() : this.language_sel[indexOfLetter].toLowerCase())
        }
      }

      this.$refs.rezult.innerText = decryptMessage
    }
  }
}
</script>

<style lang="scss">
  @import "src/styles/_variables.scss";
  .form {
    max-width: 600px;
    padding: 30px;

    &__row {
      margin-bottom: 20px
    }

    &__label {
      font-size: 14px;
      display: block;
      padding-bottom: 6px;
    }

    &__control {
      background: #fff;
      box-sizing: border-box;
      display: inline-block;
      vertical-align: middle;
      border: 1px solid #e0e0e0;
      border-radius: 5px;
      width: 100%;
      padding: 7px 3px;
      font-size: 14px;
      line-height: 1.2;
      color: #212121;
      text-align: left;
      -webkit-appearance: none;
    }

    &__select {
      background: #fff;
      box-sizing: border-box;
      display: inline-block;
      vertical-align: middle;
      border: 1px solid #e0e0e0;
      border-radius: 5px;
      width: 100%;
      max-width: 156px;
      padding: 7px 3px;
      font-size: 14px;
      line-height: 1.2;
      color: #212121;
    }
  }
  textarea.form__control {
    height: 108px;
    resize: vertical;
  }
</style>
