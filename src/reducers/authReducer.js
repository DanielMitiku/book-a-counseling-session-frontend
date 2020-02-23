import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {}
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER: {
      const newState = {
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
      }
      return { newState, ...state};
    }
    default:
      return state;
  }
};

export default authReducer;