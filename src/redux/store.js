import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { configureStore } from '@reduxjs/toolkit'

import reducer from './reducer'

const store = configureStore({
  reducer,
})

export default store
