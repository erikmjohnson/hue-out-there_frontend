import React, { Component } from 'react';
import * as authActions from '../../action/auth-actions';
import { Link } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import { Grid } from "@material-ui/core";

class SignUp extends Component {

  handleSignUp = user => {
    return this.props.mappedSignUp(user);
  };

  render() {
    return(
      <Grid container direction='column' justify='center' alignItems='center' spacing={ 0 } >
        <div>
          <Card style={{ width: '240px', margin: 'auto' }}>
            <CardContent>
              <Grid container direction='column' justify='space-evenly' alignItems='center' spacing={ 0 } >
                <Grid item >
                  <h2>Sign Up</h2>
                </Grid>
                <Grid item>
                  <AuthForm type='signup' onComplete={ this.handleSignUp }/>
                </Grid>
                <Grid style={{ marginTop: '10px' }}>
                  <Link to='/'>Have an Account? Click here to login</Link>
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
  mappedSignUp: user => {
    return dispatch(authActions.signupRequest(user));
  }
});

export default connect(null, mapDispatchToProps)(SignUp)
