import { GoogleSignin } from 'react-native-google-signin';
import axios from 'axios'

const Api = {
  fetchChores: function(payload){
    return axios({
      url: 'http://localhost:3000/chores',
      params: payload
    })
  },

  createChore: function(payload){
    return axios.post('http://localhost:3000/chores', payload)
  },

  fetchUser: function(payload){
    return axios({
      url: 'http://localhost:3000/users',
      params: payload
    })
  },

  createUser: function(payload){
    return axios.post('http://localhost:3000/users', payload)
  },

  fetchGoogleUser: function(){
    return GoogleSignin.currentUserAsync()
  },

  logOut: function(){
    return GoogleSignin.signOut()
  },

  logIn: function(){
    return GoogleSignin.signIn()
  },
}

export default Api;
