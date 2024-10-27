'use client'
import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

export default function PaginaPage({titulo, children}) {
  return (
   <>

<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/produto">Produto</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/aluno">Alunos</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 

      <div className='bg-secondary py-2 text-center text-white'>
        <h1>{titulo}</h1>
      </div>

      <Container className='mt-2'>
            {children}
      </Container>
   
   
   
   </>
  )
}
