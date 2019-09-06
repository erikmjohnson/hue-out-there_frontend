import superagent from 'superagent';
import React, {Component} from 'react';
import './_LightInterface.scss';
import * as lightAction from '../../action/light-action';
import Incandescent from '@material-ui/icons/WbIncandescent';
import IncandescentOutlined from '@material-ui/icons/WbIncandescentOutlined';
import Switch from '@material-ui/core/Switch';
import ToggleButton from '@material-ui/lab/ToggleButton';
import {styled} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {red} from '@material-ui/core/colors';
import {connect} from 'react-redux';
import StandaloneToggle from "./LightStandaloneToggle";

const API_URL = 'http://localhost:3001/';
const GROUP = `lightgroup/`;
const LIGHT = 'light/';

const LightButton = styled(Button)({
  background: 'purple',
  color: 'blue',
  border: 'none',
  margin: 5,
  borderRadius: 10,
});

// () => {
// const [selected, setSelected] = React.useState(false);
// }
export class LightInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedA: true,
      checkedB: true,
    };
  }

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
  };

  allLights = (command) => {
    return superagent.get(`${API_URL}${GROUP}${command}`)
      .catch(err => console.log(err));
  };

  light = (id, command) => {
    return superagent.get(`${API_URL}${LIGHT}${id}/${command}`)
      .catch(err => console.log(err));
  };

  test = () => {
    return this.props.mappedLights()
      .then(() => {
        console.log(this.props.lightState);
      });
  };


  render() {
    return (
      <div>
        <h1>Light Settings</h1>
        <ul>
          <li>
            <button onClick={this.test}>Light Status</button>
          </li>
          <li>
              <LightButton>
                <StandaloneToggle/>
                All Lights
              </LightButton>
          </li>
          <li>
              <LightButton>
                <StandaloneToggle/>
                1
              </LightButton>
              <LightButton>
                <StandaloneToggle/>
                2
              </LightButton>
          </li>
          <li>
            <LightButton>
              <StandaloneToggle/>
              6
            </LightButton>
            <LightButton>
              <StandaloneToggle/>
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

const mapDispatchToProps = dispatch => {
  return {
    mappedLights: () => {
      dispatch(lightAction.light());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LightInterface)
