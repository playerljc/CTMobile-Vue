import React from 'react';
import CtMobile from "ctmobile-react";

const {Back} = CtMobile;

export default class extends React.Component {
  render() {
    return <Back className="fa fa-chevron-left AppBack"/>
  }
}