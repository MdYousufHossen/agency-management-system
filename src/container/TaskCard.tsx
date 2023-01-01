import { useDrag } from "react-dnd";
import { useAppSelector } from "~/app/hooks";
import AbsoluteContent from "~/components/AbsoluteContent";
import Container from "~/components/Container";
import Icon, { ICON_NAME } from "~/components/Icon";
import Typography from "~/components/Typography";
import { useDeleteTaskMutation } from "~/feautres/task/taskApi";
import TeamStyle from "~/styles/Team";

const TaskCard = ({ project, backlog }: { project: taskType; backlog?: boolean }) => {
    const user = useAppSelector((state) => state.auth.user);
    const [{ isDragging }, drag] = useDrag({
        type: "task",
        item: project,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        canDrag: user?.email === project.author.email,
    });
    const [deleteTask, { data, isLoading, error, isError }] = useDeleteTaskMutation();

    const handleDelete = () => {
        deleteTask(project._id);
    };
    return (
        <Container
            background="#C5D5FA"
            ref={drag}
            opacity={isDragging ? 0.2 : 10}
            draggable="true"
            padding="10px"
            brt="15px"
            brb="15px"
            width="300px"
            height="150px"
            clickable
        >
            <Container width="100%" pt="10px" displayFlex justifyBetween>
                <Container width="100%" alignItemsCenter displayFlex>
                    <TeamStyle.Avater
                        title={project.author.firstName + " " + project.author.lastName}
                        src="https://faces-img.xcdn.link/thumb-lorem-face-2929_thumb.jpg"
                        alt=""
                    />
                    <Typography margin="0 10px" color="white" background="#7cbdbf" br="10px" pl="5px" pr="5px" variant="body2">
                        <span style={{ color: "black" }}> {project.author.firstName + " " + project.author.lastName}</span>
                    </Typography>
                </Container>

                {backlog && user?.email === project.author.email && <Icon name={ICON_NAME.Trash} height={20} width={20} onClick={handleDelete} />}
            </Container>
            <Container pt="5px" width="100%" alignItemsCenter displayFlex justifyBetween>
                <Typography variant="body2">
                    Team : <span style={{ color: "gray" }}>{project.team.name}</span>
                </Typography>
                <Typography variant="body2">
                    Project : <span style={{ color: "gray" }}>{project.project.name}</span>
                </Typography>
            </Container>
            <Typography pt="5px" variant="body2">
                {project.description}
            </Typography>
            {/* card footer..... */}
            <AbsoluteContent width="95%" bottom="10px">
                <Container width="100%" displayFlex alignItemsCenter>
                    <Icon color="gray" name={ICON_NAME.Calender} height={20} width={20} />
                    <Typography color="gray" pl="10px" variant="body2">
                        {project.updatedAt}
                    </Typography>
                </Container>
            </AbsoluteContent>
        </Container>
    );
};

export default TaskCard;
