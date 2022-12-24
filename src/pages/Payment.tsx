import { memo } from "react";
import Container from "~/components/Container";
import Icon, { ICON_NAME } from "~/components/Icon";
import Typography from "~/components/Typography";

const Payment = memo(() => {
    return (
        <Container displayFlex alignItemsCenter justifyContentCenter width="100%" height="100vh" background="#12141D">
            <Container padding="50px 20px" brt="10px" brb="10px" width="fit-content" background="white">
                <Container width="fit-content">
                    <Icon name={ICON_NAME.Logo} width={50} height={50} />
                </Container>
                <Typography variant="body1" color="black">
                    Payment
                </Typography>
            </Container>
        </Container>
    );
});

export default Payment;
