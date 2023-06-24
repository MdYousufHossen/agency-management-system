import moment from "moment/moment";
import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import { conversationType } from "~/feautres/conversation/conversation";
import ChatStyle from "~/styles/ChatApp";
import Typography from "./Typography";
const Conversation = memo(({ conversation, userEmail }: { conversation: conversationType; userEmail: string }) => {
    const [active, setActive] = useState(Boolean);
    const partner = conversation.user.find((partner) => partner.email != userEmail);

    let activeStyle = {
        textDecoration: "none",
        color: "white",
    };
    let inActiveStyle = {
        textDecoration: "none",
        color: "black",
    };
    return (
        <NavLink
            style={({ isActive }) => {
                setActive(isActive);
                return isActive ? activeStyle : inActiveStyle;
            }}
            to={`/dashboard/chatapp/${conversation._id}`}
            state={{ testvalue: "hello" }}
        >
            <ChatStyle.Conversation
                style={{ backgroundColor: active ? "#105b72c2" : "" }}
                justifyBetween
                alignItemsStart
                hover
                padding="10px 2px"
                margin="0 0 20px 0"
            >
                <ChatStyle.Conversation>
                    <ChatStyle.avatar src={partner?.imageURL} alt="profile" width={50} height={50} />
                    <div>
                        <Typography margin="0 10px" variant="body1">
                            {partner?.firstName}
                        </Typography>
                        {/* message */}
                        <Typography margin="0 10px" variant="body4">
                            {conversation.lastMessage}
                        </Typography>
                    </div>
                </ChatStyle.Conversation>
                {/* time-stemp */}
                <Typography margin="2px 10px auto 0" variant="body5">
                    {moment(conversation.updatedAt).fromNow()}
                </Typography>
            </ChatStyle.Conversation>
        </NavLink>
    );
});

export default Conversation;
