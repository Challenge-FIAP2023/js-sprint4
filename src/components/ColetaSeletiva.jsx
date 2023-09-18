import { } from 'react'
import FotoColeta from '../assets/img/coleta seletiva.jpg'

function ColetaSeletiva(){


    return (
        <>

        <div className="container bg">
            <div className="container-text">
                <h2>Coleta Seletiva</h2>
                <img src={FotoColeta} alt="Ilustração de 2 pessoas colocando lixo no caminhao de lixo" id="coleta-img"/>
                <p className="texto">A falta de coleta seletiva e separação adequada do lixo tem consequências ambientais graves. Resíduos não separados corretamente contaminam o meio ambiente, prejudicam a saúde humana e a biodiversidade. Os resíduos orgânicos, quando depositados em locais inadequados, geram gases poluentes, contribuindo para o aquecimento global e mudanças climáticas. Além disso, resíduos em locais inadequados atraem vetores de doenças e podem contaminar o solo e a água. A solução proposta pela nossa lixeira inteligente promove a coleta seletiva e separação adequada do lixo, reduzindo a quantidade de resíduos em aterros e lixões, diminuindo a contaminação ambiental e os impactos negativos do descarte inadequado.
                </p>
                <a href="" className="btn">Saiba mais</a>
            </div>
        </div>

        </>
    )
}

export default ColetaSeletiva