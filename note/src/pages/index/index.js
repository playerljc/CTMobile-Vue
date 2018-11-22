import React from 'react';
import CtMobile from "ctmobile-react";
import AppBar from '../../components/appbar';
import SearchBar from '../../components/searchbar';
import FloatingButton from '../../components/flbtn';
import {ListView, WaterfallView} from '../../components/view';
import DAO from '../../util/DAO';

import './index.less';

class Index extends CtMobile.Page.WrappedPage {

  constructor(props) {
    super(props);

    this.state = {
      type: 'waterfall',
      data: [],
    }
  }

  componentDidMount() {
    super.componentDidMount(...arguments);
    this.appViewEl.addEventListener('animationend', () => {
      this.appViewEl.classList.remove('anm1');
    });
  }

  pageCreate() {
    DAO.getListData().then((data) => {
      this.setState({
        data: Array.from(data.rows),
      })
    });
  }

  /**
   * @override
   */
  pageResult(e, resultCode, bundle) {
    if (resultCode !== 'add' && resultCode !== 'update') return false;
    if (!bundle) return false;

    if (resultCode === 'add') {
      let data = [bundle].concat(this.state.data);
      this.setState({
        data
      }, () => {
        this.appViewEl.scrollTop = 0;
      });
    } else if (resultCode === 'update') {
      let data = JSON.parse(JSON.stringify(this.state.data));
      const index = data.findIndex((t) => {
        return t.id === bundle.id;
      });
      if (index !== -1) {
        data[index] = bundle;
        this.setState({
          data
        });
      }
    }

  }

  onViewType = () => {
    this.setState({
      type: this.state.type === 'waterfall' ? 'list' : 'waterfall'
    }, () => {
      console.log('改变了类型');
      this.appViewEl.classList.add('anm1');
    });
  };

  onNotePad = () => {
    this.props.ctmobile.startPage('#notepad?pageId=notepad');
  };

  render() {
    console.log('render');
    const {data} = this.state;
    return (
      <React.Fragment>
        <div className="App">
          <AppBar type={this.state.type} onNotePad={this.onNotePad} onViewType={this.onViewType}/>
          <SearchBar/>
          <div className="AppView" ref={(appViewEl) => {
            this.appViewEl = appViewEl;
          }}>
            {this.state.type === 'waterfall' ? <WaterfallView data={data} page={this}/> :
              <ListView data={data} page={this}/>}
          </div>
          <FloatingButton onClick={() => {
            this.props.parent.setRequest('add', 'add');
            this.props.ctmobile.startPage('#saveorupdate?pageId=saveorupdate');
          }}/>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;