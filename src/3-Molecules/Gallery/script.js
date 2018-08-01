import 'blueimp-gallery/js/blueimp-gallery-fullscreen'
import 'blueimp-gallery/js/blueimp-gallery-video'
import 'blueimp-gallery/js/blueimp-gallery-youtube'

import blueimp from 'blueimp-gallery/js/blueimp-gallery'

export default {
  props: {
    images: {
      type: Array,
      default () {
        return []
      }
    },
    options: {
      type: Object,
      default () {
        return {}
      }
    },
    carousel: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number
    },
    id: {
      type: String,
      default: 'blueimp-gallery'
    }
  },
  data () {
    return {
      instance: null
    }
  },
  watch: {
    index (value) {
      if (this.carousel) {
        return
      }
      if (value !== null) {
        this.open(value)
      } else {
        if (this.instance) {
          this.instance.close()
        }
        this.$emit('close')
      }
    }
  },
  mounted () {
    if (this.carousel) {
      this.open()
    }
  },
  destoryed () {
    this.instance.close()
    this.instance = null
  },
  methods: {
    open (index = 0) {
      const instance = typeof blueimp.Gallery !== 'undefined' ? blueimp.Gallery : blueimp
      const options = Object.assign({
        toggleControlsOnReturn: false,
        toggleControlsOnSlideClick: false,
        closeOnSlideClick: false,
        carousel: this.carousel,
        container: `#${this.id}`,
        index,
        onopen: () => this.$emit('onopen'),
        onopened: () => this.$emit('onopened'),
        onslide: (index, slide) => this.$emit('onslide', { index, slide }),
        onslideend: (index, slide) => this.$emit('onslideend', { index, slide }),
        onslidecomplete: (index, slide) => this.$emit('onslidecomplete', { index, slide }),
        onclose: () => this.$emit('close'),
        onclosed: () => this.$emit('onclosed')
      }, this.options)
      if (this.carousel) {
        options.container = this.$el
      }
      this.instance = instance(this.images, options)
    }
  }
}
