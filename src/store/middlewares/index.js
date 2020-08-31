import { applyMiddleware } from 'redux'
import apiMiddleware from './api.middleware'
import feedsMiddleware from './feeds.middleware'
import tribesMiddleware from './tribes.middleware'

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export default bindMiddleware([
  ...feedsMiddleware,
  ...tribesMiddleware,
  apiMiddleware
])
