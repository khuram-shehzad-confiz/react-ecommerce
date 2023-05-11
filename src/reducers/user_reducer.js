import { USER_LOGIN_BEGIN,
USER_LOGIN_SUCCESS,
USER_LOGIN_ERROR, 
USER_LOGOUT} from "../actions";

const userReducer=(state, action)=>{
console.log(state)

if(action.type===USER_LOGIN_BEGIN){
    console.log('USER_LOGIN_BEGIN')

    return({...state, userLoginBegin:true, userLoginSuccess:false, 
        userLoginFail:false})
}
if(action.type===USER_LOGIN_SUCCESS){
console.log('USER_LOGIN_SUCCESS')
    const userInfo= action.payload

    return({...state, userLoginBegin:false, userLoginSuccess:true,
         userLoginFail:false, userInfo:userInfo, authenticated:true})
}

if(action.type===USER_LOGIN_ERROR){
console.log('USER_LOGIN_ERROR')
    return({...state, userLoginBegin:false, userLoginSuccess:false, 
        userLoginFail:true})
}

if(action.type===USER_LOGOUT){
    console.log(USER_LOGOUT)

    return{...state, userInfo:null, authenticated:false}
}
return state;
}

export default userReducer;