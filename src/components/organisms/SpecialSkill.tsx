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
          /* background-color: rgb(196, 217, 255); */
          border: solid #bec9d2 2px;
          width: 180px;
          height: 40px;
          position: relative;
          border-radius: 10px;

          margin: 10px;

          background-color: #fdfdfd;
          /* background: linear-gradient(-135deg, #c4feff, rgb(196, 217, 255)); */
          box-shadow: rgb(0 0 0 / 3%) 0px 3px 8px 0px;
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
