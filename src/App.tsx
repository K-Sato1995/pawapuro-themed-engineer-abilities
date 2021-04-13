import React from 'react'
import { css } from '@emotion/react'

const base = css`
  background-color: darkgreen;
  color: turquoise;
`
function App() {
  return (
    <div
      css={{
        color: 'darkorchid',
        backgroundColor: 'lightgray',
      }}
    >
      Test
    </div>
  )
}

export default App
