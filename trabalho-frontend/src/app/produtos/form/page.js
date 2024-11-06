'use client'
import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import React from 'react'
import { Form, Row, Col, Button  } from 'react-bootstrap'
import { FaArrowLeft, FaCheck } from "react-icons/fa"

export default function ProdutosformPage() {

    const produtos = JSON.parse(localStorage.getItem('produtos')) || []

    function salvar(dados) {
        console.log(dados)

    }

    const initialValues = {
        nome: '',
        descricao: '',
        valor: '',
        codBarras: '',
        categoria: '',
        quantEstoque: '',
        fabricante: '', 
        dataValidade: '',
        foto: ''

    }
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
                                        <Form.Label>Valor:</Form.Label>
                                        <Form.Control
                                            name='valor'
                                            type='text'
                                            value={values.valor}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.valor && !errors.valor}
                                            isInvalid={touched.valor && errors.valor}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.valor}</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Codigo de Barras:</Form.Label>
                                        <Form.Control
                                            name='codBarras'
                                            type='text'
                                            value={values.codBarras}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.codBarras && !errors.codBarras}
                                            isInvalid={touched.codBarras && errors.codBarras}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.codBarras}</Form.Control.Feedback>
                                    </Form.Group>

                                </Row>

                                <Row className='mb-2'>
                                    <Form.Group as={Col}>
                                        <Form.Label>Categoria:</Form.Label>
                                        <Form.Control
                                            name='categoria'
                                            type='text'
                                            value={values.categoria}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.categoria && !errors.categoria}
                                            isInvalid={touched.categoria && errors.categoria}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.categoria}</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col}>
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
                                    </Form.Group>

                                </Row>

                                <Row className='mb-2'>
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
                                </Row>


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
