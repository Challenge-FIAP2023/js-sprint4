import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import * as yup  from 'yup'

import { GreenSection, RedSpan } from '../assets/styles/Base.style.jsx';
import { SignInUpButton } from '../assets/styles/Button.style.jsx';
import { SignUpButtonBox, CadastroFieldset, FieldsetLegend, CadastroForm, InputFlex, InputCadastroGroup, InputCadastroBox, CadastroContainer, FormCadastroHeader } from '../assets/styles/Form.style.jsx';

function Cadastro(){

    const navigate = useNavigate();

    const schema = yup.object({
        name:yup.string().required("Campo Nome Completo obrigatório"),
        cpf:yup.string().min(11,'CPF deve conter 11 dígitos')
        .required("Campo cpf Obrigatório"),
        email:yup.string().email("Digite um email Válido")
        .required("Campo email obrigatório"),
        username:yup.string().required("Campo Usuário obrigatório"),
        password:yup.string().required("Camp Senha obrigatório"),
        cep:yup.string().min(8, 'CEP deve conter 8 dígitos').required("Campo CEP obrigatório"),
        rua:yup.string().required("Campo Rua obrigatório"),
        numero:yup.string().required("Campo Número obrigatório"),
        bairro:yup.string().required("Campo Bairro obrigatório"),
        cidade:yup.string().required("Campo Cidade obrigatório")

       })
       .required();
    
       const {register,handleSubmit,formState:{errors},setValue,setFocus}
       =useForm({
        resolver:yupResolver(schema)
       })
       const [listaClientes, setListaClientes]=useState([]);
    
       function inserirCLientes(cliente){
        setListaClientes([...listaClientes, cliente])
        alert('Seus dados foram cadastrados com sucesso!')
        navigate('/')
       }
    
       function buscarCep(e){
        const cep = e.target.value.replace(/\D/g,'')
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res)=> res.json())
        .then((data)=> {
          setValue('rua', data.logradouro);
          setValue('bairro',data.bairro);
          setValue('estado',data.uf)
          setValue('cidade',data.localidade);
          setFocus('numero');
          
        })
    
       }


    return(
        <>
        <GreenSection>
            <CadastroContainer>

                <FormCadastroHeader>
                    <h2>Preencha com suas informações pessoais</h2>
                </FormCadastroHeader>

                <CadastroForm onSubmit={handleSubmit(inserirCLientes)}>


                    <CadastroFieldset>
                        <FieldsetLegend>Dados Pessoais</FieldsetLegend>

                        <InputCadastroGroup>

                            <InputFlex>
                                <InputCadastroBox>
                                    <label>Nome Completo</label>
                                    <input type="text" {...register('name')} placeholder='Nome Completo'/>
                                    <RedSpan>{errors.nome?.message}</RedSpan>
                                </InputCadastroBox>

                                <InputCadastroBox>
                                    <label>CPF</label>
                                    <input type="text" {...register('cpf')} placeholder='000.000.000-00'/>
                                    <RedSpan>{errors.cpf?.message}</RedSpan>
                                </InputCadastroBox>

                            </InputFlex>

                            <InputCadastroBox>
                                    <label>Email</label>
                                <input type="text" {...register('email')} placeholder='exemplo@email.com'/>
                                <RedSpan>{errors.email?.message}</RedSpan>
                            </InputCadastroBox>

                            <InputFlex>
                                <InputCadastroBox>
                                    <label>Usuário</label>
                                <input type="text" {...register('username')} placeholder='Usuário'/>
                                <RedSpan>{errors.email?.message}</RedSpan>
                                </InputCadastroBox>

                                <InputCadastroBox>
                                    <label>Senha</label>
                                    <input type="password" {...register('password')} placeholder='Senha'/>
                                    <RedSpan>{errors.cpf?.message}</RedSpan>
                                </InputCadastroBox>

                            </InputFlex>

                        </InputCadastroGroup>
                    
                    </CadastroFieldset>

                    <CadastroFieldset>

                        <FieldsetLegend>Dados Endereço</FieldsetLegend>

                        <InputCadastroGroup>

                            <InputFlex>

                                <InputCadastroBox>
                                    <label>CEP</label>
                                    <input type="text" {...register('cep')} onBlur={buscarCep} placeholder='00000-000'/>
                                    <RedSpan>{errors.cep?.message}</RedSpan>
                                </InputCadastroBox>
                                
                                <InputCadastroBox>
                                    <label>Rua</label>
                                    <input type="text" {...register('rua')} placeholder='Logradouro'/>
                                    <RedSpan>{errors.rua?.message}</RedSpan>
                                </InputCadastroBox>

                                <InputCadastroBox>
                                    <label>Número</label>
                                    <input type="text" {...register('numero')} placeholder='Número'/>
                                    <RedSpan>{errors.numero?.message}</RedSpan>
                                </InputCadastroBox>

                            </InputFlex>
                            
                            <InputFlex>

                                <InputCadastroBox>
                                    <label>Bairro</label>
                                    <input type="text" {...register('bairro')} placeholder='Bairro'/>
                                    <RedSpan>{errors.bairro?.message}</RedSpan>
                                </InputCadastroBox>

                                <InputCadastroBox>
                                    <label>Cidade </label>
                                    <input type="text" {...register('cidade')} placeholder='Cidade'/>
                                    <RedSpan>{errors.cidade?.message}</RedSpan>
                                </InputCadastroBox>

                            </InputFlex>
                            
                        </InputCadastroGroup>

                        <SignUpButtonBox>
                            <SignInUpButton>Cadastrar</SignInUpButton>
                            <SignInUpButton type="reset">Limpar Campos</SignInUpButton>
                        </SignUpButtonBox>

                    </CadastroFieldset>

                </CadastroForm>

                <div>
                    {listaClientes.map((cli,index)=>(
                        <div  key={index}>    
                        <p>Nome:{cli.nome}</p>
                        <p>Email:{cli.email}</p>
                        <p>CPF:{cli.cpf}</p>
                        <p>Rua:{cli.rua}</p>
                        <p>Bairro:{cli.bairro}</p>
                        <p>Cidade:{cli.cidade}</p>
                        </div>
                    
                    ))}
                </div>


            </CadastroContainer>
        </GreenSection>
        </>
    )
}

export default Cadastro