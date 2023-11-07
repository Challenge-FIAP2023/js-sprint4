import { } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Nav (){

    const navigate = useNavigate();

    const getUser = sessionStorage.getItem('username');
    const getPassword = sessionStorage.getItem('password');

    const handleLogout = async () => {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('password');
        alert("Saindo da sessão.");
        navigate('/');
      }

return (
    <>
    <header className="header-page">
        <h2>SmartTrash</h2>
        <nav className="header-menu">
            <ul>
                <li><Link to="">Smart Trash</Link></li>
                <li><Link to="aplicativo">Aplicativo</Link></li>
                <li><Link to="sobre">Sobre</Link></li>
                {! (getUser && getPassword) ? (
                    <>
                    <li><Link to="login">Login</Link></li>
                    <li><Link to="cadastro">Cadastro</Link></li>
                    
                    </>
                ) : (
                    <li><button onClick={handleLogout}>Logout</button></li>
                )}
                
            </ul>
        </nav>
    </header>
    </>
)
}

export default Nav
