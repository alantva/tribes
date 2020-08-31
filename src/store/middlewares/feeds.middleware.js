import {
  FETCH_FEEDS,
  FETCH_FEEDS_SUCCESS,
  FETCH_FEEDS_ERROR,
  setFeeds
} from '../actions/feeds.action'
import { apiRequest } from '../actions/api.action'

const URL = '/api/feeds'

// this middleware only care about the fetchFeeds action
export const fetchFeedsFlow = ({ dispatch }) => next => action => {
  next(action)

  if (action.type === FETCH_FEEDS) {
    dispatch(apiRequest('GET', URL, null, FETCH_FEEDS_SUCCESS, FETCH_FEEDS_ERROR))
  }
}

// on successful fetch, process the feeds data
export const onFetchFeedsFlow = ({ dispatch }) => next => action => {
  next(action)

  if (action.type === FETCH_FEEDS_SUCCESS) {
    dispatch(setFeeds(action.payload))
  }
}

const feedsMiddleware = [
  fetchFeedsFlow,
  onFetchFeedsFlow
]

export default feedsMiddleware
