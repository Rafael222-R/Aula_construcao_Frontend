'use client'
import Pagina from '@/componets/Pagina'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Button, CardImg, Form, Modal} from 'react-bootstrap'
import { FaCheck, FaTrash } from 'react-icons/fa'

export default function page() {

    const[showModal, setshowModal] = useState(false)

    const [imc, setImc] = useState(0)
    const [clas, setClas] = useState("")

    function calcular(dados) {
        console.log(dados)

        const resIMC = (dados.peso / (dados.altura * dados.altura)).toFixed(1)

        console.log(resIMC)

        let resClas = ''
        if(resIMC <18.5){
            resClas = 'Baixo peso'
        }else if (resIMC >= 18.5 && resIMC < 25) {
            resClas = 'Peso Normal'
        }else if (resIMC >= 25 && resIMC < 29.9){
            resClas = " Sobrepeso"
        }else if(resIMC >= 30 && resIMC <34.4){
            resClas = "Obesidade I"
        }else if(resIMC >=35){
            resClas="Obesidade Morbida"
        }

        console.log(resClas)

        setImc(resIMC   )
        setClas(resClas)

        setshowModal(true)

        
    }



    return (
        <Pagina titulo='Calculadora de IMC - Formik'>

            {/*Imagem */}
            <div>
                <CardImg src='/imc/obesidade.jpg'/>
            </div>

            {/*Formulario */}
            <Formik
                initialValues={{
                    nome: '',
                    genero: '',
                    peso: '0',
                    altura: '0.0'

                }}
                onSubmit={values => calcular(values)}
            >
                {/*{{}} utiliar duas chave , esta informando que esta usando o javaScrit */}
                {({ values, handleChange, handleSubmit, handleReset }) => (

                    <Form>
                        <Form.Group className='mb-2'>
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control
                                type='text'
                                name='nome'
                                value={values.nome}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className='mb-2'>
                            <Form.Label>Genero:</Form.Label>
                            <Form.Select
                                name='genero'
                                value={values.genero}
                                onChange={handleChange}
                            >
                                <option>Selecione</option>
                                <option value={'Masculino'}>Masculino</option>
                                <option value={"Feminino"}>Feminino</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className='mb-2'>
                            <Form.Label>Peso:</Form.Label>
                            <Form.Control
                                name='peso'
                                type='number'
                                min={1}
                                value={values.peso}
                                onChange={handleChange}
                            />
                            <Form.Text>Peso em KG. Ex:80</Form.Text>
                        </Form.Group>

                        <Form.Group className='mb-2'>
                            <Form.Label>Altura:</Form.Label>
                            <Form.Control
                                name='altura'
                                type='number'
                                min={1}
                                step={0.01}
                                value={values.altura}
                                onChange={handleChange}
                            />
                            <Form.Text>Altura em Metros. Ex: 1,75</Form.Text>
                        </Form.Group>




                        <Form.Group className='mb-2 text-center'>
                            <Button onClick={handleSubmit} className='me-2'><FaCheck/> Enviar</Button>
                            <Button onClick={handleReset}><FaTrash/> Limpar</Button>

                        </Form.Group>

                    </Form>
                )}

            </Formik>

            <Modal show={showModal} onHide={() => setshowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Resultado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>O seu imc é {imc}</p>
          <p>Sua classificação é {clas}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setshowModal(false)} >
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>




        </Pagina>

    )
}
