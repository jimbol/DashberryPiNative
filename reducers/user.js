import deepFreeze from 'deep-freeze'
import { FETCH_USER_SUCCEEDED, FETCH_USER_FAILED } from '../constants/action_types'

const initialState = {}

export default function chores(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_SUCCEEDED:
      return deepFreeze(action.user)
    case FETCH_USER_FAILED:
      return state
    default:
      return state
  }
}
