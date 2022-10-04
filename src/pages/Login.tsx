import { useState } from "react";
import { Button } from "~/components/Button";
import Container from "~/components/Container";
import Icon, { ICON_NAME } from "~/components/Icon";
import InputField from "~/components/InputField";
import Spacer from "~/components/Spacer";
import StyledLink from "~/components/StyledLink";
import Typography from "~/components/Typography";
import ROUTES from "~/constant/routes";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    console.log({ email, password });

    return (
        <Container displayFlex alignItemsCenter justifyContentCenter width="100%" height="100vh" background="#12141D">
            <Container padding="50px 20px" brt="10px" brb="10px" width="fit-content" background="white">
                <Container width="fit-content">
                    <Icon name={ICON_NAME.Logo} width={50} height={50} />
                </Container>
                <Spacer height="20px" />
                <form>
                    <InputField required onChange={(e) => setEmail(e.target.value)} icon={ICON_NAME.IconEmail} label="Email" type="email" />
                    <InputField required onChange={(e) => setpassword(e.target.value)} icon={ICON_NAME.Lock} label="Password" type="password" />
                    <Container width="fit-content">
                        <Button size="large" variant="contained">
                            Register
                        </Button>
                    </Container>
                </form>
                <Typography margin="10px 0 0 0" align="center" variant="body4" color="black">
                    Nice an account? <StyledLink to={ROUTES.REGISTER}>SIGN UP</StyledLink>
                </Typography>
            </Container>
        </Container>
    );
};

export default Login;
