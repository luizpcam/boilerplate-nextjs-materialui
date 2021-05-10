import { combineReducers } from 'redux'
import counterReducer from '@slices/counterSlice'

const RootReducers = combineReducers({
  counter: counterReducer
})

export type RootState = ReturnType<typeof RootReducers>

export default RootReducers
