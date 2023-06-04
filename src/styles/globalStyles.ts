import { createGlobalStyle } from 'styled-components';
import {defaultTheme} from './Colors';

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans Mono', monospace;
  }

  :focus {
    outline: none;
  }

  body {
    background: ${defaultTheme['gray-800']};
    color: ${defaultTheme['white']};
    -webkit-font-smoothing: antialiased;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: 40px;
  }

  body, input, textarea, button {
    font-family: 'Noto Sans Mono', monospace;
    font-weight: 400;
    font-size: 1rem;
  }
`