import React, { useContext, useEffect, useState, useReducer } from "react";

// import { useAuth0 } from '@auth0/auth0-react'
import {
  USER_LOGIN_BEGIN,
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  
} from "../actions";
import { USER_INFO, login_url } from "../utils/constants";
import reducer from "../reducers/user_reducer";
import axios from "axios";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {

  const loadUserInfo=()=>{
   return JSON.parse(localStorage.getItem(USER_INFO))
  }
  const initialState = {
    userLoginBegin: false,
    userLoginSuccess: false,
    userLoginFail: false,
    userInfo: loadUserInfo(),
    authenticated: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // const history = useHistory();
  // console.log(history)
  // const location = useLocation();

  const login = async (email, password) => {
    // console.log('calling to dispatch '+ USER_LOGIN_BEGIN)
    dispatch({ type: USER_LOGIN_BEGIN });

    try {
      const user = await axios.post(
        login_url,
        {
          username: email,
          password: password,
        },
        {
          "Content-Type": "application/json",
        }
      );

      console.log(user.data);

      localStorage.setItem(USER_INFO, JSON.stringify(user.data));
      dispatch({ type: USER_LOGIN_SUCCESS, payload: user.data });
    } catch (err) {
      console.error(err);
      dispatch({ type: USER_LOGIN_ERROR });
    }
  };

  const logout = async () => {
    // localStorage.removeItem(USER_INFO);
    localStorage.clear();

    dispatch({ type: USER_LOGOUT });
    // dispatch({ type: 'SIDEBAR_CLOSE' })
  };
 

  return (
    <UserContext.Provider value={{ ...state, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
