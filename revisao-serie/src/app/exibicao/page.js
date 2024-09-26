'use client'

import React, { useEffect, useState } from 'react'
import Pagina from '../componets/Pagina'
import apiSerie from '../apis/apiSerie'
import { Button, Card, CardImg, Col, Row } from 'react-bootstrap'

export default function page() {

    const [exibicao, setExibir] = useState([])

    useEffect(() =>{
        buscarExibir()
    }, [])

async function buscarExibir() {
    const resultado = await apiSerie.get('/tv/on_the_air?language=pt-BR')
    console.log(resultado.data.results)
    setExibir(resultado.data.results)
    
}

  return (
    <Pagina titulo="Series Exibidas Hoje">

<Row md={4}>
            {
                exibicao.map(exebir => {
                    return (
                        <Col className='py-2'>
                            <Card style={{ height: '100%'}}>
                            <CardImg src={'https://image.tmdb.org/t/p/w500/' + exebir.poster_path } />
                            <Card.Body>
                                <Card.Title> {exebir.original_name}</Card.Title>
                                <p><b>Lancamento: {exebir.first_air_date}</b></p>   
                                <p><b>Nota: {exebir.vote_average}⭐ </b></p>
                                
                            </Card.Body>
                            <Card.Footer className='text=end'>
                                <Button href={"/serie/" + exebir.id}>Detalhes</Button>
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
