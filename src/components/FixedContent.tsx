import styled from "styled-components";

export interface AbsoluteContentProps {
    height?: string;
    width?: string;
    flex?: boolean;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    clickable?: boolean;
}

const AbsoluteContent = styled.div<AbsoluteContentProps>`
    position: absolute;
    z-index: 100;
    ${(p) => p.height && `height: ${p.height};`}
    ${(p) => p.width && `width: ${p.width};`}
    ${(p) => p.flex && `flex: 1;`}
    ${(p) => p.top && `top: ${p.top};`}
    ${(p) => p.bottom && `bottom: ${p.bottom};`}
    ${(p) => p.left && `left: ${p.left};`}
    ${(p) => p.right && `right: ${p.right};`}
    ${(props) =>
        props.clickable &&
        `
        cursor: pointer;
        -webkit-touch-callout: none; /* iOS Safari */
          -webkit-user-select: none; /* Safari */
           -khtml-user-select: none; /* Konqueror HTML */
             -moz-user-select: none; /* Old versions of Firefox */
              -ms-user-select: none; /* Internet Explorer/Edge */
                  user-select: none; /* Non-prefixed version, currently
                                        supported by Chrome, Edge, Opera and Firefox */
    `};
`;

export default AbsoluteContent;
