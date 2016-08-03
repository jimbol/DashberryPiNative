import deepFreeze from 'deep-freeze'
import {
  FETCH_CHORES_SUCCEEDED,
  CREATE_CHORE_SUCCEEDED,
  CREATE_CHORE_FAILED
 } from '../constants/action_types'

export default function chores(state = [], action) {
  switch (action.type) {
    case CREATE_CHORE_SUCCEEDED:
      let newState = state.slice(0)
      newState.push(action.chore.data)
      return deepFreeze(newState)
    case FETCH_CHORES_SUCCEEDED:
      return deepFreeze(action.chores.data)
    default:
      return state
  }
}
