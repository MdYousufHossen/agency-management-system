import { useDrop } from "react-dnd";
import ProjectCard from "~/container/ProjectCard";
import { useProjectUpdateMutation } from "~/feautres/projects/projectApi";
import Container from "../Container";
import ProjectHeader from "../ProjectHeader";

const Backlog = ({ data }: { data: projectType[] }) => {
    const [projectUpdate] = useProjectUpdateMutation();
    const [{ isOver }, drop] = useDrop({
        accept: "project",
        drop: (item: projectType) => {
            addDropData(item);
        },
        collect: (monitor) => {
            const itemVisible = data.find((p) => p._id === monitor.getItem()?._id);
            return {
                isOver: !!monitor.isOver() && !itemVisible,
            };
        },
    });

    const addDropData = (dropData: projectType) => {
        const projectVisiblety = data.find((p) => p._id === dropData._id);
        if (!projectVisiblety) {
            projectUpdate({
                id: dropData._id,
                data: { status: "Backlog" },
            });
        }
    };

    return (
        <div ref={drop} style={{ backgroundColor: isOver ? "gray" : "", borderRadius: "10px" }}>
            <ProjectHeader backlog name="Backlog" count={data.length} />

            <Container width="330px" height="fit-content" displayFlex flexCol gap="10px">
                {data.map((project) => (
                    <ProjectCard backlog key={project._id as unknown as number} project={project} />
                ))}
            </Container>
        </div>
    );
};

export default Backlog;
