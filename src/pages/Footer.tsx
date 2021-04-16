/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

const Footer = () => {
  return (
    <div
      css={css`
        position: relative;
        height: 60px;
        border-top: solid #bec9d2 1px;
      `}
    >
      <span
        css={css`
          position: absolute;
          right: 20px;
          bottom: 20px;
          color: #3276a3;
        `}
      >
        パワプロ風エンジニア能力値
      </span>
    </div>
  )
}

export default Footer
