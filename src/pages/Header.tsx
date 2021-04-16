/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

const Header = () => {
  return (
    <div
      css={css`
        position: relative;
        height: 60px;
        margin-bottom: 30px;
        border-bottom: solid #bec9d2 1px;
      `}
    >
      <div
        css={css`
          position: relative;
          /* border: solid 1px; */
          display: flex;
          height: 60px;
          justify-content: space-between;
        `}
      >
        <span
          css={css`
            margin: 20px;
            color: #3276a3;
          `}
        >
          パワプロ風エンジニア能力値
        </span>
      </div>
    </div>
  )
}

export default Header
