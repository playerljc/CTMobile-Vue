export default {
  index: {
    component: import(/* webpackChunkName: "index" */ "../pages/index"),
  },
  beginnewpage: {
    component: import(/* webpackChunkName: "beginnewpage" */ "../pages/beginnewpage"),
  },
  beginnewpage_newpage: {
    component: import(/* webpackChunkName: "beginnewpage" */ "../pages/beginnewpage/newpage"),
  },
  'return': {
    component: import(/* webpackChunkName: "return" */ "../pages/return"),
  },


  startmode: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode"),
  },
  startmode_standard: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_standard"),
  },


  startmode_single: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_single"),
    config: {
      mode: 'single'
    }
  },
  startmode_single_page1: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_single_page1")
  },
  startmode_single_page2: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_single_page2")
  },
  startmode_single_page3: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_single_page3")
  },


  startmode_singleInstance: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_singleInstance"),
    config: {
      mode: 'singleInstance'
    }
  },
  startmode_singleInstance_page1: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_singleInstance_page1")
  },
  startmode_singleInstance_page2: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_singleInstance_page2")
  },
  startmode_singleInstance_page3: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_singleInstance_page3")
  },


  startmode_result: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_result"),
    config: {
      mode: 'result'
    }
  },

  startmode_result_moretoone: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_result_moretoone"),
  },
  startmode_result_moretoone_page1: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_result_moretoone_page1"),
  },
  startmode_result_moretoone_page2: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_result_moretoone_page2"),
  },
  startmode_result_opendialog: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_result_opendialog"),
    config: {
      mode: 'result'
    }
  },
  startmode_result_opendialog2: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_result_opendialog2"),
    config: {
      mode: 'result'
    }
  },


  startmode_result_onetomore: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_result_onetomore"),
  },
  startmode_singleInstanceResult: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_singleInstanceResult"),
    config: {
      mode: 'singleInstanceResult'
    }
  },
  startmode_singleInstanceResult_opendialog: {
    component: import(/* webpackChunkName: "startmode" */ "../pages/startmode/startmode_singleInstanceResult_opendialog"),
    config: {
      mode: 'singleInstanceResult'
    }
  },


  parameter: {
    component: import(/* webpackChunkName: "parameter" */ "../pages/parameter"),
  },
  parameter_get: {
    component: import(/* webpackChunkName: "parameter" */ "../pages/parameter/parameter_get"),
  },
  parameter_arm: {
    component: import(/* webpackChunkName: "parameter" */ "../pages/parameter/parameter_arm"),
  },


  transition: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition"),
  },
  transition_noreload: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_noreload"),
  },
  transition_reload: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_reload"),
  },
  transition_mode: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode"),
  },


  transition_mode_slideleft: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_slideleft"),
    config: {
      transition: 'slideleft'
    }
  },
  transition_mode_slideright: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_slideright"),
    config: {
      transition: 'slideright'
    }
  },
  transition_mode_slideup: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_slideup"),
    config: {
      transition: 'slideup'
    }
  },
  transition_mode_slidedown: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_slidedown"),
    config: {
      transition: 'slidedown'
    }
  },
  transition_mode_wxslideleft: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_wxslideleft"),
    config: {
      transition: 'wxslideleft'
    }
  },
  transition_mode_wxslideright: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_wxslideright"),
    config: {
      transition: 'wxslideright'
    }
  },
  transition_mode_wxslideup: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_wxslideup"),
    config: {
      transition: 'wxslideup'
    }
  },
  transition_mode_wxslidedown: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_wxslidedown"),
    config: {
      transition: 'wxslidedown'
    }
  },
  transition_mode_pushslideleft: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_pushslideleft"),
    config: {
      transition: 'pushslideleft'
    }
  },
  transition_mode_pushslideright: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_pushslideright"),
    config: {
      transition: 'pushslideright'
    }
  },
  transition_mode_pushslideup: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_pushslideup"),
    config: {
      transition: 'pushslideup'
    }
  },
  transition_mode_pushslidedown: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_pushslidedown"),
    config: {
      transition: 'pushslidedown'
    }
  },

  transition_mode_material: {
    component: import(/* webpackChunkName: "transition" */ "../pages/transition/transition_mode_material"),
    config: {
      transition: 'material'
    }
  },

  borasdcast: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast"),
  },

  borasdcast_normal: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_normal"),
  },
  borasdcast_normal_api: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_normal_api"),
  },
  borasdcast_normal_api_page1: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_normal_api_page1"),
  },
  borasdcast_normal_api_page2: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_normal_api_page2"),
  },
  borasdcast_normal_config: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_normal_config"),
  },
  borasdcast_normal_config_page1: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_normal_config_page1"),
    config: {
      intentfilterAction: 'borasdcast_normal_config'
    }
  },
  borasdcast_normal_config_page2: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_normal_config_page2"),
    config: {
      intentfilterAction: "borasdcast_normal_config"
    }
  },


  borasdcast_order: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_order"),
  },
  borasdcast_order_api: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_order_api"),
  },
  borasdcast_order_api_page1: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_order_api_page1"),
  },
  borasdcast_order_api_page2: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_order_api_page2"),
  },
  borasdcast_order_api_page3: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_order_api_page3"),
  },

  borasdcast_order_config: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_order_config"),
  },
  borasdcast_order_config_page1: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_order_config_page1"),
    config: {
      intentfilterAction: "borasdcast_order_config",
      intentfilterPriority: 0
    }
  },
  borasdcast_order_config_page2: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_order_config_page2"),
    config: {
      intentfilterAction: "borasdcast_order_config",
      intentfilterPriority: 1
    }
  },
  borasdcast_order_config_page3: {
    component: import(/* webpackChunkName: "borasdcast" */ "../pages/borasdcast/borasdcast_order_config_page3"),
    config: {
      intentfilterAction: "borasdcast_order_config",
      intentfilterPriority: 2
    }
  },


  common: {
    component: import(/* webpackChunkName: "common" */ "../pages/common"),
  }






  /*,
  info: {
    component: import(/!* webpackChunkName: "info" *!/ "../pages/info"),
    config: {
      mode: 'single',
      transition: 'slideleft'
    }
  },
  about: {
    component: import(/!* webpackChunkName: "about" *!/ "../pages/about"),
    config: {
      mode: 'singleInstance',
      transition: 'wxslideleft'
    }
  },*/
};