import style from "./fundamentos.modulos.css"

export default function Cabecalho(props) {

    const {titulo , descricao} = props

  return (

    <>

             <h1 class="titulo">{titulo}</h1>
            <p class="titulo" > {descricao}</p>
            <hr/> 

            
           {/* <h1 style={{textAlign: 'center'}}>{titulo}</h1>
            <p style={{textAlign: 'center' , color:'blue'}} > {descricao}</p>
            <hr/> ------------ Esse é uma forma de vc fazer o CSS diretamento, vc pode fazer dessa forma quando se tem poucas modificações*/}
      
    </>
    
  )
}
