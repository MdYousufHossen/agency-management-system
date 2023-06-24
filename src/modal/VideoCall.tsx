import { Fragment, useContext } from "react";
import Typography from "~/components/Typography";
import { SocketContext } from "~/context/SocketContext";
import ModalStyle from "~/styles/Modal";

interface ModalType {
    open: boolean;
    control: () => void;
    partnerInfo: userType;
}

const VideoCall = ({ open, control, partnerInfo }: ModalType) => {
    const { callUser } = useContext(SocketContext);
    return open ? (
        <Fragment>
            <ModalStyle.Background onClick={control}></ModalStyle.Background>
            <ModalStyle.Content width="90%" height="80%" top="">
                <Typography margin="20px" align="center" variant="title5">
                    Video calling......
                </Typography>

                <button onClick={() => callUser(partnerInfo._id)}>Call</button>
            </ModalStyle.Content>
        </Fragment>
    ) : null;
};

export default VideoCall;
