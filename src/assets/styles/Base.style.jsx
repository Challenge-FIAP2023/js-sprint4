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

// ------------------------ Home ------------------------


// ------------------------ Grid | Sobre e Lixeira------------------------


export const GridContainer = styled.div `
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 25px;
`

export const GridTextContainer = styled(BaseTextContainer) `
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

export const GridImgContainer = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

// ------------------------ Sobre ------------------------

export const SobreImgContainer = styled(GridImgContainer) `
    img {
        max-height: 500px;
    }
`

// ------------------------ Lixeira Inteligente ------------------------

export const LixeiraImgContainer = styled(GridImgContainer) `
    img {
        max-height: 400px;
    }
`
// ------------------------ Coleta Seletiva ------------------------

export const ColetaImgContainer = styled(GridImgContainer)`
    img {
        border-radius: 16px;
        max-width: 100%;
        max-height: 90%;
    }
`

export const ColetaGridContainer = styled(GridContainer)`
    gap: 50px;
    border-radius: 26px;
    padding: 20px 20px;
    box-shadow: 0 0 30px 0 #b5b3b3;
    background-color: #fff;
`
