import { takeEvery, takeLatest } from 'redux-saga'
import { call, put, fork } from 'redux-saga/effects'
import Api from '../api'

function* fetchChores(action) {
  console.log(action);
  try {
    const chores = yield call(Api.fetchChores, {
      idToken: action.user.idToken
    });

    yield put({type: "FETCH_CHORES_SUCCEEDED", chores: chores});
  } catch (e) {
    yield put({type: "FETCH_CHORES_FAILED", message: e.message});
  }
}

function* createChore(action) {
  // payload == { chore, idToken }
  try {
    const chore = yield call(Api.createChore, action.payload);
    yield put({type: "CREATE_CHORE_SUCCEEDED", chore: chore});
  } catch (e) {
    yield put({type: "CREATE_CHORE_FAILED", message: e.message});
  }
}

function* fetchGoogleUser(action) {
  try {
    // Authenticate user
    const googleUser = yield call(Api.fetchGoogleUser, action.payload);

    if (googleUser && googleUser.idToken) {
      // Authenticate on server
      // create or fetch user record
      const userRes = yield call(Api.fetchUser, {
        idToken: googleUser.idToken
      });

      let user = userRes.data[0]
      user.idToken = googleUser.idToken

      yield put({
        type: "FETCH_USER_SUCCEEDED",
        user: user
      });


    } else {
      yield put({type: "FETCH_USER_FAILED"});
    }

    yield put({type: "FETCH_USER_SUCCEEDED", user: user});
  } catch (e) {
    yield put({type: "FETCH_USER_FAILED", message: e.message});
  }
}

function* signUp() {
  try {
    const googleUser = yield call(Api.logIn);

    if (googleUser && googleUser.idToken) {
      const userRes = yield call(Api.createUser, {
        idToken: googleUser.idToken
      });

      let user = userRes.data[0]
      user.idToken = googleUser.idToken

      yield put({
        type: "FETCH_USER_SUCCEEDED",
        user: user
      });
    }

  } catch (e) {
    yield put({type: "FETCH_USER_FAILED"});
  }
}

function* logIn() {
  try {
    const googleUser = yield call(Api.logIn);

    if (googleUser && googleUser.idToken) {
      // Authenticate on server
      // fetch user record
      const userRes = yield call(Api.fetchUser, {
        idToken: googleUser.idToken
      });


      let user = userRes.data[0]
      user.idToken = googleUser.idToken

      yield put({
        type: "FETCH_USER_SUCCEEDED",
        user: user
      });
    }

  } catch (e) {
    yield put({type: "FETCH_USER_FAILED"});
  }
}

function* logOut(action) {
  try {
    yield call(Api.logOut);
    yield put({type: "LOGGED_OUT"});
  } catch (e) {
    yield put({type: "LOG_OUT_FAILED"});
  }
}

export default function* rootSaga() {
  yield fork(takeLatest, 'FETCH_CHORES', fetchChores)
  yield fork(takeEvery, 'CREATE_CHORE', createChore)
  yield fork(takeLatest, 'FETCH_USER', fetchGoogleUser)
  yield fork(takeLatest, 'SIGN_UP', signUp)
  yield fork(takeLatest, 'FETCH_USER_SUCCEEDED', fetchChores)
  yield fork(takeLatest, 'LOG_OUT', logOut)
  yield fork(takeLatest, 'LOG_IN', logIn)
}
