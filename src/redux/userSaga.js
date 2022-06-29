import {take, call, put, takeEvery, takeLatest, all, delay,fork} from 'redux-saga/effects';
import { LOAD_USER_START, LOAD_USER_SUCCESS , LOAD_USER_ERROS} from './actionType';
import { loadUsersAPI } from './api';
import { loadUserStart, loadUserSuccess, loadUserErros } from './action';



export function *onLoadUserStartAsync(){
  
    try{
        const response = yield call(loadUsersAPI);
        if(response.status === 200){
            yield delay(500);
            // yield put({type:LOAD_USER_SUCCESS,payload: response.data});
            yield put(loadUserSuccess(response.data));
        }
    }catch(error){
        console.log(error);
        yield put({type:LOAD_USER_ERROS,payload: error.response.data});
    }
}



export function* onLoadUsers() {
    yield takeEvery(LOAD_USER_START, onLoadUserStartAsync)
}




export default function* rootSaga(){
    yield all([fork(onLoadUsers)]);
}

