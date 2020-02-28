import { SET_CURRENT_USER_ID, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {},
  signingIn: false,
};

const signupReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER_ID: {
      const newState = {
        isAuthenticated: !isEmpty(action.user_id),
        user_id: action.user_id,
      }
      return { newState, ...state};
    }
    case SIGNUP_REQUEST: {
      return { 
        signingIn: true,
        user_id: action.user_id,
      };
    }
    case SIGNUP_SUCCESS: {
      return { 
        user_id: action.user_id,
      };
    }
    case SIGNUP_FAILURE: {
      return {};
    }
    default:
      return state;
  }
};

export default signupReducer;