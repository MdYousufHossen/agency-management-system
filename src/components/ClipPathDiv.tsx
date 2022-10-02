import styled from "styled-components";

const ClipPathDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    clip-path: polygon(0 0, 100% 0%, 100% 98%, 0 91%);
    position: relative;
    background-color: #12141d;
    height: 90vh;
    &:after {
        clip-path: polygon(0 91%, 100% 98%, 100% 120%, 0 98%);
        background: #e99d15;
        content: "";
        position: absolute;
        left: 0;
        top: -2%;
        right: 0;
        height: 100%;
        display: block;
        z-index: 9;
    }
`;

export default ClipPathDiv;
// clip-path: polygon(0 0, 100% 0%, 100% 99%, 0 91%);
// -webkit-clip-path: polygon(0 0, 100% 0%, 100% 99%, 0 91%);
