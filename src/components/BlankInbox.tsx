import Container from "~/components/Container";
import Typography from "./Typography";
const BlankInbox = () => {
    return (
        <Container brb="30px" displayFlex background="#F5F7FB" brt="30px" shadowBox="0 0 8px 5px  #E1E3E8" height="100%" width="70%">
            <Container alignItemsCenter>
                <Typography variant="title3" align="center" color="black">
                    No messages selected! Select an user from left sidebar to view all messages
                </Typography>
            </Container>
            {/* <Container width="100%" displayFlex alignItemsCenter>
                <Container width="fit-content" displayFlex alignItemsCenter>
                    <ChatStyle.avatar
                        src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                        alt="profile"
                        width={50}
                        height={50}
                    />
                    <Typography margin="0 10px" variant="body1" color="black">
                        Mr. Hello
                    </Typography>
                </Container>
                <Spacer flex />
                <Container width="fit-content" pr="20px">
                    <Icon name={ICON_NAME.Call} width={30} height={30} />
                </Container>
            </Container>
            <ChatStyle.messages>
                <ChatStyle.messageWrapper partner={true}>
                    <ChatStyle.message partner={true}>
                        <span>kfdkfkdjfkdjf</span>
                    </ChatStyle.message>
                </ChatStyle.messageWrapper>
                <ChatStyle.messageWrapper>
                    <ChatStyle.message>
                        <span>kfdkfkdjfkdjf</span>
                    </ChatStyle.message>
                </ChatStyle.messageWrapper>
                <ChatStyle.messageWrapper partner={true}>
                    <ChatStyle.message partner={true}>
                        <span>kfdkfkdjfkdjf</span>
                    </ChatStyle.message>
                </ChatStyle.messageWrapper>
            </ChatStyle.messages>
            <Container width="95%" displayFlex alignItemsCenter justifyContentCenter>
                <InputField placeholder="Type a message...." type="text" width="40vw" height="40px" icon={ICON_NAME.Filter} />
                <Icon name={ICON_NAME.messageSend} height={40} width={40} color="#3BA58B" />
            </Container> */}
        </Container>
    );
};

export default BlankInbox;
