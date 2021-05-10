import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import rootReducers, { RootState } from './reducers'
import logger from 'redux-logger'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { useDispatch } from 'react-redux'

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['counter'],
  blacklist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
    if (process.env.NODE_ENV === 'development')
      return defaultMiddleware.concat(logger)

    return defaultMiddleware
  },
  devTools: process.env.NODE_ENV === 'development'
})

const persistor = persistStore(store)
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

const useAppDispatch = (): unknown => useDispatch<AppDispatch>()
export type AppDispatch = typeof store.dispatch

export { store, persistor, useAppDispatch }
