import { } from 'react'
import FotoSobre from '../assets/img/sobre.webp'

function Sobre(){
    return(
        <>
        <div className="container bg">
            <div className="container-text">
                <h2>Sobre Nós</h2>
                <img src={FotoSobre} alt="Imagem ilustrativa da nossa equipe" id='fotoSobre'/>
                <p className="texto">A SmartTrash é uma empresa inovadora no ramo da gestão de resíduos, especializada no desenvolvimento de lixeiras inteligentes. A empresa busca utilizar tecnologia de ponta para oferecer soluções avançadas e eficientes no processo de coleta seletiva e reciclagem. <br/> Os valores fundamentais da SmartTrash estão centrados na sustentabilidade, inovação e responsabilidade ambiental. A empresa acredita que a adoção de práticas sustentáveis é essencial para a preservação do meio ambiente e a construção de um futuro mais limpo e saudável. <br/> Com nossas soluções inovadoras, a SmartTrash busca promover a consciência ambiental, reduzir o impacto ambiental e contribuir para um futuro mais sustentável. A nossa empresa está comprometida em oferecer produtos e serviços de alta qualidade que impulsionem a eficiência da coleta seletiva e incentivem a adoção de práticas mais responsáveis em relação Nameaos resíduos.</p>
                <a href="#" className="btn">Saiba mais</a>
            </div>
        </div>
        </>
    )
}

export default Sobre