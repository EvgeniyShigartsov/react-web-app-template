import React from 'react'
import { Provider } from 'react-redux'

import { store } from './store'
import { Counter } from './components/Counter'

import logo from './assets/Fake_Avatar.jpeg'

export const App: React.FC = () => (
  <Provider store={store}>
    <div>
      <Counter />
      <br />
      <img src={logo} alt="logo" />
    </div>
  </Provider>

)
