


export default function NumeroMaior(props) {

    
    const getMaior = () => {
        if(props.numA > props.numB){
            return props.numA
        }
        if( props.numB > props.numA) {
            return props.numB
        }
    }

    return (

        <>
            <h2> Componente Numero Maior </h2>
            <p> Numeros Recebidos: {props.numA} - {props.numB   } </p>
            <p> O Numero Maior: {getMaior ()} </p>
            
        
        </>
    )
}