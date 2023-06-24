import { Fragment, useEffect, useState } from "react";
import { FadeLoader, PuffLoader } from "react-spinners";
import { useAppSelector } from "~/app/hooks";
import Container from "~/components/Container";
import Typography from "~/components/Typography";
import { useGetProjectsQuery } from "~/feautres/projects/projectApi";
import { useAddTaskMutation } from "~/feautres/task/taskApi";
import { useGetTeamsQuery } from "~/feautres/team/teamApi";
import FormStyle from "~/styles/Form";
import ModalStyle from "~/styles/Modal";
interface ModalType {
    open: boolean;
    control: () => void;
}
const AddTask = ({ open, control }: ModalType) => {
    const { data: team, isError: teamIsError, isLoading: teamIsLoading } = useGetTeamsQuery();
    const { data: projects, isLoading: projectIsLoading, isError: projectIsError } = useGetProjectsQuery();
    // const [name, setName] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [selectedTeam, setSelectedTeam] = useState<{ name: string; id: string }>();
    const [selectedProject, setSelectedProject] = useState<{ name: string; id: string }>();
    const user = useAppSelector((state) => state?.auth.user);
    const [addTask, { data, isLoading: taskIsLoading, isSuccess }] = useAddTaskMutation();
    if (!user) return null;
    useEffect(() => {
        if (isSuccess) {
            control();
            // setName("");
            setDescription("");
        }
    }, [isSuccess]);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        addTask({
            description,
            team: selectedTeam,
            project: selectedProject,
            author: user._id,
        });
    };

    let content = null;
    if (teamIsLoading && projectIsLoading) {
        content = (
            <Container>
                <FadeLoader cssOverride={{ margin: "auto" }} color="#36d7b7" />
            </Container>
        );
    } else if (!teamIsLoading && !projectIsLoading && teamIsError && projectIsError) {
        content = (
            <Container>
                <Typography variant="body1">Error occurred</Typography>
            </Container>
        );
    } else if (!teamIsLoading && !projectIsError && team?.data.length === 0 && projects?.data.length === 0) {
        content = (
            <Container>
                {" "}
                <Typography variant="body1">Teams not found!</Typography>
            </Container>
        );
    } else if (!teamIsLoading && !projectIsLoading && !teamIsError && !projectIsError && team && projects && team.data.length > 0 && projects.data.length > 0) {
        content = (
            <Container width="100%">
                <Typography align="center" margin="10px" clickable variant="title3">
                    Assign Task
                </Typography>
                <FormStyle.Wrapper onSubmit={handleSubmit}>
                    {/* <FormStyle.Input required onChange={(e) => setName(e.target.value)} placeholder="write task summary" /> */}
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

                    <FormStyle.Select required onChange={(e) => setSelectedProject(JSON.parse(e.target.value))}>
                        <FormStyle.Option value="" selected disabled hidden>
                            Choose project...
                        </FormStyle.Option>
                        {projects.data.map((project) => (
                            <FormStyle.Option key={project._id as unknown as number} value={JSON.stringify({ name: project.name, id: project._id })}>
                                {project.name}
                            </FormStyle.Option>
                        ))}
                    </FormStyle.Select>
                    <FormStyle.TextArea required onChange={(e) => setDescription(e.target.value)} placeholder="write task Description" />
                    <FormStyle.Button type="submit" disabled={taskIsLoading}>
                        {taskIsLoading ? <PuffLoader size={25} color="" /> : "Submit"}
                    </FormStyle.Button>
                </FormStyle.Wrapper>
            </Container>
        );
    }
    return open ? (
        <Fragment>
            <ModalStyle.Background onClick={control}></ModalStyle.Background>
            <ModalStyle.Content height="380px" top="300px">
                {content}
            </ModalStyle.Content>
        </Fragment>
    ) : null;
};

export default AddTask;
