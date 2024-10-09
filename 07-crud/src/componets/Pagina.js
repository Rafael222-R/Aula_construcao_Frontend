'use client'

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

 
 export default function Pagina({titulo, children}) {



   return (

    <>
    {/*Barra de Navegação */}

    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
          <NavDropdown title="Formulário" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/formulario/nome">Nome</NavDropdown.Item>
              <NavDropdown.Item href="/formulario/imc">IMC</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>


    {/*Barra de Titulo */}
    <div className="bg-secondary text-center text-white py-2">
        <h1>{titulo}</h1>
    </div>
    
    {/*Conteudo da pagina */}
    
    <Container className="mt-2">
        {children}
    </Container>
    </>


   )
 }
 