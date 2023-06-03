import Numero from "../Numero";
import Operador from "../Operador";
import Visor from "../Visor";
import { BotoesContainer, CalculadoraContainer } from "./styles";

export default function Calculadora(){
    return (
        <CalculadoraContainer>
            <Visor />
            <BotoesContainer>
                <Numero valor={9} />
                <Numero valor={8} />
                <Numero valor={7} />
                <Operador operacao={"/"} />
                <Numero valor={6} />
                <Numero valor={5} />
                <Numero valor={4} />
                <Operador operacao={"X"} />
                <Numero valor={3} />
                <Numero valor={2} />
                <Numero valor={1} />
                <Operador operacao={"+"} />
                <Numero valor={0} />
                <Operador operacao={"."} />
                
                <Operador operacao={"-"} />
                <Operador operacao={"="} />
            </BotoesContainer>
        </CalculadoraContainer>
    )
}