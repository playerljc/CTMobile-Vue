import React from 'react';
import './index.less';

export default class extends React.Component {
  render() {
    return (
      <div className="fa fa-plus flbtn" onClick={this.props.onClick}/>
    );
  }
}