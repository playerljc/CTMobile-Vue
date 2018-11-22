export default {
  index: {
    component: import(/* webpackChunkName: "index" */ "../pages/index"),
  },
  saveorupdate: {
    component: import(/* webpackChunkName: "index" */ "../pages/saveorupdate"),
    config: {
      transition: 'pushslideright',
      mode: 'result'
    }
  },
  notepad: {
    component: import(/* webpackChunkName: "index" */ "../pages/notepad"),
    config: {
      transition: 'wxslideright',
    }
  }
};