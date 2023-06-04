import styled from "styled-components";
import { defaultTheme } from "../../styles/Colors";

export const VisorContainer = styled.div`
    background: ${defaultTheme['blue-300']};
    margin: 0.5rem 0;
    max-width: 15rem;
    height: 5rem;
    border: 2px solid ${defaultTheme['gray-500']};
    display: flex;
    flex-grow: initial;
    align-items: flex-start;
    justify-items: flex-start;
    margin-bottom: 1rem;
    p {
      padding: 0.5rem 0.8rem;
      font-size: 1.8rem;
      line-height: 1;
      font-weight: 700;
      word-spacing: 0.15rem;
      color: ${defaultTheme['gray-600']};
      max-width: 100%;
      word-wrap: break-word;
    }
`;