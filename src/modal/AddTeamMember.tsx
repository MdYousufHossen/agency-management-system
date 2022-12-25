import { Fragment } from "react";
import Container from "~/components/Container";
import Typography from "~/components/Typography";
import ModalStyle from "~/styles/Modal";

interface ModalPropType {
    open: boolean;
    control: () => void;
    email: string;
}
const AddTeamMember = ({ open, control, email }: ModalPropType) => {
    return open ? (
        <Fragment>
            <ModalStyle.Background onClick={control}></ModalStyle.Background>
            <ModalStyle.Content>
                {/* <Icon color="red" name={ICON_NAME.Trash} height={15} width={15} onClick={control} /> */}
                <Container>
                    <Typography margin="10px" clickable variant="body1">
                        add team member
                    </Typography>
                </Container>
                {/* {data?.data.map((item: any) => {
                    return (
                        <Container>
                            <Typography margin="10px" clickable onClick={() => handleUserSelect(item.email)} variant="body1">
                                {item.firstName + " " + item.lastName}
                            </Typography>
                        </Container>
                    );
                })} */}
            </ModalStyle.Content>
        </Fragment>
    ) : null;
};

export default AddTeamMember;
