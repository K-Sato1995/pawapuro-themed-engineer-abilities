/** @jsxImportSource @emotion/react */
import React from 'react'
import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        html,
        body {
          ${emotionReset}
          font-family: 'Arial';
          /* background-color: #f5ffff; */
        }
      `}
    />
  )
}

export default GlobalStyles
