import styled from "styled-components";

const wrapper = styled.div`
    width: 20vw;
    background-color: #12141d;
    float: left;
    position: relative !important;
    min-height: calc(100vh - 25.6vh);
`;
const HorizontalLine = styled.div`
    width: 16vw;
    border-bottom: 2px solid #b5b3bc;
    margin: 0 auto;
`;
const Text = styled.p`
    margin-left: 1vw;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
`;

const FooterWrapper = styled.div`
    display: grid;
    align-self: end;
    position: absolute;
    left: 20px;
    margin: 0 auto;
    text-align: center;
`;
const CopyrightText = styled.p`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: white;
`;
const VersionText = styled.p`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    color: white;
`;
const NavbarWrapper = styled.div`
    margin-top: 20px;
`;

const NavWrapper = styled.div`
    &:hover {
        background: gray;
        opacity: 0.4;
    }
`;
const NavigationStyle = {
    wrapper,
    HorizontalLine,
    Text,
    FooterWrapper,
    CopyrightText,
    VersionText,
    NavbarWrapper,
    NavWrapper,
};
export default NavigationStyle;
