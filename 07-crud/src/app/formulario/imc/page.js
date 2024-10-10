'use client'
import Pagina from '@/componets/Pagina'
import React, { useState } from 'react'
import { Button, CardImg, Form, FormControl, FormGroup, FormLabel, FormSelect, FormText, Modal } from 'react-bootstrap'
import { FaCheck } from "react-icons/fa";

export default function ImcPage() {

    {/*O useState é para controlar o que esta dentro os parementros dentro do cochete */}
    const [showModal, setshowModal] = useState(false)
    {/*Dento do cochete a unica função que pode mudar ou acasionar um efeito é o SET..... */}
    
    const [nome, setNome] = useState('')
    const [genero, setGenero] = useState('')
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState('0.0')


    const [imc, setImc] = useState(0)
    const [classificacao, setClassificacao] = useState('')


    function calcular(event) {

        event.preventDefault()

        const pesoNumerico = Number(peso)
        const alturaNumerica = Number(altura)

        console.log({ nome, genero, pesoNumerico, alturaNumerica })


        const resultadoIMC = (pesoNumerico / (alturaNumerica * alturaNumerica)).toFixed(1)
        console.log(resultadoIMC)


        setImc(resultadoIMC)

        if (resultadoIMC < 18.5) {
            setClassificacao('Abaixo do Peso')
        } else if (resultadoIMC >= 18.5 && resultadoIMC < 24.9) {
            setClassificacao('Peso Normal')
        } else if (resultadoIMC >= 25 && resultadoIMC < 29.9) {
            setClassificacao('Sobrepeso')
        } else if (resultadoIMC >= 30 && resultadoIMC < 34.9) {
            setClassificacao('Obesicade Grau I')
        } else if (resultadoIMC >= 35) {
            setClassificacao("Obesidade Morbida")
        }

        console.log({ imc, classificacao })

        setshowModal(true)

    }


    return (

        <Pagina titulo='Calculadora de IMC'>

            <div>
                <CardImg src='/imc/obesidade.jpg' />
            </div>

            <Form onSubmit={calcular}>
                <FormGroup>
                    <FormLabel> Nome:</FormLabel>
                    <FormControl
                        type='text'
                        name='nome'
                        value={nome}
                        onChange={e => { setNome(e.target.value) }}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Gênero:</FormLabel>
                    <FormSelect
                        name='genero'
                        value={genero}
                        onChange={e => setGenero(e.target.value)}
                    >
                        <option>Selecione</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </FormSelect>
                </FormGroup>

                <FormGroup>
                    <FormLabel>Peso:</FormLabel>
                    <FormControl
                        name='peso'
                        type='number'
                        value={peso}
                        onChange={e => setPeso(e.target.value)}
                        min={1}
                        step={1}
                    />
                    <Form.Text>Peso em KG. EX:80</Form.Text>
                </FormGroup>

                <FormGroup>
                    <FormLabel>Altura:</FormLabel>
                    <FormControl
                        name='altura'
                        type='number'
                        value={altura}
                        onChange={e => setAltura(e.target.value)}
                        min={0.01}
                        step={0.01}
                    />
                    <FormText> Altura em Metros. EX: 1,75</FormText>

                </FormGroup>

                <FormGroup className='mb-3 text-center'>
                    <Button type='submit' variant='success'><FaCheck />Calcular</Button>


                </FormGroup>

            </Form>

            {/*Modal do Formulario */}
            <Modal show={showModal} onHide={() => setshowModal(false)} centered >
                <Modal.Header closeButton>
                    <Modal.Title>Resultado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>O seu Imc é {imc}</p>
                    <p>Sua classificacao {classificacao}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setshowModal(false)}>
                        Fechar
                    </Button>

                </Modal.Footer>
            </Modal>




        </Pagina>
    )
}
