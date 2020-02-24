<template>
  <li v-if="!item.hidden&&item.children" class="navbar__list-item">
    <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
      <router-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)" :class="['navbar__link', { 'is-active exact-active' : basePath == defaultActive }]">
        <item :icon="onlyOneChild.meta.icon || (item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
      </router-link>
    </template>
  </li>
</template>

<script>
import path from 'path'
import Item from './Item'

export default {
  name: 'Navbar',
  components: { Item },
  props: {
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    },
    defaultActive: {
      type: String,
      default: ''
    }
  },
  data() {
    this.onlyOneChild = null
    return {}
  },
  methods: {
    hasOneShowingChild(children, parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })

      if (showingChildren.length === 1) {
        return true
      }

      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      const pathTmp = path.resolve(this.basePath, routePath)
      return pathTmp.replace(/:qr/g, this.$store.state.app.keyApi) + '/'
    }
  }
}
</script>

