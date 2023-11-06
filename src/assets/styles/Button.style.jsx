import styled from "styled-components";
import { primaryColor } from "./variables";

export const ContentButton = styled.a`
    padding: 10px 20px;
    border-radius: 20px;
    transition: .5s;
    text-decoration: none;
    letter-spacing: 1px;
    cursor: pointer;
    border: 2px solid ${primaryColor};
    background-color: ${primaryColor};
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    
    &:hover {
        background-color: transparent;
        color: ${primaryColor};
    }

`

export const LoginButton = styled.button`
    width: 100%;
    margin-top: 20px;
    padding: 10px 20px;
    letter-spacing: 1.5px;
    cursor: pointer;
    border: 2px solid ${primaryColor};
    background-color: ${primaryColor};
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    transition: .5s;

    &:hover {
        background-color: #1d6e34;
        border-color: #1d6e34;
    }
`