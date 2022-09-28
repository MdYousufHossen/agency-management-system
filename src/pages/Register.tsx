import { useState } from "react";
import { ReactComponent as Welcome } from "~/assets/welcome.svg";
import { Button } from "~/components/Button";
import Container from "~/components/Container";
import { ICON_NAME } from "~/components/Icon";
import InputField from "~/components/InputField";
const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    console.log({ name, email, password });

    return (
        <Container width="60%" displayFlex>
            <Container width="fit-content">
                <Welcome width="25vw" height="25vw" />
            </Container>
            <Container width="fit-content">
                <form>
                    <InputField required onChange={(e) => setName(e.target.value)} icon={ICON_NAME.IconPerson} label="Name" type="text" />
                    <InputField required onChange={(e) => setEmail(e.target.value)} icon={ICON_NAME.IconEmail} label="Email" type="email" />
                    <InputField required onChange={(e) => setpassword(e.target.value)} icon={ICON_NAME.Lock} label="Password" type="password" />
                    <Container width="fit-content">
                        <Button size="medium" variant="contained" bgColor="#3DB5D8">
                            Register
                        </Button>
                    </Container>
                </form>
            </Container>
        </Container>
    );
};

export default Register;
