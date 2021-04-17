/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { FaBars } from 'react-icons/fa'
import { serialize } from 'node:v8'

const Header = () => {
  return (
    <div
      css={css`
        position: relative;
        height: 60px;
        border-bottom: solid #bec9d2 1px;
      `}
    >
      <div
        css={css`
          position: relative;
          display: flex;
          height: 60px;
          justify-content: space-between;
        `}
      >
        <span
          css={css`
            margin: 20px;
            font-weight: bold;
            /* color: #3276a3; */
          `}
        >
          パワプロ風エンジニア能力値
        </span>

        <span
          css={css`
            margin: 20px;
            font-weight: bold;
            /* color: #3276a3; */
          `}
        >
          <FaBars
            style={{
              fontSize: '20px',
            }}
          />
        </span>
      </div>
    </div>
  )
}

export default Header
