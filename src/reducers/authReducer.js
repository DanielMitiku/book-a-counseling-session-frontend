import { SET_CURRENT_USER_ID, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {},
  loggingIn: false,
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER_ID: {
      const newState = {
        isAuthenticated: !isEmpty(action.user_id),
        user_id: action.user_id,
      }
      return { newState, ...state};
    }
    case LOGIN_REQUEST: {
      return { 
        loggingIn: true,
        user_id: action.user_id,
      };
    }
    case LOGIN_SUCCESS: {
      return { 
        user_id: action.user_id,
      };
    }
    case LOGIN_FAILURE: {
      return {};
    }
    default:
      return state;
  }
};

export default authReducer;