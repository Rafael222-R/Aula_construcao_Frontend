'use client'
import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { FaTrash,FaArrowLeft,FaCheck } from 'react-icons/fa'
import { v4 } from 'uuid'
import * as Yup from 'yup'  

export default function alunosFormPage(props) {


    const router = useRouter()

    const faculdades = JSON.parse(localStorage.getItem('faculdades')) || []

    const cursos = JSON.parse(localStorage.getItem('cursos')) || []

    const alunos = JSON.parse(localStorage.getItem('alunos')) || []


    const id = props.searchParams.id
    console.log(props.searchParams.id)
    const alunoEditado = alunos.find(item => item.id == id)
    console.log(alunoEditado)

    function salvar(dados) {

        if (alunoEditado) {
            Object.assign(alunoEditado, dados)

            localStorage.setItem('alunos', JSON.stringify(alunos))
        } else {

            dados.id = v4()

            alunos.push(dados)

            localStorage.setItem('alunos', JSON.stringify(alunos))
        }

        alert("Alunos criado com sucesso!")
        router.push("/alunos")

    }


    const initialValues = {
        nome: '',
        sobrenome: '',
        email: '',
        dataNascimento: '',
        telefone: '',
        faculdade: '',
        curso: '',
        periodo: '',
        matricula: '',
        foto: '',

    }

    const validationSchema = Yup.object().shape({
        nome: Yup.string().required("Campo obrigatório"),
        sobrenome: Yup.string().required("Campo obrigatório"),
        email: Yup.string().email('Email é obrigatorio').required("Campo obrigatório"),
        dataNascimento: Yup.string().required("Campo obrigatório"),
        telefone: Yup.string().required("Campo obrigatório"),
        faculdade: Yup.string().required("Campo obrigatório"),
        curso: Yup.string().required("Campo obrigatório"),
        periodo: Yup.string().required("Campo obrigatório"),
        matricula: Yup.string().required("Campo obrigatório"),
        foto: Yup.string().required("Campo obrigatório"),
    })
    return (
        <Pagina titulo={'Cadastro de Aluno'}>

            <Formik

                initialValues={alunoEditado || initialValues}
                validationSchema={validationSchema}
                onSubmit={salvar}

            >
                {

                    ({ values, errors, touched, handleChange, handleBlur, handleSubmit, handleReset }) => {

                        return (
                            <Form onSubmit={handleSubmit}>
                                <div className='text-center'>
                                    <h3>Dados Pessoais</h3>
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

                                <Row className='mb-2'>

                                    <Form.Group as={Col}>
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control
                                            name='email'
                                            type='email'
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.email && !errors.email}
                                            isInvalid={touched.email && !!errors.email}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Data de Nascimento:</Form.Label>
                                        <Form.Control
                                            name='dataNascimento'
                                            type='date'
                                            value={values.dataNascimento}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.dataNascimento && !errors.dataNascimento}
                                            isInvalid={touched.dataNascimento && !!errors.dataNascimento}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.dataNascimento}</Form.Control.Feedback>
                                    </Form.Group>

                                </Row >
                                <Row className='mb-2' md={2}>
                                    <Form.Group as={Col}>
                                        <Form.Label>Telefone:</Form.Label>
                                        <Form.Control
                                            name='telefone'
                                            type='text'
                                            placeholder='(00)00000-0000'
                                            value={values.telefone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.telefone && !errors.telefone}
                                            isInvalid={touched.telefone && !!errors.telefone}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.telefone}</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <div className='text-center'>
                                    <h3>Acadêmicos</h3>
                                    <hr />
                                </div>

                                <Row className='mb-2' >
                                    <Form.Group as={Col}>
                                        <Form.Label>Faculdade:</Form.Label>
                                        <Form.Select
                                            name='faculdade'
                                            value={values.faculdade}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.faculdade && !errors.faculdade}
                                            isInvalid={touched.faculdade && !!errors.faculdade}
                                        >
                                            <option value=''>Selecione</option>
                                            {faculdades.map(faculdade => <option value={faculdade.nome}>{faculdade.nome}</option>)}

                                        </Form.Select>
                                        <Form.Control.Feedback type='invalid'>{errors.faculdade}</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Curso :</Form.Label>
                                        <Form.Select
                                            name='curso'
                                            value={values.curso}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.curso && !errors.curso}
                                            isInvalid={touched.curso && !!errors.curso}
                                        >
                                            <option value=''>Selecione</option>
                                            {cursos.map(curso => <option value={curso.nome}> {curso.nome}</option>)}

                                        </Form.Select>
                                        <Form.Control.Feedback type='invalid'>{errors.curso}</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Periodo :</Form.Label>
                                        <Form.Select
                                            name='periodo'
                                            value={values.periodo}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.periodo && !errors.periodo}
                                            isInvalid={touched.periodo && !!errors.periodo}
                                        >
                                            <option value=''>Selecione</option>
                                            <option value='Matutino'>Matutino</option>
                                            <option value='Vespertino'>Vespertino</option>
                                            <option value='Noturno'>Noturno</option>
                                            

                                        </Form.Select>
                                        <Form.Control.Feedback type='invalid'>{errors.periodo}</Form.Control.Feedback>
                                    </Form.Group>

                                </Row>

                                <Row className='mb-2' >
                                <Form.Group as={Col} md={4}>
                                        <Form.Label>Matricula:</Form.Label>
                                        <Form.Control
                                            name='matricula'
                                            type='text'
                                            value={values.matricula}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.matricula && !errors.matricula}
                                            isInvalid={touched.matricula && !!errors.matricula}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.matricula}</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Foto:</Form.Label>
                                        <Form.Control
                                            name='foto'
                                            type='text'
                                            value={values.foto}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.foto && !errors.foto}
                                            isInvalid={touched.foto && !!errors.foto}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.foto}</Form.Control.Feedback>
                                    </Form.Group>

                                    
                                </Row>

                                <Form.Group className='text-end'>
                                        <Button className='me-2' variant='secondary' href='/alunos'> <FaArrowLeft /> Voltar</Button>
                                        <Button  className='text-end me-2' onClick={handleReset}> <FaTrash /> Limpar</Button>
                                        <Button className='text-end me-2'type='submit' variant='success'> <FaCheck /> Enviar</Button>
                                    </Form.Group>

















                            </Form>
                        )








                    }



                }






            </Formik>




        </Pagina>
    )
}
