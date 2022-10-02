import styled from "styled-components";
import ReadyToStartBg from "~/assets/icons/ReadyToStartBg.svg";
import { Button } from "./Button";
import Container from "./Container";
import Spacer from "./Spacer";
import Typography from "./Typography";
const Wrapper = styled.div`
    background-image: url(${ReadyToStartBg});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
`;

const ReadyToGetStart = () => {
    return (
        <Wrapper>
            <Container pt="150px" width="35%" mobile={{ padding: "20px 0 0 0", width: "80%" }} displayFlex flexCol justifyContentCenter>
                <Typography align="center" variant="title2">
                    Ready to get started?
                </Typography>
                <Spacer height="20px" />
                <Typography align="center" variant="body1">
                    With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                </Typography>
                <Button width="80%" size="large" margin="20px auto">
                    Download for Mack
                </Button>
            </Container>
        </Wrapper>
    );
};

export default ReadyToGetStart;
