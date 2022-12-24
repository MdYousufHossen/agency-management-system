import { Fragment, useEffect, useState } from "react";
import { FadeLoader, PuffLoader } from "react-spinners";
import { useAppSelector } from "~/app/hooks";
import Container from "~/components/Container";
import Typography from "~/components/Typography";
import { useAddProjectMutation } from "~/feautres/projects/projectApi";
import { useGetTeamsQuery } from "~/feautres/team/teamApi";
import FormStyle from "~/styles/Form";
import ModalStyle from "~/styles/Modal";
interface ModalType {
    open: boolean;
    control: () => void;
}
const AddProject = ({ open, control }: ModalType) => {
    const { data: team, isError, isLoading } = useGetTeamsQuery();
    const [name, setName] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [selectedTeam, setSelectedTeam] = useState<{ name: string; id: string }>();
    const user = useAppSelector((state) => state.auth.user);
    const [addProject, { data, isLoading: projectIsLoading, isSuccess }] = useAddProjectMutation();

    useEffect(() => {
        if (isSuccess) {
            control();
            setName("");
            setDescription("");
        }
    }, [isSuccess]);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const author = {
            _id: user._id,
            email: user.email,
            role: user.role,
            firstName: user.firstName,
            lastName: user.lastName,
            updatedAt: user.updatedAt,
        };
        addProject({
            name,
            description,
            team: selectedTeam,
            author,
        });
        console.log({ name, description, team: selectedTeam });
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
    } else if (!isLoading && !isError && team?.data.length === 0) {
        content = (
            <Container>
                {" "}
                <Typography variant="body1">Teams not found!</Typography>
            </Container>
        );
    } else if (!isLoading && !isError && team && team.data.length > 0) {
        content = (
            <Container width="100%">
                <Typography align="center" margin="10px" clickable variant="title3">
                    Create Project
                </Typography>
                <FormStyle.Wrapper onSubmit={handleSubmit}>
                    <FormStyle.Input required onChange={(e) => setName(e.target.value)} placeholder="write project name" />
                    <FormStyle.Select required onChange={(e) => setSelectedTeam(JSON.parse(e.target.value))}>
                        <FormStyle.Option value="" selected disabled hidden>
                            Choose team...
                        </FormStyle.Option>
                        {team.data.map((item) => (
                            <FormStyle.Option key={item._id as unknown as number} value={JSON.stringify({ name: item.name, id: item._id })}>
                                {item.name}
                            </FormStyle.Option>
                        ))}
                    </FormStyle.Select>
                    <FormStyle.TextArea required onChange={(e) => setDescription(e.target.value)} placeholder="write project Description" />
                    <FormStyle.Button type="submit" disabled={projectIsLoading}>
                        {projectIsLoading ? <PuffLoader size={25} color="" /> : "Submit"}
                    </FormStyle.Button>
                </FormStyle.Wrapper>
            </Container>
        );
    }
    return open ? (
        <Fragment>
            <ModalStyle.Background onClick={control}></ModalStyle.Background>
            <ModalStyle.Content top="300px">{content}</ModalStyle.Content>
        </Fragment>
    ) : null;
};

export default AddProject;
