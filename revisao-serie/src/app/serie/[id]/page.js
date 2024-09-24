'use client'

import apiSerie from "@/app/apis/apiSerie";
import Pagina from "@/app/componets/Pagina";
import { useEffect, useState } from "react";
import { CardImg, Col, Row } from "react-bootstrap";



export default function page(props) {

    const id = props.params.id
    const [serie, setSeries] = useState([])

    useEffect(() => {
        buscarSerie()
    })

async function buscarSerie() {
    const resultado = await apiSerie.get('/tv/' + id +'?language=pt-BR' )
    console.log(resultado.data)
    setSeries(resultado.data)
}

  return (
    <Pagina titulo={serie.name}> 

        {serie.id && (

            <>
                <Row className="mt-2">
                    <Col md={3}>
                    <CardImg src={'https://image.tmdb.org/t/p/w500/' + serie.poster_path}/>
                    </Col>


                    <Col m={6}>
                        
                        <p><b>Data de Lancamento:</b>{serie.first_air_date}</p>
                        <p><b>Nota: </b>{serie.vote_average} ★</p>
                        <p><b>Quantidade de Temporadas: </b>{serie.number_of_seasons} </p>
                        <p><b>Quantidade de episodios: </b>{serie.number_of_episodes} </p>
                        <p><b>Generos:  </b></p>
                        <ul>
                            {serie.genres.map(item => {
                                return <li>{item.name}</li>
                            })}
                        </ul>
                        <p><b>Sinopse:  </b>{serie.overview} </p>
                    
                    </Col >

                    {/*Imagem de Divulgação do Filme */}
                    <Col m={3}>
                    <CardImg src={'https://image.tmdb.org/t/p/w500/' + serie.backdrop_path} />
                    </Col>

                    
                </Row>
            
            
            
            
            
            
            </>





        )}




    </Pagina>
    
  )
}
