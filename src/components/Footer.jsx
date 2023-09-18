import { } from 'react'
import Logo from '../assets/img/logo-st.png'

function Footer(){
    return(
        <>
        <footer>
            <div className="footer-container">
                
                <img src={Logo} alt="Logo da Smart Trash" className="footer-logo" />
                <div className="footer-info">
                    <p>Soluções inteligentes para a gestão de resíduos.</p>
                    <br/>
                    <p>&copy; 2023 Smart Trash. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer