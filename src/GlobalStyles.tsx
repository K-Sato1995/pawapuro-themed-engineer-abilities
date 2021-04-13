/** @jsxImportSource @emotion/react */
import React from 'react'
import { Global, css } from '@emotion/react'

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        html,
        body {
          font-family: 'Arial';
        }
      `}
    />
  )
}

export default GlobalStyles
