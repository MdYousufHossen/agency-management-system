import styled from "styled-components";

interface MessageProps {
    partner?: boolean;
}

const Conversations = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const Conversation = styled.li`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    // background: gray;
    border-radius: 20px;
`;

const avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const messages = styled.ul`
    height: calc(100vh - 120px);
    margin: 0 20px;
    list-style: none;
    padding: 0;
`;
const messageWrapper = styled.li<MessageProps>`
    display: flex;
    justify-content: ${({ partner }) => (partner ? " flex-start" : "flex-end")};
`;
const message = styled.li<MessageProps>`
    position: relative;
    background: ${({ partner }) => (partner ? "#ffffff" : "#4D426D")};
    color: ${({ partner }) => (partner ? "blck" : "white")};
    border-radius: ${(p) => (p.partner ? " 0 10px 10px 10px" : " 10px 0 10px 10px")};
    margin-top: 20px;
    padding: 10px;
`;

const ChatStyle = {
    Conversations,
    Conversation,
    avatar,
    messages,
    messageWrapper,
    message,
};
export default ChatStyle;
// align-items: ${(p) => (p.partner ? "flex-start" : "flex-end")};
