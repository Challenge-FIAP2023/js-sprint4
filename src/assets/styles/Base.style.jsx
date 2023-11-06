import styled from 'styled-components';
import { primaryColor, titleFont, bgGray, bgGreen } from './variables.jsx'

// ------------------------ Base Styles ------------------------

export const BaseSection = styled.section`
    min-height: 70vh;
    padding: 7% 12%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

export const GraySection = styled(BaseSection)`
    background-color: ${bgGray};
`
export const GreenSection = styled(BaseSection)`
    background-color: ${bgGreen};
`

export const GreenSpan = styled.span`
    font-weight: bold;
    color: ${primaryColor};
`

export const BaseTextContainer = styled.div`
    h2 {
        font-size: 4rem;
        font-weight: bolder;
        font-family: ${titleFont};
    }
    
    p {
        line-height: 1.5;
        font-size: 1.1rem;
    }
    
`

// ------------------------ Sobre ------------------------

export const SobreContainer = styled.div `
    display: grid;
    width: 100%;
    height: 640px;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 25px;
    padding: 0 5%;
`

export const SobreTextContainer = styled(BaseTextContainer) `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 25px;

    h2 {
        text-align: center;
    }
`

export const SobreImgContainer = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
        max-height: 500px;
    }
`



