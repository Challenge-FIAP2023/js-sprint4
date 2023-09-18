import { } from 'react'

function Feedbacks(){
    return(
        <>

        <div className="container bg">
            <div className="container-card-title">
                <h2>Feedbacks</h2>
            </div>
            {/* Início Cards */}
            
            <div className='container-card'>
                {/* 1o Card */}
                <div className='card-item'>
                    <h2>Google</h2>
                    <p>Estamos maravilhados com os resultados incríveis alcançados pela implementação das lixeiras inteligentes da SmartTrash. Nossa empresa experimentou uma melhoria significativa na coleta seletiva e na taxa de reciclagem, superando todas as expectativas.  Parabenizo a SmartTrash por fornecer uma solução excepcionalmente eficaz.</p>
                </div>
                {/* 2o Card */}
                <div className="card-item">
                    <h2>Nubank</h2>
                    <p>Temos o prazer de implementar as lixeiras inteligentes da SmartTrash em nossos escritórios. Essa solução inovadora facilita a coleta seletiva e aumenta a reciclagem, alinhando-se aos nossos valores de sustentabilidade e cuidado com o meio ambiente. <br/><br/><br/><br/><br/><strong>Juntos, estamos fazendo a diferença!</strong></p>
                </div>
                {/* 3o Card */}
                <div className="card-item">
                    <h2>Instituto GEA</h2>
                    <p>Gostaria de expressar minha profunda gratidão e admiração pelo trabalho excepcional realizado em parceria com a empresa SmartTrash. A implementação dessa tecnologia revolucionária em algumas de nossas cidades-alvo tem mostrado resultados surpreendentes na facilitação da coleta seletiva e no aumento da reciclagem.</p>
                </div>
                {/* 4o Card */}
                <div className="card-item">
                    <h2>Greenpeace</h2>
                    <p>Agradecemos à SmartTrash pela lixeira inteligente que adquirimos. Sua tecnologia avançada e capacidade de separar automaticamente diferentes tipos de lixo têm impacto positivo em comunidades afetadas pelo problema ambiental. Recomendamos suas soluções para outras cidades enfrentando desafios semelhantes. <br/><br/><br/><strong>Parabéns pelo trabalho excepcional!</strong></p>
                </div>
            </div>
        </div>
        
        {/* Fim Cards */}
        
        </>
    )
}

export default Feedbacks