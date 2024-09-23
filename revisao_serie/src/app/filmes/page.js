'use client'

import { useEffect, useState } from "react";
import Pagina from "../components/Pagina";
import apiFilmes from "../apis/apiFilmes";
import { Button, Card, Col, Row } from "react-bootstrap";

export default function page() {

  // Armazenar um dado para que o react saiba que ele sofreu alguma e mude na tela
  const [filmes, setFilmes] = useState([])

  //Efeito Colateral
  useEffect(( ) => {
    // A requisição para buscar os Filmes
    buscarFilmes()
  }, [])

  async function buscarFilmes() {
    const resultado = await apiFilmes.get("/movie/popular?language=pt-BR")
      console.log(resultado.data.results)
        // alterando o estado Filmes para receber os filmes da requisição
      setFilmes(resultado.data.results)
      
  }


  return (
     
    <Pagina titulo="Filmes Populares"> 



        <Row md={4}>
              {
                filmes.map(filme => {
                  return (
                      <Col className="py-2">
                          <Card style={{ height: '100%'}}>
                            <Card.Img src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path}/>
                            <Card.Body>
                                  <Card.Title>{filme.original_title}</Card.Title>
                                  <p><b>Nota: {filme.vote_average} ★</b></p>
                            </Card.Body>
                            <Card.Footer className="text-end">
                              <Button href={"/filmes/" +filme.id }>Detalhes</Button>
                            </Card.Footer>
                          </Card>
                      </Col>
                  )
                } )
              }

          </Row>
      
      
       </Pagina>
    
   
  )
}
