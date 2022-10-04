import styled from "styled-components";

const CheckBoxWrapper = styled.div`
    position: relative;
    margin-left: 10px;
`;
const CheckBoxLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 35px;
    height: 18px;
    border-radius: 15px;
    background: #bebebe;
    cursor: pointer;
    &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 3px;
        background: #ffffff;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 0.2s;
    }
`;
const CheckBox = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 42px;
    height: 20px;
    &:checked + ${CheckBoxLabel} {
        background: #4fbe79;
        &::after {
            content: "";
            display: block;
            border-radius: 50%;
            width: 12px;
            height: 12px;
            margin-left: 21px;
            transition: 0.2s;
        }
    }
`;

const ToggleSwitch = {
    CheckBoxWrapper,
    CheckBoxLabel,
    CheckBox,
};
export default ToggleSwitch;
