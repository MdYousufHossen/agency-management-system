import { Fragment, useState } from "react";
import AddTask from "~/modal/AddTask";
import Container from "./Container";
import Icon, { ICON_NAME } from "./Icon";
import Typography from "./Typography";

interface TaskHeaderPropType {
    name: string;
    count: number;
    backlog?: boolean;
}
const TaskHeader = ({ backlog, name, count }: TaskHeaderPropType) => {
    const [opened, setOpened] = useState<boolean>(false);
    const controleModal = () => {
        setOpened((prevState) => !prevState);
    };
    return (
        <Fragment>
            <Container pb="20px" width="95%" displayFlex justifyBetween>
                <Container width="100%" height="100%" displayFlex>
                    <Typography variant="title4">{name}</Typography>
                    <Typography margin="0 10px" pl="10px" pr="10px" br="5px" background="#D7E0FE" variant="title4">
                        {count}
                    </Typography>
                </Container>
                {backlog && <Icon name={ICON_NAME.Add} height={20} width={20} onClick={controleModal} />}
            </Container>
            <AddTask open={opened} control={controleModal} />
        </Fragment>
    );
};

export default TaskHeader;
