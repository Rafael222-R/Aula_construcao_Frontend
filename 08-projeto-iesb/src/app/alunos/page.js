'use client'

import Pagina from "@/components/Pagina"
import { useEffect, useState } from "react"
import { Table, Button } from "react-bootstrap"
import { FaPlusCircle, FaPen, FaTrash } from "react-icons/fa"


export default function page() {

    const [ alunos, setAlunos] = useState([])
    
    useEffect(() => {
        const alunosLocalStorage = JSON.parse(localStorage.getItem('alunos')) || []
        setAlunos(alunosLocalStorage)
        console.log(alunosLocalStorage)
    }, [])


    function excluir(aluno) {
      if(window.confirm(`Deseja Realmente Excluir a Aluno ${aluno.nome}?`)) {
        const novaLista = alunos.filter(item => item.id !== aluno.id)

        localStorage.setItem('alunos',JSON.stringify(novaLista))
      
      setAlunos(novaLista)
      alert("Aluno Excluido com Sucesso!")
    }
      
    }



  return (
  <Pagina titulo={'Lista de Alunos'}>
        <div className='text-end mb-2'>
            <Button href='/alunos/form'><FaPlusCircle />Novo</Button>
        </div>

        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Matricula</th>
            <th>Nome </th>
            <th>Sobrenome</th>
            <th>Faculdade</th>
            <th>Curso</th>
            <th>Periodo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map(aluno => {
            return (
              <tr>
                <td><img src={aluno.foto} width={60} height={90} /></td>
                <td>{aluno.matricula}</td>
                <td>{aluno.nome}</td>
                <td>{aluno.sobrenome}</td>
                <td>{aluno.faculdade}</td>
                <td>{aluno.curso}</td>
                <td>{aluno.periodo}</td>
                <td className='text-center'>
                  {/* Botões das ações */}
                  <Button className='me-2' href={`/alunos/form?id=${aluno.id}`}><FaPen /></Button>
                  <Button variant='danger' onClick={() => excluir(aluno)}><FaTrash /></Button>

                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>


  </Pagina>
  )
}
