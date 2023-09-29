import { createRoot } from 'react-dom/client'
import React from 'react'

import { App } from './src/App'

const container = document.querySelector('#root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
