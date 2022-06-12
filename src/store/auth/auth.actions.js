// Auth Actions here
import axios from "axios";

    import {
        AUTH_SIGN_IN_LOADING,
       AUTH_SIGN_IN_SUCCESS,
        AUTH_SIGN_IN_ERROR ,
        AUTH_SIGN_OUT ,
        
      } from "./auth.types";



export const loginIN = (data) => (dispatch) => {
  dispatch({ type:AUTH_SIGN_IN_LOADING });
  axios
    .post("https://reqres.in/api/login", {
      email: data.email,
      password: data.password,
    })
    .then((r) => {
      dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: AUTH_SIGN_IN_ERROR });
    });
};

export const logout = () => ({ type: AUTH_SIGN_OUT });
