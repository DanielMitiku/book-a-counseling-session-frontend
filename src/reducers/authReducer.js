import { SET_CURRENT_USER_ID, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user_id: '',
  loggingIn: false,
  is_privileged: false,
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER_ID: {
      return {
        ...state, 
        isAuthenticated: !isEmpty({user_id: action.user_id}),
        user_id: action.user_id,
        loggingIn: false,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state, 
        loggingIn: true,
      };
    }
    case LOGIN_SUCCESS: {
      return { 
        isAuthenticated: true,
        user_id: action.user_id,
        loggingIn: false,
        is_privileged: action.is_privileged,
      };
    }
    case LOGIN_FAILURE: {
      return {
        isAuthenticated: false,
        loggingIn: false,
      };
    }
    case LOGOUT_SUCCESS: {
      return { ...initialState };
    }
    default:
      return state;
  }
};

export default authReducer;