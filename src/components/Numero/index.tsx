import { NumeroButtonContainer } from "./style";

interface NumeroProps {
    valor: number
}

export default function Numero({valor} : NumeroProps){
    return (
        <NumeroButtonContainer>
            {valor}
        </NumeroButtonContainer>
    );
}