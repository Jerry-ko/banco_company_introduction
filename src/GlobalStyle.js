import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'


const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
  }

  * {
	  box-sizing: border-box;
  }
  
  
  body {
      font-family: 'Noto Sans KR', sans-serif;   
  }
 
`

export default GlobalStyle;