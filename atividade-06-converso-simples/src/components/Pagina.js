'use client'

import { Container,Navbar, Nav } from 'react-bootstrap';


export default function PaginaPage(props) {
  return (
   <>
    {/*Menu */}
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/conversao">Conversao de Moedas</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

    {/*Cabeçario */}
    <div className='text-center py-2 bg-secondary text-white'>
        <h1>{props.titulo}</h1>
    </div>

    {/*Corpo */}

        <Container>
            {props.children}
        </Container>
   
   
   
   </>
  )
}
