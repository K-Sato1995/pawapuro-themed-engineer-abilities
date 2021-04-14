/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import Skill from 'components/organisms/Skill'

const skills: Skill[] = [
  { skillName: '問題解決力', skillLeve: 62 },
  { skillName: '要件定義力', skillLeve: 45 },
  { skillName: 'コーディング力', skillLeve: 65 },
  { skillName: 'マネジメント力', skillLeve: 40 },
  { skillName: 'システム設計力', skillLeve: 50 },
  { skillName: 'コミュニケーションスキル', skillLeve: 70 },
]

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
        {skills.map((skill: Skill, idx: number) => {
          return <Skill engineerSkill={skill} key={idx} />
        })}
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
