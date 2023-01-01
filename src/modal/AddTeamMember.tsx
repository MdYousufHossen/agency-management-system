import { Fragment, useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import Container from "~/components/Container";
import Icon, { ICON_NAME } from "~/components/Icon";
import Typography from "~/components/Typography";
import { useGetConversationalUsersMutation } from "~/feautres/conversation/conversation";
import { useUpdateTeamMutation } from "~/feautres/team/teamApi";
import FormStyle from "~/styles/Form";
import ModalStyle from "~/styles/Modal";

interface ModalPropType {
    open: boolean;
    control: () => void;
    emails: string[];
    teamId: String;
}
const AddTeamMember = ({ open, control, emails, teamId }: ModalPropType) => {
    const [member, setMember] = useState<any>([]);
    const [getConversationalUsers, { data, isLoading, error, isError }] = useGetConversationalUsersMutation();
    const [updateTeam, { data: upTeamData, isLoading: teamIsLoading, error: teamError, isError: teamIsError }] = useUpdateTeamMutation();
    useEffect(() => {
        if (open) getConversationalUsers(emails);
    }, [emails, open]);
    const handleSubmit = () => {
        updateTeam({
            id: teamId,
            data: member,
        });
        control();
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
            const selectedObjects = member?.find((p: { _id: any }) => p._id === item?._id);
            const selectedMember = selectedObjects?._id === item?._id;
            const handleSelect = () => {
                const selectedPeople = member?.find((p: { _id: any }) => p._id === item?._id);
                if (selectedPeople) {
                    const alreadySelected = member?.filter((p: { _id: any }) => p._id !== item._id);
                    setMember([...alreadySelected]);
                } else {
                    setMember((prevState: any) => [...prevState, { ...item }]);
                }
            };
            return (
                // warning key
                <Container onClick={handleSelect} displayFlex alignItemsCenter justifyBetween key={item._id}>
                    <Typography margin="10px" clickable variant="body1">
                        {item.firstName + " " + item.lastName}
                    </Typography>
                    {selectedMember && <Icon name={ICON_NAME.GreenTick} width={20} height={20} />}
                </Container>
            );
        });
    }

    return open ? (
        <Fragment>
            <ModalStyle.Background onClick={control}></ModalStyle.Background>
            <ModalStyle.Content>
                <Container width="100%">
                    <Typography align="center" margin="10px" clickable variant="title3">
                        Add team member
                    </Typography>
                    {content}
                </Container>
                <FormStyle.Button onClick={handleSubmit}>Submit</FormStyle.Button>
            </ModalStyle.Content>
        </Fragment>
    ) : null;
};

export default AddTeamMember;
