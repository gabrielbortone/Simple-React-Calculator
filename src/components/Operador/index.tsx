import { OperadorButtonContainer } from "./style";

interface OperadorPros {
    operacao: string
}

export default function Operador({operacao} : OperadorPros){
    return (
        <OperadorButtonContainer>
            {operacao}
        </OperadorButtonContainer>
    );
}