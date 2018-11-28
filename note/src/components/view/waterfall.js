export default {
  props: {
    data: {
      type: Array,
      require: true
    }
  },
  inject: ['getPage'],
  methods: {
    computeData: function(index){
      let result = [];
      for (let i = index; i < this.data.length; i = i + 2) {
        result.push(this.data[i]);
      }

      return result;
    },
    onItemClick: function(item) {
      this.getPage().$parent.setRequest('update', item);
      this.getPage().$parent.ctmobile.startPage(`#saveorupdate?pageId=saveorupdate&id=${item.id}`);
    }
  }
}