import { memo } from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "~/app/hooks";
import Container from "~/components/Container";
import Icon, { ICON_NAME } from "~/components/Icon";
import Typography from "~/components/Typography";
import ENGLISH from "~/constant/lang/english";
import ChatStyle from "~/styles/ChatApp";
import NavigationStyle from "~/styles/Navigation";

const DNavigation = memo(({ checked, setChecked }: { checked: Boolean; setChecked: React.Dispatch<React.SetStateAction<Boolean>> }) => {
    const user = useAppSelector((state) => state.auth.user);

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
                <Container padding="20px 5px" width="100%" displayFlex justifyBetween>
                    <Icon name={ICON_NAME.Menu} color="white" height={20} width={20} onClick={toggled} />
                    <ChatStyle.avatar
                        toggle={checked ? "none" : "block"}
                        src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                        alt="profile"
                        width={50}
                        height={50}
                    />
                    <div></div>
                </Container>
                <Typography color="white" align="center" variant="title5">
                    {user?.firstName + " " + user?.lastName}
                </Typography>
                <NavigationStyle.HorizontalLine toggle={checked} />
                <NavigationStyle.NavbarWrapper>
                    {ENGLISH.DASHBOARD_NAVIGATION.map((Item, index) => (
                        <NavigationStyle.NavWrapper key={index}>
                            <NavLink to={Item.link} style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}>
                                <Icon name={ICON_NAME[Item.logo]} color="yellow" height={30} width={20} />
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
