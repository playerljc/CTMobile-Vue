import DAO from '../../util/DAO';

export default {
  data: () => {
    return {
      type: 'waterfall',
      data: [],
    }
  },
  provide: function () {
    return {
      getPage: this.getPage
    }
  },
  mounted() {
    this.$refs.appViewEl.addEventListener('animationend', () => {
      this.$refs.appViewEl.classList.remove('anm1');
    });
  },
  methods: {
    getPage() {
      return this;
    },
    pageCreate() {
      DAO.getListData().then((data) => {
        this.data = Array.from(data.rows);
      });
    },
    /**
     * @override
     */
    pageResult(e, resultCode, bundle) {
      if (resultCode !== 'add' && resultCode !== 'update') return false;
      if (!bundle) return false;

      if (resultCode === 'add') {
        let data = [bundle].concat(this.data);
        this.data = data;
        this.$refs.appViewEl.scrollTop = 0;
      } else if (resultCode === 'update') {
        let data = JSON.parse(JSON.stringify(this.data));
        const index = data.findIndex((t) => {
          return t.id === bundle.id;
        });
        if (index !== -1) {
          data[index] = bundle;
          this.data = data;
        }
      }
    },
    onFloatingClick() {
      this.$parent.setRequest('add', 'add');
      this.$parent.ctmobile.startPage('#saveorupdate?pageId=saveorupdate');
    },
    onNotePad() {
      this.$parent.ctmobile.startPage('#notepad?pageId=notepad');
    },
    onViewType() {
      this.type = this.type === 'waterfall' ? 'list' : 'waterfall';
      console.log('改变了类型');
      this.$refs.appViewEl.classList.add('anm1');
    }
  }
}