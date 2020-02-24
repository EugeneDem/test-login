<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="svgSrc"/>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconName: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    svgSrc() {
      return `#icon-${this.iconName}`
    },
    svgClass() {
      if (this.iconClass) {
        return 'svg-icon ' + this.iconClass
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style lang="scss">
  @import "src/styles/_variables.scss";
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: $default_color;
    overflow: hidden;
  }
</style>
