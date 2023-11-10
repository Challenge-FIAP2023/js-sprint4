import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { GreenSection } from '../assets/styles/Base.style.jsx'
import { SignInUpButton } from '../assets/styles/Button.style.jsx';
import { FormContainer, LoginForm, LoginFieldset, FormLoginHeader, InputLoginGroup, InputLoginBox, ButtonBox, SingUpLoginBox } from '../assets/styles/Form.style.jsx';

function Login() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/usuarios')
            .then((resposta) => {
                return resposta.json();
            })
            .then((resposta) => {
                setUsuarios(resposta);
            })
    }, []);




    const navigate = useNavigate();


    const user = useRef();
    const password = useRef();

    const validarFormulario = () => {
        let usuarioValido = false;

        if (user.current.value == '' || password.current.value == "") {
            alert("Por favor, preencha todos os campos.")
        } else {
            for (var [usuario, usuarioDados] of Object.entries(usuarios)) {
                if (user.current.value === usuarioDados["username"] && password.current.value === usuarioDados["password"]) {
                    let token =
                        Math.random().toString(20).substring(2) +
                        Math.random().toString(20).substring(2);
                    sessionStorage.setItem('username', user.current.value);
                    sessionStorage.setItem('password', token);
                    usuarioValido = true;
                    alert("Seus dados foram registrados com sucesso.")
                    navigate('/');
                }
            }
        }
        
        if (!usuarioValido) {
            alert("Usuário ou senha inválidos! Tente novamente")
        }
    };


    return (
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
                                    <input type="text" id="username" name="username" ref={user} />
                                </InputLoginBox>

                                <InputLoginBox>
                                    <label htmlFor="password">Senha</label>
                                    <input type="password" id="password" name="password" ref={password} />
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