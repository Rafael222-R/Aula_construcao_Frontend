'use client'
import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaArrowLeft, FaCheck, FaTrash } from 'react-icons/fa'
import { v4 } from 'uuid'
import * as Yup from 'yup'

export default function disciplinasFormPage(props) {

    const router = useRouter()

    const cursos = JSON.parse(localStorage.getItem('cursos')) || []

    const professores = JSON.parse(localStorage.getItem('professores')) || []

    const disciplinas = JSON.parse(localStorage.getItem('disciplinas')) || []



    const id = props.searchParams.id
    console.log(props.searchParams.id)
    const disciplinaEditada = disciplinas.find(item => item.id == id)
    console.log(disciplinaEditada)

    function salvar(dados) {

        if (disciplinaEditada) {
            Object.assign(disciplinaEditada, dados)

            localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
        } else {

            dados.id = v4()

            disciplinas.push(dados)

            localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
        }

        alert("Disciplina criado com sucesso!")
        router.push("/disciplinas")

    }






    const initialValues = {
        nome: '',
        discricao: '',
        status: '',
        curso: '',
        professor: '',

    }

    const validationSchema = Yup.object().shape({
        nome: Yup.string().required("Campo obrigatório"),
        discricao: Yup.string().required("Campo obrigatório"),
        status: Yup.string().required("Campo obrigatório"),
        curso: Yup.string().required("Campo obrigatório"),
        professor: Yup.string().required("Campo obrigatório"),
    })




    return (
        <Pagina titulo={'Cadastro de Disciplinas'}>

            <Formik

                initialValues={disciplinaEditada || initialValues}
                validationSchema={validationSchema}
                onSubmit={salvar}

            >
                {
                    ({ values, errors, touched, handleChange, handleBlur, handleSubmit, handleReset }) => {

                        return (
                            <Form onSubmit={handleSubmit}>

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
                                        <Form.Label>Discrição:</Form.Label>
                                        <Form.Control
                                            name='discricao'
                                            type='text'
                                            value={values.discricao}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.discricao && !errors.discricao}
                                            isInvalid={touched.discricao && !!errors.discricao}
                                        />
                                        <Form.Control.Feedback type='invalid'>{errors.discricao}</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Row className='mb-2'>
                                    <Form.Group as={Col}>
                                        <Form.Label>Status:</Form.Label>
                                        <Form.Select
                                            name='status'
                                            value={values.status}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.status && !errors.status}
                                            isInvalid={touched.status && !!errors.status}
                                        >
                                            <option value=''>Selecione</option>
                                            <option value='Ativo'>Ativo</option>
                                            <option value='Inativo'>Inativo</option>

                                        </Form.Select>
                                        <Form.Control.Feedback type='invalid'>{errors.status}</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Curso:</Form.Label>
                                        <Form.Select
                                            name='curso'
                                            value={values.curso}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.curso && !errors.curso}
                                            isInvalid={touched.curso && !!errors.curso}
                                        >
                                            <option value=''>Selecione</option>
                                            {cursos.map(curso => <option value={curso.nome}>{curso.nome}</option>)}


                                        </Form.Select>
                                        <Form.Control.Feedback type='invalid'>{errors.curso}</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className='mb-2'>
                                    <Form.Group as={Col}>
                                        <Form.Label>Professor:</Form.Label>
                                        <Form.Select
                                            name='professor'
                                            value={values.professor}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.professor && !errors.professor}
                                            isInvalid={touched.professor && !!errors.professor}
                                        >
                                            <option value=''>Selecione</option>
                                            {professores.map(professor => <option value={professor.nome}>{professor.nome}</option>)}


                                        </Form.Select>
                                        <Form.Control.Feedback type='invalid'>{errors.professor}</Form.Control.Feedback>
                                    </Form.Group>


                                </Row>



                                <Form.Group as={Row} className="mb-3">
                                    <Col xs="auto">
                                        <Button variant="secondary" href="/disciplinas">
                                            <FaArrowLeft /> Voltar
                                        </Button>
                                    </Col>
                                    <Col className="text-end">
                                        <Button className="me-2" onClick={handleReset} variant="primary">
                                            <FaTrash /> Limpar
                                        </Button>
                                        <Button type="submit" variant="success">
                                            <FaCheck /> Enviar
                                        </Button>
                                    </Col>
                                </Form.Group>




                            </Form>

                        )
                    }

                }


            </Formik>


        </Pagina>
    )
}
