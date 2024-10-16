'use client'
import Pagina from '@/componets/Pagina';
import { Formik } from 'formik';
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { FaCheck, FaTrash } from 'react-icons/fa';
import * as Yup from 'yup';

export default function CadastroPage() {

    function cadastrar(dados) {
        console.log(dados)

    }

    const initialValues = {
        nome: '',
        sobrenome: '',
        email: "",
        dataNascimento: "",
        telefone: "",
        endereco: {
            cep: '',
            logradouro: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            uf: ''
        },
        faculdade: '',
        curso: "",
        periodo: '',
        matricula: ''
    }

    const validationSchema = Yup.object().shape({
        nome: Yup.string().required('Campo é Obrigatório'),
        sobrenome: Yup.string().required('Campo é Obrigatório'),
        email: Yup.string().email('Email inválido').required("Campo é obrigatorio"),
        dataNascimento: Yup.date('Data Inválida').required("Campo é obrigatorio"),
        telefone: Yup.string().required("Campo é obrigatório"),
        endereco: Yup.object().shape({
            cep: Yup.string().required("Campo é obrigatório"),
            logradouro: Yup.string().required("Campo é obrigatório"),
            numero: Yup.string().required("Campo é obrigatório"),
            complemento: Yup.string().nullable,
            bairro: Yup.string().required("Campo é obrigatório"),
            cidade: Yup.string().required("Campo é obrigatório"),
            uf: Yup.string().required("Campo é obrigatório")
        }),
        faculdade: Yup.string().required("Campo é obrigatório"),
        curso: Yup.string().required("Campo é obrigatório"),
        periodo: Yup.string().required("Campo é obrigatório"),
        matricula: Yup.string().required("Campo é obrigatório")

    })


    return (
        <Pagina titulo='Cadastro de Aluno '>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={cadastrar}

            >
                {({ values, errors, touched, handleBlur, handleSubmit, handleReset, handleChange }) => (



                    <Form onSubmit={handleSubmit}>

                        <div className='text-center'>
                            <h1>Dados Pessoais</h1>
                            <hr />
                        </div>

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
                                    isInvalid={touched.nome && !!errors.nome}

                                />
                                <Form.Control.Feedback type='invalid'>{errors.nome}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Sobrenome:</Form.Label>
                                <Form.Control
                                    name='sobrenome'
                                    type='text'
                                    value={values.sobrenome}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.sobrenome && !errors.sobrenome}
                                    isInvalid={touched.sobrenome && !!errors.sobrenome}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.sobrenome}</Form.Control.Feedback>
                            </Form.Group>

                        </Row>

                        <Form.Group className='text-end'>
                            <Button onClick={handleReset} className='me-2'><FaTrash /> Limpar</Button>
                            <Button type='submit' variant='success'><FaCheck /> Enviar</Button>
                        </Form.Group>
                    </Form>

                )}







            </Formik>



        </Pagina>
    )
}
