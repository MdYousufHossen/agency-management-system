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
import { useRegisterMutation } from "~/feautres/auth/authApi";
const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState<string | undefined>("");
    const [register, { data, isLoading, error: resErr, isSuccess, isError }] = useRegisterMutation();
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

        if (isSuccess) {
            navigate(ROUTES.LOGIN);
        }
    }, [data, resErr, navigate]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        register({
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
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
                    <InputField
                        error={error}
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                        icon={ICON_NAME.IconPerson}
                        label="First Name"
                        type="text"
                    />
                    <InputField
                        error={error}
                        required
                        onChange={(e) => setLastName(e.target.value)}
                        icon={ICON_NAME.IconPerson}
                        label="Last Name"
                        type="text"
                    />
                    <InputField error={error} required onChange={(e) => setEmail(e.target.value)} icon={ICON_NAME.IconEmail} label="Email" type="email" />
                    <InputField error={error} required onChange={(e) => setpassword(e.target.value)} icon={ICON_NAME.Lock} label="Password" type="password" />
                    <InputField
                        error={error}
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        icon={ICON_NAME.Lock}
                        label="Confirm Password"
                        type="password"
                    />
                    <Container width="fit-content">
                        <Button size="large" variant="contained">
                            {isLoading ? <PuffLoader size={25} color="" /> : "Register"}
                        </Button>
                    </Container>
                </form>
                <Typography margin="10px 0 0 0" align="center" variant="body4" color="black">
                    Already a user? <StyledLink to={ROUTES.LOGIN}>LOGIN</StyledLink>
                </Typography>
            </Container>
        </Container>
    );
};
export default Register;
