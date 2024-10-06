'use client'

import apiCopa from '@/app/apis/apisCopa'
import Pagina from '@/app/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Card, CardImg, Col, Row } from 'react-bootstrap'

export default function page(props) {

    const id = props.params.id
    const [selecao, setSelecao] = useState([])

    useEffect(() => {
        buscarSelecao()
    }, [])



async function buscarSelecao() {
    const resultado = await apiCopa.get('/selecoes/' + id)
    console.log(resultado.data)
    setSelecao(resultado.data)    
}
  return (
    <Pagina titulo={selecao.nome}> 

        {selecao.id && (
            <>
            <Row>
                <Col md={3}>
                    <CardImg src={selecao.imagem}/>
                </Col>

                <Col md={6}>
                    <p><b>Administrador:</b>{selecao.administrador}</p>
                    <p><b>Fundação:</b>{selecao.fundacao}</p>
                    <p><b>Estadio:</b>{selecao.estadio}</p>
                    <p><b>Participações em Copa dp Mundo:</b>{selecao.participacoes_copa_mundo}</p>                    
                    <p><b>Titulos em Copa do Mundo:</b>{selecao.titulos_copa_mundo}</p>
                    <p><b>Descrição:</b>{selecao.descricao}</p>
                    
                </Col>

                <Col md={3}>
                    <p><b>Treinador</b>{selecao.treinador}</p>
                    <CardImg src={selecao.imagem_treinador}/>
                
                </Col>

            </Row>

            <div className='text-center'>
                <h2>Elenco</h2>
            </div>
            <hr/>



        <Row md={4}>

            {selecao.jogadores.map( jogador=> (

                <Col className='py-2'>
                    <Card style={{height:'100%'}}>
                            <Card.Img height={400} src={jogador.imagem}/> 
                            <Card.Body className='text-center'>
                                <Card.Text><b>Nome: </b>{jogador.nome}</Card.Text>
                                <Card.Text><b>Número: </b>{jogador.numero}</Card.Text>
                            </Card.Body>
                    </Card>
                
                </Col>



            ))}


        </Row>


            </>
        )}


    </Pagina>
  )
}
