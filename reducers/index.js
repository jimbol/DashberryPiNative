import { combineReducers } from 'redux'
import chores from './chores'
import lists from './lists'
import selectedList from './selected_list'
import user from './user'
import menuOpen from './menu_open'

export default combineReducers({
  chores,
  lists,
  selectedList,
  user,
  menuOpen
})


// STATE LAYOUT

let state = {}

state.user = {
  _id: '8675309',
  name: 'Jim',
  email: 'jim.hall.dev@gmail.com',
};

state.chores = [
  {
    _id: '2k3ljf09dj',
    label: 'Catbox',
    person_id: '8675309',
  },
  {
    _id: '2k3ljf09dk',
    label: 'Dishes',
    person_id: '8675309',
  },
  {
    _id: '2k3ljf09dl',
    label: 'Dinner',
    person_id: '8675309',
    }
]

// Use the selected list to filter chores
state.selectedList = 'my-chores'

// Initially lists will be hard-coded options on the client
// which map to filters for chores
state.lists = [{
  _id: 'my-chores',
  label: 'My Chores'
},{
  _id: 'all-chores',
  label: 'All Chores'
},]
