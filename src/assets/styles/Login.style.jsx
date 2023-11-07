import styled from 'styled-components';
import { bgGray, titleFont } from './variables';


// -------------------- Login - Formulário --------------------

export const FormContainer = styled.div`
    width: 500px;
    height: 540px;
    background-color: ${bgGray};
    box-shadow: 0 10px 10px 0 #b5b3b3;
    border-radius: 10px;
`

export const FormLogin = styled.form`
    width: 100%;
    height: 100%;
    padding: 8% 10%;
`

export const Fieldset = styled.fieldset`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 0;
`

export const FormHeader = styled.div`
    width: 100%;
    text-align: center;

    h2 {
        height: 100%;
        margin: 0 auto;
        font-family: ${titleFont};
        font-size: 4rem;
    }
`

export const InputGroup = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

export const InputBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
        font-size: 1.4rem;
        font-weight: bold;
    }
    
    input {
        padding: 8px;
        border: 0px;
        border-bottom: 1px solid black;
        font-size: 1.2rem;
    }
`

export const ButtonBox = styled.div`
    width: 100%;
`

export const SingUpBox = styled.div`
    font-size: 1.2rem;
    a {
        text-decoration: none;
        margin-left: 6px;
    }
`

