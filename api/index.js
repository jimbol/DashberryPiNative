import { GoogleSignin } from 'react-native-google-signin';
import axios from 'axios'


const Api = {
  fetchChores: function(idToken){
    console.log('fetchChores began');
    return axios({
      url: 'http://localhost:3000/chores',
      params: {
        idToken:idToken
      }
    })
  },
  createChore: function(payload){
    return axios.post('http://localhost:3000/chores', payload)
  },
  fetchUser: function(){
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
