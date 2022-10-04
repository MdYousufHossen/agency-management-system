import { ReactComponent as Manager } from "~/assets/images/manager.svg";
import { Button } from "~/components/Button";
import ClipPathDiv from "~/components/ClipPathDiv";
import Container from "~/components/Container";
import Spacer from "~/components/Spacer";
import Typography from "~/components/Typography";
import AppHeader from "~/container/AppHeader";

const Banner = () => {
    return (
        <ClipPathDiv>
            <AppHeader />
            <Container displayFlex>
                <Container width="fit-content">
                    <Typography color="white" variant="title1">
                        Making your
                    </Typography>
                    <br />
                    <Typography color="#FFC947" variant="title1">
                        &#8212; brands fly
                    </Typography>
                    <Spacer height="20px" />
                    <Typography pr="20%" align="justify" color="white" variant="body1">
                        Cybersecurity is the practice of protecting systems and programs from digital attacks. These cyberattacks destroying sensitive
                        information or interrupting normal business processes.
                    </Typography>
                    <Button size="medium" mt="20px" bgColor="#F23936">
                        hello
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
