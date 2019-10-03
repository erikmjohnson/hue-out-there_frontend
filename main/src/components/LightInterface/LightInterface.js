import superagent from 'superagent';
import React, { Component } from 'react';
import './_LightInterface.scss';
import { connect } from 'react-redux';
import LightButtonOn from '../LightButton/LightButtonOn';
import LightButtonOff from '../LightButton/LightButtonOff';

const API_URL = 'http://localhost:3001/';
// const GROUP = `lightgroup/`;
const LIGHT = 'light/';

class LightInterface extends Component {

  light = (id, command) => {
    return superagent.get(`${API_URL}${LIGHT}${id}/${command}`)
      .catch(err => console.log(err));
  };

  renderLightButton = lightName => {
    if (this.props.lightState.status) {
      return <LightButtonOn lightName={ lightName }/>;
    }
    if (!this.props.lightState.status) {
      return <LightButtonOff lightName={ lightName }/>;
    }
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
            {this.renderLightButton('All Lights')}
          </li>
          <li>
            <div>
              {this.renderLightButton('1')}
              {this.renderLightButton('2')}
            </div>
          </li>
          <li>
            <div>
              {this.renderLightButton('6')}
              {this.renderLightButton('7')}
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { lightState: state.light }
};

export default connect(mapStateToProps)(LightInterface)
