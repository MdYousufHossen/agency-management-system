import Container from "~/components/Container";
import ChatBody from "~/container/ChatBody";
import Conversation from "~/container/Conversations";

const Inbox = () => {
    return (
        <Container displayFlex width="100%" height="100%" gap="10px" background="#F2F4F8">
            <Conversation />
            <ChatBody />
        </Container>
    );
};

export default Inbox;
