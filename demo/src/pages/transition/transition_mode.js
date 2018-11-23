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
    console.log(this.props.id, 'pageCreate');
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
          <p className="ct-header-title">transition_mode</p>
        </header>
        <div className="ct-content" style={{top: '3rem', bottom: 0}}>
          <ul>
            <li><Link className="link" pageId="transition_mode_slideleft">slideleft从右到左(overlay)</Link></li>
            <li><Link className="link" pageId="transition_mode_slideright">slideright从左到右(overlay)</Link></li>
            <li><Link className="link" pageId="transition_mode_slideup">slideup从下到上(overlay)</Link></li>
            <li><Link className="link" pageId="transition_mode_slidedown">slidedown从上到下(overlay)</Link></li>
            <li><Link className="link" pageId="transition_mode_wxslideleft">wxslideleft类似于微信的从右到左</Link></li>
            <li><Link className="link" pageId="transition_mode_wxslideright">wxslideright类似于微信的从左到右</Link></li>
            <li><Link className="link" pageId="transition_mode_wxslideup">wxslideup类似于微信的从下到上</Link></li>
            <li><Link className="link" pageId="transition_mode_wxslidedown">wxslidedown类似于微信的从上到下</Link></li>
            <li><Link className="link" pageId="transition_mode_pushslideleft">pushslideleft从右到左(push)</Link></li>
            <li><Link className="link" pageId="transition_mode_pushslideright">pushslideright从左到右(push)</Link></li>
            <li><Link className="link" pageId="transition_mode_pushslideup">pushslideup从下到上(push)</Link></li>
            <li><Link className="link" pageId="transition_mode_pushslidedown">pushslidedown从上到下(push)</Link></li>
            <li><Link className="link" pageId="transition_mode_material">material(缺省)AndroidMaterial的风格</Link></li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}