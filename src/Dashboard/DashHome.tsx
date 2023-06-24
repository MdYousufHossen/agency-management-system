import { useAppSelector } from "~/app/hooks";
import Container from "~/components/Container";
import Typography from "~/components/Typography";
import ChatStyle from "~/styles/ChatApp";

const DashHome = () => {
    const user = useAppSelector((state) => state.auth.user);
    return (
        <Container displayFlex alignItemsCenter justifyContentCenter width="100%" height="100vh" background="white">
            <Container padding="50px 20px" brt="10px" brb="10px" width="fit-content" background="#12141D">
                <Container width="fit-content">
                    <ChatStyle.avatar src={user?.imageURL} alt="profile" width={50} height={50} />
                </Container>
                <Typography color="white" variant="title3">
                    {" "}
                    {user?.firstName + " " + user?.lastName}
                </Typography>
            </Container>
        </Container>
    );
};

export default DashHome;
