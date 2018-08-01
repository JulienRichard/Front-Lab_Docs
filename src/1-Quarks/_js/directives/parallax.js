/*******************************************************************
  PARALLAX DIRECTIVE
  from https://github.com/jsnanigans/vue-parallax-js
********************************************************************/
const VueParallaxJs = function (os) {
  this.os = os
}

VueParallaxJs.prototype = {
  items: [],
  active: true,

  tProp: window.transformProp || (function () {
    const testEl = document.createElement('div')
    if (testEl.style.transform == null) {
      const vs = ['Webkit', 'Moz', 'ms']
      const t = 'Transform'
      for (const v of vs) {
        if (testEl.style[ v + t ] !== undefined) {
          return v + t
        }
      }
    }
    return 'transform'
  })(),

  add (el, binding) {
    const value = binding.value
    const arg = binding.arg
    const style = el.currentStyle || window.getComputedStyle(el)
    const mod = binding.modifiers

    if (style.display === 'none') return

    const height = mod.absY ? window.innerHeight : el.clientHeight || el.scrollHeight

    const cl = this.os.className
    if (typeof cl === 'string') {
      el.className = `${el.className} ${cl}`.trim()
    }

    this.items.push({
      el: el,
      iOT: el.offsetTop + el.offsetParent.offsetTop - parseInt(style.marginTop),
      style,
      value,
      arg,
      mod,
      height,
      count: 0
    })
  },
  update () {
    this.items.forEach(function (item) {
      let t = item.el
      let n = t.currentStyle || window.getComputedStyle(t)
      item.height = item.mod.absY ? window.innerHeight : t.clientHeight || t.scrollHeight
      item.iOT = t.offsetTop + t.offsetParent.offsetTop - parseInt(n.marginTop)
    })
  },
  move () {
    if (!this.active) return
    if (window.innerWidth < this.os.minWidth || 0) {
      this.items.forEach((item) => {
        item.el.style[this.tProp] = ``
      })

      return
    }

    const sT = window.scrollY || window.pageYOffset
    const wH = window.innerHeight

    this.items.forEach((item) => {
      const elH = item.height
      const offset = item.iOT * -1 * item.value
      const pos = (((sT + wH) - (elH / 2) - (wH / 2)) * item.value) + offset

      window.requestAnimationFrame(() => {
        const cx = item.mod.centerX ? '-50%' : '0px'
        const props = `translate3d(${cx},${pos.toFixed(3)}px,0px)`
        item.el.style[this.tProp] = props
      })
    })
  }
}

export default {
  install (Vue, os = {}) {
    var p = new VueParallaxJs(os)

    window.addEventListener('scroll', () => {
      p.move(p)
    }, { passive: true })
    window.addEventListener('resize', () => {
      p.update()
      p.move(p)
    }, { passive: true })

    Vue.prototype.$parallaxjs = p
    window.$parallaxjs = p
    Vue.directive('parallax', {
      bind (el, binding) {
      },
      inserted (el, binding) {
        p.add(el, binding)
        p.move(p)
      }
    })
  }
}
