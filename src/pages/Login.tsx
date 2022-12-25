import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { Button } from "~/components/Button";
import Container from "~/components/Container";
import Icon, { ICON_NAME } from "~/components/Icon";
import InputField from "~/components/InputField";
import Spacer from "~/components/Spacer";
import StyledLink from "~/components/StyledLink";
import Typography from "~/components/Typography";
import ROUTES from "~/constant/routes";
import { useLoginMutation } from "~/feautres/auth/authApi";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | undefined>("");
    const [login, { data, isLoading, error: resErr, isError }] = useLoginMutation();

    const navigate = useNavigate();
    useEffect(() => {
        if (resErr) {
            if ("status" in resErr) {
                // you can access all properties of `FetchBaseQueryError` here
                const errMsg = "error" in resErr ? resErr.error : JSON.stringify(resErr.data);
                setError(errMsg);
            } else {
                // you can access all properties of `SerializedError` here
                setError(resErr.message);
            }
        }
        if (data?.data.token && data?.data.user) {
            navigate(ROUTES.DASHBOARD);
        }
    }, [data, resErr, navigate]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login({
            email,
            password,
        });
    };

    return (
        <Container displayFlex alignItemsCenter justifyContentCenter width="100%" height="100vh" background="#12141D">
            <Container padding="50px 20px" brt="10px" brb="10px" width="fit-content" background="white">
                <Container width="fit-content">
                    <Icon name={ICON_NAME.Logo} width={50} height={50} />
                </Container>
                <Spacer height="20px" />
                <form onSubmit={handleSubmit}>
                    <InputField error={error} required onChange={(e) => setEmail(e.target.value)} icon={ICON_NAME.IconEmail} label="Email" type="email" />
                    <InputField error={error} required onChange={(e) => setPassword(e.target.value)} icon={ICON_NAME.Lock} label="Password" type="password" />

                    <Container width="fit-content">
                        <Button size="small" variant="contained">
                            {isLoading ? <PuffLoader size={25} color="" /> : "Login"}
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
