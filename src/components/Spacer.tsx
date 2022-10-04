import styled from "styled-components";
import { device } from "~/universal/breakpoints/displayBreakpoints";

interface SpacerProps {
    width?: string;
    height?: string;
    flex?: boolean;
    mobile?: string;
}

const Spacer = styled.div<SpacerProps>`
    ${(p) => p.width && `width: ${p.width}`};
    ${(p) => p.height && `height: ${p.height}`};
    ${(p) => p.flex && `flex: 1`};
    background-color: transparent;
    @media ${device.mobileL} {
        ${(p) => p.mobile}
    }
`;

export default Spacer;
