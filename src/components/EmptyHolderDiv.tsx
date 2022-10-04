import styled from "styled-components";

export interface EmptyHolderDivProps {
    height?: string;
    width?: string;
}

const EmptyHolderDiv = styled.div<EmptyHolderDivProps>`
    position: relative;
    ${(p) => p.height && `height: ${p.height};`}
    ${(p) => p.width && `width: ${p.width};`}
`;

export default EmptyHolderDiv;
