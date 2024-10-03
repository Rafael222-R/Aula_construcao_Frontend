'use client'

import Pagina from '@/componets/Pagina'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function FormularioNomePage() {

   const[nome, setNome]= useState('')
   const[email, setEmail] = useState()

    {/*Acção para receber o Dados do usuarios e Salva */}
    function handleNome(evento) {
        setNome(evento.target.value)
        
    }
    {/*Acção para receber o Dados do usuarios e Salva */}
    function handleEmail(evento){
        setEmail(evento.target.value)
    }

    {/*comando para Limpar a tela de Formulario */}
    function reset(){
        console.log('chamou o reset')
        setNome('')
        setEmail('')
    }


    {/* Evento para enviar os Dados recebidos */}
    function submit(evento){
        evento.preventDefault()
        console.log(nome, email)
    }

  

  return (
    <Pagina titulo="Formulário Nome">


        <div> 
            <h2> Seu nome é: {nome} </h2>
            <h2> Seu nome é: {email} </h2>
        </div>

            {/*forma bootstrap */}
        <Form onSubmit={submit} >

            {/*Imput */}
            <Form.Group className='mb-2'>
                    <Form.Label> Nome:</Form.Label>
                    <Form.Control 
                    type='text'
                     name='nome'
                     value={nome}
                     onChange={handleNome}
                     placeholder='Informe o seu nome'
                     />
                    <Form.Text> Informe o seu nome</Form.Text>
            </Form.Group>

            <Form.Group className='mb-2'>
                    <Form.Label> Email:</Form.Label>
                    <Form.Control 
                    type='email' 
                    name='email'
                    value={email}  
                    onChange={handleEmail}
                    />
                    <Form.Text> Informe o seu Email</Form.Text>
            </Form.Group>

            <Button type='submit'> Enviar </Button>
            <Button  onClick={reset}> Limpar</Button>





        </Form>

    </Pagina>
  )
}   
