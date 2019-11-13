export default {
  name: 'Card',
  props: {
    labels: Object,
    fields: Object,
    isCardNumberMasked: Boolean,
    randomBackgrounds: {
      type: Boolean,
      default: true
    },
    backgroundImage: [String, Object]
  },
  data () {
    return {
      focusElementStyle: null,
      currentFocus: null,
      isFocused: false,
      isCardFlipped: false,
      amexCardPlaceholder: '#### ###### #####',
      dinersCardPlaceholder: '#### ###### ####',
      defaultCardPlaceholder: '#### #### #### ####',
      currentPlaceholder: ''
    }
  },
  watch: {
    currentFocus () {
      if (this.currentFocus) {
        this.changeFocus()
      } else {
        this.focusElementStyle = null
      }
    },
    cardType () {
      this.changePlaceholder()
    }
  },
  mounted () {
    this.changePlaceholder()

    let self = this
    let fields = document.querySelectorAll('[data-card-field]')
    fields.forEach(element => {
      element.addEventListener('focus', () => {
        this.isFocused = true
        if (element.id === this.fields.cardYear || element.id === this.fields.cardMonth) {
          this.currentFocus = 'cardDate'
        } else {
          this.currentFocus = element.id
        }
        this.isCardFlipped = element.id === this.fields.cardCvv
      })
      element.addEventListener('blur', () => {
        this.isCardFlipped = !element.id === this.fields.cardCvv
        setTimeout(() => {
          if (!self.isFocused) {
            self.currentFocus = null
          }
        }, 300)
        self.isFocused = false
      })
    })
  },
  computed: {
    cardType () {
      let number = this.labels.cardNumber
      let re = new RegExp('^4')
      if (number.match(re) != null) return 'visa'

      re = new RegExp('^(34|37)')
      if (number.match(re) != null) return 'amex'

      re = new RegExp('^5[1-5]')
      if (number.match(re) != null) return 'mastercard'

      re = new RegExp('^6011')
      if (number.match(re) != null) return 'discover'

      re = new RegExp('^62')
      if (number.match(re) != null) return 'unionpay'

      re = new RegExp('^9792')
      if (number.match(re) != null) return 'troy'

      re = new RegExp('^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}')
      if (number.match(re) != null) return 'dinersclub'

      re = new RegExp('^35(2[89]|[3-8])')
      if (number.match(re) != null) return 'jcb'

      return '' // default type
    },
    currentCardBackground () {
      if (this.randomBackgrounds && !this.backgroundImage) { // TODO will be optimized
        let random = Math.floor(Math.random() * 25 + 1)
        return `https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${random}.jpeg`
      } else if (this.backgroundImage) {
        return this.backgroundImage
      } else {
        return null
      }
    }
  },
  methods: {
    changeFocus () {
      let target = this.$refs[this.currentFocus]
      this.focusElementStyle = target ? {
        width: `${target.offsetWidth}px`,
        height: `${target.offsetHeight}px`,
        transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`
      } : null
    },
    getIsNumberMasked (index, n) {
      return index > 4 && index < 14 && this.labels.cardNumber.length > index && n.trim() !== '' && this.isCardNumberMasked
    },
    changePlaceholder () {
      if (this.cardType === 'amex') {
        this.currentPlaceholder = this.amexCardPlaceholder
      } else if (this.cardType === 'dinersclub') {
        this.currentPlaceholder = this.dinersCardPlaceholder
      } else {
        this.currentPlaceholder = this.defaultCardPlaceholder
      }
      this.$nextTick(() => {
        this.changeFocus()
      })
    }
  }
}