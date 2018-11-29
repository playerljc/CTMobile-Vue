export default {
  beginnewpage: {
    component: import(/* webpackChunkName: "beginnewpage" */ "../pages/beginnewpage/index.vue"),
  },
  beginnewpage_newpage: {
    component: import(/* webpackChunkName: "beginnewpage" */ "../pages/beginnewpage/newpage.vue"),
  },
  'return': {
    component: import(/* webpackChunkName: "return" */ "../pages/return/index.vue"),
  },


  startmode: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/index.vue"),
  },
  startmode_standard: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_standard.vue"),
  },


  startmode_single: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_single.vue"),
    config: {
      mode: 'single'
    }
  },
  startmode_single_page1: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_single_page1.vue")
  },
  startmode_single_page2: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_single_page2.vue")
  },
  startmode_single_page3: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_single_page3.vue")
  },


  startmode_singleInstance: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_singleInstance.vue"),
    config: {
      mode: 'singleInstance'
    }
  },
  startmode_singleInstance_page1: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_singleInstance_page1.vue")
  },
  startmode_singleInstance_page2: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_singleInstance_page2.vue")
  },
  startmode_singleInstance_page3: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_singleInstance_page3.vue")
  },


  startmode_result: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_result.vue"),
    config: {
      mode: 'result'
    }
  },

  startmode_result_moretoone: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_result_moretoone.vue"),
  },
  startmode_result_moretoone_page1: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_result_moretoone_page1.vue"),
  },
  startmode_result_moretoone_page2: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_result_moretoone_page2.vue"),
  },
  startmode_result_opendialog: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_result_opendialog.vue"),
    config: {
      mode: 'result'
    }
  },
  startmode_result_opendialog2: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_result_opendialog2.vue"),
    config: {
      mode: 'result'
    }
  },


  startmode_result_onetomore: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_result_onetomore.vue"),
  },
  startmode_singleInstanceResult: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_singleInstanceResult.vue"),
    config: {
      mode: 'singleInstanceResult'
    }
  },
  startmode_singleInstanceResult_opendialog: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_singleInstanceResult_opendialog.vue"),
    config: {
      mode: 'singleInstanceResult'
    }
  },


  parameter: {
    component: import(/* webpackChunkName: "parameter" */ "../pages/parameter/index.vue"),
  },
  parameter_get: {
    component: import(/* webpackChunkName: "parameter" */ "../pages/parameter/parameter_get.vue"),
  },
  parameter_arm: {
    component: import(/* webpackChunkName: "parameter" */ "../pages/parameter/parameter_arm.vue"),
  },


  transition: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/index.vue"),
  },
  transition_noreload: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_noreload.vue"),
  },
  transition_reload: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_reload.vue"),
  },
  transition_mode: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode.vue"),
  },


  transition_mode_slideleft: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_slideleft.vue"),
    config: {
      transition: 'slideleft'
    }
  },
  transition_mode_slideright: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_slideright.vue"),
    config: {
      transition: 'slideright'
    }
  },
  transition_mode_slideup: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_slideup.vue"),
    config: {
      transition: 'slideup'
    }
  },
  transition_mode_slidedown: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_slidedown.vue"),
    config: {
      transition: 'slidedown'
    }
  },
  transition_mode_wxslideleft: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_wxslideleft.vue"),
    config: {
      transition: 'wxslideleft'
    }
  },
  transition_mode_wxslideright: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_wxslideright.vue"),
    config: {
      transition: 'wxslideright'
    }
  },
  transition_mode_wxslideup: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_wxslideup.vue"),
    config: {
      transition: 'wxslideup'
    }
  },
  transition_mode_wxslidedown: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_wxslidedown.vue"),
    config: {
      transition: 'wxslidedown'
    }
  },
  transition_mode_pushslideleft: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_pushslideleft.vue"),
    config: {
      transition: 'pushslideleft'
    }
  },
  transition_mode_pushslideright: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_pushslideright.vue"),
    config: {
      transition: 'pushslideright'
    }
  },
  transition_mode_pushslideup: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_pushslideup.vue"),
    config: {
      transition: 'pushslideup'
    }
  },
  transition_mode_pushslidedown: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_pushslidedown.vue"),
    config: {
      transition: 'pushslidedown'
    }
  },

  transition_mode_material: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_material.vue"),
    config: {
      transition: 'material'
    }
  },

  borasdcast: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/index.vue"),
  },

  borasdcast_normal: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_normal.vue"),
  },
  borasdcast_normal_api: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_normal_api.vue"),
  },
  borasdcast_normal_api_page1: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_normal_api_page1.vue"),
  },
  borasdcast_normal_api_page2: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_normal_api_page2.vue"),
  },
  borasdcast_normal_config: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_normal_config.vue"),
  },
  borasdcast_normal_config_page1: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_normal_config_page1.vue"),
    config: {
      intentfilterAction: 'borasdcast_normal_config'
    }
  },
  borasdcast_normal_config_page2: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_normal_config_page2.vue"),
    config: {
      intentfilterAction: "borasdcast_normal_config"
    }
  },


  borasdcast_order: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_order.vue"),
  },
  borasdcast_order_api: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_order_api.vue"),
  },
  borasdcast_order_api_page1: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_order_api_page1.vue"),
  },
  borasdcast_order_api_page2: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_order_api_page2.vue"),
  },
  borasdcast_order_api_page3: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_order_api_page3.vue"),
  },

  borasdcast_order_config: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_order_config.vue"),
  },
  borasdcast_order_config_page1: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_order_config_page1.vue"),
    config: {
      intentfilterAction: "borasdcast_order_config",
      intentfilterPriority: 0
    }
  },
  borasdcast_order_config_page2: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_order_config_page2.vue"),
    config: {
      intentfilterAction: "borasdcast_order_config",
      intentfilterPriority: 1
    }
  },
  borasdcast_order_config_page3: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_order_config_page3.vue"),
    config: {
      intentfilterAction: "borasdcast_order_config",
      intentfilterPriority: 2
    }
  },


  common: {
    component: import(/* webpackChunkName: "common" */ "../pages/common/index.vue"),
  },


  index: {
    component: import(/* webpackChunkName: "index" */ "../pages/index/index.vue"),
  },
  // info: {
  //   component: import(/* webpackChunkName: "info" */ "../pages/info/index.vue"),
  //   config: {
  //     mode: 'single',
  //     transition: 'slideleft'
  //   }
  // },
  // about: {
  //   component: import(/* webpackChunkName: "about" */ "../pages/about/index.vue"),
  //   config: {
  //     mode: 'singleInstance',
  //     transition: 'wxslideleft'
  //   }
  // },
};