import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { Grid } from "@material-ui/core";
import AuthForm from "../AuthForm/AuthForm";
import { Link } from "react-router-dom";
import * as authActions from "../../action/auth-actions";
import { connect } from "react-redux";
import CardContent from "@material-ui/core/CardContent";

class SignIn extends Component {

  handleSignIn = (user) => {
    return this.props.mappedSignIn(user.username, user.password);
  };

  render() {
    return(
      <Grid container direction='row' justify='space-evenly' alignItems='center' spacing={0}>
        <div>
          <Card item style={{width: '240px', margin: 'auto'}}>
            <CardContent>
              <Grid container direction='column' justify='space-evenly' alignItems='center' alignContent='center' spacing={0} >
                <Grid item>
                  <h2>Login</h2>
                </Grid>
                <Grid item>
                  <AuthForm type='signin' onComplete={this.handleSignIn}/>
                </Grid>
                <Grid style={{marginTop: '10px'}}>
                  <Link to='/signup'>New user? Click here to sign up</Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  mappedSignIn: (username, password) => {
    return dispatch(authActions.signinRequest(username, password))
  }
});

export default connect(null, mapDispatchToProps)(SignIn);
