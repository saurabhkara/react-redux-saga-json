import {
  LOAD_USER_ERROS,
  LOAD_USER_SUCCESS,
  LOAD_USER_START,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  DELETE_USER_ERROR,
  DELETE_USER_START,
  DELETE_USER_SUCCESS
} from "./actionType";

// import * as actionType from "./actionType";

export const loadUserStart = () => ({
  type: LOAD_USER_START,
});

export const loadUserSuccess = (users) => {
  return {
    type: LOAD_USER_SUCCESS,
    payload: users,
  };
};

export const loadUserErros = (error) => ({
  type: LOAD_USER_ERROS,
  payload: error,
});

export const createUserStart = (data) => {

  return {
    type: CREATE_USER_START,
    payload: data,
  };
};

export const createUserSuccess = () => {
  return {
    type: CREATE_USER_SUCCESS,
  };
};

export const createUserError = (error) => {
  return {
    type: CREATE_USER_ERROR,
    payload: error,
  };
};

export const deleteUserStart=(id)=>{
  return{
    type: DELETE_USER_START,
    payload:id
  }
}

export const deleteUserSuccess=(id)=>{
  return {
    type:DELETE_USER_SUCCESS,
    payload:id
  }
}

export const deleteUserError=(error)=>{

  return {
    type:DELETE_USER_ERROR,
    paylod:error
  }
}