/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { convertSkillLevelToRank } from 'utilities'

interface Props {
  engineerSkill: Skill
}

const Skill = ({ engineerSkill }: Props) => {
  const { skillName, skillLeve } = engineerSkill

  return (
    <div
      css={css`
        width: 25%;
        height: 120px;
        padding: 5px;
        margin: 10px;
        border: solid green 1px;
      `}
    >
      <div
        css={css`
          font-weight: bold;
          height: 25%;
          display: flex;
          font-size: 14px;
          text-align: center;
        `}
      >
        <h1
          css={css`
            margin: auto;
          `}
        >
          {skillName}
        </h1>
      </div>

      <div
        css={css`
          font-weight: bold;
          height: 50%;
          font-size: 25px;
          display: flex;
          text-align: center;
        `}
      >
        <h1
          css={css`
            margin: auto;
          `}
        >
          {convertSkillLevelToRank(skillLeve)}
        </h1>
      </div>

      <div
        css={css`
          font-weight: bold;
          height: 25%;
          font-size: 18px;
          display: flex;
          text-align: center;
        `}
      >
        <h1
          css={css`
            margin: auto;
          `}
        >
          {skillLeve}
        </h1>
      </div>
    </div>
  )
}

export default Skill
