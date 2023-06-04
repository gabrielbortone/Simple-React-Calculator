import LimparBtn from "../Limpar";
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
                <LimparBtn/>
                <Numero valor={6} />
                <Numero valor={5} />
                <Numero valor={4} />
                <Operador operacao={"/"} simbolo="÷" />
                <Numero valor={3} />
                <Numero valor={2} />
                <Numero valor={1} />
                <Operador operacao={"+"} simbolo="+"/>
                <Numero valor={0} />
                <Operador operacao={"."} simbolo="." />
                <Operador operacao={"v"} simbolo="√" />
                <Operador operacao={"-"} simbolo="-"/>
                <Operador operacao={"."} simbolo="x" />
                <Operador operacao={"/100"} simbolo="%" />
                
                <Resultado simbolo={"="} />
            </BotoesContainer>
        </CalculadoraContainer>
    )
}