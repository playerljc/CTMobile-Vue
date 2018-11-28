export default {
  props: {
    _pDom: {
      type: HTMLDivElement,
      require: true,
    },
    pageId: {
      type: String,
      require: true,
      value: ''
    }
  },
  data: () => {
    return {};
  },
  created() {

  },
  mounted() {

  },
  methods: {
    pageCreate() {
      console.log(`${this.$parent.getId()}:pageCreate`);
    },

    /***
     * 页面显示之前
     * @callback
     * @override
     * @param {Object} e
     */
    pageBeforeShow(e) {
      console.log(`${this.$parent.getId()}:pageBeforeShow`);
    },

    /***
     * 页面显示
     * @callback
     * @override
     * @param {Object} e
     */
    pageShow(e) {
      console.log(`${this.$parent.getId()}:pageShow`);
    },

    /***
     *  页面显示之后
     * @callback
     * @override
     * @param {Object} e
     */
    pageAfterShow(e) {
      console.log(`${this.$parent.getId()}:pageAfterShow`);
    },

    /***
     * 页面暂停之前
     * @callback
     * @override
     * @param {Object} e
     */
    pageBeforePause(e) {
      console.log(`${this.$parent.getId()}:pageBeforePause`);
    },

    /***
     * 页面暂停之后
     * @callback
     * @override
     * @param {Object} e
     */
    pageAfterPause(e) {
      console.log(`${this.$parent.getId()}:pageAfterPause`);
    },

    /***
     * 页面恢复之前
     * @callback
     * @override
     * @param {Object} e
     */
    pageBeforeRestore(e) {
      console.log(`${this.$parent.getId()}:pageBeforeRestore`);
    },

    /***
     * 页面恢复
     * @callback
     * @override
     * @param {Object} e
     */
    pageRestore(e) {
      console.log(`${this.$parent.getId()}:pageRestore`);
    },

    /***
     * 页面恢复之后
     * @callback
     * @override
     * @param {Object} e
     */
    pageAfterRestore(e) {
      console.log(`${this.$parent.getId()}:pageAfterRestore`);
    },

    /***
     * 页面DOM销毁之前
     * @callback
     * @override
     * @param {Object} e
     */
    pageBeforeDestroy(e) {
      console.log(`${this.$parent.getId()}:pageBeforeDestroy`);
    },

    /***
     * pageResult
     * @callback
     * @override
     * @param {Object} e - jQuery的event
     * @param {string} resultCode - 返回的code
     * @param {Object} bundle - 返回的参数
     */
    pageResult(e, resultCode, bundle) {
      console.log(`${this.$parent.getId()}:pageResult`);
    },

    /***
     * 如果添加了ct-data-intentfilter-action属性，满足条件后触发
     * @callback
     * @override
     * @param {Object} bundle
     * @param {Object} functions
     */
    pageReceiver(intent) {
      console.log(`${this.$parent.getId()}:pageReceiver`);
      alert(JSON.stringify(intent));
    }
  }
};
