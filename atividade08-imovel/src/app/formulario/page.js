'use client'
import PaginaPage from '@/components/page'

import { Formik } from 'formik'
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import * as  Yup from "yup"
import { FaTrash, FaCheck } from "react-icons/fa";
import ReactInputMask from 'react-input-mask'

export default function ImovelPage() {


    function cadastro(dados) {
        console.log(dados)

    }


    const initialValues = {

        tipo: '',
        finalidade: '',
        valor: '',
        area: '',
        quartos: '',
        banheiros: '',
        descricao: '',
        foto: '',
        vagasGaragem: '',
        endereco: {
            cep: "",
            logradouro: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            UF: ''
        },
        proprietario: {
            nome: '',
            CPF: '',
            telefone: "",
            email: ''
        }


    }


    const validationSchema = Yup.object().shape({
        tipo: Yup.string().required('Tipo do Imóvel é Obrigatório'),
        finalidade: Yup.string().required('Finalidade do Imóvel é Obrigatório'),
        valor: Yup.string().required('Valor do Imóvel é Obrigatório'),
        area: Yup.string().required('Area é Obrigatório'),
        quartos: Yup.string().required('Insira a quantidade de Quantos '),
        banheiros: Yup.string().required('Insira a quantidade de Banheiros '),
        descricao: Yup.string().required('Insira uma Descrição sobre o Imóvel'),
        foto: Yup.string(),
        vagasGaragem: Yup.string().required('Campo é Obrigatório'),
        endereco: Yup.object().shape({
            cep: Yup.string().required('Insira o CEP'),
            logradouro: Yup.string().required('Campo é Obrigatório'),
            numero: Yup.string().required('Número é Obrigatório'),
            complemento: Yup.string(),
            bairro: Yup.string().required('Bairro é Obrigatório'),
            cidade: Yup.string().required('Cidade é Obrigatório'),
            UF: Yup.string().required('Informe seu UF')
        }),
        proprietario: Yup.object().shape({
            nome: Yup.string().required('Nome é Obrigatório'),
            CPF: Yup.string().required('Insira o CPF'),
            telefone: Yup.string().required('Telefone é Obrigatório'),
            email: Yup.string().email('E-mail Inválido').required('Campo é Obrigatório')
        })
    })


    return (
        <PaginaPage titulo='Formulário de Imóveis'>

            <div className='text-center'>
                <h3>Dados do Imóvel</h3>
                <hr />
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={cadastro}

            >
                {({ values, handleChange, handleSubmit, handleReset, handleBlur, errors, touched }) => (

                    <Form onSubmit={handleSubmit}>

                        <Row className='mb-2'>
                            <Form.Group as={Col}>
                                <Form.Label>Tipo do Imovel:</Form.Label>
                                <Form.Select
                                    name='tipo'
                                    value={values.tipo}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.tipo && !errors.tipo}
                                    isInvalid={touched.tipo && !!errors.tipo}

                                >

                                    <option value=''>Selecione</option>
                                    <option value='Casa'>Casa</option>
                                    <option value='Apartamento'>Apartamento</option>
                                    <option value='Terreno'>Terreno</option>
                                    <option value='Sala Comercial'>Sala Comercial</option>
                                </Form.Select>
                                <Form.Control.Feedback type='invalid'>{errors.tipo}</Form.Control.Feedback>

                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Finalidade:</Form.Label>
                                <Form.Select
                                    name='finalidade'
                                    value={values.finalidade}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.finalidade && !errors.finalidade}
                                    isInvalid={touched.finalidade && !! errors. finalidade}
                                >
                                    <option value=''>Selecione</option>
                                    <option value='Venda'>Venda</option>
                                    <option value='Aluguel'>Aluguel</option>

                                </Form.Select>
                                
                                <Form.Control.Feedback type="invalid">{errors.finalidade}</Form.Control.Feedback>
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
                                    isInvalid={touched.valor && !!errors.valor}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.valor}</Form.Control.Feedback>

                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Area:</Form.Label>
                                <Form.Control
                                    name='area'
                                    type='string'
                                    value={values.area}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.area && !errors.area}
                                    isInvalid={touched.area && !!errors.area}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.area}</Form.Control.Feedback>
                            </Form.Group>


                        </Row>

                        <Row className='mb-2'>


                            <Form.Group as={Col}>
                                <Form.Label>Quartos:</Form.Label>
                                <Form.Control
                                    name='quartos'
                                    type='string'
                                    value={values.quartos}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.quartos && !errors.quartos}
                                    isInvalid={touched.quartos && !!errors.quartos}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.quartos}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Banheiros:</Form.Label>
                                <Form.Control
                                    name='banheiros'
                                    type='string'
                                    value={values.banheiros}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.banheiros && !errors.banheiros}
                                    isInvalid={touched.banheiros && !!errors.banheiros}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.banheiros}</Form.Control.Feedback>
                            </Form.Group>


                        </Row>

                        <Row className='mb-2'>

                            <Form.Group as={Col}>
                                <Form.Label>Descrição:</Form.Label>
                                <Form.Control
                                    name='descricao'
                                    type='string'
                                    value={values.descricao}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.descricao && !errors.descricao}
                                    isInvalid={touched.descricao && !!errors.descricao}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.descricao}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Link da Fotos:</Form.Label>
                                <Form.Control
                                    name='foto'
                                    type='string'
                                    value={values.foto}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.foto && !errors.foto}
                                    isInvalid={touched.foto && !!errors.foto}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.foto}</Form.Control.Feedback>
                            </Form.Group>


                        </Row>

                        <Row className='mb-2'>
                            <Form.Group as={Col} md={6}>
                                <Form.Label>Vagas Garagem:</Form.Label>
                                <Form.Control
                                    name='vagasGaragem'
                                    type='string'
                                    value={values.vagasGaragem}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.vagasGaragem && !errors.vagasGaragem}
                                    isInvalid={touched.vagasGaragem && !!errors.vagasGaragem}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.vagasGaragem}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <div className='text-center'>
                            <h3>Endereço</h3>
                            <hr />
                        </div>

                        <Row className='mb-2'>

                            <Form.Group as={Col} md={9}>
                                <Form.Label>Logradouro:</Form.Label>
                                <Form.Control
                                    name='endereco.logradouro'
                                    type='string'
                                    value={values?.endereco?.logradouro}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched?.endereco?.logradouro && !errors?.endereco?.logradouro}
                                    isInvalid={touched?.endereco?.logradouro && !!errors?.endereco?.logradouro}
                                />
                                <Form.Control.Feedback type='invalid'>{errors?.endereco?.logradouro}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md={3}>
                                <Form.Label>CEP:</Form.Label>
                                <Form.Control as={ReactInputMask}
                                    mask={"99999-999"}
                                    placeholder='99999-999'
                                    name='endereco.cep'
                                    type='string'
                                    value={values?.endereco?.cep}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched?.endereco?.cep && !errors?.endereco?.cep}
                                    isInvalid={touched?.endereco?.cep && !!errors?.endereco?.cep}
                                />
                                <Form.Control.Feedback type='invalid'>{errors?.endereco?.cep}</Form.Control.Feedback>
                            </Form.Group>


                        </Row>

                        <Row className='mb-2'>
                            <Form.Group as={Col} md={3}>
                                <Form.Label>Número:</Form.Label>
                                <Form.Control
                                    name='endereco.numero'
                                    type='string'
                                    value={values?.endereco?.numero}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched?.endereco?.numero && !errors?.endereco?.numero}
                                    isInvalid={touched?.endereco?.numero && !!errors?.endereco?.numero}
                                />
                                <Form.Control.Feedback type='invalid'>{errors?.endereco?.numero}</Form.Control.Feedback>
                            </Form.Group>


                            <Form.Group as={Col} md={9}>
                                <Form.Label>Complemento:</Form.Label>
                                <Form.Control
                                    name='endereco.complemento'
                                    type='string'
                                    value={values?.endereco?.complemento}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched?.endereco?.complemento && !errors?.endereco?.complemento}
                                    isInvalid={touched?.endereco?.complemento && !!errors?.endereco?.complemento}
                                />
                                <Form.Control.Feedback type='invalid'>{errors?.endereco?.complemento}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className='mb-2'>
                            <Form.Group as={Col}>
                                <Form.Label>Bairro:</Form.Label>
                                <Form.Control
                                    name='endereco.bairro'
                                    type='string'
                                    value={values?.endereco?.bairro}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched?.endereco?.bairro && !errors?.endereco?.bairro}
                                    isInvalid={touched?.endereco?.bairro && !!errors?.endereco?.bairro}
                                />
                                <Form.Control.Feedback type='invalid'>{errors?.endereco?.bairro}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Cidade:</Form.Label>
                                <Form.Control
                                    name='endereco.cidade'
                                    type='string'
                                    value={values?.endereco?.cidade}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched?.endereco?.cidade && !errors?.endereco?.cidade}
                                    isInvalid={touched?.endereco?.cidade && !!errors?.endereco?.cidade}
                                />
                                <Form.Control.Feedback type='invalid'>{errors?.endereco?.cidade}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>UF:</Form.Label>
                                <Form.Control
                                    name='endereco.UF'
                                    type='string'
                                    value={values?.endereco?.UF}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched?.endereco?.UF && !errors?.endereco?.UF}
                                    isInvalid={touched?.endereco?.UF && !!errors?.endereco?.UF}
                                />
                                <Form.Control.Feedback type='invalid'>{errors?.endereco?.UF}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <div className='text-center'>
                            <h3>Proprietario</h3>
                            <hr />
                        </div>

                        <Row className='mb-2'>
                            <Form.Group as={Col}>
                                <Form.Label>Nome:</Form.Label>
                                <Form.Control
                                    name='proprietario.nome'
                                    type='string'
                                    value={values?.proprietario?.nome}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched?.proprietario?.nome && !errors?.proprietario?.nome}
                                    isInvalid={touched?.proprietario?.nome && !!errors?.proprietario?.nome}
                                />
                                <Form.Control.Feedback type='invalid'>{errors?.proprietario?.nome}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>CPF:</Form.Label>
                                <Form.Control as={ReactInputMask}
                                    mask={'999.999.999-99'}
                                    placeholder='999.999.999-99'
                                    name='proprietario.CPF'
                                    type='string'
                                    value={values?.proprietario?.CPF}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched?.proprietario?.CPF && !errors?.proprietario?.CPF}
                                    isInvalid={touched?.proprietario?.CPF && !!errors?.proprietario?.CPF}
                                />
                                <Form.Control.Feedback type='invalid'>{errors?.proprietario?.CPF}</Form.Control.Feedback>
                            </Form.Group>

                        </Row>

                        <Row className='mb-2'>
                            <Form.Group as={Col}>
                                <Form.Label> E-mail:</Form.Label>
                                <Form.Control
                                    name='proprietario.email'
                                    type='email'
                                    value={values?.proprietario?.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched?.proprietario?.email && !errors?.proprietario?.email}
                                    isInvalid={touched?.proprietario?.email && !!errors?.proprietario?.email}
                                />
                                <Form.Control.Feedback type='invalid'>{errors?.proprietario?.email}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label> Telefone:</Form.Label>
                                <Form.Control as={ReactInputMask}
                                    mask={"(99) 99999-9999"}
                                    placeholder='(99) 99999-9999'
                                    name='proprietario.telefone'
                                    type='string'
                                    value={values?.proprietario?.telefone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched?.proprietario?.telefone && !errors?.proprietario?.telefone}
                                    isInvalid={touched?.proprietario?.telefone && !!errors?.proprietario?.telefone}
                                />
                                <Form.Control.Feedback type='invalid'>{errors?.proprietario?.telefone}</Form.Control.Feedback>
                            </Form.Group>

                        </Row>


                        <br />
                        <Form.Group className='text-end'>
                            <Button onClick={handleReset} className='me-2'> <FaTrash /> Limpar</Button>
                            <Button type='submit' variant='success'><FaCheck /> Enviar</Button>

                        </Form.Group>


                    </Form>




                )}





            </Formik>



        </PaginaPage>
    )
}

