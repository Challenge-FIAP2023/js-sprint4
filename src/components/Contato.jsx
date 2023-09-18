import { } from 'react'

function Contato(){

    const validarFormulario =()=> {

        let nomeInput =  document.getElementById("nome").value
        let telInput = document.getElementById("telefone").value
        let emailInput = document.getElementById("email").value

        if(nomeInput == "" || telInput == "" || emailInput == ""){
            alert("Por favor, preencha todos os campos.")
        }else{
            alert("Seus dados foram registrados com sucesso.")
        }

        localStorage.setItem('usuario', nomeInput);
        localStorage.setItem('tel', telInput);
        localStorage.setItem('email', emailInput);
    };
    


    return(
        <>
        <div className="container bg">
            <div className="form-container">
                <div className="form-header">
                    <h2>Contato</h2>
                </div>
            
                <form className="form">
                    <div className="form-content">
                        <label htmlFor="nome"><strong>Nome:</strong></label>
                        <input type="text" id="nome" name="nome" placeholder="Digite o seu nome..."/>
                    </div>
                    <div className="form-content">
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input type="text" id="email" name="email" placeholder="Digite o seu email..."/>
            
                    </div>
            
                    <div className="form-content">
                        <label htmlFor="telefone"><strong>Telefone:</strong></label>
                        <input type="tel" id="telefone" name="telefone" placeholder="Digite seu telefone..."/>
                    </div>
            
                    <button type="submit" className="form-btn" onClick={validarFormulario}>Enviar</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Contato