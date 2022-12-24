import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: ${(p) => p.color};
`;

export default StyledLink;
