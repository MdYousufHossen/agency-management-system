import React, { useEffect, useState } from "react";
import { useAppSelector } from "~/app/hooks";
import Container from "~/components/Container";
import Icon, { ICON_NAME } from "~/components/Icon";
import InputField from "~/components/InputField";
import { useAddMessageMutation } from "~/feautres/message/message";

const ChatOption = ({ info, conversationId }: { info: userType; conversationId: string }) => {
    const user = useAppSelector((state) => state.auth.user) || {};
    const [text, setText] = useState("");
    const [addMessage, { data, isLoading, error: resErr, isError, isSuccess }] = useAddMessageMutation();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const sender = {
            _id: user._id,
            email: user.email,
            role: user.role,
            firstName: user?.firstName,
            lastName: user?.lastName,
        };

        addMessage({
            conversationId,
            sender: sender,
            receiver: info,
            message: text,
        });
    };
    useEffect(() => {
        setText(" ");
    }, [isSuccess]);
    return (
        <form onSubmit={handleSubmit}>
            <Container width="95%" displayFlex alignItemsCenter justifyContentCenter>
                <InputField
                    placeholder="Type a message . . . ."
                    type="text"
                    width="40vw"
                    onChange={(e) => setText(e.target.value)}
                    height="40px"
                    value={text}
                    icon={ICON_NAME.Filter}
                />
                <button type="submit" style={{ all: "unset", cursor: "pointer" }}>
                    <Icon name={ICON_NAME.messageSend} height={40} width={40} color="#3BA58B" />
                </button>
            </Container>
        </form>
    );
};

export default ChatOption;
