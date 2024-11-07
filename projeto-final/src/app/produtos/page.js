'use client'
import Pagina from '@/components/Pagina'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table, Col } from 'react-bootstrap'
import { FaPen, FaPlusCircle, FaTrash } from 'react-icons/fa'

export default function ProdutosPage() {

const [produtos, setProdutos] =useState([])


useEffect(() => {
    axios.get('http://localhost:3000/produtos')
    .then(res => {
      console.log(res.data)
      setProdutos(res.data)
    })
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
            <th>codigo_barras</th>
            <th>peso</th>
            <th>preco</th>
            <th>Ações</th>
        
          </tr>
        </thead>
        <tbody>
          {produtos.map(produto => {
            return (
              <tr>
                <td>{produto.nome}</td>
                <td>{produto.descricao}</td>
                <td>{produto.codigo_barras}</td>
                <td>{produto.peso}</td>
                <td>{produto.preco}</td>
                <td className='text-center'>
                  {/* Botões das ações */}
                  <Button className='me-2' href={`/cursos/form?id=${produto.id}`}><FaPen /></Button>
                  {/* <Button variant='danger' onClick={() => excluir(produto)}><FaTrash /></Button> */}
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>

    </Pagina>
  )
}