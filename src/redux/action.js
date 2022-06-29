import { LOAD_USER_ERROS, LOAD_USER_SUCCESS, LOAD_USER_START } from "./actionType";

// import * as actionType from "./actionType";


export const loadUserStart = () => ({
    type: LOAD_USER_START
});

export const loadUserSuccess = (users) => {
    return ({
    type: LOAD_USER_SUCCESS,
    payload: users
})};

export const loadUserErros = (error) => ({
    type: LOAD_USER_ERROS,
    payload: error
});

