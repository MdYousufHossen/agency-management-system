import { ReactComponent as Manager } from "~/assets/images/manager.svg";
import { Button } from "~/components/Button";
import ClipPathDiv from "~/components/ClipPathDiv";
import Container from "~/components/Container";
import Spacer from "~/components/Spacer";
import Typography from "~/components/Typography";
import ENGLISH from "~/constant/lang/english";
import ROUTES from "~/constant/routes";
import AppHeader from "~/container/AppHeader";
import StyledLink from "./StyledLink";

const Banner = () => {
    return (
        <ClipPathDiv>
            <AppHeader />
            <Container displayFlex>
                <Container width="fit-content">
                    <Typography color="white" variant="title1">
                        {ENGLISH.HOME_BANNER.TITLE}
                    </Typography>
                    <br />
                    <Typography color="#FFC947" variant="title1">
                        &#8212; {ENGLISH.HOME_BANNER.SUB_TITLE}
                    </Typography>
                    <Spacer height="20px" />
                    <Typography pr="20%" align="justify" color="white" variant="body1">
                        {ENGLISH.HOME_BANNER.DESCRIPTION}
                    </Typography>
                    <Button size="medium" mt="20px" bgColor="#F23936">
                        <StyledLink to={ROUTES.LOGIN}>{ENGLISH.HOME_BANNER.BUTTON}</StyledLink>
                    </Button>
                </Container>
                <Container width="fit-content" mobile={{ display: "none" }}>
                    <Manager height="90%" width="90%" />
                </Container>
            </Container>
        </ClipPathDiv>
    );
};

export default Banner;
