import React, { Component, PropTypes } from 'react';
import { AppRegistry } from 'react-native';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { GoogleSignin } from 'react-native-google-signin';

import DATA from './test/data.json'
import reducer from './reducers'
import mySaga from './sagas'
import Index from './containers/index_link'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mySaga)

GoogleSignin.configure({
  iosClientId: '235801848933-d5kekdcel3sm7qe722c7j3uo1kc3sq5r.apps.googleusercontent.com',
})

class DashberryPiNative extends Component {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('DashberryPiNative', () => DashberryPiNative);
