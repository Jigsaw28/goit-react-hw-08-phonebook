import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const AuthLink = styled(NavLink)`
    &:last-of-type {
        padding-left: 10px;
    }

    &:hover {
        color: #2196f3;
    }
`
export const Auth = styled.div`
    padding-right: 20px;
`