'use client'
import Pagina from '@/components/Pagina';
// client/src/App.js
import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { FaPlusCircle, FaPen } from 'react-icons/fa'

function App() {
    const [cargos, setCargos] = useState([]);

    useEffect(() => {
        // Fazendo a requisição GET para o backend
        axios.get('http://localhost:3000/cargos')
            //then manipular a respostar certa
            .then(res => {
                console.log(res.data)
                setCargos(res.data)

            })
            // catch manipular o error
            .catch()


    }, []);

    return (

        <Pagina titulo={'Lista de Produtos'}>

            <div className='text-end mb-2'>
                <Button href='/cargos/form'><FaPlusCircle /> Cadastro</Button>
            </div>



            <Row >
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Acçoes</th>

                        </tr>
                    </thead>
                    <tbody>
                        {cargos.map(cargo => {
                            return (
                                <tr>
                                    <td>{cargo.nome}</td>
                                    <td className='text-center'>
                  {/* Botões das ações */}
                  <Button className='me-2' href={`/cargos/edit?_id=${cargo._id}`}><FaPen /></Button>
                  {/* /<Button variant='danger' onClick={() => excluir(cargo)}><FaTrash /></Button> */}
                </td>


                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Row>


        </Pagina>
    );
}

export default App;
