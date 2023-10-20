import React, { FC } from 'react'

import { useAppDispatch, useTypedSelector } from '../hooks'
import { selectCount, counterActions } from '../store/counter'

import styles from '../styles/index.module.scss'

export const Counter: FC = () => {
  const value = useTypedSelector(selectCount)
  const dispatch = useAppDispatch()

  return (
    <div>
      <span>
        The counter is
        {' '}
        {value}
      </span>
      <div>
        Dumb text
      </div>
      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(counterActions.increment())}
      >
        Increment
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(counterActions.decrement())}
      >
        Decrement
      </button>
    </div>
  )
}
