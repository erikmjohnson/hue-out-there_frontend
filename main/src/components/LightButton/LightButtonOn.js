import React from 'react';
import LightButtonMatUI from "./LightButtonMatUI";
import IncandescentOutlined from '@material-ui/icons/WbIncandescentOutlined';


const LightButtonOn = props => {
  return (
    <>
      <LightButtonMatUI>
        <IncandescentOutlined/>
        {props.lightName}
      </LightButtonMatUI>
    </>
  );
};

export default LightButtonOn;
