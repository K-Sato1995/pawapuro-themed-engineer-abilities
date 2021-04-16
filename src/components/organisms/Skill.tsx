/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { convertSkillLevelToRank } from 'utilities'

interface Props {
  engineerSkill: Skill
}

const skillToColor: Record<SkillRank, string> = {
  G: '#B8B8B8',
  F: '#2DC3F9',
  E: '#0FB411',
  D: '#EAC637',
  C: '#D18E2C',
  B: '#EF2D6A',
  A: '#C723C0',
  S: '#F895BC',
}

const Skill = ({ engineerSkill }: Props) => {
  const { skillName, skillLeve } = engineerSkill

  return (
    <div
      css={css`
        width: 25%;
        height: 120px;
        padding: 5px;
        border: solid #bec9d2 2px;
        border-radius: 10px;
        background-color: #fdfdfd;
        box-shadow: rgb(0 0 0 / 3%) 0px 3px 8px 0px;
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
            color: #3276a3;
          `}
        >
          {skillName}
        </h1>
      </div>

      <div
        css={css`
          font-weight: bold;
          height: 50%;
          font-size: 35px;
          display: flex;
          text-align: center;
        `}
      >
        <h1
          css={css`
            margin: auto;
            text-shadow: -1px 0 #dbe5ec, 0 1px #dbe5ec, 1px 0 #dbe5ec,
              0 -1px #dbe5ec;

            color: ${skillToColor[convertSkillLevelToRank(skillLeve)]};
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
          color: #3276a3;
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
