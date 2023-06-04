import { OperadorButtonContainer } from "./style";

interface OperadorPros {
    operacao: string
    simbolo: string
}

export default function Operador({operacao, simbolo} : OperadorPros){
    return (
        <OperadorButtonContainer>
            {simbolo}
        </OperadorButtonContainer>
    );
}