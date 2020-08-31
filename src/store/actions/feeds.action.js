export const FETCH_FEEDS = '[feeds] Fetch'
export const FETCH_FEEDS_SUCCESS = '[feeds] Fetch Success'
export const FETCH_FEEDS_ERROR = '[feeds] Fetch Error'
export const SET_FEEDS = '[feeds] Set'

export const fetchFeeds = () => ({ type: FETCH_FEEDS })

export const setFeeds = (data) => ({ type: SET_FEEDS, payload: data })
