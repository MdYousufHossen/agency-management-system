import { Fragment, useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import { useAppSelector } from "~/app/hooks";
import Container from "~/components/Container";
import Typography from "~/components/Typography";
import { useCreateTeamMutation } from "~/feautres/team/teamApi";
import FormStyle from "~/styles/Form";
import ModalStyle from "~/styles/Modal";

interface ModalPropType {
    open: boolean;
    control: () => void;
}
const CreateTeam = ({ open, control }: ModalPropType) => {
    const user = useAppSelector((state) => state.auth.user);
    const [createTeam, { data, isLoading, error, isError, isSuccess }] = useCreateTeamMutation();
    const [name, setName] = useState<string>();
    const [description, setDescription] = useState<string>();
    if (!user) return null;
    useEffect(() => {
        if (isSuccess) {
            control();
            setName("");
            setDescription("");
        }
    }, [isSuccess]);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        // const author = {
        //     _id: user._id,
        //     email: user.email,
        //     role: user.role,
        //     firstName: user.firstName,
        //     lastName: user.lastName,
        //     updatedAt: user.updatedAt,
        // };
        createTeam({
            name,
            description,
            user: [user._id],
        });
    };
    return open ? (
        <Fragment>
            <ModalStyle.Background onClick={control}></ModalStyle.Background>
            <ModalStyle.Content>
                <Container width="90%">
                    <Typography align="center" margin="10px" clickable variant="title3">
                        Create Team
                    </Typography>
                    <FormStyle.Wrapper onSubmit={handleSubmit}>
                        <FormStyle.Input onChange={(e) => setName(e.target.value)} placeholder="please write your team title" />
                        <FormStyle.TextArea
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="please write your team description"
                            name="test"
                            id=""
                            cols={23}
                            rows={5}
                        />

                        <FormStyle.Button disabled={isLoading} type="submit">
                            {isLoading ? <PuffLoader size={25} color="" /> : "Submit"}
                        </FormStyle.Button>
                    </FormStyle.Wrapper>
                </Container>
            </ModalStyle.Content>
        </Fragment>
    ) : null;
};

export default CreateTeam;
