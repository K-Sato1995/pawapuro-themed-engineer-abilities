/** @jsxImportSource @emotion/react */
import React from 'react'
import Main from 'pages/Main'
import GlobalStyles from 'GlobalStyles'
import { ThemeProvider } from '@emotion/react'

const theme = {
  colors: {
    primary: 'blue',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  )
}

export default App
