import { Fragment, HTMLInputTypeAttribute, memo } from "react";
import styled from "styled-components";
import AbsoluteContent from "./AbsoluteContent";
import Container from "./Container";
import Icon from "./Icon";
import Spacer from "./Spacer";
import Typography from "./Typography";

const InputFieldStyled = styled.input`
    height: ${(p) => (p.width ? p.height : "35px")};
    width: ${(p) => (p.width ? p.width : "245px")};
    border: 1px solid #b1b1b0;
    border-radius: 24px;
    outline-color: #12141d;
    background: transparent;
    padding-left: 40px;
    padding-right: 30px;
    flex: 1;
    margin-top: 10px;
    ${(p: { borderColor?: string }) => p.borderColor && `border-color:${p.borderColor};`}
`;

interface IProps {
    type?: HTMLInputTypeAttribute | undefined;
    label?: string;
    placeholder?: string;
    error?: string;
    icon: string;
    name?: string;
    id?: string;
    value?: string;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    width?: string;
    height?: string;
    default?: string;
}

const InputField = memo((Props: IProps) => (
    <Fragment>
        <Container width="fit-content">
            {/* label */}
            <AbsoluteContent top="-12px" left="18px">
                <Typography color="black" variant="body2">
                    {Props.label}
                </Typography>
            </AbsoluteContent>
            {/* Icon */}
            <AbsoluteContent top="20px" left="18px">
                <Icon name={Props.icon} height={20} width={20} />
            </AbsoluteContent>
            {/* input field */}
            <InputFieldStyled
                borderColor={Props.error && "red"}
                placeholder={Props.placeholder}
                name={Props.name}
                onChange={Props.onChange}
                onBlur={Props.onBlur}
                type={Props.type}
                value={Props.value}
                id={Props.id}
                required={Props.required}
                width={Props.width}
                height={Props.height}
                defaultValue={Props.default}
            />
            <Spacer flex />
            {/* error message */}
            {Props.error && (
                <AbsoluteContent top="47px" left="18px">
                    <Typography color="red" variant="body2">
                        {Props.error}
                    </Typography>
                </AbsoluteContent>
            )}
        </Container>
        <Spacer height="25px" />
    </Fragment>
));
export default InputField;
