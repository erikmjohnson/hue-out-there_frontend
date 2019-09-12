import React, { Component } from 'react';
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

export default class Landing extends Component {

  render() {
    const { location } = this.props;

    return(
      <div>
        { location.pathname === '/' ? <SignIn/> : undefined }
        { location.pathname === '/signup' ? <SignUp/> : undefined }
      </div>
    );
  }
}
