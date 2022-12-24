import React, { Fragment, useState } from "react";
import { useAppSelector } from "~/app/hooks";
import Typography from "~/components/Typography";
import { useAddConversationMutation } from "~/feautres/conversation/conversation";
import { useGetUserQuery } from "~/feautres/users/user";
import ModalStyle from "~/styles/Modal";

interface WriteMessageType {
    open: boolean;
    control: () => void;
    email: string;
}
const WriteMessage = ({ open, control, email }: WriteMessageType) => {
    const user = useAppSelector((state) => state.auth.user);
    const { data, isLoading, error, isError } = useGetUserQuery(email, {
        skip: !email,
    });
    const [AddConversation, { data: addConData, isLoading: AddConIsLoading, error: AddConError, isError: AddConIsError }] = useAddConversationMutation();
    const [message, setMessage] = useState<string>("");
    if (!user) return null;
    const sender = {
        _id: user._id,
        email: user.email,
        role: user.role,
        firstName: user?.firstName,
        lastName: user?.lastName,
        updatedAt: user?.updatedAt,
    };
    const receiver = data?.data;

    const conversationData = {
        sender,
        receiver,
        message,
    };
    console.log(message);
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        AddConversation(conversationData);
    };
    return open ? (
        <Fragment>
            <ModalStyle.Background onClick={control}></ModalStyle.Background>
            <ModalStyle.Content>
                <Typography margin="20px" align="center" variant="title5">
                    {email}
                </Typography>
                <form onSubmit={handleSubmit}>
                    <textarea onChange={(e) => setMessage(e.target.value)} rows={3} cols={30}></textarea>
                    <br />
                    <button type="submit">submit</button>
                </form>
            </ModalStyle.Content>
        </Fragment>
    ) : null;
};

export default WriteMessage;
