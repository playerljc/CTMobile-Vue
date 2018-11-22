import React from 'react';
import './list.less';

export default class extends React.Component {
  renderView() {
    let arr = [];
    const {data = []} = this.props;
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      arr.push(
        <li key={i} onClick={() => {
          this.props.page.props.parent.setRequest('update', item);
          this.props.page.props.ctmobile.startPage(`#saveorupdate?pageId=saveorupdate&id=${item.id}`);
        }}>
          <div className="title">{item.title}</div>
          <div className="info">{item.info}</div>
          <div className="time">{item.createTime}</div>
        </li>
      );
    }
    return arr;
  }

  render() {
    return (
      <div className="AppListView">
        <ul>
          {this.renderView()}
        </ul>
      </div>
    );
  }
}