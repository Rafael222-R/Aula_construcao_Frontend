'use client'
import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function PaginaPage({titulo, children}) {
  return (
    <>

<Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/conversao-formik">Conversao de Moedas</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

      <div className='text-center bg-secondary py-2 text-white'>
        <h1>{titulo}</h1>
      </div>

      <Container className='mt-2'>
        {children}
      </Container>

    </>
  )
}
