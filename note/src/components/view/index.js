import ListView from './list.vue';
import WaterfallView from './waterfall.vue';

export default {
  props: {
    type: {
      type: String,
      require: true,
    },
    data: {
      type: Array,
      require: true
    }
  },
  components: {
    ListView,
    WaterfallView
  }
}