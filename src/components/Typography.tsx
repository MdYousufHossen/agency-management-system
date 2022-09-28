import styled from "styled-components";

interface TypographyProps {
    children: React.ReactNode;
    color?: string;
    margin?: string;
    align?: string;
    variant: "title1" | "title2" | "title3" | "title4" | "title5" | "title6" | "body1" | "body2" | "body3" | "body4" | "body5" | "body6" | "body7";
    clickable?: boolean;
}

const fontSize: { [key: string]: string } = {
    title1: "24px",
    title2: "18px",
    title3: "18px",
    title4: "14px",
    title5: "14px",
    title6: "12px",
    body1: "18px",
    body2: "14px",
    body3: "14px",
    body4: "12px",
    body5: "12px",
    body6: "10px",
    body7: "10px",
};

const fontWeight: { [key: string]: number } = {
    title1: 600,
    title2: 700,
    title3: 600,
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

const Typography = styled.span<TypographyProps>`
    font-size: ${(props) => fontSize[props.variant]};
    font-weight: ${(props) => fontWeight[props.variant]};
    margin: ${(props) => props.margin || 0};
    color: ${(props) => props.color || "#000"};
    text-align: ${(props) => props.align || ""};
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
