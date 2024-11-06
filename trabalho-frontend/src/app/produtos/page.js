'use client'
import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Button, Table, Col } from 'react-bootstrap'
import { FaPen, FaPlusCircle, FaTrash } from 'react-icons/fa'

export default function ProdutosPage() {

const [produtos, setProdutos] =useState([])


useEffect(() => {
    const produtosLocalStorage = JSON.parse(localStorage.getItem('produtos')) || []
    setProdutos(produtosLocalStorage)
    console.log(produtosLocalStorage)
}, [])


  return (
    <Pagina titulo={'Produtos'}>

        <div className='text-end mb-2'>
        <Button href='/produtos/form'><FaPlusCircle /> Novo</Button>
        </div>

<Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descricao</th>
            <th>valor</th>
            <th>Ações</th>
        
          </tr>
        </thead>
        <tbody>
          {produtos.map(produto => {
            return (
              <tr>
                <td>{produtos.nome}</td>
                <td>{produtos.descricao}</td>
                <td>{produtos.valor}</td>
                <td className='text-center'>
                  {/* Botões das ações */}
                  <Button className='me-2' href={`/cursos/form?id=${curso.id}`}><FaPen /></Button>
                  <Button variant='danger' onClick={() => excluir(curso)}><FaTrash /></Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>

    </Pagina>
  )
}
