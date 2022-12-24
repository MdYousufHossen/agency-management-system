import { useDrop } from "react-dnd";
import ProjectCard from "~/container/ProjectCard";
import { useProjectUpdateMutation } from "~/feautres/projects/projectApi";
import Container from "../Container";
import ProjectHeader from "../ProjectHeader";

const Ready = ({ data }: { data: projectType[] }) => {
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
                data: { status: "Ready" },
            });
        }
    };
    return (
        <div ref={drop} style={{ backgroundColor: isOver ? "gray" : "", borderRadius: "10px" }}>
            <ProjectHeader name="Ready" count={data.length} />
            <Container height="fit-content" width="330px" displayFlex flexCol gap="10px">
                {data.map((project) => (
                    <ProjectCard key={project._id as unknown as number} project={project} />
                ))}
            </Container>
        </div>
    );
};

export default Ready;
