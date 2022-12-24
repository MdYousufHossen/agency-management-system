import { Fragment, useEffect, useState } from "react";
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
    const [getConversationalUsers, { data, isLoading, error: resErr, isError }] = useGetConversationalUsersMutation();
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
    return open ? (
        <Fragment>
            <ModalStyle.Background onClick={control}></ModalStyle.Background>
            <ModalStyle.Content>
                {data?.data.map((item: any) => {
                    return (
                        <Container>
                            <Typography margin="10px" clickable onClick={() => handleUserSelect(item.email)} variant="body1">
                                {item.firstName + " " + item.lastName}
                            </Typography>
                        </Container>
                    );
                })}
            </ModalStyle.Content>
            <WriteMessage open={opened} control={controleModal} email={conversationalEmal} />
        </Fragment>
    ) : null;
};

export default AddConversation;
