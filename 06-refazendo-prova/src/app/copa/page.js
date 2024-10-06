'use client'
import React, { useEffect, useState } from 'react'
import Pagina from '../components/Pagina'
import apiCopa from '../apis/apisCopa'
import { CardImg, Col, Row } from 'react-bootstrap'

export default function PageCopa() {

  const [copa, setCopa]= useState({})


useEffect(() => {
  buscarCopa ()
}, [])

async function buscarCopa() {
  const resultado = await apiCopa.get('/copa_mundo')
  console.log(resultado.data)
  setCopa(resultado.data)
} 



  return (

    <Pagina titulo='Copa do Mundo 2022'>



       <Row className='mt-2'>

          <Col md={3}>
              <CardImg src={copa.imagem}/>
          </Col>

          <Col>
                <p><b>Ano: </b>{copa.ano}</p>
                <p><b>Pais Sede: </b>{copa.pais_sede}</p>
                <p><b>Data Inicio: </b>{copa.data_inicio}</p>
                <p><b>Data Fim: </b>{copa.data_fim}</p>
                <p><b>Participantes: </b>{copa.participantes}</p>
                <p><b>Vencedor: </b>{copa?.vencedor?.pais}</p>
                <p><b>Artilheiro: </b>{copa && copa.artilheiro && copa.artilheiro.jogador}</p>
                <p><b>Melhor Jogador: </b>{copa && copa.melhor_jogador && copa.melhor_jogador.jogador}</p>
                <p><b>Descrição: </b>{copa.descricao}</p>
          </Col>


       </Row>

    </Pagina>
    
  )
}
