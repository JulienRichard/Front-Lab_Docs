<script>
import { each, inArray } from '../../1-Quarks/_js/helpers/utils'

export default {
  name: 'buttons-group-check',
  props: {
    value: {
      type: Array,
      default: () => []
    },
    group: {
      type: Boolean,
      default: true
    }
  },
  render (h) {
    // override button props
    each(this.$slots.default, node => {
      if (node.componentOptions) {
        const button = node.componentOptions.propsData
        button.ariaType = 'checked'
        button.active = inArray(this.value, button.value)
      }
    })
    return (
      <div class={{
        'button-group': this.group
      }}>{
        this.$slots.default
      }</div>
    )
  },
  mounted () {
    each(this.$children, button => {
      button.$el.addEventListener('click', () => this.toggle(button))
    })
  },
  methods: {
    toggle (selected) {
      // recreate new value respecting buttons order
      const value = this.$children
        .filter(button => button === selected
          ? !button.active
          : button.active)
        .map(button => button.value)
      this.$emit('change', value)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "styles.scss";
</style>
