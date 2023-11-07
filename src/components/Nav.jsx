import { } from 'react';
import { Link } from "react-router-dom";

function Nav (){
return (
    <>
    <header className="header-page">
        <h2>SmartTrash</h2>
        <nav className="header-menu">
            <ul>
                <li><Link to="">Smart Trash</Link></li>
                <li><Link to="aplicativo">Aplicativo</Link></li>
                <li><Link to="sobre">Sobre</Link></li>
                <li><Link to="login">Login</Link></li>
                <li><Link to="cadastro">Cadastro</Link></li>
            </ul>
        </nav>
    </header>
    </>
)
}

export default Nav
