import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
	  box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    margin: 0;
    position: relative;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 12px;
    color: #333;
    -webkit-text-size-adjust: none;
  }

  a {
    text-decoration: none;
  }

  .en {
    font-family: 'Montserrat',sans-serif;
  }
`

export default GlobalStyle;
