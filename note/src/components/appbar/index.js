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
    classObject: function () {
      return {
        'fa': true,
        'fa-list': this.type === 'waterfall',
        'fa-th-large': this.type !== 'waterfall',
        'AppBar-viewTyppe': true
      }
    }
  }
};