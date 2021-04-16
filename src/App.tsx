/** @jsxImportSource @emotion/react */
import React from 'react'
import Main from 'pages/Main'
import Footer from 'pages/Footer'
import Header from 'pages/Header'
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
          background-color: #f6feff;
          max-width: 860px;
          margin: 0 auto;
          height: 100%;
          border-right: solid #e5ebf0 1px;
          border-left: solid #e5ebf0 1px;
        `}
      >
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
