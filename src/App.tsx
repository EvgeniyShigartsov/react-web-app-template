import React, { useState } from 'react'

import './styles/index.scss'

export const App: React.FC = () => {
  const [clicked, setClicked] = useState(0)

  return (
    <div>
      <span>
        {' '}
        Clicked
        {' '}
        {clicked}
        {' '}
        times
        {' '}
      </span>
      <button type="button" onClick={() => setClicked((p) => p + 1)}>Click me</button>
    </div>
  )
}
