import superagent from 'superagent';
import React, { Component } from 'react';
import './_LightInterface.scss';
import IncandescentOutlined from '@material-ui/icons/WbIncandescentOutlined';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { styled } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const API_URL = 'http://localhost:3001/';
// const GROUP = `lightgroup/`;
const LIGHT = 'light/';

const LightButton = styled(ToggleButton)({
  background: 'purple',
  color: 'blue',
  border: 'none',
  margin: 5,
  borderRadius: 10,
});

export class LightInterface extends Component {

  light = (id, command) => {
    return superagent.get(`${API_URL}${LIGHT}${id}/${command}`)
      .catch(err => console.log(err));
  };

  test2 = () =>{
    console.log(this.props.lightState);
  };

  render() {
    return (
      <div>
        <h1>Light Settings</h1>
        <ul>
          <li>
            <button onClick={this.test2}>Light Store</button>
          </li>
          <li>
                <LightButton value="allLights">
                  <IncandescentOutlined  />
                  All Lights
                </LightButton>
          </li>
          <li>
                <LightButton value="1">
                  <IncandescentOutlined />
                  1
                </LightButton>
                <LightButton value="2">
                  <IncandescentOutlined />
                  2
                </LightButton>
          </li>
          <li>
              <LightButton value="6">
                <IncandescentOutlined />
                6
              </LightButton>
              <LightButton value="7">
                <IncandescentOutlined />
                7
              </LightButton>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    lightState: state.light
  }
};

export default connect(mapStateToProps)(LightInterface)
