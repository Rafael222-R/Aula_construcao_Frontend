// rfc - é uma atalho para criar a estrutura abaixo

export default function NumeroAleatorio() {


    const  NumeroAleatorio = Math.floor( Math.random() * 1000) + 1;
console.log(NumeroAleatorio);

  return (
    <>
            <h2>Numero Aleatorio</h2>
            <p>O Numero Aleatorio: {NumeroAleatorio}</p>
    
    </>

    
  )
}
