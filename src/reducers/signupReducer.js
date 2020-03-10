import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions/types';

const initialState = {
  isSignedup: false,
  user: {},
  signingIn: false,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST: {
      return {
        signingIn: true,
        user_id: action.user_id,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        isSignedup: true,
        user_id: action.user_id,
        signingIn: false,
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
