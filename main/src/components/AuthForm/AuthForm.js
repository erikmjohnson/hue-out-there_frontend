import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/styles';

const LoginButton = styled(Button)({
  background: 'red',
  background: '-webkit-linear-gradient(left, orange , yellow, green, cyan, blue, violet)',
  background: '-o-linear-gradient(right, orange, yellow, green, cyan, blue, violet)',
  background: '-moz-linear-gradient(right, orange, yellow, green, cyan, blue, violet)',
  background: 'linear-gradient(to right, orange , yellow, green, cyan, blue, violet)',
//   webkit-background-clip: text,
//  webkit-text-fill-color: transparent,
  fontSize: '20%',
});

export class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name] : value});
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({username: '', password: ''});
  };

  render() {
    let {type} = this.props;
    type = type === 'signin' ? 'signin' : 'signup';

    return(
      <Grid container={true} direction='column' justify='center' alignItems='center'>
        <Grid item>
          <form onSubmit={this.handleSubmit}>
            <Grid item>
              <TextField
                variant='filled'
                name='username'
                label='username'
                type='text'
                value={this.state.username}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item>
              <TextField
                variant='filled'
                name='password'
                label='password'
                type='password'
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid style={{marginTop: '10%'}} container={true} direction='column' justify='center' alignContent='center'>
              <LoginButton type='submit'>{type}</LoginButton>
            </Grid>
          </form>
        </Grid>
      </Grid>
    );
  }
}
