'use client'

import React, { useEffect, useState } from 'react'
import Pagina from '../componets/Pagina'
import { Button, Card, CardImg, Col, Row } from 'react-bootstrap'
import apiSerie from '../apis/apiSerie'

export default function page() {

    const [series, setSerie] = useState([])

    useEffect(() => {
        buscarSerie()
    },[])

async function buscarSerie(){
    const resultado = await apiSerie.get("/tv/popular?language=pt-BR")
    console.log(resultado.data.results)
    setSerie(resultado.data.results)
}


  return (
    <Pagina titulo='Series Populares'>

<Row md={4}>
            {
                series.map(serie => {
                    return (
                        <Col className='py-2'>
                            <Card style={{ height: '100%'}}>
                            <CardImg src={'https://image.tmdb.org/t/p/w500/' + serie.poster_path } />
                            <Card.Body>
                                <Card.Title> {serie.original_name}</Card.Title>
                                <p><b>Lancamento: {serie.first_air_date}</b></p>
                                <p><b>Nota: {serie.vote_average}⭐ </b></p>
                                
                            </Card.Body>
                            <Card.Footer className='text=end'>
                                <Button href={"/serie/" + serie.id}>Detalhes</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                    )
                })


            }
        </Row>

    </Pagina>
    
  )
}
