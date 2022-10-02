import { memo } from "react";
import { NavLink } from "react-router-dom";
import Container from "~/components/Container";
import Icon, { ICON_NAME } from "~/components/Icon";
import NavigationStyle from "~/styles/Navigation";

const DNavigation = memo(() => {
    const lang = [
        {
            name: "chat app",
            link: "/dashboard/chatapp",
            // logo: Icons.StudentApplication,
        },
        {
            name: "projects",
            link: "/dashboard/projects",
            // logo: Icons.StudentApplication,
        },
    ];

    let activeStyle = {
        textDecoration: "none",
        color: "white",
        display: "flex",
        alignItems: "center",
        paddingLeft: "2vw",
        backgroundColor: "#F23936",
    };
    let inActiveStyle = {
        textDecoration: "none",
        color: "white",
        display: "flex",
        alignItems: "center",
        paddingLeft: "2vw",
    };
    return (
        <>
            <NavigationStyle.wrapper>
                <Container width="fit-content">
                    <Icon name={ICON_NAME.Logo} height={80} width={60} />
                </Container>
                <NavigationStyle.HorizontalLine />
                <NavigationStyle.NavbarWrapper>
                    {lang.map((Item, index) => (
                        <NavigationStyle.NavWrapper key={index}>
                            <NavLink to={Item.link} style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}>
                                <NavigationStyle.Text>{Item.name}</NavigationStyle.Text>
                            </NavLink>
                        </NavigationStyle.NavWrapper>
                    ))}
                </NavigationStyle.NavbarWrapper>
            </NavigationStyle.wrapper>
            <NavigationStyle.FooterWrapper>
                <NavigationStyle.HorizontalLine />
                <NavigationStyle.CopyrightText>Copyright © 2022 Qaf</NavigationStyle.CopyrightText>
                <NavigationStyle.VersionText>Version 1.1.0</NavigationStyle.VersionText>
            </NavigationStyle.FooterWrapper>
        </>
    );
});

export default DNavigation;
