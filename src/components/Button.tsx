import styled from "styled-components";
interface buttonType {
    color?: string;
    bgColor?: string;
    bgRadius?: string;
    borderColor?: string;
    variant?: "text" | "contained" | "outlined" | "textButton";
    width?: string;
    disabled?: boolean;
    textButton?: boolean;
    size?: "large" | "medium" | "small";
    textWithIcon?: boolean;
    margin?: string;
    mt?: string;
    mr?: string;
    mb?: string;
    ml?: string;
}

const sizeStyle: { [key: string]: { [key: string]: string } } = {
    small: {
        padding: "5px 15px",
        borderRadius: "2px",
    },
    medium: {
        padding: "5px 30px",
        borderRadius: "5px",
    },
    large: {
        padding: "10px 50px",
        borderRadius: "8px",
    },
};

const variant: { [key: string]: (props: buttonType) => { [key: string]: string | { [key: string]: string } } } = {
    text: (props) => {
        return {
            color: props.color || "#F23936",
            border: "none",
            background: "none",
            margin: "10px",
            "&:disabled": {
                color: "#B1B1B0",
            },
        };
    },
    contained: (props) => {
        return {
            color: "white",
            border: "none",
            display: props.textWithIcon ? "flex" : " ",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: props.bgColor || "#F23936",
            borderRadius: props.bgRadius || "",
            "&:disabled": {
                backgroundColor: "#E0E0E0",
                color: "#B1B1B0",
            },
        };
    },
    outlined: (props) => {
        return {
            color: props.color || "#F23936",
            border: `1px solid ${props.borderColor || "#F23936"} `,
            backgroundColor: " transparent",
            borderRadius: props.bgRadius || "",
            "&:disabled": {
                border: "1px solid#E0E0E0",
                color: "#B1B1B0",
            },
        };
    },
    textButton: (props) => {
        return {
            color: props.color || "#3DB5D8",
            border: "none",
            background: "none",
            textDecoration: "none",
            "&:disabled": {
                color: "#B1B1B0",
            },
        };
    },
};

export const Button = styled.button<buttonType>`
    ${(p) => (p.variant ? variant[p.variant] : variant["contained"])};
    ${(p) => (p.size ? sizeStyle[p.size] : sizeStyle["medium"])};
    width: ${(p) => p.width && p.width};
    margin: ${(p) => p.margin && p.margin};
    margin-top: ${(p) => p.mt && p.mt};
    margin-right: ${(p) => p.mr && p.mr};
    margin-bottom: ${(p) => p.mb && p.mb};
    margin-left: ${(p) => p.ml && p.ml};
    transition: 0.3s;
    opacity: 0.8;
    &:hover {
        opacity: 1;
    }
    fontsize: 14px;
    cursor: pointer;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
`;
