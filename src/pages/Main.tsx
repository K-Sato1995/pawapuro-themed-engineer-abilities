/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import Skill from 'components/organisms/Skill'

const Main = () => {
  return (
    <>
      <section
        css={css`
          border: solid 1px;
          background-color: red;
          height: 300px;
          margin: 10px;
        `}
      >
        User Info Content
      </section>

      <section
        css={css`
          display: flex;
          position: relative;
          flex-wrap: wrap;
          border: solid 1px;
          background-color: red;
          justify-content: center;
          margin: 10px;
        `}
      >
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </section>

      <section
        css={css`
          border: solid 1px;
          background-color: red;
          height: 300px;
          margin: 10px;
        `}
      >
        User specialities
      </section>
    </>
  )
}

export default Main
