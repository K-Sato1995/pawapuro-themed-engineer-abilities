/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

interface Props {
  spcialSkillName: string
}

const SpecialSkill = ({ spcialSkillName }: Props) => {
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
          border: solid #bec9d2 2px;
          width: 180px;
          height: 40px;
          position: relative;
          border-radius: 10px;
          margin: 10px;
          box-shadow: rgb(0 0 0 / 3%) 0px 3px 8px 0px;
          background: linear-gradient(
            180deg,
            #b1e9ff 20%,
            #eff8fc 40%,
            #b1e9ff 100%
          );
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
          {spcialSkillName}
        </h2>
      </div>
    </div>
  )
}

export default SpecialSkill
