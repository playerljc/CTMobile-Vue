import React from 'react';
import CtMobile from "@ctmobile/react";
import {AppLayout, AppHeader, AppContent, AppBack} from '../../components/layout';
import DAO from '../../util/DAO';
import './index.less';

export default class extends CtMobile.Page.WrappedPage {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  pageCreate() {
    DAO.count().then((data) => {
      this.setState({
        count: data.rows[0].count
      })
    });
  }

  render() {
    return (
      <React.Fragment>
        <AppLayout className="notepad">
          <AppHeader>
            <div className="TextBack">
              <AppBack/>
              <span className="text">便签夹</span>
            </div>
          </AppHeader>
          <AppContent className="notepadContent">
            <ul>
              <li onClick={() => {
                this.props.parent.over();
              }}>
                <span>...&nbsp;随手记</span>
                <span>{this.state.count}</span>
              </li>
            </ul>
          </AppContent>
        </AppLayout>
      </React.Fragment>
    );
  }
};