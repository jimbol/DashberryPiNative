import { takeEvery, takeLatest } from 'redux-saga'
import { call, put, fork } from 'redux-saga/effects'
import Api from '../api'

function* fetchChores(action) {;
  try {
    console.log('fetching chores');
    const chores = yield call(Api.fetchChores, action.user.idToken);
    console.log('fetchChores succeeded');
    yield put({type: "FETCH_CHORES_SUCCEEDED", chores: chores});
  } catch (e) {
    yield put({type: "FETCH_CHORES_FAILED", message: e.message});
  }
}

function* createChore(action) {
  try {
    const chore = yield call(Api.createChore, action.payload);
    yield put({type: "CREATE_CHORE_SUCCEEDED", chore: chore});
  } catch (e) {
    yield put({type: "CREATE_CHORE_FAILED", message: e.message});
  }
}

function* fetchUser(action) {
  try {
    const user = yield call(Api.fetchUser, action.payload);
    yield put({type: "FETCH_USER_SUCCEEDED", user: user});
  } catch (e) {
    yield put({type: "FETCH_USER_FAILED", message: e.message});
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

function* logIn(action) {
  try {
    const user = yield call(Api.logIn);
    yield put({type: "FETCH_USER_SUCCEEDED", user: user});
  } catch (e) {
    yield put({type: "FETCH_USER_FAILED"});
  }
}

// will start takeEvery in the background and provide it with the subsequent arguments
export default function* rootSaga() {
  yield fork(takeLatest, 'FETCH_CHORES', fetchChores)
  yield fork(takeEvery, 'CREATE_CHORE', createChore)
  yield fork(takeLatest, 'FETCH_USER', fetchUser)
  yield fork(takeLatest, 'FETCH_USER_SUCCEEDED', fetchChores)
  yield fork(takeLatest, 'LOG_OUT', logOut)
  yield fork(takeLatest, 'LOG_IN', logIn)
}
