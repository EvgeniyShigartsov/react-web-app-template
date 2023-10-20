import { configureStore } from '@reduxjs/toolkit'

import { reducer as counterReducer, MODULE_NAME as counterModule } from './counter'

export const store = configureStore({
  reducer: {
    [counterModule]: counterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
