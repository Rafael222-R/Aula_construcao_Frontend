export default function Sorteio () {

    const NumeroAleatorio = Math.floor ( Math.random() * 60 ) + 1 ;
    console.log(NumeroAleatorio)
    return (

        <>
        <h2> Sorteio</h2>
        <p>Numero Sorteador : {NumeroAleatorio}</p>
        
        </>
    )
}
