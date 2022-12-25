import styled from "styled-components";

const Wrapper = styled.form`
    margin: 0 auto;
    width: 250px;
    // border: 1px solid red;
`;
const Input = styled.input`
    padding: 0.5em;
    width: 240px;
    border: 1px solid #ccc;
    border-radius: 0.5em;
    margin: 15px 0;
`;
const TextArea = styled.textarea`
    width: 240px;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 0.5em;
`;
const Button = styled.button`
    border-radius: 0.5em;
    align: center;
    border: none;
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
    cursor: pointer;
    background: rgb(175, 179, 152);
    background: linear-gradient(15deg, rgba(175, 179, 152, 1) 0%, rgba(223, 222, 208, 1) 35%, rgba(165, 222, 233, 1) 73%);
    border-radius: 20px;
    font-weight: bold; ;
`;
const Select = styled.select`
    width: 255px;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 0.5em;
    margin-bottom: 15px;
`;
const Option = styled.option``;
const FormStyle = {
    Wrapper,
    Input,
    TextArea,
    Select,
    Option,
    Button,
};
export default FormStyle;
