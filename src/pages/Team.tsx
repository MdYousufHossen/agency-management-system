import { Fragment, useState } from "react";
import { FadeLoader } from "react-spinners";
import Container from "~/components/Container";
import Icon, { ICON_NAME } from "~/components/Icon";
import Typography from "~/components/Typography";
import TeamCard from "~/container/TeamCard";
import { useGetTeamsQuery } from "~/feautres/team/teamApi";
import CreateTeam from "~/modal/CreateTeam";
const Team = () => {
    const [opened, setOpened] = useState<boolean>(false);
    const controleModal = () => {
        setOpened((prevState) => !prevState);
    };
    const { data, isError, isLoading } = useGetTeamsQuery();
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
    } else if (!isLoading && !isError && data?.data.length === 0) {
        content = (
            <Container>
                {" "}
                <Typography variant="body1">Teams not found!</Typography>
            </Container>
        );
    } else if (!isLoading && !isError && data && data.data.length > 0) {
        content = (
            <Container justifyContentCenter displayFlex flexWrape width="90%" gap="20px">
                {data?.data.map((team: TeamType) => {
                    return <TeamCard key={team._id as unknown as string} team={team} />;
                })}
            </Container>
        );
    }
    return (
        <Fragment>
            <Container overflowScrollY hideScrollbar width="100%" height="100%">
                <Container width="80%" pt="20px" pb="20px" displayFlex justifyBetween alignItemsCenter>
                    <Typography align="center" variant="title2">
                        All Teams
                    </Typography>
                    <Icon name={ICON_NAME.Add} height={25} width={25} onClick={controleModal} />
                </Container>
                {content}
                <CreateTeam control={controleModal} open={opened} />
            </Container>
        </Fragment>
    );
};

export default Team;
