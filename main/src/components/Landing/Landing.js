import React, {Component} from 'react';
import * as authActions from '../../action/auth-actions';
import {Link} from 'react-router-dom';
import {AuthForm} from '../AuthForm/AuthForm';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import { Grid } from "@material-ui/core";

class Landing extends Component {

  handleSignUp = user => {
    return this.props.pDoSignUp(user);
  };

  handleSignIn = (user) => {
    return this.props.pDoSignIn(user.username, user.password);
  };

  render() {
    const signIn =
      <Grid container={true} direction='row' justify='space-evenly' alignItems='center' spacing={0}>
        <div>
            <Card item style={{width: '240px', margin: 'auto'}}>
              <CardContent>
                <Grid container={true} direction='column' justify='space-evenly' alignItems='center' alignContent='center' spacing={0} >
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
    ;

    const signUp =
      <Grid container={true} direction='column' justify='center' alignItems='center' spacing={0} >
        <div>
          <Card style={{width: '240px', margin: 'auto'}}>
            <CardContent>
              <Grid container={true} direction='column' justify='space-evenly' alignItems='center' spacing={0} >
                <Grid item >
                  <h2>Sign Up</h2>
                </Grid>
                <Grid item>
                  <AuthForm type='signup' onComplete={this.handleSignUp}/>
                </Grid>
                <Grid style={{marginTop: '10px'}}>
                  <Link to='/'>Have an Account? Click here to login</Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      </Grid>
    ;

    const {location} = this.props;
    return(
      <div>
        <nav>
          {location.pathname === '/' ? signIn : undefined}
          {location.pathname === '/signup' ? signUp : undefined}
        </nav>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  pDoSignUp: user => {
    return dispatch(authActions.signupRequest(user));
  },
  pDoSignIn: (username, password) => {
    return dispatch(authActions.signinRequest(username, password))
  }
});

export default connect(null, mapDispatchToProps)(Landing)
