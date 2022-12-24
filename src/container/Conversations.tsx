import { Fragment, useState } from "react";
import { FadeLoader } from "react-spinners";
import { useAppSelector } from "~/app/hooks";
import Container from "~/components/Container";
import Conversation from "~/components/Conversation";
import Icon, { ICON_NAME } from "~/components/Icon";
import InputField from "~/components/InputField";
import Spacer from "~/components/Spacer";
import Typography from "~/components/Typography";
import { conversationType, useGetConversationsQuery } from "~/feautres/conversation/conversation";
import AddConversation from "~/modal/AddConversation";
import ChatStyle from "~/styles/ChatApp";

const Conversations = () => {
    const user = useAppSelector((state) => state.auth.user);
    const [opened, setOpened] = useState<boolean>(false);
    const controleModal = () => {
        setOpened((prevState) => !prevState);
    };
    if (!user) return null;
    const { data, isLoading, error, isError } = useGetConversationsQuery(user.email);
    let content = null;
    if (isLoading) {
        content = <FadeLoader cssOverride={{ margin: "auto" }} color="#36d7b7" />;
    } else if (!isLoading && isError) {
        content = <Typography variant="body1">Error</Typography>;
    } else if (!isLoading && !isError && data?.data.length === 0) {
        content = <Typography variant="body1">Teams not found!</Typography>;
    } else if (!isLoading && !isError && data && data.data.length > 0) {
        const emails = data.data.map((item) => {
            const itemdata = item.user.find((item) => item.email != user.email);

            return itemdata ? itemdata.email : "";
        });
        emails.push(user.email);
        content = (
            <Fragment>
                <Container width="30%" brb="30px" brt="30px" shadowBox="5px 0 5px #E1E3E8" background="#F5F7FB" height="100%">
                    <ChatStyle.Conversations>
                        <Container width="100%" displayFlex alignItemsCenter>
                            <Container width="fit-content">
                                <InputField placeholder={user.firstName} width="100%" height="35px" type="search" icon={ICON_NAME.Search} />
                            </Container>
                            <Spacer flex />
                            <Container width="fit-content">
                                <Icon name={ICON_NAME.Calender} onClick={controleModal} height={25} width={25} />
                            </Container>
                        </Container>

                        <hr />
                        <Container height="85vh" background="none" width="90%" hideScrollbar overflowHidden overflowScrollY>
                            {data.data.map((conversation: conversationType) => (
                                <Conversation conversation={conversation} userEmail={user.email} />
                            ))}
                        </Container>
                    </ChatStyle.Conversations>
                </Container>
                <AddConversation open={opened} control={controleModal} emails={emails} />
            </Fragment>
        );
    }
    // const emails = data?.data.map((item) => {
    //     const itemdata = item?.user.find((item) => item.email != user.email);
    //     return itemdata?.email;
    // });

    return content;
};

export default Conversations;
