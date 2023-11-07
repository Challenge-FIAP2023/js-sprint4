import { } from 'react';
import { Link } from "react-router-dom";

import { GreenSection } from '../assets/styles/Base.style.jsx'
import { LoginButton } from '../assets/styles/Button.style.jsx';
import { FormContainer, FormLogin, Fieldset, FormHeader, InputGroup, InputBox, ButtonBox, SingUpBox } from '../assets/styles/Login.style.jsx';

function Login(){

    const validarFormulario =()=> {

        let usernameInput =  document.getElementById("username").value
        let passwordInput = document.getElementById("password").value

        if(usernameInput == "" || passwordInput == ""){
            alert("Por favor, preencha todos os campos.")
        }else{
            alert("Seus dados foram registrados com sucesso.")
        }

        localStorage.setItem('username', usernameInput);
        localStorage.setItem('Password', passwordInput);
    };
    

    return(
        <>
        <GreenSection>
            <FormContainer>
                <FormLogin>
                    <Fieldset>
                        <FormHeader>
                            <h2>Login</h2>
                        </FormHeader>
                
                        <InputGroup>

                            <InputBox>
                                <label htmlFor="username">Usuário</label>
                                <input type="text" id="username" name="username"/>
                            </InputBox>

                            <InputBox>
                                <label htmlFor="password">Senha</label>
                                <input type="text" id="password" name="password"/>
                            </InputBox>

                            <ButtonBox>
                                <LoginButton type="submit" onClick={validarFormulario}>Login</LoginButton>
                            </ButtonBox>

                            <SingUpBox>
                                <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
                                
                            </SingUpBox>

                        </InputGroup>

                    </Fieldset>
            
                </FormLogin>
            </FormContainer>
        </GreenSection>
        </>
    )
}

export default Login