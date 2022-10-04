import Container from "~/components/Container";
import Icon, { ICON_NAME } from "~/components/Icon";
import InputField from "~/components/InputField";
import Spacer from "~/components/Spacer";
import Typography from "~/components/Typography";
import ChatStyle from "~/styles/ChatApp";

const ChatApp = () => {
    return (
        <Container displayFlex width="100%" height="100%" gap="10px" background="#F2F4F8">
            <Container width="30%" brb="30px" brt="30px" shadowBox="5px 0 5px #E1E3E8" background="#F5F7FB" height="100%">
                <ChatStyle.Conversations>
                    <Container width="100%" displayFlex alignItemsCenter>
                        <Container width="fit-content">
                            <InputField width="100%" height="35px" type="search" icon={ICON_NAME.Search} />
                        </Container>
                        <Spacer flex />
                        <Container width="fit-content">
                            <Icon name={ICON_NAME.Calender} height={25} width={25} />
                        </Container>
                    </Container>
                    <hr />
                    <ChatStyle.Conversation>
                        <ChatStyle.avatar
                            src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                            alt="profile"
                            width={50}
                            height={50}
                        />
                        <Typography margin="0 10px" variant="body1" color="black">
                            Mr. Hello
                        </Typography>
                    </ChatStyle.Conversation>

                    <ChatStyle.Conversation>
                        <ChatStyle.avatar
                            src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                            alt="profile"
                            width={50}
                            height={50}
                        />
                        <Typography margin="0 10px" variant="body1" color="black">
                            Mr. Hello
                        </Typography>
                    </ChatStyle.Conversation>

                    <ChatStyle.Conversation>
                        <ChatStyle.avatar
                            src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                            alt="profile"
                            width={50}
                            height={50}
                        />
                        <Typography margin="0 10px" variant="body1" color="black">
                            Mr. Hello
                        </Typography>
                    </ChatStyle.Conversation>

                    <ChatStyle.Conversation>
                        <ChatStyle.avatar
                            src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                            alt="profile"
                            width={50}
                            height={50}
                        />
                        <Typography margin="0 10px" variant="body1" color="black">
                            Mr. Hello
                        </Typography>
                    </ChatStyle.Conversation>
                </ChatStyle.Conversations>
            </Container>
            {/* chat body */}
            <Container brb="30px" background="#F5F7FB" brt="30px" shadowBox="0 0 8px 5px  #E1E3E8" height="100%" width="70%">
                <Container width="100%" displayFlex alignItemsCenter>
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
                </Container>
            </Container>
        </Container>
    );
};

export default ChatApp;
