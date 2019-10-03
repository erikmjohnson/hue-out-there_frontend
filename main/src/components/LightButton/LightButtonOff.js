import React from 'react';
import LightButtonMatUI from "./LightButtonMatUI";
import Incandescent from '@material-ui/icons/WbIncandescent';


const LightButtonOff = props => {
  return (
    <>
      <LightButtonMatUI>
        <Incandescent/>
        {props.lightName}
      </LightButtonMatUI>
    </>
  );
};

export default LightButtonOff;
