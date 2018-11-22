import React from 'react';
import './index.less';

export default class extends React.Component {
  render() {
    return (
      <div className="searchBar">
        <div className="searchBar-inner">
          <i className="fa fa-search"/>
          <input type="search" />
        </div>
      </div>
    );
  }
}