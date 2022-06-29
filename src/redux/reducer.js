import {LOAD_USER_ERROS, LOAD_USER_START, LOAD_USER_SUCCESS} from './actionType';

const initialState={
    users:[],
    loading:false,
    error:null
};

const userReducer=(state=initialState, action)=>{
    switch(action.type){
        case LOAD_USER_START:
            // console.log("data in reducer on LOAD_USER_START ",state);
            return{
                ...state,
                loading:true,
            }
        case LOAD_USER_SUCCESS:
            // console.log("data in reducer",action.payload);
            return{
                ...state,
                loading:false,
                users:action.payload,
                // users:[...action.payload]
            }
        case LOAD_USER_ERROS:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }

}

export default userReducer;