import {
  AUTH_SIGN_IN_LOADING,
 AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR ,
  AUTH_SIGN_OUT ,
  
} from "./auth.types";

let token = localStorage.getItem("token");
const initalState = {
  loading: false,
  error: false,
  isAuth: !token,
  token: token,
};

export const authReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGN_IN_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case AUTH_SIGN_IN_SUCCESS: {
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loading: false,
        error: false,
        isAuth: true,
        token: payload.token,
      };
    }
    case AUTH_SIGN_IN_ERROR: {
      return { ...state, loading: false, error: true, isAuth: false };
    }
    case AUTH_SIGN_OUT: {
      localStorage.removeItem("token");
      return { ...state, isAuth: false, token: "" };
    }
    default: {
      return state;
    }
  }
};
