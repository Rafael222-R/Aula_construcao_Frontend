
import MeuComponete from "./MeuComponente";
import NumeroMaior from "./NumeroMaior";
import NumeroAleatorio from "./NumeroAleatorio";
import Cabecalho from "./Cabecalho";
import Familia from "./Familia";



export default function Fundamentos() {
    return (
        <>
         
         {/* Comentarios no JSX */}
        <Cabecalho titulo="Fundamentos" descricao="Pagina de fundamentos de React/NEXt"/>


        <hr/>
        <MeuComponete/>
        <hr/>

        <NumeroMaior numA={2} numB={10} />
        <NumeroMaior numA={52} numB={22} />
        <NumeroMaior numA={48} numB={85} />
        <NumeroMaior numA={11} numB={2} />
        <NumeroMaior numA={53} numB={92} />
        <NumeroMaior numA={51} numB={23} />

        <hr/>

        <NumeroAleatorio />
        <NumeroAleatorio />
        <NumeroAleatorio />
        <NumeroAleatorio />
        <NumeroAleatorio />

        <hr/>

        <Familia nomeFamilia="Soares"> </Familia>



         </>


    )
}
