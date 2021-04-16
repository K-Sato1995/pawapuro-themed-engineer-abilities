/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

const Footer = () => {
  return (
    <div
      css={css`
        position: absolute;
        display: flex;
        bottom: 0;
        height: 60px;
        width: 100%;
        border-top: solid #bec9d2 1px;
      `}
    >
      <div
        css={css`
          position: relative;
          width: 100%;
          color: #3276a3;
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
    </div>
  )
}

export default Footer
