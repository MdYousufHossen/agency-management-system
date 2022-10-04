import React, { memo } from "react";
import ToggleSwitch from "~/styles/ToggleSwitch";

interface SwitchProps {
    OnToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Switch = memo((props: SwitchProps) => {
    return (
        <ToggleSwitch.CheckBoxWrapper>
            <ToggleSwitch.CheckBox id="checkbox" onChange={props.OnToggle} type="checkbox" />
            <ToggleSwitch.CheckBoxLabel htmlFor="checkbox" />
        </ToggleSwitch.CheckBoxWrapper>
    );
});

export default Switch;
