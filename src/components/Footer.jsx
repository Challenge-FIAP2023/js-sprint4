import { } from 'react'
import { FooterContainer, FooterContent, FooterTextContainer, DeveloperLink } from '../assets/styles/Footer.style.jsx'

function Footer(){
    return(
        <>
        <FooterContainer>
            <FooterContent>
                
                <FooterTextContainer>
                    <p>&copy; 2023 SMART TRASH - Todos os direitos reservados.</p>
                </FooterTextContainer>
                <FooterTextContainer>
                    <p>Desenvolvido por <DeveloperLink href="https://www.linkedin.com/in/victormnuzzi/" target="_blank" rel="noreferrer">Victor M. Nuzzi</DeveloperLink> e <DeveloperLink href="https://www.linkedin.com/in/henri-lopes-b54b6720a/" target="_blank" rel="noreferrer">Henri O. Lopes</DeveloperLink></p>
                </FooterTextContainer>
            </FooterContent>
        </FooterContainer>
        </>
    )
}

export default Footer