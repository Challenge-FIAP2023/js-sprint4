import { useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { GreenSection } from '../assets/styles/Base.style.jsx'
import { SignInUpButton } from '../assets/styles/Button.style.jsx';
import { FormContainer, LoginForm, LoginFieldset, FormLoginHeader, InputLoginGroup, InputLoginBox, ButtonBox, SingUpLoginBox } from '../assets/styles/Form.style.jsx';

function Login(){

    const navigate = useNavigate();

    const user = useRef();
    const password = useRef();

    const validarFormulario =()=> {

        if(user.current.value == "" || password.current.value == ""){
            alert("Por favor, preencha todos os campos.")
        }else{
            if (user.current.value === 'admin' && password.current.value === '1234'){
                let token =
                    Math.random().toString(20).substring(2) +
                    Math.random().toString(20).substring(2);
                sessionStorage.setItem('username', user.current.value);
                sessionStorage.setItem('password', token);
                alert("Seus dados foram registrados com sucesso.")
                navigate('/');
            }else{
                alert("Usuário ou senha inválidos! Tente novamente")
            }
        }

        
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
                                <input type="text" id="username" name="username" ref={user}/>
                            </InputLoginBox>

                            <InputLoginBox>
                                <label htmlFor="password">Senha</label>
                                <input type="password" id="password" name="password" ref={password}/>
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