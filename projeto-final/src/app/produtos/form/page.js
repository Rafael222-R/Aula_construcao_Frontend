'use client'
import Pagina from '@/components/Pagina'
import { Formik, validateYupSchema } from 'formik'
import React from 'react'
import { Form, Row, Col, Button  } from 'react-bootstrap'
import { FaArrowLeft, FaCheck } from "react-icons/fa"
import * as Yup from 'yup'

export default function ProdutosformPage() {

    const produtos = JSON.parse(localStorage.getItem('produtos')) || []

    function salvar(dados) {
        console.log(dados)

    }

    const initialValues = {
        nome: '',
        descricao: '',
        codigo_barras: '',
        peso: '',
        preco: '',
        // quantEstoque: '',
        // fabricante: '', 
        // dataValidade: '',
        // foto: ''

    }

    const validationSchema = Yup.object().shape({
        nome: Yup
        .string("Campo nome precisa ser um texto")
        .required( "Campo nome é Obrigatorio"),
        descricao: Yup
        .string("Campo nome precisa ser um texto"),
        codigo_barras: Yup
        .string("Campo nome precisa ser um texto")
        .min(12, "O codigo de Barras deve conter no minimo 12 digitos")
        .required("Campo Codigo de Barras é Obrigatorio"),
        peso: Yup
        .number("Campo salario precisa ser numerico")
        .required("Campo peso é Obrigatorio"),
        preco: Yup
        .number("Campo salario precisa ser numerico")
        .required("Campo Preço  é Obrigatorio")

    })


    return (
        <Pagina titulo={'Cadastro de Produtos'}>

            <Formik

                initialValues={initialValues}
                onSubmit={salvar}

            >{
                    ({ values, errors, touched, handleChange, handleBlur, handleSubmit, handleReset }) => {

                        return (

                            <Form>

                                <Row className='mb-2'>
                                    <Form.Group as={Col}>
                                        <Form.Label>Nome:</Form.Label>
                                        <Form.Control
                                            name='nome'
                                            type='text'
                                            value={values.nome}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.nome && !errors.nome}
                                            isInvalid={touched.nome && errors.nome}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.nome}</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Descricao:</Form.Label>
                                        <Form.Control
                                            name='descricao'
                                            type='text'
                                            value={values.descricao}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.descricao && !errors.descricao}
                                            isInvalid={touched.descricao && errors.descricao}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.descricao}</Form.Control.Feedback>
                                    </Form.Group>

                                </Row>

                                <Row className='mb-2'>
                                    <Form.Group as={Col}>
                                        <Form.Label>codigo_barras:</Form.Label>
                                        <Form.Control
                                            name='valor'
                                            type='number'
                                            min={1}
                                            step={1}
                                            value={values.codigo_barras}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.codigo_barras && !errors.codigo_barras}
                                            isInvalid={touched.codigo_barras && errors.codigo_barras}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.codigo_barras}</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Peso:</Form.Label>
                                        <Form.Control
                                            name='peso'
                                            type='text'
                                            value={values.peso}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.peso && !errors.peso}
                                            isInvalid={touched.peso && errors.peso}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.peso}</Form.Control.Feedback>
                                    </Form.Group>

                                </Row>

                                <Row className='mb-2'>
                                    <Form.Group as={Col}>
                                        <Form.Label>Preço:</Form.Label>
                                        <Form.Control
                                            name='preco'
                                            type='text'
                                            value={values.preco}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.preco && !errors.preco}
                                            isInvalid={touched.preco && errors.preco}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.preco}</Form.Control.Feedback>
                                    </Form.Group>

                                    {/* <Form.Group as={Col}>
                                        <Form.Label>Quantidade Estoque:</Form.Label>
                                        <Form.Control
                                            name='quantEstoque'
                                            type='number'
                                            value={values.quantEstoque}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.quantEstoque && !errors.quantEstoque}
                                            isInvalid={touched.quantEstoque && errors.quantEstoque}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.quantEstoque}</Form.Control.Feedback>
                                    </Form.Group> */}

                                </Row>

                                {/* <Row className='mb-2'>
                                    <Form.Group as={Col}>
                                        <Form.Label>Fabricante:</Form.Label>
                                        <Form.Control
                                            name='fabricante'
                                            type='text'
                                            value={values.fabricante}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.fabricante && !errors.fabricante}
                                            isInvalid={touched.fabricante && errors.fabricante}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.fabricante}</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Data de validade:</Form.Label>
                                        <Form.Control
                                            name='datavalidade'
                                            type='date'
                                            value={values.datavalidade}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.datavalidade && !errors.datavalidade}
                                            isInvalid={touched.datavalidade && errors.datavalidade}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.datavalidade}</Form.Control.Feedback>
                                    </Form.Group>

                                </Row>
                                <Row className='mb-2'>
                                    <Form.Group as={Col}>
                                        <Form.Label>Foto:</Form.Label>
                                        <Form.Control
                                            name='foto'
                                            type='text'
                                            value={values.foto}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.foto && !errors.foto}
                                            isInvalid={touched.foto && errors.foto}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.foto}</Form.Control.Feedback>
                                    </Form.Group>
                                </Row> */}


                                <Form.Group className='text-end'>
                  <Button className='me-2' href='/produtos'><FaArrowLeft /> Voltar</Button>
                  <Button type='submit' variant='success'><FaCheck /> Enviar</Button>
                </Form.Group>



                            </Form>

                        )



                    }

                }




            </Formik>

        </Pagina>
    )
}
