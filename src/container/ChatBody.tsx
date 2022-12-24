import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { useAppSelector } from "~/app/hooks";
import Container from "~/components/Container";
import Icon, { ICON_NAME } from "~/components/Icon";
import Spacer from "~/components/Spacer";
import Typography from "~/components/Typography";
import { useGetMessagesQuery } from "~/feautres/message/message";
import ChatStyle from "~/styles/ChatApp";
import ChatOption from "./ChatOption";
import Messages from "./Messages";

const ChatBody = () => {
    const { id } = useParams<keyof { id: string }>() as { id: string };
    const user = useAppSelector((state) => state.auth.user);

    const { data, isLoading, error, isError } = useGetMessagesQuery(id);

    let content = null;
    if (isLoading) {
        content = <FadeLoader cssOverride={{ margin: "auto" }} color="#36d7b7" />;
    } else if (!isLoading && isError) {
        content = (
            <Typography variant="body1" color="black">
                Error
            </Typography>
        );
    } else if (!isLoading && !isError && data?.data.messages.length === 0) {
        content = (
            <Typography variant="body1" color="black">
                Teams not found!
            </Typography>
        );
    } else if (!isLoading && !isError && data && data?.data.messages.length > 0) {
        const { totalCount, messages } = data.data;
        const firstMessage = data.data.messages[0];
        const partnerInfo = firstMessage.receiver.email != user.email ? firstMessage.receiver : firstMessage.sender;

        content = (
            <Fragment>
                <Container width="100%" displayFlex alignItemsCenter>
                    <Container width="fit-content" displayFlex alignItemsCenter>
                        <ChatStyle.avatar
                            src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                            alt="profile"
                            width={50}
                            height={50}
                        />
                        <Typography margin="0 10px" variant="body1" color="black">
                            {partnerInfo.firstName}
                        </Typography>
                    </Container>
                    <Spacer flex />
                    <Container width="fit-content" pr="20px">
                        <Icon name={ICON_NAME.Call} width={30} height={30} />
                    </Container>
                </Container>
                <Messages messages={messages} totalCount={totalCount} />
                <ChatOption info={partnerInfo} conversationId={id} />
            </Fragment>
        );
    }

    return (
        <Container brb="30px" background="#F5F7FB" brt="30px" shadowBox="0 0 8px 5px  #E1E3E8" height="100%" width="70%">
            {content}
        </Container>
    );
};

export default ChatBody;
