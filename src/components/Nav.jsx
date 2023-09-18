import { } from 'react'
import { Link } from "react-router-dom"

function Nav (){
return (
    <>
    <header className="header-page">
        <h2>SmartTrash</h2>
        <nav className="header-menu">
            <ul>
                <li><Link to="">Smart Trash</Link></li>
                <li><Link to="lixeira-inteligente">Lixeira Inteligente</Link></li>
                <li><Link to="aplicativo">Aplicativo</Link></li>
                <li><Link to="coleta-seletiva">Coleta Seletiva</Link></li>
                <li><Link to="feedbacks">Feedbacks</Link></li>
                <li><Link to="contato">Contato</Link></li>
                <li><Link to="sobre">Sobre</Link></li>

            </ul>
        </nav>
    </header>
    </>
)
}

export default Nav
