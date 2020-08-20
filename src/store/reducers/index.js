import { combineReducers } from 'redux'
import tribesReducer from './tribes.reducer'

export default combineReducers({
  tribes: tribesReducer
})
