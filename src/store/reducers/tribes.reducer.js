import { SET_TRIBES } from '../actions/tribes.action'

const initialState = {
  tribes: []
}

export default function tribesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TRIBES:
      return Object.assign({}, state, { tribes: action.payload })
    default:
      return state
  }
}
