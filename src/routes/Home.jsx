import { } from 'react'
import FotoLixeiraInteligente from '../assets/img/hero.jpeg'

function Home() {
    
    return(
        <>
        <section className="container bg">
            <div className="container-text">
                <h2>SmartTrash</h2>
                <img src={FotoLixeiraInteligente} alt="Foto de uma lixeira inteligente da Smart Trash" id="bg-img"/>
                <p>Bem-vindo à <span>Smart Trash</span>: sua solução inovadora para a gestão de resíduos. Junte-se a nós e construa um futuro sustentável!</p>
                <a href="/lixeira-inteligente" className="btn-home">Conheça o nosso produto</a>
            </div>
        </section>
        </>
    )
}

export default Home
