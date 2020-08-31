import { combineReducers } from 'redux'
import feedsReducer from './feeds.reducer'
import tribesReducer from './tribes.reducer'

export default combineReducers({
  feeds: feedsReducer,
  tribes: tribesReducer
})
