/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import Skill from 'components/organisms/Skill'
import UserInfo from 'components/organisms/UserInfo'
import SpecialSkill from 'components/organisms/SpecialSkill'

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
          /* border: dashed 1px; */

          display: flex;
          height: 20vh;
          min-height: 250px;
          margin: 30px 30px;
          padding: 0 30px;
        `}
      >
        <UserInfo />
      </section>

      <section
        css={css`
          /* border: dashed 1px; */

          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          /* height: 20vh; */
          min-height: 300px;
          margin: 30px;
        `}
      >
        {skills.map((skill: Skill, idx: number) => {
          return <Skill engineerSkill={skill} key={idx} />
        })}
      </section>

      <section
        css={css`
          /* border: dashed 1px; */
          height: 20vh;
          min-height: 250px;
          margin: 30px;
        `}
      >
        <div
          css={css`
            position: relative;
            display: flex;
            flex-wrap: wrap;
            margin: 10px;
          `}
        >
          <SpecialSkill />
          <SpecialSkill />
          <SpecialSkill />
          <SpecialSkill />
          <SpecialSkill />
          <SpecialSkill />
          <SpecialSkill />
        </div>
      </section>
    </>
  )
}

export default Main
