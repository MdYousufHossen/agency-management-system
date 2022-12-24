import { Fragment, memo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "~/app/hooks";
import Container from "~/components/Container";
import Icon, { ICON_NAME } from "~/components/Icon";
import Spacer from "~/components/Spacer";
import Typography from "~/components/Typography";
import ROUTES from "~/constant/routes";
import { userLoggedOut } from "~/feautres/auth/authSlice";
import useAuth from "~/hooks/useAuth";

const StyledWrapper = {
    Wrapper: styled.div`
        /* display: flex; */
        /* flex-direction: column; */
        /* align-items: center; */
        /* justify-content: flex-start; */
        /* margin-bottom: 2vw; */
        /* padding: 3.3vw 0; */
    `,
    StyledLink: styled(NavLink)`
        text-decoration: none;
        cursor: pointer;
    `,
    Logo: styled.img`
        height: 4.5vw;
        width: 17.5vw;
    `,
    From: styled.img`
        height: 3.2vw;
        width: 10vw;
        margin-top: -1.5vw;
    `,
};

const AppHeader = memo(() => {
    const dispatch = useAppDispatch();
    const isLoggedIn = useAuth();
    const logout = () => {
        dispatch(userLoggedOut());
        localStorage.clear();
    };
    const navigate = useNavigate();

    return (
        <Fragment>
            <Container displayFlex width="90%">
                <Container width="fit-content">
                    <StyledWrapper.StyledLink to={ROUTES.HOME}>
                        <Icon name={ICON_NAME.Logo} height={60} width={234} color="#3DB5D8;" />
                    </StyledWrapper.StyledLink>
                </Container>
                <Spacer flex />
                <Container width="fit-content">
                    <Container displayFlex alignItemsCenter width="fit-content">
                        <StyledWrapper.StyledLink to={ROUTES.HOME}>
                            <Typography color="white" margin="0 10px" variant="title5">
                                Home
                            </Typography>
                        </StyledWrapper.StyledLink>
                        <StyledWrapper.StyledLink to={ROUTES.HOME}>
                            <Typography color="white" margin="0 10px" variant="title5">
                                About_us
                            </Typography>
                        </StyledWrapper.StyledLink>
                        <StyledWrapper.StyledLink to={ROUTES.HOME}>
                            <Typography color="white" margin="0 10px" variant="title5">
                                Contact us
                            </Typography>
                        </StyledWrapper.StyledLink>
                        {isLoggedIn && (
                            <Typography color="white" clickable onClick={logout} margin="0 10px" variant="title5">
                                LogOut
                            </Typography>
                        )}
                    </Container>
                </Container>
            </Container>
        </Fragment>
    );
});

export default AppHeader;
