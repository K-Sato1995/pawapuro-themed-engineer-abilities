/** @jsxImportSource @emotion/react */
import React from 'react'
import Main from 'pages/Main'
import Footer from 'pages/Footer'
import GlobalStyles from 'GlobalStyles'
import { css } from '@emotion/react'
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
      <div
        css={css`
          background-color: #eee;
          max-width: 860px;
          margin: 0 auto;
          height: 100vh;
          border: solid 1px;
        `}
      >
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
