import styled from "styled-components";
import { breakpoints } from "~/universal/breakpoints/Breakpoints";
import { screeinBreakpoints } from "~/universal/breakpoints/displayBreakpoints";

interface TypographyProps {
    children: React.ReactNode;
    color?: string;
    margin?: string;
    align?: "center" | "left" | "right" | "justify";
    variant: "title1" | "title2" | "title3" | "title4" | "title5" | "title6" | "body1" | "body2" | "body3" | "body4" | "body5" | "body6" | "body7";
    clickable?: boolean;
    pt?: string;
    pr?: string;
    pb?: string;
    pl?: string;
    background?: string;
    br?: string;
}

const fontSize: { [key: string]: { mobile?: number; tab?: number; laptop?: number } } = {
    title1: { mobile: 30, tab: 35, laptop: 40 },
    title2: { mobile: 30, tab: 35, laptop: 40 },
    title3: { mobile: 20, tab: 20, laptop: 20 },
    title4: { mobile: 14, tab: 14, laptop: 14 },
    title5: { mobile: 14, tab: 14, laptop: 14 },
    title6: { mobile: 12, tab: 12, laptop: 12 },
    body1: { mobile: 18, tab: 18, laptop: 18 },
    body2: { mobile: 14, tab: 14, laptop: 14 },
    body3: { mobile: 14, tab: 14, laptop: 14 },
    body4: { mobile: 12, tab: 12, laptop: 12 },
    body5: { mobile: 12, tab: 12, laptop: 12 },
    body6: { mobile: 10, tab: 10, laptop: 10 },
    body7: { mobile: 10, tab: 10, laptop: 10 },
};

const fontWeight: { [key: string]: number } = {
    title1: 600,
    title2: 600,
    title3: 700,
    title4: 700,
    title5: 600,
    title6: 600,
    body1: 500,
    body2: 500,
    body3: 400,
    body4: 500,
    body5: 400,
    body6: 400,
    body7: 300,
};

const fontFamily: { [key: string]: string } = {
    title1: "Space Grotesk",
    title2: "Space Grotesk",
    body1: "Inter",
};
const lineHeight: { [key: string]: string } = {
    title1: "30px",
    title2: "40px",
    body1: "25px",
};

const Typography = styled.h6<TypographyProps>`
    font-size: ${(props) => fontSize[props.variant].laptop};
    ${(p) =>
        breakpoints("font-size", "px", [
            { [screeinBreakpoints.largeScreen]: fontSize[p.variant].laptop },
            { [screeinBreakpoints.laptopL]: fontSize[p.variant].laptop },
            { [screeinBreakpoints.laptopS]: fontSize[p.variant].laptop },
            { [screeinBreakpoints.landscape]: fontSize[p.variant].laptop },
            { [screeinBreakpoints.tablet]: fontSize[p.variant].tab },
            { [screeinBreakpoints.mobile]: fontSize[p.variant].mobile },
        ])};
    font-weight: ${(props) => fontWeight[props.variant]};
    font-family: ${(p) => fontFamily[p?.variant]};
    line-height: ${(p) => lineHeight[p?.variant]};
    margin: ${(props) => props.margin || 0};
    color: ${(props) => props.color};
    text-align: ${(props) => props.align || ""};
    padding-top: ${(p) => p.pt || ""};
    padding-right: ${(p) => p.pr || ""};
    padding-bottom: ${(p) => p.pb || ""};
    padding-left: ${(p) => p.pl || ""};
    background: ${(p) => p.background || ""};
    border-radius: ${(p) => p.br || ""};
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

export default Typography;
