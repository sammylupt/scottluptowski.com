import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { injectGlobal } from 'styled-components'

ReactDOM.render(<App />, document.getElementById('root'))

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #fcfcfc;
  }

  a, a:visited {
    color: #1616EF;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`
