'use client'
import React, { useState } from 'react'
import PaginaPage from '../components/Pagina'
import { Formik } from 'formik';
import { Button, CardImg, Form, Modal } from 'react-bootstrap';
import { FaMoneyBill1Wave } from "react-icons/fa6"
import { MdCleaningServices } from "react-icons/md"

export default function page() {

    const [showModal, setshowModal] = useState(false)

    const [saldo, setsaldo] = useState(0)
    const [moeda, setmoeda] = useState('')
    const [valorReal, setvalorReal] = useState(0)

    function calcular(dados) {
        console.log(dados)

        const dolar = 0.20;
        const euro = 0.18;
        const bitcoin = 0.000003

        let valorConv;

        if (dados.moeda === 'dolar') {
            valorConv = (dados.valor * dolar).toFixed(1)
        } else if (dados.moeda === 'euro') {
            valorConv = (dados.valor * euro).toFixed(2)
        } else if (dados.moeda === 'bitcoin') {
            valorConv = dados.valor * bitcoin
        } else {
            valorConv = "Moeda não Reconhecida"
        }

        console.log(valorConv)

        setsaldo(valorConv)
        setmoeda(dados.moeda)
        setvalorReal(dados.valor)

        setshowModal(true)
    }


    const getMoedaImagem = () => {
        if (moeda === 'dolar') {
            return '/dolar.jpeg';
        } else if (moeda === 'euro') {
            return '/euro.jpeg';
        } else if (moeda === 'bitcoin') {
            return '/bitcoin.jpeg'
        } else {
            return '';
        }
    }


    return (
        <PaginaPage titulo='Conversao de Moedas-Formik'>

            {moeda && (
                <div>
                    <CardImg src={getMoedaImagem()} alt={moeda} fluid style={{ width: '300px' }} />
                </div>
            )}

            <Formik
                initialValues={{
                    valor: '0',
                    moeda: ''
                }}
                onSubmit={values => calcular(values)}
            >
                {({ values, handleChange, handleSubmit, handleReset }) => (


                    <Form >
                        <Form.Group>
                            <Form.Label>Insira o Valor:</Form.Label>
                            <Form.Control
                                type='number'
                                name='valor'
                                value={values.valor}
                                onChange={handleChange}

                            />
                            <Form.Text>Insira o Valor em Real R$</Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Escolha a Moeda Para Conversao:</Form.Label>
                            <Form.Select
                                name='moeda'
                                value={values.moeda}
                                onChange={(e) => {handleChange(e);
                                    setmoeda(e.target.value)
                                }}
                            >
                                <option value={''}>Selecione</option>
                                <option value={'dolar'}>Dólar 💵</option>
                                <option value={'euro'}>Euro € </option>
                                <option value={'bitcoin'}>Bitcoin ₿ </option>

                            </Form.Select>
                            <Form.Text>Seleciona uma Moeda. Ex: Dólar</Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Button onClick={handleSubmit} className='me-2'> <FaMoneyBill1Wave />Converter</Button>
                            <Button onClick={handleReset}><MdCleaningServices />Limpar</Button>
                        </Form.Group>

                    </Form>

                )}
            </Formik>

            <Modal show={showModal} onHide={() => setshowModal(false)} centered >
                <Modal.Header closeButton>
                    <Modal.Title>Resultado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>A Moeda escolhida é {moeda}: R$ {valorReal} Real = {saldo} {moeda}</p>
                    {moeda && (
                        <div>
                            <CardImg src={getMoedaImagem()} alt={moeda} fluid style={{ width: '100px' }} />
                        </div>
                    )}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setshowModal(false)}>
                        Fechar
                    </Button>

                </Modal.Footer>
            </Modal>


        </PaginaPage>
    )
}
