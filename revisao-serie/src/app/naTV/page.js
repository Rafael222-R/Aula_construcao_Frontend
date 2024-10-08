"use client"


import React, { useEffect, useState } from 'react'
import Pagina from '../componets/Pagina'
import apiSerie from '../apis/apiSerie'
import { Button, Card, CardImg, Col, Row } from 'react-bootstrap'


export default function page() {

    const [natv, setHoje] = useState([])

    useEffect(() => {
        buscarHoje()
    },[])

async function buscarHoje(){
    const resultado = await apiSerie.get("/tv/airing_today?language=pt-BR.")
    console.log(resultado.data.results)
    setHoje(resultado.data.results)
}


  return (
    <Pagina titulo="Series Hoje na TV">
        <Row md={4}>
            {
                natv.map(hoje => {
                    return (
                        <Col className='py-2'>
                            <Card style={{ height: '100%'}}>
                            <CardImg src={'https://image.tmdb.org/t/p/w500/' + hoje.poster_path } />
                            <Card.Body>
                                <Card.Title> {hoje.original_name}</Card.Title>
                                <p><b>Lancamento: {hoje.first_air_date}</b></p>   
                                <p><b>Nota: {hoje.vote_average}⭐ </b></p>
                                
                            </Card.Body>
                            <Card.Footer className='text=end'>
                                <Button href={"/serie/" + hoje.id}>Detalhes</Button>
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
