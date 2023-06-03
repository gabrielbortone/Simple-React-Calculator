import styled from "styled-components";
import { defaultTheme } from "../../styles/Colors";

export const NumeroButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4rem;
    color: ${defaultTheme['white']};
    background: ${defaultTheme['gray-600']};
    border: 1 solid ${defaultTheme['gray-700']};
    border-radius: 9px;
`;