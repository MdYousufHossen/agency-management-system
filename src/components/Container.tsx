import styled from "styled-components";
import { device } from "~/universal/breakpoints/displayBreakpoints";

interface ContainerProps {
    height?: string;
    width?: string;
    pt?: string;
    pb?: string;
    pl?: string;
    pr?: string;
    displayFlex?: boolean;
    gap?: string;
    flexCol?: boolean;
    flex1?: boolean;
    alignItemsCenter?: boolean;
    justifyContentCenter?: boolean;
    justifyBetween?: boolean;
    overflowHidden?: boolean;
    background?: string;
    shadowBox?: string;
    brt?: string;
    brb?: string;
    flexWrape?: boolean;
    padding?: string;
    mobile?: {};
    styles?: {};
    overflowScrollX?: boolean;
    overflowScrollY?: boolean;
    hideScrollbar?: boolean;
    opacity?: number;
    clickable?: boolean;
}

const Container = styled.div<ContainerProps>`
    position: relative;
    ${(p) => p.height && `height: ${p.height};`}
    ${(p) => (p.width ? `width: ${p.width};` : `width: 69%;`)}
    margin: auto;
    ${(p) => p.pt && `padding-top: ${p.pt};`}
    ${(p) => p.pb && `padding-bottom: ${p.pb};`}
    ${(p) => p.pl && `padding-left: ${p.pl};`}
    ${(p) => p.pr && `padding-right: ${p.pr};`}
    ${(p) => p.padding && `padding: ${p.padding};`}
    ${(p) => p.displayFlex && `display: flex;`}
    ${(p) => p.flexWrape && `flex-wrap: wrap;`}
    ${(p) => p.gap && `gap: ${p.gap};`}
    ${(p) => p.flexCol && `flex-direction: column;`}
    ${(p) => p.flex1 && `flex: 1;`}
    ${(p) => p.alignItemsCenter && `align-items: center;`}
    ${(p) => p.justifyContentCenter && `justify-content: center;`}
    ${(p) => p.justifyBetween && `justify-content: space-between;`}
    ${(p) => p.overflowHidden && `overflow: hidden;`}
    ${(p) => p.overflowScrollX && `overflow-x: scroll;`}
    ${(p) => p.overflowScrollY && `overflow-y: scroll;`}
    ${(p) => p.background && `background-color: ${p.background};`}
    ${(p) => p.shadowBox && `box-shadow: ${p.shadowBox};`}
    ${(p) => p.brt && `border-top-left-radius: ${p.brt};`}
    ${(p) => p.brt && `border-top-right-radius: ${p.brt};`}
    ${(p) => p.brb && `border-bottom-left-radius: ${p.brb};`}
    ${(p) => p.brb && `border-bottom-right-radius: ${p.brb};`}
    ${(p) => p.opacity && `opacity:${p.opacity};`}
    ${(p) => p.styles};
    ${(p) => p.clickable && `cursor:pointer;`}
    @media ${device.mobileL} {
        ${(p) => p.mobile}
    }
    ${(p) =>
        p.hideScrollbar &&
        ` ::-webkit-scrollbar {
        display: none;
    }`}
`;

export default Container;
// ` : "background-color: transparent;"
