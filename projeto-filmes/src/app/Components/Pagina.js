import { Container } from "react-bootstrap";
import BarraNavegação from "./BarraNavegação";

export default function Pagina({titulo, children}) {

  return (
    <>  

        <BarraNavegação/>


        <div className="bg-secondary text-white text-center py-2">
                <h1>{titulo}</h1>
        </div>

        <Container className="mt-2">
            {children}
        </Container>

    
    </>
  )
}
