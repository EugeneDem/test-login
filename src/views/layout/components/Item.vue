<script>
export default {
  name: 'NavbarItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []

    if (icon) {
      vnodes.push(<svg-icon icon-class='navbar__icon' icon-name={icon} />)
      vnodes.push(<svg-icon icon-class='navbar__icon navbar__icon_active' icon-name={`${icon}-active`} />)
    }

    if (title) {
      vnodes.push(<span class='navbar__title'>{title}</span>)
    }
    return vnodes
  }
}
</script>
