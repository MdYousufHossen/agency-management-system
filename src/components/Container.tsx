import styled from "styled-components";

interface ContainerProps {
    height?: string;
    width?: string;
    pt?: string;
    pb?: string;
    ph?: string;
    displayFlex?: boolean;
    gap?: string;
    flexCol?: boolean;
    flex1?: boolean;
    alignItemsCenter?: boolean;
    justifyContentCenter?: boolean;
    overflowHidden?: boolean;
    background?: string;
    shadowBox?: string;
    brt?: string;
    brb?: string;
}

const Container = styled.div<ContainerProps>`
    position: relative;
    ${(p) => p.height && `height: ${p.height};`}
    ${(p) => (p.width ? `width: ${p.width};` : `width: 69%;`)}
    margin: auto;
    ${(p) => p.pt && `padding-top: ${p.pt};`}
    ${(p) => p.pb && `padding-bottom: ${p.pb};`}
    ${(p) => p.ph && `padding-left: ${p.ph}; padding-right: ${p.ph};`}
    ${(p) => p.displayFlex && `display: flex;`}
    ${(p) => p.gap && `gap: ${p.gap};`}
    ${(p) => p.flexCol && `flex-direction: column;`}
    ${(p) => p.flex1 && `flex: 1;`}
    ${(p) => p.alignItemsCenter && `align-items: center;`}
    ${(p) => p.justifyContentCenter && `justify-content: center;`}
    ${(p) => p.overflowHidden && `overflow: hidden;`}
    ${(p) => (p.background ? `background-color: ${p.background};` : "background-color: transparent;")}
    ${(p) => p.shadowBox && `box-shadow: ${p.shadowBox};`}

    ${(p) => p.brt && `border-top-left-radius: ${p.brt};`}
    ${(p) => p.brt && `border-top-right-radius: ${p.brt};`}
    ${(p) => p.brb && `border-bottom-left-radius: ${p.brb};`}
    ${(p) => p.brb && `border-bottom-right-radius: ${p.brb};`}
`;

export default Container;
