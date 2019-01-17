import React, { Component } from "react";
import CSSModules from "react-css-modules";
import style from "./appContainer.less";

import { Route, Link, withRouter, Switch, Redirect } from "react-router-dom";

import Header from "components/header";
import ControlArea from "components/controlArea";

@withRouter
@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "log" })
export default class AppContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    //We can access the redux store via our props. The available variables are defined in mapStateToProps() in this file
    return (
      <div styleName={"main"}>
        <div styleName="spacer" />
        <div styleName="row">
          <div styleName="spacer" />
          <ControlArea/>
          <div styleName="spacer" />
        </div>
        <div styleName="spacer" />
      </div>
    );
  }
}
