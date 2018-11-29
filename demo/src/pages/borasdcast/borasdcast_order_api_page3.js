<<<<<<< HEAD
import React from 'react';

import CtMobile from "@ctmobile/react";

const {Link, Back} = CtMobile;

export default class extends CtMobile.Page.WrappedPage {
  constructor(props) {
    super(props);
  }

  /**
   * 页面创建调用
   * @callback
   * @override
   * @param {Object} e
   */
  pageCreate(e) {
    this.onRegisterReceiver = this.onRegisterReceiver.bind(this);

    // 注册borasdcast
    this.props.ctmobile.registerReceiver({
      el: this.props.parent.getPageDOM(),
      action: 'borasdcast_order_api',
      priority: 2,
      categorys: []
    }, this.onRegisterReceiver);
  }

  onRegisterReceiver(intent, nextOpt) {
    alert(JSON.stringify(intent));
    nextOpt.putExtras({
      ext3: 'ext3',
    });
    nextOpt.next();
  }

  /***
   * 页面显示之前
   * @callback
   * @override
   * @param {Object} e
   */
  pageBeforeShow(e) {
    console.log(this.props.id, 'pageBeforeShow');
  }

  /***
   * 页面显示
   * @callback
   * @override
   * @param {Object} e
   */
  pageShow(e) {
    console.log(this.props.id, 'pageShow');
  }

  /***
   *  页面显示之后
   * @callback
   * @override
   * @param {Object} e
   */
  pageAfterShow(e) {
    console.log(this.props.id, 'pageAfterShow');
  }

  /***
   * 页面暂停之前
   * @callback
   * @override
   * @param {Object} e
   */
  pageBeforePause(e) {
    console.log(this.props.id, 'pageBeforePause');
  }

  /***
   * 页面暂停之后
   * @callback
   * @override
   * @param {Object} e
   */
  pageAfterPause(e) {
    console.log(this.props.id, 'pageAfterPause');
  }

  /***
   * 页面恢复之前
   * @callback
   * @override
   * @param {Object} e
   */
  pageBeforeRestore(e) {
    console.log(this.props.id, 'pageBeforeRestore');
  }

  /***
   * 页面恢复
   * @callback
   * @override
   * @param {Object} e
   */
  pageRestore(e) {
    console.log(this.props.id, 'pageRestore');
  }

  /***
   * 页面恢复之后
   * @callback
   * @override
   * @param {Object} e
   */
  pageAfterRestore(e) {
    console.log(this.props.id, 'pageAfterRestore');
  }

  /***
   * 页面DOM销毁之前
   * @callback
   * @override
   * @param {Object} e
   */
  pageBeforeDestroy(e) {
    console.log(this.props.id, 'pageBeforeDestroy');
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <Back className="ct-back-icon"/>
          <p className="ct-header-title">borasdcast_order_api_page3</p>
        </header>
        <div className="ct-content" style={{top: '3rem', bottom: 0}}>
          <ul>
            <li><a className="link" onClick={() => {
              this.props.ctmobile.sendOrderedBroadcast({
                action: 'borasdcast_order_api',
                categorys: [],
                bundle: {
                  a: 1,
                  b: 2
                }
              });
            }}>通知</a></li>
          </ul>
        </div>
      </React.Fragment>
    );
=======
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
    onRegisterReceiver(intent, nextOpt) {
      alert(JSON.stringify(intent));
      nextOpt.putExtras({
        ext3: 'ext3',
      });
      nextOpt.next();
    },
    pageCreate() {
      console.log(`${this.$parent.getId()}:pageCreate`);

      this.onRegisterReceiver = this.onRegisterReceiver.bind(this);

      // 注册borasdcast
      this.$parent.ctmobile.registerReceiver({
        el: this.$parent.getPageDOM(),
        action: 'borasdcast_order_api',
        priority: 2,
        categorys: []
      }, this.onRegisterReceiver);
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
    pageReceiver(bundle, functions) {
      console.log(`${this.$parent.getId()}:pageReceiver`);
    }
>>>>>>> develop
  }
};
