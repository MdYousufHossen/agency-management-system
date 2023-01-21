import { useState } from "react";
import { NavLink as Nav } from "react-router-dom";
import styled from "styled-components";
import Icon, { ICON_NAME } from "./Icon";

/*
 * This is a ready to use component, just import it and plop it into your project as:
 * <Navbar/>
 * You might want to move all the style components into separate files for readability
 * if you plan to do more with it.
 */

const Bar = styled.nav<{ display: boolean }>`
    display: ${(props) => (props.display ? "block" : "none")};
    font-size: 18px;
    background-color: white;
    padding-bottom: 10px;
    position: absolute;
    z-index: 100;
    right: 10%;

    @media (min-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-bottom: 0;
        right: 0;
        left: 0;
        align-items: center;
        border-radius: none !important;
        background-color: transparent;
    }
`;
const MainNav = styled.ul`
    list-style-type: none;

    // flex-direction: column;
    @media (min-width: 768px) {
        display: flex !important;
        margin-right: 30px;
        flex-direction: row;
        justify-content: flex-end;
    }
`;
const NavWrapper = styled.li`
    text-align: center;
    margin: 15px auto;
`;
const NavLink = styled(Nav)`
    text-decoration: none;
    color: black;
    @media (min-width: 768px) {
        margin: 0px 10px;
        color: white !important;
    }
`;
const Logo = styled(Nav)`
    display: inline-block;
    width: fit-content;
    margin-top: 10px;
    margin-left: 20px;

    text-decoration: none;
`;
const NavBarToggle = styled.span`
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    font-size: 24px;
`;
const Hamburger = styled.img`
    content: url(data:image/svg+xml,%3Csvg%20height%3D%2232px%22%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%2032%2032%3B%22%20version%3D%221.1%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232px%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpath%20d%3D%22M4%2C10h24c1.104%2C0%2C2-0.896%2C2-2s-0.896-2-2-2H4C2.896%2C6%2C2%2C6.896%2C2%2C8S2.896%2C10%2C4%2C10z%20M28%2C14H4c-1.104%2C0-2%2C0.896-2%2C2%20%20s0.896%2C2%2C2%2C2h24c1.104%2C0%2C2-0.896%2C2-2S29.104%2C14%2C28%2C14z%20M28%2C22H4c-1.104%2C0-2%2C0.896-2%2C2s0.896%2C2%2C2%2C2h24c1.104%2C0%2C2-0.896%2C2-2%20%20S29.104%2C22%2C28%2C22z%22%2F%3E%3C%2Fsvg%3E);
    @media (min-width: 768px) {
        display: none;
    }
`;
const Navbar = () => {
    const [display, setDisplay] = useState(false);
    const toggoleNavBar = () => {
        setDisplay((prevState) => !prevState);
    };
    return (
        <>
            <NavBarToggle onClick={toggoleNavBar}>{<Hamburger style={{ background: "white" }} />}</NavBarToggle>

            <Bar display={display}>
                <Logo to="/">
                    <Icon name={ICON_NAME.Logo} height={60} width={234} color="#3DB5D8;" />
                </Logo>

                <MainNav>
                    <NavWrapper>
                        <NavLink to="#">Main</NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to="#">Search</NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to="#">Avocados</NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to="#">Login</NavLink>
                    </NavWrapper>
                </MainNav>
            </Bar>
        </>
    );
};

export default Navbar;
