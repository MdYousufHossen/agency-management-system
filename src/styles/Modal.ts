import styled from "styled-components";
interface ModalContentPropsType {
    top?: string;
    width?: string;
    height?: string;
}
const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    inset: 0;
    z-index: 110;
    background: black;
    opacity: 0.5;
    backdrop-filter: blur(1px);
`;
const Content = styled.div<ModalContentPropsType>`
    width: ${(p) => p.width || "300px"};
    height: ${(p) => p.height || "300px"};
    border-radius: 20px;
    position: absolute;
    background-color: white;
    top: ${(p) => p.top || "50%"};
    left: 50%;
    z-index: 110;
    transform: translate(-50%, -50%);
`;

const ModalStyle = {
    Background,
    Content,
};
export default ModalStyle;
