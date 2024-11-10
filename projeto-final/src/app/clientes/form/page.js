'use client'
import Pagina from '@/components/Pagina'
import axios from 'axios'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Form, Row, Col , Button} from 'react-bootstrap'
import { FaCheck,FaArrowLeft } from 'react-icons/fa'
import * as yup from 'yup'


export default function clientesFormPage() {

    const router = useRouter()

    function salvar(dados) {
        console.log(dados)
        axios.post('http://localhost:3000/clientes', dados)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

    alert('Cliente Criado com Sucesso!')
    router.push('/clientes')

    }

    const initialValues = {

        nome: '',
        cpf: '',
        telefone: '',
        endereco: {
            cep: '',
            uf: '',
            localidade: '',
            bairro: '',
            logradouro: '',
            numero: '',
            complemento: '',
        },
        email: ''

    }

    const validationSchema = yup.object().shape({
        nome: yup
            .string("Campo precisa ser um texto")
            .required("Campo obrigatório"),
        cpf: yup
            .string("Campo precisa ser um texto")
            .required("Campo obrigatório"),
        telefone: yup
            .string("Campo precisa ser um texto")
            .required("Campo obrigatório"),
            email: yup
            .string("Campo precisa ser um texto")
            .required("Email obrigatório"),
    })


    return (
        <Pagina titulo={'Cadastro de clientes'}>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={salvar}

            >
                {
                    ({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => {


                        return (
                            <Form onSubmit={handleSubmit}>
                                <div className='text-center mb-2'>  
                                    <h2>Dados Pessoais</h2>
                                    <hr/>
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
                                            isInvalid={touched.nome && errors.nome}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.nome}</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>CPF:</Form.Label>
                                        <Form.Control
                                            name='cpf'
                                            type='text'
                                            value={values.cpf}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.cpf && !errors.cpf}
                                            isInvalid={touched.cpf && errors.cpf}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.cpf}</Form.Control.Feedback>
                                    </Form.Group>


                                </Row>

                                <Row className='mb-2'>
                                    <Form.Group as={Col}>
                                        <Form.Label>Telefone:</Form.Label>
                                        <Form.Control
                                            name='telefone'
                                            type='text'
                                            value={values.telefone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.telefone && !errors.telefone}
                                            isInvalid={touched.telefone && errors.telefone}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.telefone}</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control
                                            name='email'
                                            type='email'
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.email && !errors.email}
                                            isInvalid={touched.email && errors.email}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                                    </Form.Group>


                                </Row>
                                <div className='text-center mb-2'>  
                                    <h2>Endereço</h2>
                                    <hr/>
                                </div>

                                <Row className='mb-2'>
                                    <Form.Group as={Col}>
                                        <Form.Label>Cep:</Form.Label>
                                        <Form.Control
                                            name='endereco.cep'
                                            type='text'
                                            value={values?.endereco?.cep}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched?.endereco?.cep && !errors?.endereco?.cep}
                                            isInvalid={touched?.endereco?.cep && errors?.endereco?.cep}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors?.endereco?.cep}</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>UF:</Form.Label>
                                        <Form.Control
                                            name='endereco.uf'
                                            type='text'
                                            value={values?.endereco?.uf}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched?.endereco?.uf && !errors?.endereco?.uf}
                                            isInvalid={touched?.endereco?.uf && errors?.endereco?.uf}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors?.endereco?.uf}</Form.Control.Feedback>
                                    </Form.Group>


                                </Row>

                                <Row className='mb-2'>
                                    <Form.Group as={Col}>
                                        <Form.Label>Cidade:</Form.Label>
                                        <Form.Control
                                            name='endereco.localidade'
                                            type='text'
                                            value={values?.endereco?.localidade}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched?.endereco?.localidade && !errors?.endereco?.localidade}
                                            isInvalid={touched?.endereco?.localidade && errors?.endereco?.localidade}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors?.endereco?.localidade}</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Bairro:</Form.Label>
                                        <Form.Control
                                            name='endereco.bairro'
                                            type='text'
                                            value={values?.endereco?.bairro}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched?.endereco?.bairro && !errors?.endereco?.bairro}
                                            isInvalid={touched?.endereco?.bairro && errors?.endereco?.bairro}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors?.endereco?.bairro}</Form.Control.Feedback>
                                    </Form.Group>


                                </Row>
                                <Row className='mb-2'>
                                    <Form.Group as={Col}>
                                        <Form.Label>logradouro:</Form.Label>
                                        <Form.Control
                                            name='endereco.logradouro'
                                            type='text'
                                            value={values?.endereco?.logradouro}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched?.endereco?.logradouro && !errors?.endereco?.logradouro}
                                            isInvalid={touched?.endereco?.logradouro && errors?.endereco?.logradouro}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors?.endereco?.logradouro}</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>numero:</Form.Label>
                                        <Form.Control
                                            name='endereco.numero'
                                            type='text'
                                            value={values?.endereco?.numero}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched?.endereco?.numero && !errors?.endereco?.numero}
                                            isInvalid={touched?.endereco?.numero && errors?.endereco?.numero}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors?.endereco?.numero}</Form.Control.Feedback>
                                    </Form.Group>


                                </Row>

                                <Row className='mb-2'>
                                    <Form.Group as={Col}>
                                        <Form.Label>complemento:</Form.Label>
                                        <Form.Control
                                            name='endereco.complemento'
                                            type='text'
                                            value={values?.endereco?.complemento}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched?.endereco?.complemento && !errors?.endereco?.complemento}
                                            isInvalid={touched?.endereco?.complemento && errors?.endereco?.complemento}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors?.endereco?.complemento}</Form.Control.Feedback>
                                    </Form.Group>

                                
                                </Row>
                                <Form.Group className='text-end'>
                                    <Button className='me-2' href='/clientes'><FaArrowLeft /> Voltar</Button>
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
