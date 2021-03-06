<template>
  <div v-if="items.length > 0" class="q-pa-sm row">
    <template v-for="item in items">
      <div :class="getItemClass()" :key="item._id">
        <component
          :id="item._id"
          :service="service"
          :item="item"
          :contextId="contextId"
          :is="renderer.component"
          v-bind="renderer"
          @item-selected="onItemSelected" />
      </div>
    </template>
    <div v-if="nbPages > 1" class="col-12">
      <q-pagination class="justify-center q-ma-md" v-model="currentPage" :max="nbPages" @input="onPageChanged" :input="true"/>
    </div>
  </div>
  <div v-else>
    <slot name="empty-section">
      <div class="row justify-center">
        <k-stamp icon="las la-exclamation-circle" icon-size="1.6rem" :text="$t('KGrid.EMPTY_GRID')" direction="horizontal" />
      </div>
    </slot>
  </div>
</template>

<script>
import KStamp from '../frame/KStamp.vue'
import mixins from '../../mixins'

export default {
  name: 'k-grid',
  components: {
    KStamp
  },
  mixins: [
    mixins.service,
    mixins.baseCollection
  ],
  props: {
    renderer: {
      type: Object,
      default: () => {
        return {
          component: 'collection/KCard'
        }
      }
    },
    baseQuery: {
      type: Object,
      default: () => {}
    },
    filterQuery: {
      type: Object,
      default: () => {}
    },
    listStrategy: {
      type: String
    }
  },
  watch: {
    $route (to, from) {
      // React to route changes but reusing the same component as this one is generic
      this.refreshCollection()
    },
    baseQuery: function () {
      this.resetCollection()
    },
    filterQuery: function () {
      this.resetCollection()
    }
  },
  methods: {
    getItemClass () {
      return this.renderer.class || 'q-pa-sm col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'
    },
    getCollectionBaseQuery () {
      return this.baseQuery
    },
    getCollectionFilterQuery () {
      return this.filterQuery
    }
  },
  created () {
    // Load the component
    this.$options.components[this.renderer.component] = this.$load(this.renderer.component)
    // Refresh collection
    this.refreshCollection()
    // Whenever the user abilities are updated, update collection as well
    this.$events.$on('user-abilities-changed', this.refreshCollection)
  },
  beforeDestroy () {
    this.$events.$off('user-abilities-changed', this.refreshCollection)
  }
}
</script>
