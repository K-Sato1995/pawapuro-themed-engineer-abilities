/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

const SpecialSkill = () => {
  return (
    <div
      css={css`
        width: 33%;
        display: flex;
        justify-content: center;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #c4feff;
          border: solid #3276a3 1px;
          width: 180px;
          height: 40px;
          position: relative;
          border-radius: 5px;
          margin: 10px;
        `}
      >
        <h2
          css={css`
            font-size: 15px;
            font-weight: bold;
            letter-spacing: 1px;
            color: #3276a3;
          `}
        >
          Ruby
        </h2>
      </div>
    </div>
  )
}

export default SpecialSkill
