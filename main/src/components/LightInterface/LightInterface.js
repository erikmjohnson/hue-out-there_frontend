import superagent from 'superagent';
import React, {Component} from 'react';
import './_LightInterface.scss';
// import ToggleButton from 'react-toggle-button';

const API_URL = 'http://localhost:3001/';
const GROUP = `lightgroup/`;
const LIGHT = 'light/';


export default class LightInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  allLights = (command) => {
    return superagent.get(`${API_URL}${GROUP}${command}`)
      .catch(err => console.log(err));
  };

  light = (id, command) => {
    return superagent.get(`${API_URL}${LIGHT}${id}/${command}`)
      .catch(err => console.log(err));
  };

  // toggle1 = (id) =>
  //           <ToggleButton
  //               value={this.state.value || false}
  //               onToggle={(value) => {
  //                 this.setState({
  //                   value: !value,
  //                 })
  //               }}
  //           />

  render() {
    return (
      <div>
        <h1>Light Settings</h1>
        <ul>
          <li>
            <button onClick={this.allLights.bind(null, 'on')}>Turn On All Lights</button>
            <button onClick={this.allLights.bind(null, 'off')}>Turn Off All Lights</button>
          </li>
          <li>
          </li>
          <li>
            <button onClick={this.light.bind(null, 1, 'on')}>Turn On Light 1</button>
            <button onClick={this.light.bind(null, 1, 'off')}>Turn Off Light 1</button>
          </li>
          <li>
            <button onClick={this.light.bind(null, 2, 'on')}>Turn On Light 2</button>
            <button onClick={this.light.bind(null, 2, 'off')}>Turn Off Light 2</button>
          </li>
          <li>
            <button onClick={this.light.bind(null, 6, 'on')}>Turn On Light 6</button>
            <button onClick={this.light.bind(null, 6, 'off')}>Turn Off Light 6</button>
          </li>
          <li>
            <button onClick={this.light.bind(null, 7, 'on')}>Turn On Light 7</button>
            <button onClick={this.light.bind(null, 7, 'off')}>Turn Off Light 7</button>
          </li>
        </ul>
      </div>
    )
  }
}
