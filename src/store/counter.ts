/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './index'

export interface ICounterState {
  value: number,
}

const initialState: ICounterState = {
  value: 0,
}

export const MODULE_NAME = 'counter'

const counterSlice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const {
  actions: counterActions,
  reducer,
} = counterSlice

export const selectCount = (state: RootState) => state.counter.value
