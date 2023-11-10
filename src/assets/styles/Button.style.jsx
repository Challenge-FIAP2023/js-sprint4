import styled from "styled-components";
import { Link } from "react-router-dom";
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

export const SignInUpButton = styled.button`
    width: 100%;
    margin-top: 20px;
    padding: 14px 24px;
    border-radius: 10px;
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
        background-color: #1d6e34;
        border-color: #1d6e34;
        color: #fff;
    }
`

export const LinkButton = styled(Link)`
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