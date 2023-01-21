import { ReactComponent as Manager } from "~/assets/images/manager.svg";
import { Button } from "~/components/Button";
import ClipPathDiv from "~/components/ClipPathDiv";
import Container from "~/components/Container";
import Spacer from "~/components/Spacer";
import Typography from "~/components/Typography";
import ENGLISH from "~/constant/lang/english";
import ROUTES from "~/constant/routes";
import useAuth from "~/hooks/useAuth";
import { UnderLine } from "~/styles/Banner";
import Navbar from "./Navbar";
import StyledLink from "./StyledLink";

const Banner = () => {
    const isLoggedIn = useAuth();

    return (
        <ClipPathDiv>
            <Navbar />
            {/* <AppHeader /> */}
            <Container displayFlex mobile={"flex-direction:column; width:90%"}>
                <Container width="fit-content">
                    <Typography color="white" variant="title1">
                        {ENGLISH.HOME_BANNER.TITLE}
                    </Typography>
                    <br />
                    <Typography color="#FFC947" variant="title1">
                        <UnderLine> &#8212; {ENGLISH.HOME_BANNER.SUB_TITLE}</UnderLine>
                    </Typography>
                    <Spacer height="20px" />
                    <Typography pr="20%" align="justify" color="white" variant="body1">
                        {ENGLISH.HOME_BANNER.DESCRIPTION}
                    </Typography>
                    <Button size="medium" mt="20px" bgColor="#F23936">
                        {!isLoggedIn ? (
                            <StyledLink color="white" to={ROUTES.LOGIN}>
                                {ENGLISH.HOME_BANNER.LOGIN}
                            </StyledLink>
                        ) : (
                            <StyledLink color="white" to={ROUTES.DASHBOARD}>
                                {ENGLISH.HOME_BANNER.DASHBOARD}
                            </StyledLink>
                        )}
                    </Button>
                </Container>
                <Container width="fit-content">
                    <Manager height="90%" width="90%" />
                </Container>
            </Container>
        </ClipPathDiv>
    );
};

export default Banner;
