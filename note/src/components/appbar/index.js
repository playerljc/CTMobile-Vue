export default {
  props: {
    type: {
      type: String,
      require: true,
    },
    onNotePad: {
      type: Function,
      require: true,
    },
    onViewType: {
      type: Function,
      require: true
    }
  },
  computed: {
    classObject: () => {
      return {
        'fa': true,
        'AppBar-viewTyppe': true,
        'fa-list': this.type === 'waterfall',
        'fa-th-large': this.type !== 'waterfall'
      }
    }
  }
};