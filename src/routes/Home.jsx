import { useState, useEffect } from 'react';
import { BaseSection, GraySection, GreenSection, GreenSpan, ColetaGridContainer, ColetaImgContainer, GridTextContainer, GridContainer, LixeiraImgContainer } from '../assets/styles/Base.style';
import { ContentButton } from '../assets/styles/Button.style.jsx';
import Feedbacks from './Feedbacks.jsx';

import FotoLixeiraInteligente from '../assets/img/hero.jpeg';
import FotoColeta from '../assets/img/falta-de-coleta-seletiva.jpg';
import FotoLixeira from '../assets/img/lixeiras.jpg';


function Home() {

    const [quantLixeirasSimulada, setQuantLixeirasSimulada] = useState(0);

    useEffect(() => {
        const lixeiraSimulada = Math.floor(Math.random() * 21) + 10;
        setQuantLixeirasSimulada(lixeiraSimulada);
    }, []);
    
    return(
        <>
        <BaseSection>
            <div className="container-text">
                <h2>SmartTrash</h2>
                <img src={FotoLixeiraInteligente} alt="Foto de uma lixeira inteligente da Smart Trash" id="bg-img"/>
                <p>Bem-vindo à <GreenSpan>Smart Trash</GreenSpan>: sua solução inovadora para a gestão de resíduos. Junte-se a nós e construa um futuro sustentável!</p>
                <a href="/lixeira-inteligente" className="btn-home">Conheça o nosso produto</a>
            </div>
        </BaseSection>

        {/* ---------- Lixeira Inteligente ---------- */}

        <GraySection>
            <GridContainer>
                <GridTextContainer>
                    <h2>Lixeira Inteligente</h2>
                    <p>Nossa lixeira inteligente é uma solução avançada que utiliza tecnologia de ponta para simplificar a coleta seletiva e aumentar a reciclagem. Ela separa automaticamente diferentes tipos de resíduos, evitando contaminação e poluição ambiental. <br/><br/> Oferecemos compartimentos para resíduos orgânicos, recicláveis e não recicláveis, facilitando a contribuição para a preservação do meio ambiente e promovendo um estilo de vida sustentável. Nossa Lixeira Inteligente está em uso em {quantLixeirasSimulada} empresas, tornando a reciclagem uma escolha fácil e conveniente para um futuro mais sustentável.</p>
                    <ContentButton>Saiba mais</ContentButton>
                </GridTextContainer>

                <LixeiraImgContainer>
                    <img src={FotoLixeira} alt="Imagem ilustrativa do funcionamento da lixeira por dentro"/>
                </LixeiraImgContainer>
                
            </GridContainer>
        </GraySection>

        
        {/* ---------- Coleta ---------- */}

        <GreenSection>
            <ColetaGridContainer>

                <ColetaImgContainer>
                    <img src={FotoColeta} alt="Ilustração de 2 pessoas colocando lixo no caminhao de lixo"/>
                </ColetaImgContainer>

                <GridTextContainer>
                    <h2>Coleta Seletiva</h2>
                    <p>A falta de coleta seletiva e a separação inadequada do lixo resultam em contaminação ambiental, riscos para a saúde e emissão de poluentes. A lixeira inteligente ajuda ao incentivar a coleta seletiva, reduzindo a quantidade de resíduos em aterros e mitigando impactos adversos.</p>
                    <ContentButton href="#">Saiba mais</ContentButton>
                </GridTextContainer>

            </ColetaGridContainer>
        </GreenSection>
        
        {/* ---------- Feedback ---------- */}

        <Feedbacks/>

        </>
    )
}

export default Home
