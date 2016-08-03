import { TOGGLE_MENU } from '../constants/action_types'

export default function menuOpen(state = false, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return !state
    default:
      return state
  }
}
