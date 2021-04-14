/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

const UserInfo = () => {
  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          flex: 1;
        `}
      >
        <div
          css={css`
            flex: 2;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <img
            css={css`
              border: solid #efefef 1px;
              width: 150px;
              height: 150px;
              margin: 10px;
              border-radius: 5px;
            `}
            src="logo192.png"
            alt="userImage"
          />
        </div>

        <div
          css={css`
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #26dc1c;
              text-align: center;
              width: 150px;
              height: 40px;
              position: relative;
              border-radius: 5px;
              margin: 7px;
            `}
          >
            <h2
              css={css`
                font-size: 15px;
                font-weight: bold;
              `}
            >
              佐藤　太郎
            </h2>
          </div>
        </div>
      </div>

      {/* UserInfo Right */}
      <div
        css={css`
          display: flex;
          flex-direction: column;
          flex: 2;
        `}
      >
        <div
          css={css`
            flex: 1;
            border: solid yellow 2px;
          `}
        ></div>
        <div
          css={css`
            flex: 2;
            border: solid yellow 2px;
          `}
        ></div>
      </div>
    </>
  )
}

export default UserInfo
