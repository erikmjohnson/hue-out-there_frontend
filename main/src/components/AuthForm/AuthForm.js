import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/styles';
import * as lightAction from "../../action/light-action";
import { connect } from "react-redux";

const LoginButton = styled(Button)({
  background: 'purple',
  fontSize: '1.25em',
  width: '65%',
  variant: 'contained',
  direction:'column',
  justify:'center',
  alignContent:'center',
  marginTop: '10%',
  color:'black',
});

class AuthForm extends Component {
  state = { username: '', password: '' };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name] : value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({username: '', password: ''});
    this.props.mappedLights();
  };

  render() {
    let { type } = this.props;
    type = type === 'signin' ? 'signin' : 'signup';

    return(
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid>
          <form onSubmit={this.handleSubmit}>
            <Grid>
              <TextField
                variant='filled'
                name='username'
                label='username'
                type='text'
                value={this.state.username}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid>
              <TextField
                variant='filled'
                name='password'
                label='password'
                type='password'
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Grid>
            <LoginButton type='submit'>{ type }</LoginButton>
          </form>
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    mappedLights: () => {
      dispatch(lightAction.light());
    }
  }
};

export default connect(null, mapDispatchToProps)(AuthForm)
