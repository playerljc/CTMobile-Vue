export default {
  props: {
    data: {
      type: Array,
      require: true
    },
    page: {
      type: Object,
      require: true
    }
  },
  methods: {
    computeData: (index) => {
      let result = [];
      for (let i = index; i < this.data.length; i = i + 2) {
        result.push(this.data[index]);
      }

      return result;
    },
    onItemClick: (item) => {
      this.page.$parent.setRequest('update', item);
      this.page.$parent.ctmobile.startPage(`#saveorupdate?pageId=saveorupdate&id=${item.id}`);
    }
  }
}