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
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <img
            css={css`
              border: solid #bec9d2 2px;
              border-radius: 10px;
              box-shadow: rgb(0 0 0 / 3%) 0px 3px 8px 0px;
            `}
            src="logo192.png"
            alt="userImage"
          />
        </div>

        <div
          css={css`
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
              border: solid #74f36d 2px;
              text-align: center;
              width: 200px;
              height: 40px;
              letter-spacing: 1.5px;
              position: relative;
              border-radius: 10px;
              margin: 7px;

              background: linear-gradient(
                180deg,
                #74f36d 20%,
                #a9f0a5 40%,
                #26dc1c 100%
              );
            `}
          >
            <h2
              css={css`
                font-size: 15px;
                font-weight: bold;
                letter-spacing: 1.5px;
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
          /* border: solid red 1px; */
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            padding: 10px;
            background-color: #fdfdfd;
            border: solid #bec9d2 2px;
            border-radius: 10px;
            box-shadow: rgb(0 0 0 / 3%) 0px 3px 8px 0px;
          `}
        >
          <h2
            css={css`
              font-weight: bold;
              letter-spacing: 1.5px;
            `}
          >
            ユーザー情報
          </h2>
        </div>

        <div
          css={css`
            margin-top: 20px;
            padding: 20px;
            background-color: #fdfdfd;
            border: solid #bec9d2 2px;
            border-radius: 10px;
            box-shadow: rgb(0 0 0 / 3%) 0px 3px 8px 0px;
          `}
        >
          <p
            css={css`
              display: block;
              font-size: 15px;
              line-height: 1.5;
            `}
          >
            100文字制限する。 これが私のユーザーとしての詳細箇所です。
            これが私のユーザーとしての詳細箇所です。
            これが私のユーザーとしての詳細箇
          </p>
        </div>
      </div>
    </>
  )
}

export default UserInfo
