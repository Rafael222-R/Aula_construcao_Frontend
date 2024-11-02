'use client'
import Pagina from '@/components/Pagina'
import { useEffect, useState } from 'react'
import { Button, Table} from 'react-bootstrap'
import { FaPen, FaPlusCircle, FaTrash } from 'react-icons/fa'


export default function disciplinaPage() {

    const [disciplinas, setDisciplinas] = useState([])

    useEffect(() => {
        const disciplinasLocalStorage = JSON.parse(localStorage.getItem("disciplinas")) || []
   setDisciplinas(disciplinasLocalStorage)
   console.log(disciplinasLocalStorage)
   
    }, [])

    function excluir(disciplina) {

        if(window.confirm(`Deseja realmente excluir a Disciplina ${disciplina.nome}?`)) {
            const novaLista = disciplinas.filter(item => item.id !== disciplina.id)

            localStorage.setItem('disciplinas', JSON.stringify(novaLista))
            
            setDisciplinas(novaLista)
            alert('Disciplina excluida com Sucesso!')
        }
        
    }


  return (
    <Pagina titulo={'Lista de Disciplinas'}>
        <div className='text-end mb-2'>
            <Button href='/disciplinas/form'><FaPlusCircle />Novo</Button>
        </div>

        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Discrição</th>
            <th>Status</th>
            <th>Curso</th>
            <th>Professor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map(disciplina => {
            return (
              <tr>
                <td>{disciplina.nome}</td>
                <td>{disciplina.discricao}</td>
                <td>{disciplina.status}</td>
                <td>{disciplina.curso}</td>
                <td>{disciplina.professor}</td>
                <td className='text-center'>
                  {/* Botões das ações */}
                  <Button className='me-2' href={`/disciplinas/form?id=${disciplina.id}`}><FaPen /></Button>
                  <Button variant='danger' onClick={() => excluir(disciplina)}><FaTrash /></Button>

                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>



    </Pagina>
  )
}
