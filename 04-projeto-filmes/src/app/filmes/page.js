'use client'

import { useEffect, useState } from "react";
import apiFilmes from "../apis/apiFilmes";
import Pagina from "../Components/Pagina";
import { Row, Col, Card, Button } from "react-bootstrap";


export default function page() {

   const [filmes, setFilmes] = useState ([])

    // fazer algo quando iniciar o componente 
    useEffect(() => {
        //Buscar filmes
        buscarFilmes()

    }, [])

   async function buscarFilmes(){
        const resultado = await apiFilmes.get("/movie/popular?language=pt-BR")
        console.log(resultado.data.results)
        const filmesRecebidos = resultado.data.results
        setFilmes(filmesRecebidos)

    }


  return (
    <Pagina titulo="Filmes">

        <Row md={4}>
            {filmes.map(filme =>{
                return (

                
                    <Col>
                        <Card className='py-2'>
                            <Card style={{ height:"100%" }}/>
                            <Card.Img src={"https://image.tmdb.org/t/p/w500/" + filme.poster_path} />

                            <Card.Body>
                            <Card.Title> {filme.original_title}</Card.Title>
                            <p><b>Nota:</b>{filme.vote_average} ⭐ </p>
                            </Card.Body>

                            <Card.Footer className='text-end'>
                                <Button href={'/filmes/' + filme.id}>Detalhes</Button>
                                <button type="button" class="btn btn-danger">test</button>
                            </Card.Footer>

                             </Card>

                    {/**  ele excluiu eessa parte    
                    <p>{filme.original_title}</p>
                    <p>{filme.vote_average}</p>
                    <p>{filme.poster_path}</p>
                    */}
                    
                    </Col>
                )
            })}


        </Row>



    </Pagina>
  )
}
