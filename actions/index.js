const logOut = function(){ return {type: 'LOG_OUT'} }
const logIn = function(){ return {type: 'LOG_IN'} }
const signUp = function(){ return {type: 'SIGN_UP'} }
const fetchUser = function(){ return {type: 'FETCH_USER'} }
const toggleMenu = function(){ return {type: 'TOGGLE_MENU'} }

const createChore = function(user, chore){
  return {
    type: 'CREATE_CHORE',
    payload: {
      chore: chore,
      idToken: user.idToken
    }
  }
};

const actions = {
  logOut,
  logIn,
  fetchUser,
  createChore,
  signUp,
  toggleMenu
};

export default actions
