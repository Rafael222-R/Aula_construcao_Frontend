'use client'
import Pagina from '@/components/Pagina'
import axios from 'axios'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Form , Row, Col, Button, Table} from 'react-bootstrap'
import { FaCheck, FaArrowLeft } from 'react-icons/fa'
import * as yup from 'yup'

export default function peditoformPage() {

    const router= useRouter()

    const [funcionarios, setFuncionarios] = useState([])
    const [clientes, setClientes] = useState([])
    const [produtos, setProdutos] = useState([])
    const [produtosSelecionados, setProdutosSelecionados] = useState([]); // Para armazenar os produtos do pedido

    useEffect(() => {
        axios.get('http://localhost:3000/funcionarios')
            .then(res => {
                console.log(res.data)
                setFuncionarios(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    useEffect(() => {
        axios.get('http://localhost:3000/clientes')
            .then(res => {
                console.log(res.data)
                setClientes(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    useEffect(() => {
        axios.get('http://localhost:3000/produtos')
            .then(res => {
                console.log(res.data)
                setProdutos(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    function adicionarProduto(produto) {
        setProdutosSelecionados(prevProdutos => [...prevProdutos, produto]);
    }

    function salvar(dados) {
        console.log(dados)
        axios.post('http://localhost:3000/pedido' , dados)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })

    alert('Produto Criado com Sucesso!')
    router.push('/pedido')
        
    }

    const initialValues = {

        funcionario: '',
        cliente: '',

    }

    const validationSchema = yup.object().shape({
        funcionario: yup
        .string("Campo nome precisa ser um texto")
        .required("Funcionario obrigatorio"),
    cliente: yup
        .string("Campo nome precisa ser um texto")
        .required("cliente obrigatorio"),
    })

    return (
        <Pagina titulo={'Pedido'}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={salvar}
            >
                {
                    ({ values, errors, touched, handleChange, handleSubmit, handleBlur, setValues }) => {
                        return (
                            <Form onSubmit={handleSubmit}>

                                <Row className='mb-2'>
                                    <Form.Group as={Col}>
                                        <Form.Label>Vendedor:</Form.Label>
                                        <Form.Select
                                            name='funcionario'
                                            value={values.funcionario}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.funcionario && !errors.funcionario}
                                            isInvalid={touched.funcionario && !!errors.funcionario}
                                        >
                                            <option value=''>Selecione</option>
                                            {funcionarios.map(funcionario => <option value={funcionario._id}>{funcionario.nome}</option>)}


                                        </Form.Select>
                                        <Form.Control.Feedback type='invalid'>{errors.funcionario}</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Cliente:</Form.Label>
                                        <Form.Select
                                            name='cliente'
                                            value={values.cliente}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.cliente && !errors.cliente}
                                            isInvalid={touched.cliente && !!errors.cliente}
                                        >
                                            <option value=''>Selecione</option>
                                            {clientes.map(cliente => <option value={cliente._id}>{cliente.nome}</option>)}


                                        </Form.Select>
                                        <Form.Control.Feedback type='invalid'>{errors.cliente}</Form.Control.Feedback>
                                    </Form.Group>

                                </Row>

                                <Table striped bordered hover>
    <thead>
        <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Ações</th>
        </tr>
    </thead>
    <tbody>
        {produtos.map(produto => (
            <tr key={produto._id}>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
                <td>
                    <Button onClick={() => adicionarProduto(produto)}>Adicionar</Button>
                </td>
            </tr>
        ))}
    </tbody>
</Table>

<h3>Produtos Selecionados</h3>
<Table striped bordered hover>
    <thead>
        <tr>
            <th>Produto</th>
            <th>Preço</th>
        </tr>
    </thead>
    <tbody>
        {produtosSelecionados.map((produto, index) => (
            <tr key={index}>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
        ))}
    </tbody>
</Table>


                                <Form.Group className='text-end'>
                  <Button className='me-2' href='/pedido'><FaArrowLeft /> Voltar</Button>
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
