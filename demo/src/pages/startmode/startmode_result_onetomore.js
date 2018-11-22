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

  /**
   * @override
   */
  pageResult(e, resultCode, bundle) {
    console.log("resultCode", resultCode, "bundle", JSON.stringify(bundle));
    alert(`resultCode:${resultCode}\r\nbundle:${JSON.stringify(bundle)}`);
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <Back className="ct-back-icon"/>
          <p className="ct-header-title">startmode_result_onetomore</p>
        </header>
        <div className="ct-content" style={{top: '3rem', bottom: 0}}>
          <ul>
            <li><a className="link" onClick={() => {
              this.props.parent.setRequest("startmode_result_opendialog");
              this.props.parent.getCtMobile().startPage('#startmode_result_opendialog?pageId=startmode_result_opendialog');
            }}>打开startmode_result_opendialog</a></li>
            <li><a className="link" onClick={() => {
              this.props.parent.setRequest("startmode_result_opendialog2");
              this.props.parent.getCtMobile().startPage('#startmode_result_opendialog?pageId=startmode_result_opendialog2');
            }}>打开startmode_result_opendialog2</a></li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}