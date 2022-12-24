import styled from "styled-components";

interface MessageProps {
    partner?: boolean;
}
interface conversationProps {
    justifyBetween?: boolean;
    alignItemsStart?: boolean;
    hover?: boolean;
    margin?: string;
    isActive?: boolean;
    padding?: string;
}

const Conversations = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const Conversation = styled.li<conversationProps>`
    display: flex;

    cursor: pointer;
    border-radius: 20px;

    ${(p) =>
        p.hover &&
        ` &:hover {
        background-color: #105b72c2;
        color: white;
    } `}

    ${(p) => p.margin && `margin:${p.margin};`}
    ${(p) => p.padding && `padding:${p.padding};`}
    ${(p) => p.justifyBetween && `justify-content: space-between;`}
    ${(p) => p.alignItemsStart && `align-items: flex-start;`}
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
