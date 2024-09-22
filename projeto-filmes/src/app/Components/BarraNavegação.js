'use client'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function BarraNavegação() {
  return (
<Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Movies</Navbar.Brand> {/* utilizar somente uma / para apontar uma pagina inicial */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

             {/*Menu DropDown */}
            <NavDropdown title="Filmes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/filmes/">Filmes Populares</NavDropdown.Item>
              <NavDropdown.Item href="/filmes/top/">Melhores Avaliados</NavDropdown.Item>
              <NavDropdown.Item href="/filmes">Filmes Populares</NavDropdown.Item>
              <NavDropdown.Item href="/filmes">Filmes Populares</NavDropdown.Item>
            </NavDropdown>
            
            {/*Links */}
            <Nav.Link href="#home">Home</Nav.Link>
           
          

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  )
}
