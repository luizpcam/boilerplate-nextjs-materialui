import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, AppThunk } from '@store/store'

interface CounterState {
  data: number
}

const initialState: CounterState = {
  data: 0
}

export const counterSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    up: (state, { payload }: PayloadAction<number>) => {
      state.data += payload
    },
    down: (state, { payload }: PayloadAction<number>) => {
      state.data -= payload
    }
  }
})

export const { up, down } = counterSlice.actions

export default counterSlice.reducer

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const counterUp = (): AppThunk => async (dispatch: AppDispatch) => {
  await sleep(3000)
  dispatch(up(1))
}
export const counterDown = (): AppThunk => async (dispatch: AppDispatch) => {
  await sleep(3000)
  dispatch(down(1))
}
