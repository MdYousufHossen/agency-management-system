import styled from "styled-components";
import Container from "./Container";
import Icon, { ICON_NAME } from "./Icon";
import Spacer from "./Spacer";
import Typography from "./Typography";

const Card = styled.div`
    width: 316px;
    height: 183px;
    padding: 20px;
    background: #ffffff;
    border: 1px solid #e1e3e8;
    border-radius: 10px;
    transition: 1s;
    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.2);
    }
`;

const Services = () => {
    const services = [
        {
            id: 1,
            icon: "network",
            title: "Network Monitoring",
            desc: "Our 24x7 Cyber Security Operations Center puts state-of-the-art threat.",
        },
        {
            id: 2,
            icon: "security",
            title: "Security Consulting",
            desc: "Our Cyber Security Consulting back your organization with experience.",
        },
        {
            id: 3,
            icon: "testing",
            title: "Penetration Testing",
            desc: "Our penetration testing team can be identify cybersecurity vulnerabilities.",
        },
        {
            id: 4,
            icon: "secureWeb",
            title: "Virtual CISO",
            desc: "We can act as your Virtual Chief for Information Security Officer (vCISO).",
        },
        {
            id: 5,
            icon: "incident",
            title: "Incident Responder",
            desc: "With lots of unique blocks you can easily create a page without coding",
        },
        {
            id: 6,
            icon: "openingTime",
            title: "Weekly Report",
            desc: "We can act as your Virtual Chief for Information Security Officer (vCISO).",
        },
    ];

    return (
        <Container width="fit-content" background="#FAFAFA">
            <Spacer height="20px" />
            <Typography align="center" variant="title2" color="black">
                We offer professional
            </Typography>
            <Typography align="center" variant="title2" color="black">
                cyber security services
            </Typography>
            <Spacer height="50px" />
            <Container width="90%" displayFlex flexWrape alignItemsCenter justifyContentCenter gap="25px">
                {services.map((s) => (
                    <Card>
                        <Icon name={ICON_NAME[s.icon]} height={50} width={50} />
                        <Spacer height="20px" />
                        <Typography variant="title3" color="black">
                            {s.title}
                        </Typography>
                        <Spacer height="20px" />
                        <Typography variant="body1" color="black">
                            {s.desc}
                        </Typography>
                    </Card>
                ))}
            </Container>
        </Container>
    );
};

export default Services;
