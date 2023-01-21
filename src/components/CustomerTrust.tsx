import { ReactComponent as CustomerTrustIcon } from "~/assets/icons/customerTrust.svg";
import Container from "./Container";
import Spacer from "./Spacer";
import Typography from "./Typography";
const CustomerTrust = () => {
    return (
        <Container mobile={"flex-direction:column;"} displayFlex width="80%">
            <Container mobile={"width:100%; margin-bottom:20px"} width="30%">
                <CustomerTrustIcon width="90%" height="40%" />
            </Container>
            <Spacer flex />
            <Container width="60%" mobile={"width:90%"}>
                <Typography variant="title2" color="black">
                    Cyber security solutions built on customer trust
                </Typography>
                <Spacer height="30px" />
                <Typography variant="body2" color="black">
                    Cybersecurity is very important because of some security threats and cyber-attacks. This software protects the data. Cybersecurity is
                    important because not only it helps to secure information but also our system from virus attack.
                </Typography>
                <Spacer height="50px" />
                <Container width="100%" displayFlex>
                    <div>
                        <Typography align="center" variant="title2" color="red">
                            4.9/5
                        </Typography>
                        <Typography align="center" variant="body1" color="black">
                            Customer Rating
                        </Typography>
                    </div>
                    <Spacer width="50px" />
                    <div>
                        <Typography align="center" variant="title2" color="red">
                            4.9/5
                        </Typography>
                        <Typography align="center" variant="body1" color="black">
                            PC Scaned
                        </Typography>
                    </div>
                </Container>
            </Container>
        </Container>
    );
};

export default CustomerTrust;
