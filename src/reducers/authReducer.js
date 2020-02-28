import { SET_CURRENT_USER_ID } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {}
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
    default:
      return state;
  }
};

export default authReducer;