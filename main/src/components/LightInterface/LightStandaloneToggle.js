import React from 'react';
import Incandescent from '@material-ui/icons/WbIncandescent';
import IncandescentOutlined from '@material-ui/icons/WbIncandescentOutlined';
import ToggleButton from '@material-ui/lab/ToggleButton'

export default function StandaloneToggle() {
    const [selected, setSelected] = React.useState(false);

    return (
        <ToggleButton
            value="light"
            selected={selected}
            onChange={() => {
                setSelected(!selected);
            }}>
            <IncandescentOutlined />
        </ToggleButton>
    );
}