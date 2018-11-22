import React from 'react';
import './index.less';

export default class extends React.Component {
  render() {
    return (
      <div className="AppBar">
        <div className="fa fa-folder-o AppBar-pad" onClick={this.props.onNotePad}/>
        <div className="AppBar-title">便签</div>
        <div className={`fa ${this.props.type === 'waterfall' ? 'fa-list' : 'fa fa-th-large'} AppBar-viewTyppe`} onClick={this.props.onViewType}/>
      </div>
    );
  }
}