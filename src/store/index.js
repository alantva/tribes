import { createStore } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import combinedReducer from './reducers'
import bindMiddlewares from './middlewares'

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload }
  } else {
    return combinedReducer(state, action)
  }
}

const initStore = () => createStore(reducer, bindMiddlewares)

export const wrapper = createWrapper(initStore)
