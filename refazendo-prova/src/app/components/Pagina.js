'use client'

import {Container, Nav, Navbar} from 'react-bootstrap';


export default function Pagina(props) {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/copa">Copa Do Mundo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/selecoes">Seleções</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    <div className='text-center text-white py-2 bg-secondary'>
        <h1>{props.titulo}</h1>
    </div>

    <Container className='mt-2'>

        {props.children}
    </Container>
    
    
    </>
  )
}
