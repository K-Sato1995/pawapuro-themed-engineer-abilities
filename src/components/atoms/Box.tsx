/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

interface Props {
  width: number
  height: number
}

const Box = () => {
  return (
    <div
      css={css`
        border: solid #bec9d2 1px;
        background-color: #fdfdfd;
      `}
    ></div>
  )
}

export default Box
