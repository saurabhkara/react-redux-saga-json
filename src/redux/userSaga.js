import {
  take,
  call,
  put,
  takeEvery,
  takeLatest,
  all,
  delay,
  fork,
} from "redux-saga/effects";
import {
  LOAD_USER_START,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROS,
  CREATE_USER_START,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
} from "./actionType";
import { loadUsersAPI , createUserDataAPI } from "./api";
import { loadUserStart, loadUserSuccess, loadUserErros, createUserSuccess, createUserError, } from "./action";

export function* onLoadUserStartAsync() {
  try {
    const response = yield call(loadUsersAPI);
    if (response.status === 200) {
      // yield put({type:LOAD_USER_SUCCESS,payload: response.data});
      yield put(loadUserSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    yield put({ type: LOAD_USER_ERROS, payload: error.response.data });
  }
}

export function * onCreateUserAsync({payload}){
    try{
        const response = yield call(createUserDataAPI,payload);
       if(response.status===200){
        yield put(createUserSuccess())
       }

    }catch(error){
    console.log(error);
    yield put(createUserError())
    // yield put({type:CREATE_USER_ERROR,payload:response.data.error})
    }
}

export function* onCreateUser() {
  yield takeLatest(CREATE_USER_START,onCreateUserAsync);
}

export function* onLoadUsers() {
  yield takeEvery(LOAD_USER_START, onLoadUserStartAsync);
}

export default function* rootSaga() {
  yield all([fork(onLoadUsers),fork(onCreateUser)]);
}
