import { Fragment } from "react";
import { FadeLoader } from "react-spinners";
import Container from "~/components/Container";
import Backlog from "~/components/TaskBoard/Backlog";

import Doing from "~/components/TaskBoard/Doing";
import Done from "~/components/TaskBoard/Done";
import Ready from "~/components/TaskBoard/Ready";
import Review from "~/components/TaskBoard/Review";
import Typography from "~/components/Typography";
import { useGetTaskQuery } from "~/feautres/task/taskApi";

const Task = () => {
    const { data, isLoading, isError, error } = useGetTaskQuery();
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
                <Done data={done} />
            </Container>
        );
    }

    return (
        <Fragment>
            <Container width="100%">
                <Typography pt="10px" pb="10px" align="center" variant="title2">
                    Task Management
                </Typography>
            </Container>
            <Container overflowScrollX width="100%" height="90vh">
                {content}
            </Container>
        </Fragment>
    );
};

export default Task;
