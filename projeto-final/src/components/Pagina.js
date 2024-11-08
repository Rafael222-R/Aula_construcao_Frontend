'use client'
import React from 'react'
import { Container, Button, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function Pagina({ titulo, children }) {
    return (

        <>
            <Navbar bg="primary" data-bs-theme="dark" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Pagina Inicial</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/produtos">Produtos</Nav.Link>
                            <Nav.Link href="/cargos">Cargo</Nav.Link>
                            <Nav.Link href="/funcionarios">Funcionario</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="bg-secondary text-center text-white py-2">
               <h1> {titulo} </h1>
            </div>

            <Container className='mt-2 '>
                {children}
            </Container>



        </>
    )
}
