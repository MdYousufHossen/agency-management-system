import styled from "styled-components";
interface buttonType {
    color?: string;
    bgColor?: string;
    bgRadius?: string;
    borderColor?: string;
    variant: "text" | "contained" | "outlined" | "textButton";
    width?: string;
    disabled?: boolean;
    textButton?: boolean;
    size?: string;
    textWithIcon?: boolean;
}

const sizeStyle: { [key: string]: string } = {
    small: "5px 10px",
    medium: "5px 20px",
    large: "10px 30px",
};

const variant: { [key: string]: (props: buttonType) => { [key: string]: string | { [key: string]: string } } } = {
    text: (props) => {
        return {
            color: props.color || "#3DB5D8",
            border: "none",
            background: "none",
            padding: "10px",
            fontSize: "14px",
            width: " 25.2vw",
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
            backgroundColor: props.bgColor || "#3DB5D8",
            borderRadius: props.bgRadius || "1.56vw",
            padding: props.size ? sizeStyle[props.size] : "10px",
            fontSize: "14px",
            width: !props.size ? props.width || "25.2vw" : "",
            margin: "10px",
            "&:disabled": {
                backgroundColor: "#E0E0E0",
                color: "#B1B1B0",
            },
        };
    },
    outlined: (props) => {
        return {
            color: props.color || "#3DB5D8",
            border: `1px solid ${props.borderColor || "#3DB5D8"} `,
            backgroundColor: props.bgColor || "white",
            borderRadius: props.bgRadius || "1.56vw",
            padding: props.size ? sizeStyle[props.size] : "10px",
            fontSize: "14px",
            width: !props.size ? props.width || "25.2vw" : "",
            margin: "10px",
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
            padding: "5px",
            fontSize: "14px",
            textDecoration: "none",
            margin: "0",
            "&:disabled": {
                color: "#B1B1B0",
            },
        };
    },
};

export const Button = styled.button<buttonType>`
    ${(p) => variant[p.variant]}
    cursor: pointer;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
`;
