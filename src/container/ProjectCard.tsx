import { useDrag } from "react-dnd";
import AbsoluteContent from "~/components/AbsoluteContent";
import Container from "~/components/Container";
import Icon, { ICON_NAME } from "~/components/Icon";
import Typography from "~/components/Typography";
import TeamStyle from "~/styles/Team";

const ProjectCard = ({ project, backlog }: { project: projectType; backlog?: boolean }) => {
    // const {user}=useSelector((state)=>state.auth)
    const [{ isDragging }, drag] = useDrag({
        type: "project",
        item: project,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        // canDrag:user?.status==="admin"
    });
    return (
        <Container
            background="#C5D5FE"
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
                <Typography color="white" background="#7cbdbf" br="10px" pl="5px" pr="5px" variant="body2">
                    {project.name} team of <span style={{ color: "black" }}> {project.team.name}</span>
                </Typography>

                {backlog && <Icon name={ICON_NAME.Trash} height={20} width={20} />}
            </Container>
            <Typography pt="10px" pb="10px" variant="body2">
                {project.description}
            </Typography>
            {/* card footer..... */}
            <AbsoluteContent width="95%" bottom="10px">
                <Container width="100%" displayFlex justifyBetween alignItemsCenter>
                    <Container width="100%" alignItemsCenter displayFlex>
                        <Icon color="gray" name={ICON_NAME.Calender} height={20} width={20} />
                        <Typography color="gray" pl="10px" variant="body2">
                            {project.updatedAt}
                        </Typography>
                    </Container>
                    <TeamStyle.Avater src="https://faces-img.xcdn.link/thumb-lorem-face-2929_thumb.jpg" alt="" />
                </Container>
            </AbsoluteContent>
        </Container>
    );
};

export default ProjectCard;
