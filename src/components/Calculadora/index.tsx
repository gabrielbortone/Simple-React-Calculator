import Numero from "../Numero";
import Operador from "../Operador";
import Resultado from "../Resultado";
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
                <Operador operacao={"C"} />
                <Numero valor={6} />
                <Numero valor={5} />
                <Numero valor={4} />
                <Operador operacao={"/"} />
                <Numero valor={3} />
                <Numero valor={2} />
                <Numero valor={1} />
                <Operador operacao={"+"} />
                <Numero valor={0} />
                <Operador operacao={"."} />
                <Operador operacao={"v"} />
                <Operador operacao={"-"} />
                <Operador operacao={"X"} />
                <Operador operacao={"%"} />
                
                <Resultado simbolo={"="} />
            </BotoesContainer>
        </CalculadoraContainer>
    )
}