import { } from 'react'
import FotoReciclagem from '../assets/img/foto-reciclagem.webp'

function Home() {
    
    return(
        <>
        <div className="container bg">
            <div className="container-text">
                <h2>SmartTrash</h2>
                <img src={FotoReciclagem} alt="Simbolo da reciclagem" id="bg-img"/>
                <p className="texto">Bem-vindo ao nosso site! Aqui você encontrará informações sobre uma solução inovadora para um problema que afeta a todos nós: a gestão de resíduos. Em todo o mundo, toneladas de lixo são produzidas diariamente, e a falta de infraestrutura e conscientização sobre a importância da reciclagem tem levado a graves consequências ambientais e de saúde pública. Nós, da SmartTrash, estamos comprometidos em oferecer uma resposta eficaz para esse problema. Junte-se a nós nessa jornada de preservação ambiental e construção de um futuro sustentável!</p>
                <a href="/lixeira-inteligente" className="btn-home">Conheça o nosso produto</a>
            </div>
        </div>
        </>
    )
}

export default Home
