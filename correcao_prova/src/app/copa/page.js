'use client'

import React, { useEffect, useState } from 'react'
import Pagina from '../components/Pagina'
import apiCopa from '../apis/apiCopa'
import { CardImg, Col, Row } from 'react-bootstrap'

export default function CopaPage() {

    const [copa, setCopa] = useState({})

    useEffect(() => {
        buscarCopa()
    },[])

async function buscarCopa() {
    const resultado = await apiCopa.get('/copa_mundo')
    console.log(resultado.data)
    setCopa(resultado.data)
}

  return (
 <Pagina titulo='Copa do Mundo 2022'>

        <div className='text-center'>
            <h2>Detalhes</h2>
            <hr/>
        </div>

        <Row>
            <Col>
                <CardImg src={copa.imagem}/>
            </Col>

            <Col>
            <p><b>Ano: </b>{copa.ano}</p>
            <p><b>Pais Sede: </b>{copa.pais_sede}</p>
            <p><b>Data inicio: </b>{copa.data_inicio}</p>
            <p><b>Data fim: </b>{copa.data_fim  }</p>
            <p><b>Paticipantes: </b>{copa.participantes}</p>
            <p><b>Artilheiro: </b>{copa?.artilheiro?.jogador}</p>
            <p><b>Melhor Jogador: </b>{copa && copa.melhor_jogador && copa.melhor_jogador.jogador}</p>
            <p><b>Ano: </b>{copa.descricao}</p>
            
            </Col>



        </Row>

        
 </Pagina>
  )
}
