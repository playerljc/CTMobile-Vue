import React from 'react';

import CtMobile from "ctmobile-react";

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
          <p className="ct-header-title">启动模式</p>
        </header>
        <div className="ct-content" style={{top: '3rem', bottom: 0}}>
          <ul>
            <li><Link class="link" pageId="startmode_standard">standard(多例)</Link></li>
            <li><Link class="link" pageId="startmode_single">single(单例)</Link></li>
            <li><Link class="link" pageId="startmode_singleInstance">singleInstance(完全单例)</Link></li>
            <li><Link class="link" pageId="startmode_result">result(带有返回值的，可以向父页面带回返回值)</Link></li>
            <li><Link class="link" pageId="startmode_singleInstanceResult">singleInstanceResult(带有返回值的完全单例(不会被销毁，可以向父页面带回返回值))</Link></li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}