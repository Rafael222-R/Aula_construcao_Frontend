"use client"

import apiFilmes from '@/app/apis/apiFilmes'
import Pagina from '@/app/Components/Pagina'
import { useEffect, useState } from 'react'
import { Card, CardImg, Col, Row } from 'react-bootstrap'


export default function page(props) {

    const [filme, setFilme] = useState({})

    useEffect(() => {
        buscarFilmes()
    },[])

    async function buscarFilmes() {
        const resultado = await apiFilmes.get("/movie/" + props.params.id + "?language=pt-BR")
        const filmesRecebido = resultado.data
        console.log(resultado.data)
        setFilme(filmesRecebido)
        
    }

    

  return (
    <Pagina titulo={filme.title}>

  {filme.id && (
        <Row>
           
            <Col md={3}>
                <CardImg src={"https://image.tmdb.org/t/p/w500/" + filme.backdrop_path} />
            
            </Col>

            {/*Detalhes filmes */}
            <Col>
            <p><b>Data de Lançamento:</b>{filme.release_date}</p>
            <p><b>Duração:</b>{filme.runtime}</p>
            <p><b>Orcamento:</b>{filme.revenue}</p>
            <p><b>Nota:</b>{filme.vote_average}</p>
            <p><b>Sinope:</b>{filme.overview}</p>
            <p><b>Genero: </b></p>
                <ul>
                   {filme.genre}
                </ul>
            
            
            </Col>
                    


        </Row>
                   
     )}      



    </Pagina>
  )
}
