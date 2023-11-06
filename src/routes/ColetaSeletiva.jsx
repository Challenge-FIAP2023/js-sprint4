import { } from 'react';
import { BaseSection } from '../assets/styles/Base.style';

import FotoColeta from '../assets/img/falta-de-coleta-seletiva.jpg';

function ColetaSeletiva(){


    return (
        <>

        <BaseSection>
            <div className="container-text">
                <h2>Coleta Seletiva</h2>
                <img src={FotoColeta} alt="Ilustração de 2 pessoas colocando lixo no caminhao de lixo" id="coleta-img"/>
                <p className="texto">A falta de coleta seletiva e a separação inadequada do lixo resultam em contaminação ambiental, riscos para a saúde e emissão de poluentes. A lixeira inteligente ajuda ao incentivar a coleta seletiva, reduzindo a quantidade de resíduos em aterros e mitigando impactos adversos.</p>
                <a href="" className="btn">Saiba mais</a>
            </div>
        </BaseSection>

        </>
    )
}

export default ColetaSeletiva