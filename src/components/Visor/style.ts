import styled from "styled-components";
import { defaultTheme } from "../../styles/Colors";

export const VisorContainer = styled.div`
    background: ${defaultTheme['gray-400']};
    margin: 0.5rem 0;
    max-width: 15rem;
    height: 3rem;
    border: 2px solid ${defaultTheme['gray-500']};
    display: flex;
    flex-grow: initial;
    align-items: flex-start;
    justify-items: flex-start;
    p {
      font-size: 1rem;
      line-height: 1.4rem;
      font-weight: 700;
      word-spacing: 0.15rem;
      color: ${defaultTheme['white']};
      max-width: 100%;
      word-wrap: break-word;
    }
`;