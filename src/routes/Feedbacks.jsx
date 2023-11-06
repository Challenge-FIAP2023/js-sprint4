import { } from 'react';
import { BaseSection } from '../assets/styles/Base.style';

import LogoGoogle from '../assets/img/logo-google.png';
import LogoNubank from '../assets/img/logo-nubank.png';
import LogoIBM from '../assets/img/logo-ibm.png';
import LogoStarbucks from '../assets/img/logo-starbucks.png';

function Feedbacks(){
    return(
        <>

        <BaseSection>
            <div className="container-card-title">
                <h2>Feedbacks</h2>
            </div>
            {/* Início Cards */}
            
            <div className='container-card'>
                {/* 1o Card */}
                <div className="feedback-container">
                    <div className="feedback-title">
                        <img src={LogoGoogle} alt="Logo Google" id="google"/>
                        <h2 className="feedback-title">Google</h2>
                    </div>
                    <p className="feedback-text">Estamos impressionados com os resultados surpreendentes da implementação das lixeiras inteligentes da Smart Trash. Nossa empresa viu uma grande melhoria na coleta seletiva e na taxa de reciclagem, superando todas as expectativas. Parabenizamos a Smart Trash por fornecer uma solução altamente eficaz.</p>
                </div>

                {/* 2o Card */}
                <div className="feedback-container">
                    <div className="feedback-title">
                        <img src={LogoNubank} alt="Logo Nubank" id="nubank"/>
                        <h2 className="feedback-title">Nubank</h2>
                    </div>
                    <p className="feedback-text">Temos o prazer de implementar as lixeiras inteligentes da Smart Trash em nossos escritórios. Essa solução inovadora facilita a coleta seletiva e aumenta a reciclagem, alinhando-se aos nossos valores de sustentabilidade e cuidado com o meio ambiente. Juntos, fazemos a diferença!</p>
                </div>

                {/* 3o Card */}
                <div className="feedback-container">
                    <div className="feedback-title">
                        <img src={LogoIBM} alt="Logo IBM" id="ibm"/>
                        <h2 className="feedback-title">IBM</h2>
                    </div>
                    <p className="feedback-text">Expressamos nossa profunda gratidão e admiração pela excepcional parceria estabelecida com a Smart Trash. Sua tecnologia revolucionária tem impulsionado de maneira notável a coleta seletiva e a reciclagem em nossas cidades-alvo, proporcionando resultados surpreendentes.</p>
                </div>

                {/* 4o Card */}
                <div className="feedback-container">
                    <div className="feedback-title">
                        <img src={LogoStarbucks} alt="Logo Starbucks" id="starbucks"/>
                        <h2 className="feedback-title">Starbucks</h2>
                    </div>
                    <p className="feedback-text">Agradecemos à Smart Trash pela lixeira inteligente avançada, cuja tecnologia inovadora tem um impacto positivo notável em comunidades afetadas pelo problema ambiental. Recomendamos suas soluções eficazes para outras empresas e parabenizamos pelo trabalho excepcional.</p>
                </div>

            </div>
        </BaseSection>
        
        {/* Fim Cards */}
        
        </>
    )
}

export default Feedbacks