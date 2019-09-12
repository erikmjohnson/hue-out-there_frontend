import superagent from 'superagent';
import React, { Component } from 'react';
import './_LightInterface.scss';
import IncandescentOutlined from '@material-ui/icons/WbIncandescentOutlined';
import { connect } from 'react-redux';
import LightButtonMatUI from '../LightButton/LightButtonMatUI';

const API_URL = 'http://localhost:3001/';
// const GROUP = `lightgroup/`;
const LIGHT = 'light/';

class LightInterface extends Component {

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
            <LightButtonMatUI value="allLights">
              <IncandescentOutlined />
              All Lights
            </LightButtonMatUI>
          </li>
          <li>
            <LightButtonMatUI value="1">
              <IncandescentOutlined />
              1
            </LightButtonMatUI>
            <LightButtonMatUI value="2">
              <IncandescentOutlined />
              2
            </LightButtonMatUI>
          </li>
          <li>
            <LightButtonMatUI value="6">
              <IncandescentOutlined />
              6
            </LightButtonMatUI>
            <LightButtonMatUI value="7">
              <IncandescentOutlined />
              7
            </LightButtonMatUI>
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
