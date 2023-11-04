import { useState, useEffect } from 'react'
import FotoLixeira from '../assets/img/lixeiras.jpg'

function LixeiraInteligente() {
    const [quantNoCarrinho, setQuantNoCarrinho] = useState(0);
    const [quantLixeirasSimulada, setQuantLixeirasSimulada] = useState(0);

    useEffect(() => {
        const lixeiraSimulada = Math.floor(Math.random() * 21) + 10;
        setQuantLixeirasSimulada(lixeiraSimulada);
    }, []);

    const adicionarAoCarrinho = () => {
        const novaQuant = quantNoCarrinho + 1;
        setQuantNoCarrinho(novaQuant);
        alert(`Você adicionou a Lixeira Inteligente no carrinho. ATENÇÃO! O carrinho se esvaziará se sair desta página.`);
    };    

    return (    
        <>
        <section className="container bg">
            <div className="container-text bg">
                <h2>Lixeira Inteligente</h2>
                <img src={FotoLixeira} alt="lixeiras" id="lixeira-inteligente-img"/>
                <p className="texto">Nossa lixeira inteligente é uma solução avançada que utiliza tecnologia de ponta para simplificar a coleta seletiva e aumentar a reciclagem. Ela separa automaticamente diferentes tipos de resíduos, evitando contaminação e poluição ambiental. <br/><br/> Ao oferecer compartimentos para resíduos orgânicos, recicláveis e não recicláveis, você pode contribuir para a preservação do meio ambiente de forma simples e conveniente, promovendo um estilo de vida sustentável. A Lixeira Inteligente está presente em {quantLixeirasSimulada} empresas e é uma maneira fácil e conveniente de fazer a sua parte pela reciclagem e pelo futuro do planeta.</p>
                <button className="btn" onClick={adicionarAoCarrinho}>Adicionar ao carrinho ({quantNoCarrinho})</button>
            </div>
        </section>
        </>
    )
}

export default LixeiraInteligente