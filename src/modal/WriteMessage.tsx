import React, { Fragment, useEffect, useState } from "react";
import { FadeLoader, PuffLoader } from "react-spinners";
import { useAppSelector } from "~/app/hooks";
import Container from "~/components/Container";
import Typography from "~/components/Typography";
import { useAddConversationMutation } from "~/feautres/conversation/conversation";
import { useGetUserQuery } from "~/feautres/users/user";
import FormStyle from "~/styles/Form";
import ModalStyle from "~/styles/Modal";

interface WriteMessageType {
    open: boolean;
    control: () => void;
    email: string;
    addConControl: () => void;
}
const WriteMessage = ({ open, control, email, addConControl }: WriteMessageType) => {
    const user = useAppSelector((state) => state.auth.user);
    const { data, isSuccess, isLoading, error, isError } = useGetUserQuery(email, {
        skip: !email,
    });
    const [AddConversation, { data: addConData, isSuccess: addConIsSuccess, isLoading: AddConIsLoading, error: AddConError, isError: AddConIsError }] =
        useAddConversationMutation();
    const [message, setMessage] = useState<string>("");
    if (!user) return null;

    const sender = {
        _id: user._id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        updatedAt: user.updatedAt,
    };
    const receiver = data?.data;

    const conversationData = {
        sender,
        receiver,
        message,
    };
    useEffect(() => {
        if (addConIsSuccess) {
            control();
            addConControl();
            setMessage("");
        }
    }, [addConIsSuccess]);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        AddConversation(conversationData);
    };

    let content = null;
    if (isLoading) {
        content = (
            <Container>
                <FadeLoader cssOverride={{ margin: "auto" }} color="#36d7b7" />
            </Container>
        );
    } else if (!isLoading && isError) {
        content = (
            <Container>
                <Typography variant="body1">Error occurred</Typography>
            </Container>
        );
    } else if (!isLoading && !isError && data?.data) {
        content = (
            <Fragment>
                <Typography margin="20px" align="center" variant="title5">
                    {data.data.firstName + " " + data.data.lastName}
                </Typography>
                <FormStyle.Wrapper onSubmit={handleSubmit}>
                    <FormStyle.TextArea onChange={(e) => setMessage(e.target.value)} rows={3} cols={30}></FormStyle.TextArea>
                    <br />
                    <FormStyle.Button disabled={AddConIsLoading} type="submit">
                        {AddConIsLoading ? <PuffLoader size={25} color="" /> : "Submit"}
                    </FormStyle.Button>
                </FormStyle.Wrapper>
            </Fragment>
        );
    }

    return open ? (
        <Fragment>
            <ModalStyle.Background onClick={control}></ModalStyle.Background>
            <ModalStyle.Content>{content}</ModalStyle.Content>
        </Fragment>
    ) : null;
};

export default WriteMessage;
