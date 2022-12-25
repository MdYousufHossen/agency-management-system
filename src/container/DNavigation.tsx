import { memo } from "react";
import { NavLink } from "react-router-dom";
import Container from "~/components/Container";
import Icon, { ICON_NAME } from "~/components/Icon";
import ROUTES from "~/constant/routes";
import NavigationStyle from "~/styles/Navigation";

const DNavigation = memo(({ checked, setChecked }: { checked: Boolean; setChecked: React.Dispatch<React.SetStateAction<Boolean>> }) => {
    const lang = [
        {
            name: "chat app",
            link: "/dashboard/chatapp",
            // logo: Icons.StudentApplication,
        },
        {
            name: "Team",
            link: ROUTES.TEAM,
            // logo: Icons.StudentApplication,
        },
        {
            name: "Project Management",
            link: ROUTES.PROJECTS,
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
        // borderRadius: "20px 0 0 20px",
    };
    let inActiveStyle = {
        textDecoration: "none",
        color: "white",
        display: "flex",
        alignItems: "center",
        paddingLeft: "2vw",
    };

    const toggled = () => {
        setChecked((prevState) => !prevState);
    };

    return (
        <>
            <NavigationStyle.wrapper toggle={checked}>
                <Container width="fit-content">
                    <Icon name={ICON_NAME.Logo} height={80} width={60} onClick={toggled} />
                </Container>
                <NavigationStyle.HorizontalLine toggle={checked} />
                <NavigationStyle.NavbarWrapper>
                    {lang.map((Item, index) => (
                        <NavigationStyle.NavWrapper key={index}>
                            <NavLink to={Item.link} style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}>
                                <Icon name={ICON_NAME.Share} height={30} width={20} />
                                {!checked && <NavigationStyle.Text>{Item.name}</NavigationStyle.Text>}
                            </NavLink>
                        </NavigationStyle.NavWrapper>
                    ))}
                </NavigationStyle.NavbarWrapper>
            </NavigationStyle.wrapper>
            {!checked && (
                <NavigationStyle.FooterWrapper>
                    <NavigationStyle.HorizontalLine />
                    <NavigationStyle.CopyrightText>Copyright © 2022</NavigationStyle.CopyrightText>
                    <NavigationStyle.VersionText>Version 1.1.0</NavigationStyle.VersionText>
                </NavigationStyle.FooterWrapper>
            )}
        </>
    );
});

export default DNavigation;
