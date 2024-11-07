'use client'
import Pagina from '@/components/Pagina'
import axios from 'axios';
import { Formik } from 'formik'
import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaArrowLeft, FaCheck } from "react-icons/fa"
import { v4 } from 'uuid'
import * as Yup from 'yup'

export default function CursoFormPage(props) {

    console.log(props.searchParams._id)
    const id = props.searchParams._id

    function salvar(dados) {
        console.log(dados)
        axios.put('http://localhost:3000/cargos/'+ id , dados)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        } )
    }
 
  // Campos do form e valores iniciais(default)
  const initialValues = {
    nome: "",
    descricao: '',
    salario: '',
    habilidade: "",
    status_cargo: ""
  }

  // Esquema de validação com Yup
  const validationSchema = Yup.object().shape({
    nome: Yup
    .string("Campo nome precisa ser um texto")
    .required( "Campo nome é Obrigatorio"),
    descricao: Yup
    .string("Campo nome precisa ser um texto"),
    salario: Yup
    .number("Campo salario precisa ser numerico")
    .min(1412, "Compo salario precisa ser maior que o salario minimo")
    .required("Campo Salario é Obrigatorio"),
    habilidade: Yup
    .string("Campo nome precisa ser um texto"),
    status_cargo: Yup
    .string("Campo nome precisa ser um texto")
  })

  return (
    <Pagina titulo={"Cadastro de Curso"}>

      {/* Formulário */}    

      <Formik
        // Atributos do formik
        // Se for edição, coloca os dados de cursoEditado
        // Se for nova, colocar o initialValues com os valores vazios
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={salvar}
      >
        {/* construção do template do formulário */}
        {
          // os valores e funções do formik
          ({ values, errors, touched, handleChange, handleBlur, handleSubmit, setValues }) => {

            // ações do formulário
            // debug
            // console.log("DEBUG >>>")
            // console.log({values, errors, touched})
            useEffect(() =>{
                axios.get('http://localhost:3000/cargos/'+ id)
                .then(res => {
                    console.log(res)
                    setValues(res.data)
                })
                .catch(err => {
                    console.log(err)
                } )
            },[])


            // retorno com o template jsx do formulário
            return (
              <Form onSubmit={handleSubmit}>
                {/* Campos do form */}
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
                    <Form.Label>salario:</Form.Label>
                    <Form.Control
                      name='salario'
                      type='text'
                      value={values.salario}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.salario && !errors.salario}
                      isInvalid={touched.salario && errors.salario}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.salario}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>habilidade:</Form.Label>
                    <Form.Control
                      name='habilidade'
                      type='text'
                      value={values.habilidade}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.habilidade && !errors.habilidade}
                      isInvalid={touched.habilidade && errors.habilidade}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.habilidade}</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className='mb-2'>
                  <Form.Group as={Col}>
                    <Form.Label>status_cargo:</Form.Label>
                    <Form.Select
                      name='status_cargo'
                      value={values.status_cargo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.status_cargo && !errors.status_cargo}
                      isInvalid={touched.status_cargo && errors.status_cargo}
                    >
                      <option value=''>Selecione</option>
                      <option value="Ativo">Ativo</option>
                      <option value="Inativo">Inativo</option>
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>{errors.status_cargo}</Form.Control.Feedback>
                  </Form.Group>

                  
                </Row>


                {/* botões */}
                <Form.Group className='text-end'>
                  <Button className='me-2' href='/'><FaArrowLeft /> Voltar</Button>
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