import styled from "styled-components";
import { defaultTheme } from "../../styles/Colors";

export const LimparButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.4rem;
    padding: 0.7rem 1rem;
    color: ${defaultTheme['white']};
    background: ${defaultTheme['blue-500']};
    border: 1 solid ${defaultTheme['gray-600']};
    border-radius: 30%;
`;