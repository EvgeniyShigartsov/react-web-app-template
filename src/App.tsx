import React, { useState } from 'react'

import scssModule from './styles/index.module.scss'

import heading from './styles/heading.module.css'
import content from './styles/content.module.css'

const Heading = () => <h1 className={heading.heading}>My React and TypeScript App</h1>;

const Content = () => <div className={content.content}>With CSS!</div>;

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
      <button type="button" className={scssModule.button} onClick={() => setClicked((p) => p + 1)}>Click me</button>
      <div className={scssModule.outer}>
        outer
        <div className={scssModule.inner}>inner</div>
      </div>
      <div className={scssModule.inner}>inner second</div>
      <Heading />
      <Content />
    </div>
  )
}
