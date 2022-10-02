import Container from "~/components/Container";
import ChatStyle from "~/styles/ChatApp";

const ChatApp = () => {
    return (
        <Container displayFlex width="100%" height="100%" gap="10px" background="#F2F4F8">
            <Container width="30%" brb="30px" brt="30px" shadowBox="5px 0 5px #E1E3E8" background="#F5F7FB" height="100%">
                <ChatStyle.Conversations>
                    <ChatStyle.Conversation>Hello</ChatStyle.Conversation>
                    <ChatStyle.Conversation>Hello</ChatStyle.Conversation>
                    <ChatStyle.Conversation>Hello</ChatStyle.Conversation>
                </ChatStyle.Conversations>
            </Container>
            <Container brb="30px" background="#F5F7FB" brt="30px" shadowBox="0 0 8px 5px  #E1E3E8" height="100%" width="65%">
                <div>user name</div>
                <div>body</div>
                <div>input box</div>
            </Container>
        </Container>
    );
};

export default ChatApp;
