'use client'

import React, { useEffect, useState } from 'react'
import Pagina from '../componets/pagina'
import { CardImg, Col, Row } from 'react-bootstrap'

export default function page() {

    const [serie, setSerie] = useState([])

    useEffect(() => {
        buscarSerie()
    })

async function buscarSerie(){
    const resultado = await apiSerie.get("/tv/popular?language=pt-BR")
    console.log(resultado.data.results)
    setSerie(resultado.data.results)
}


  return (
    <Pagina titulo='Series Populares'>

<Row>
            {
                apiFilmes.map(filme => {
                    return (
                        <Col>
                            <CardImg src={'https://image.tmdb.org/t/p/w500/' + serie.poster_path } />
                        </Col>
                    )
                })


            }
        </Row>

    </Pagina>
    
  )
}
