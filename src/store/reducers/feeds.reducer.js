import { SET_FEEDS } from '../actions/feeds.action'

const initialState = {
  feeds: []
}

export default function feedsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEEDS:
      return Object.assign({}, state, { feeds: action.payload })
    default:
      return state
  }
}
