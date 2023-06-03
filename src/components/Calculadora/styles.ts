import styled from "styled-components";
import { defaultTheme } from "../../styles/Colors";

export const CalculadoraContainer = styled.div`
    background: ${defaultTheme['gray-600']};
    width: 15rem;
    height: 35rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    flex-direction: column;
`;

export const BotoesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(1fr,5);
    gap: 0.35rem;
`;