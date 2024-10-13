'use client'
import PaginaPage from '@/components/Pagina'
import React, { useState } from 'react'
import { Button, CardImg, Form, Modal } from 'react-bootstrap'
import { FaMoneyBill1Wave } from "react-icons/fa6"
import { MdCleaningServices } from "react-icons/md"

export default function ConversaoPage() {


  const [showModal, setshowModal] = useState(false)

  const [valor, setValor] = useState(0)
  const [converter, setConverter] = useState('')


  const [resultado, setResultado] = useState('')


  function conversao(event) {

    event.preventDefault()



    const dolar = 0.20;
    const euro = 0.18;
    const bitcoin = 0.000003

    let valorConvertido;

    if (converter === 'dolar') {
      valorConvertido = (valor * dolar).toFixed(1);
    } else if (converter === 'euro') {
      valorConvertido = (valor * euro).toFixed(1);
    } else if (converter === 'bitcoin') {
      valorConvertido = (valor * bitcoin);
    } else {
      valorConvertido = 'Moeda não Reconhecida'
    }

    setResultado(valorConvertido)

    console.log({ resultado, converter })

    setshowModal(true)


  }

  function Limpar() {
    console.log('Limpar campos')
    setValor(0)
    setConverter('')
    setResultado('')
  }


  const getMoedaImagem = () => {
    if (converter === 'dolar') {
      return '/img/dolar.jpeg ';
    } else if (converter === 'euro') {
      return '/img/euro.jpeg';
    } else if (converter === 'bitcoin') {
      return '/img/bitcoin.jpeg';
    } else {
      return ''; // Nenhuma imagem se nenhuma moeda for selecionada
    }
  }


  return (
    <PaginaPage titulo='Conversão de Moedas'>

      {/* Exibir a imagem da moeda selecionada */}
      {converter && (
        <div className="my-3">
          <CardImg src={getMoedaImagem()} alt={converter} fluid style={{ width: '300px' }} />
        </div>
      )}

      <Form onSubmit={conversao}>
        <Form.Group>
          <Form.Label>Insira o Valor:</Form.Label>
          <Form.Control
            type='Number'
            name='valor'
            value={valor}
            onChange={e => { setValor(e.target.value) }}
            min={0.01}
            step={0.01}

          />
          <Form.Text>Insira o Valor em Real R$</Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Escolha a Moeda Para converter:</Form.Label>
          <Form.Select
            name='converter'
            value={converter}
            onChange={e => { setConverter(e.target.value) }}
          >
            <option>Selecione</option>
            <option value='dolar'>Dólar</option>
            <option value='euro'>Euro</option>
            <option value='bitcoin'>Bitcoin</option>

          </Form.Select>
          <Form.Text>Selecione uma Moeda. Ex: Bitcoin</Form.Text>
        </Form.Group>

        <Form.Group className='py-2'>
          <Button type='submit' className='me-2'> <FaMoneyBill1Wave />Conveter</Button>
          <Button onClick={Limpar}><MdCleaningServices />Limpar</Button>
        </Form.Group>

      </Form>

      <Modal show={showModal} onHide={() => setshowModal(false)} centered >
        <Modal.Header closeButton>
          <Modal.Title>Resultado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Valor é: {resultado}</p>
          <p>A Moeda é: {converter}</p>
          {/* Exibir a imagem da moeda selecionada */}
      {converter && (
          <div className="my-3">
            <CardImg src={getMoedaImagem()} alt={converter} fluid style={{ width: '100px' }} />
          </div>
        )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setshowModal(false)}>
            Fechar
          </Button>

        </Modal.Footer>
      </Modal>



    </PaginaPage>
  )
}
