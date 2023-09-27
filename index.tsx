import { createRoot } from 'react-dom/client'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [clicked, setClicked] = useState(0)

  return (
    <div>
      <span>
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

const container = document.querySelector('#root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
