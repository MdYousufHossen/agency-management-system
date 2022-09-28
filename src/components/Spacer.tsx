import styled from "styled-components";

interface SpacerProps {
    width?: string;
    height?: string;
    flex?: boolean;
}

const Spacer = styled.div<SpacerProps>`
    ${(p) => p.width && `width: ${p.width}`};
    ${(p) => p.height && `height: ${p.height}`};
    ${(p) => p.flex && `flex: 1`};
    background-color: transparent;
`;

export default Spacer;
