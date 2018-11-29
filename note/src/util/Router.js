export default {
  index: {
    component: import(/* webpackChunkName: "index" */ "../pages/index/index.vue"),
  },
  saveorupdate: {
    component: import(/* webpackChunkName: "index" */ "../pages/saveorupdate/index.vue"),
    config: {
      transition: 'pushslideright',
      mode: 'result'
    }
  },
  notepad: {
    component: import(/* webpackChunkName: "index" */ "../pages/notepad/index.vue"),
    config: {
      transition: 'wxslideright',
    }
  }
};