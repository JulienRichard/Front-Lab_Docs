/*
From vue-tabs-component - https://github.com/spatie/vue-tabs-component
*/

import expiringStorage from './expiringStorage'

export default {
  props: {
    cacheLifetime: {
      default: 5
    },
    options: {
      type: Object,
      required: false,
      default: () => ({
        useUrlFragment: false
      })
    },
    expanded: {
      type: Boolean,
      default: false
    },
    centered: {
      type: Boolean,
      default: false
    },
    wrapped: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    tabs: [],
    activeTabHash: ''
  }),
  computed: {
    storageKey () {
      return `vue-tabs-component.cache.${window.location.host}${window.location.pathname}`
    }
  },
  created () {
    this.tabs = this.$children
  },
  mounted () {
    window.addEventListener('hashchange', () => this.selectTab(window.location.hash))
    if (this.findTab(window.location.hash)) {
      this.selectTab(window.location.hash)
      return
    }
    const previousSelectedTabHash = expiringStorage.get(this.storageKey)
    if (this.findTab(previousSelectedTabHash)) {
      this.selectTab(previousSelectedTabHash)
      return
    }
    if (this.tabs.length) {
      this.selectTab(this.tabs[0].hash)
    }
  },
  methods: {
    findTab (hash) {
      return this.tabs.find(tab => tab.hash === hash)
    },
    selectTab (selectedTabHash, event) {
      // See if we should store the hash in the url fragment.
      if (event && !this.options.useUrlFragment) {
        event.preventDefault()
      }
      const selectedTab = this.findTab(selectedTabHash)
      if (!selectedTab) {
        return
      }
      this.tabs.forEach(tab => {
        tab.isActive = (tab.hash === selectedTab.hash)
      })
      this.$emit('changed', {
        tab: selectedTab
      })
      this.activeTabHash = selectedTab.hash
      expiringStorage.set(this.storageKey, selectedTab.hash, this.cacheLifetime)
    },
    setTabVisible (hash, visible) {
      const tab = this.findTab(hash)
      if (!tab) {
        return
      }
      tab.isVisible = visible
      if (tab.isActive) {
        // If tab is active, set a different one as active.
        tab.isActive = visible
        this.tabs.every((tab, index, array) => {
          if (tab.isVisible) {
            tab.isActive = true
            return false
          }
          return true
        })
      }
    }
  }
}
