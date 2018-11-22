import React from 'react';
import './waterfall.less';

/**
 * 两列
 * 一个单元格显示5行...
 * 前两行黑色字体
 * 后三行灰色字体
 * 最后一行是时间
 */
export default class extends React.Component {
  renderWaterfall(index) {
    const {data} = this.props;
    let arr = [];
    for (let i = index; i < data.length; i = i + 2) {
      const item = data[i];
      arr.push(
        <li key={i} onClick={() => {
          this.props.page.props.parent.setRequest('update', item);
          this.props.page.props.ctmobile.startPage(`#saveorupdate?pageId=saveorupdate&id=${item.id}`);
        }}>
          <a>
            <div className="title">{item.title}</div>
            <div className="info">{item.info}</div>
            <div className="createTime">{item.createTime}</div>
          </a>
        </li>
      );
    }
    return arr;
  }

  render() {
    return (
      <div className="AppWaterfallView">
        <ul className="AppWaterfallViewColumn">{this.renderWaterfall(0)}</ul>
        <ul className="AppWaterfallViewColumn">{this.renderWaterfall(1)}</ul>
      </div>
    );
  }
}