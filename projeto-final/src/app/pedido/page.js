'use client'
import Pagina from '@/components/Pagina'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Table } from 'react-bootstrap'
import { FaPlusCircle, FaPen, FaTrash } from 'react-icons/fa'

export default function pedidoPage() {

    const [pedidos, setPedidos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/pedido')
        .then(res => {
            console.log(res.data)
            setPedidos(res.data)
          })
          .catch(err =>{
            console.log(err)
          })
      
      }, [])
function excluir(pedido) {
    if (window.confirm(`Deseja realmente Limpar suas Compras`)) {
        axios.delete(`http://localhost:3000/pedido/${pedido._id}`)
            .then(() => {
                alert("Pedido excluído com sucesso!");
    
                // Atualiza a lista de cargos após exclusão
                axios.get('http://localhost:3000/pedido')
                    .then(res => {
                        serPedidos(res.data);  // Atualiza a lista de cargos no estado
                    })
                    .catch(err => {
                        console.error("Erro ao atualizar a lista:", err);
                    });
          
            })
    }
      
    }

  return (
   <Pagina titulo={'Carrinho de compras'}>

    <div className='text-end mb-2'>
        <Button href='/pedido/form'><FaPlusCircle /> Novo</Button>
        </div>

<Table striped bordered hover>
        <thead>
          <tr>
           
            <th>Funcionario</th>
             <th>Cliente</th>
             <th>Ações</th>
        
          </tr>
        </thead>
        <tbody>
          {pedidos.map(pedido => {
            return (
              <tr>
                <td>{pedido?.cliente?.nome}</td>
                <td>{pedido?.funcionario?.nome}</td>
                <td className='text-center'>
                  {/* Botões das ações */}
                  <Button className='me-2' href={`/pedido/edit?id=${pedido._id}`}><FaPen /></Button>
                  <Button variant='danger' onClick={() => excluir(pedido)}><FaTrash /></Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>



   </Pagina>
  )
}
