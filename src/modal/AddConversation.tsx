import { Fragment, useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import Container from "~/components/Container";
import Typography from "~/components/Typography";
import { useGetConversationalUsersMutation } from "~/feautres/conversation/conversation";
import ModalStyle from "~/styles/Modal";
import WriteMessage from "./WriteMessage";

interface ModalType {
    open: boolean;
    control: () => void;
    emails: string[];
}
const AddConversation = ({ open, control, emails }: ModalType) => {
    const [getConversationalUsers, { data, isLoading, error, isError }] = useGetConversationalUsersMutation();
    const [opened, setOpened] = useState<boolean>(false);
    const [conversationalEmal, setConversationalEmal] = useState<string>("");
    const controleModal = () => {
        setOpened((prevState) => !prevState);
    };
    useEffect(() => {
        getConversationalUsers(emails);
    }, [open]);
    const handleUserSelect = (email: string) => {
        controleModal();
        setConversationalEmal(email);
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
                <Typography align="center" variant="body1">
                    Error occurred
                </Typography>
            </Container>
        );
    } else if (!isLoading && !isError && data?.data.length === 0) {
        content = (
            <Container>
                <Typography align="center" variant="body1">
                    user not found!
                </Typography>
            </Container>
        );
    } else if (!isLoading && !isError && data && data.data.length > 0) {
        content = data.data.map((item: any) => {
            return (
                // warning key
                <Container>
                    <Typography margin="10px" clickable onClick={() => handleUserSelect(item.email)} variant="body1">
                        {item.firstName + " " + item.lastName}
                    </Typography>
                </Container>
            );
        });
    }

    return open ? (
        <Fragment>
            <ModalStyle.Background onClick={control}></ModalStyle.Background>
            <ModalStyle.Content>
                <Typography margin="20px" align="center" variant="title5">
                    Select your conversation partner
                </Typography>
                {content}
            </ModalStyle.Content>
            <WriteMessage open={opened} control={controleModal} addConControl={control} email={conversationalEmal} />
        </Fragment>
    ) : null;
};

export default AddConversation;
