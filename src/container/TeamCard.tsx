import { Fragment, useState } from "react";
import AbsoluteContent from "~/components/AbsoluteContent";
import Container from "~/components/Container";
import Icon, { ICON_NAME } from "~/components/Icon";
import Typography from "~/components/Typography";
import AddTeamMember from "~/modal/AddTeamMember";
import TeamStyle from "~/styles/Team";
const TeamCard = ({ team }: { team: TeamType }) => {
    const [opened, setOpened] = useState<boolean>(false);
    const controleModal = () => {
        setOpened((prevState) => !prevState);
    };
    const emails = team.user.map((item) => {
        return item.email;
    });
    return (
        <Fragment>
            <TeamStyle.Wrapper>
                <Container width="90%" pt="10px" displayFlex justifyBetween>
                    <Typography color="white" background="#7cbdbf" br="10px" pl="5px" pr="5px" variant="body2">
                        {team.name}
                    </Typography>
                    <Icon name={ICON_NAME.More} height={15} width={15} onClick={controleModal} />
                </Container>
                <Container pt="15px" pl="10px" pr="10px" gap="10px" displayFlex flexWrape width="100%">
                    {team.user.map((user) => (
                        <TeamStyle.Avater
                            title={user.firstName + " " + user.lastName}
                            key={user._id}
                            src="https://faces-img.xcdn.link/thumb-lorem-face-2929_thumb.jpg"
                            alt=""
                        />
                    ))}
                </Container>
                <Typography pl="10px" pr="10px" pt="10px" variant="body2">
                    {team.description}
                </Typography>

                <AbsoluteContent width="95%" bottom="10px">
                    <Container width="100%" pl="10px" pt="10px" displayFlex alignItemsCenter>
                        <Icon color="gray" name={ICON_NAME.Calender} height={18} width={18} />
                        <Typography color="gray" pl="10px" variant="body2">
                            {team.createdAt}
                        </Typography>
                    </Container>
                </AbsoluteContent>
            </TeamStyle.Wrapper>
            <AddTeamMember emails={emails} teamId={team._id} control={controleModal} open={opened} />
        </Fragment>
    );
};

export default TeamCard;
