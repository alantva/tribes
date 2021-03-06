import {
  FETCH_TRIBES,
  FETCH_TRIBES_SUCCESS,
  FETCH_TRIBES_ERROR,
  setTribes
} from '../actions/tribes.action'
import { apiRequest } from '../actions/api.action'

const URL = '/api/tribes'

// this middleware only care about the fetchTribes action
export const fetchTribesFlow = ({ dispatch }) => next => action => {
  next(action)

  if (action.type === FETCH_TRIBES) {
    dispatch(apiRequest('GET', URL, null, FETCH_TRIBES_SUCCESS, FETCH_TRIBES_ERROR))
  }
}

// on successful fetch, process the tribes data
export const onFetchTribesFlow = ({ dispatch }) => next => action => {
  next(action)

  if (action.type === FETCH_TRIBES_SUCCESS) {
    dispatch(setTribes(action.payload))
  }
}

const tribesMiddleware = [
  fetchTribesFlow,
  onFetchTribesFlow
]

export default tribesMiddleware
