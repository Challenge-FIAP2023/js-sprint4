import { } from 'react'
import App1 from '../assets/img/app-1.png' 
import App2 from '../assets/img/app-2.png' 
import App3 from '../assets/img/app-3.png' 

function Aplicativo(){
    return (
        <>
        <div className="container bg">
            <div className="container-text">
                <h2>Aplicativo</h2>
                <div className="container-img-app">
                    <img src={App1} alt='Menu Home do aplicativo' id='app-img'/>
                    <img src={App2} alt='Menu Ajuda do aplicativo' id='app-img'/>
                    <img src={App3} alt='Menu Lixeiras do aplicativo' id='app-img'/>
                </div>
                <p className="texto">A nossa lixeira inteligente vem com um aplicativo integrado que permite que os usuários  monitorem em tempo real a quantidade de lixo coletado e o status dos compartimentos, além de receberem dicas e orientações sobre como reciclar corretamente. Com uma interface intuitiva e fácil de usar, o aplicativo ajuda a promover a conscientização sobre a importância da reciclagem e incentiva práticas mais sustentáveis. Com o aplicativo, os usuários podem obter informações sobre a quantidade de resíduos recicláveis e orgânicos produzidos. Outra funcionalidade interessante do aplicativo é a possibilidade de localizar pontos de coleta seletiva próximos à localização do usuário.</p>
                <a href="#" className="btn">Saiba mais</a>
            </div>
        </div>
        </>
    )
}


export default Aplicativo