import BlankInbox from "~/components/BlankInbox";
import Container from "~/components/Container";
import Conversation from "~/container/Conversations";

const ConversationPage = () => {
    return (
        <Container displayFlex width="100%" height="100%" gap="10px" background="#F2F4F8">
            <Conversation />
            <BlankInbox />
        </Container>
    );
};

export default ConversationPage;
