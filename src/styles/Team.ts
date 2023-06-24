import styled from "styled-components";
import { ReactComponent as More } from "~/assets/icons/more.svg";

const Wrapper = styled.div`
    width: 300px;
    height: 180px;
    background: rgb(175, 179, 152);
    background: linear-gradient(15deg, rgba(175, 179, 152, 1) 0%, rgba(223, 222, 208, 1) 35%, rgba(165, 222, 233, 1) 73%);
    border-radius: 20px;
    overflow: hidden;
    position: relative;
`;
const MoreIcon = styled(More)`
    all: unset;
`;
const Avater = styled.img<any>`
    border-radius: 50%;
    width: ${(p) => p.width || "40px"};
    height: ${(p) => p.height || "50px"};
`;

const TeamStyle = {
    Wrapper,
    MoreIcon,
    Avater,
};
export default TeamStyle;
