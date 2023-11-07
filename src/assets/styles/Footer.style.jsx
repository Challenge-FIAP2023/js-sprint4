import styled from 'styled-components';
import { primaryColor } from './variables';

export const FooterContainer = styled.footer `
    height: 100px;
    width: 100%;
    background-color: ${primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterContent = styled.div `
    color: #fff;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    width: 70%;
`

export const FooterTextContainer = styled.div `
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DeveloperLink = styled.a `
    text-decoration: none;
    color: #165c2b;
    transition: .5s;
    
    &:hover{
        color: black;
    }
`


