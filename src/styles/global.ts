import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
    font-size: 62.5%;
    --bg: #FFC502;
    --text-primary: #fff;
    --text-secondary: #000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--bg);
  }

  body, input, button {
    font-family: 'Noto Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
