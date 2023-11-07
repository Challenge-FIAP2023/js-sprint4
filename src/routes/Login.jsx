import {  } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { GreenSection } from '../assets/styles/Base.style.jsx'
import { SignInUpButton } from '../assets/styles/Button.style.jsx';
import { FormContainer, LoginForm, LoginFieldset, FormLoginHeader, InputLoginGroup, InputLoginBox, ButtonBox, SingUpLoginBox } from '../assets/styles/Form.style.jsx';

function Login(){

    const navigate = useNavigate();

    // const user = useRef();
    // const password = useRef();

    const validarFormulario =()=> {

        let usernameInput =  document.getElementById("username").value
        let passwordInput = document.getElementById("password").value

        if(usernameInput == "" || passwordInput == ""){
            alert("Por favor, preencha todos os campos.")
        }else{
            alert("Seus dados foram registrados com sucesso.")
            navigate('/');
        }

        sessionStorage.setItem('username', usernameInput);
        sessionStorage.setItem('password', passwordInput);
    };
    

    return(
        <>
        <GreenSection>
            <FormContainer>
                <LoginForm>
                    <LoginFieldset>
                        <FormLoginHeader>
                            <h2>Login</h2>
                        </FormLoginHeader>
                
                        <InputLoginGroup>

                            <InputLoginBox>
                                <label htmlFor="username">Usuário</label>
                                <input type="text" id="username" name="username"/>
                            </InputLoginBox>

                            <InputLoginBox>
                                <label htmlFor="password">Senha</label>
                                <input type="text" id="password" name="password"/>
                            </InputLoginBox>

                            <ButtonBox>
                                <SignInUpButton type="submit" onClick={validarFormulario}>Login</SignInUpButton>
                            </ButtonBox>

                            <SingUpLoginBox>
                                <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
                            </SingUpLoginBox>

                        </InputLoginGroup>

                    </LoginFieldset>
            
                </LoginForm>
            </FormContainer>
        </GreenSection>
        </>
    )
}

export default Login