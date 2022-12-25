import { Fragment } from "react";
import { FadeLoader } from "react-spinners";
import Container from "~/components/Container";
import Backlog from "~/components/ProjectBoard/Backlog";
import Blocked from "~/components/ProjectBoard/Blocked";
import Doing from "~/components/ProjectBoard/Doing";
import Done from "~/components/ProjectBoard/Done";
import Ready from "~/components/ProjectBoard/Ready";
import Review from "~/components/ProjectBoard/Review";
import Typography from "~/components/Typography";
import { useGetProjectsQuery } from "~/feautres/projects/projectApi";

const ProjectManagement = () => {
    const { data, isLoading, isError, error } = useGetProjectsQuery();
    let content = null;
    if (isLoading) {
        content = <FadeLoader cssOverride={{ margin: "auto" }} color="#36d7b7" />;
    } else if (!isLoading && isError) {
        content = <Typography variant="title4">Error</Typography>;
    } else if (!isLoading && !isError && data?.data.length === 0) {
        const backlog = data.data.filter((p) => p.status === "Backlog");
        content = (
            <Container width="100%" padding="10px" displayFlex gap="20px">
                <Backlog data={backlog} />
            </Container>
        );
    } else if (!isLoading && !isError && data && data?.data.length > 0) {
        const backlog = data.data.filter((p) => p.status === "Backlog");
        const blocked = data.data.filter((p) => p.status === "Blocked");
        const doing = data.data.filter((p) => p.status === "Doing");
        const done = data.data.filter((p) => p.status === "Done");
        const ready = data.data.filter((p) => p.status === "Ready");
        const review = data.data.filter((p) => p.status === "Review");
        content = (
            <Container width="100%" padding="10px" displayFlex gap="20px">
                <Backlog data={backlog} />
                <Ready data={ready} />
                <Doing data={doing} />
                <Review data={review} />
                <Blocked data={blocked} />
                <Done data={done} />
            </Container>
        );
    }

    return (
        <Fragment>
            <Container width="100%">
                <Typography pt="10px" pb="10px" align="center" variant="title2">
                    Project Management
                </Typography>
            </Container>
            <Container overflowScrollX width="100%" height="90vh">
                {content}
            </Container>
        </Fragment>
    );
};

export default ProjectManagement;
