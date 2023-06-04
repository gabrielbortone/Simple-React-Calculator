import { ResultadoButtonContainer } from "./style";

interface ResultadoProps {
    simbolo: string
}

export default function Resultado({simbolo} : ResultadoProps){
    return (
        <ResultadoButtonContainer>
            {simbolo}
        </ResultadoButtonContainer>
    );
}