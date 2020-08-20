export const FETCH_TRIBES = '[tribes] Fetch'
export const FETCH_TRIBES_SUCCESS = '[tribes] Fetch Success'
export const FETCH_TRIBES_ERROR = '[tribes] Fetch Error'
export const SET_TRIBES = '[tribes] Set'

export const fetchTribes = () => ({ type: FETCH_TRIBES })

export const setTribes = (data) => ({ type: SET_TRIBES, payload: data })
