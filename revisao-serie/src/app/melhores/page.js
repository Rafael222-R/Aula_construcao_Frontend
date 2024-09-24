'use client'

import React, { useEffect, useState } from 'react'
import Pagina from '../componets/Pagina'
import apiSerie from '../apis/apiSerie'
import { Button, Card, CardImg, Col, Row } from 'react-bootstrap'

export default function page() {

    const [melhores, setMelhores] = useState([])

    useEffect(() =>{
        buscarMelhor()
    }, [])

async function buscarMelhor() {
    const resultado = await apiSerie.get('/tv/top_rated?language=pt-BR')
    console.log(resultado.data.results)
    setMelhores(resultado.data.results)
    
}

  return (
    <Pagina titulo="Series Melhores Avaliadas">

<Row md={4}>
            {
                melhores.map(melhor => {
                    return (
                        <Col className='py-2'>
                            <Card style={{ height: '100%'}}>
                            <CardImg src={'https://image.tmdb.org/t/p/w500/' + melhor.poster_path } />
                            <Card.Body>
                                <Card.Title> {melhor.original_name}</Card.Title>
                                <p><b>Lancamento: {melhor.first_air_date}</b></p>   
                                <p><b>Nota: {melhor.vote_average}⭐ </b></p>
                                
                            </Card.Body>
                            <Card.Footer className='text=end'>
                                <Button href={"/serie/" + melhor.id}>Detalhes</Button>
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
