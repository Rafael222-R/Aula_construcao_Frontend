'use client'
import React, { useEffect, useState } from 'react'
import PaginaPage from '../components/Pagina'
import apiProduto from '../api/apiProduto'
import { CardImg, CardText, Col, Card, Row, Carousel, CardTitle, ListGroup } from 'react-bootstrap'


export default function ProdutoPage() {

  const [produto, setProduto] = useState([])

  useEffect(() => {
    buscarProduto()

  }, [])

  async function buscarProduto() {
    const resultado = await apiProduto.get("/81")
    console.log(resultado.data)
    const produtoRecebido = resultado.data
    setProduto(produtoRecebido)
  }

  return (
    <PaginaPage titulo={produto.title}>


      <Row className='mb-2'>
        <Col md={6}>
          <Card style={{ width: '40rem' }}>

            <Carousel fade>
              {produto.images && produto.images.map(item => {
                return (
                  <Carousel.Item>
                    <Card.Img src={item} style={{ width: '100%' }} />
                  </Carousel.Item>
                )
              })}

            </Carousel>

            <Card.Body>

              <Card.Text>
                <CardTitle>{produto.title}</CardTitle>
                {produto.description}
              </Card.Text>
            </Card.Body>
          </Card>

        </Col>

        <Col md={6}>
          <h4> Detalhes</h4>
          <p>Preço: <b>{produto.price}</b> </p>
          <hr />
          <p>Desconto: <b>{produto.discountPercentage}%</b> </p>
          <hr />
          <p>Avaliação: <b>{produto.rating}</b> </p>
          <hr />
          <p>Quantidade disponivel: <b>{produto.minimumOrderQuantity}</b> </p>
          <hr />
          <p>Marca: <b>{produto.brand}</b> </p>
          <hr />
          <p>Categoria: <b>{produto.category}</b> </p>
          <hr />
          <p>Politica de Devolução: <b>{produto.returnPolicy}</b> </p>
          <h4>Tags</h4>
          <p>{produto.category}</p>
          <hr />
          <p>{produto.brand}</p>
          <h5>QRCORDE</h5>
          <Card.Img src={produto?.meta?.qrCode} style={{ width: '200px' }} />


        </Col>
      </Row>

      <Row>
      <Card style={{ width: '25rem' }}className='me-4'> 
      <Card.Header>Featured</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
    <br/> 

    <Card style={{ width: '25rem' }} className='me-4'>
      <Card.Header>Featured</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>

    <br/>

    <Card style={{ width: '25rem' }} className='me-4'>
      <Card.Header>Featured</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
        
      </Row>

    </PaginaPage>
  )
}
