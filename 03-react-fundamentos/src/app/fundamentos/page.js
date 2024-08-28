
import MeuComponete from "./MeuComponente";
import NumeroMaior from "./NumeroMaior";





export default function Fundamentos() {
    return (
        <>
        
        <h1>Pagina Fundamentos</h1>
        <hr/>
        <MeuComponete/>
        <hr/>

        <NumeroMaior numA={2} numB={10} />
        <NumeroMaior numA={52} numB={22} />
        <NumeroMaior numA={48} numB={85} />
        <NumeroMaior numA={11} numB={2} />
        <NumeroMaior numA={53} numB={92} />
        <NumeroMaior numA={51} numB={23} />

         </>
    )
}
