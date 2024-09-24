"use client"

import React from 'react'
import Pagina from '../componets/Pagina'

export default function page() {

    const [natv, setSerie] = useState([])

    useEffect(() => {
        buscarSerie()
    },[])

async function buscarSerie(){
    const resultado = await apiSerie.get("/tv/popular?language=pt-BR")
    console.log(resultado.data.results)
    setSerie(resultado.data.results)
}


  return (
    <Pagina titulo="Series Hoje na TV">
        

    </Pagina>
  )
}
