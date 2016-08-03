const logOut = function(){ return {type: 'LOG_OUT'} }
const logIn = function(){ return {type: 'LOG_IN'} }
const fetchUser = function(){ return {type: 'FETCH_USER'} }

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
  createChore
};

export default actions
