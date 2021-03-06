import {
  DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILURE, GET_USERS_FAILURE, GET_USERS_SUCCESS, GET_USERS_REQUEST, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS,
} from '../actions/types';

const initialState = {
  requesting: false,
  users: [],
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST: {
      return {
        requesting: true,
        users: [],
      };
    }
    case GET_USERS_SUCCESS: {
      return {
        requesting: false,
        users: [...action.payload],
      };
    }
    case GET_USERS_FAILURE: {
      return {
        ...state,
        requesting: false,
      };
    }
    case GET_USER_REQUEST: {
      return {
        requesting: true,
        users: [],
        user: {},
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        requesting: false,
        user: action.payload,
      };
    }
    case GET_USER_FAILURE: {
      return {
        ...state,
        requesting: false,
      };
    }
    case DELETE_USER_REQUEST: {
      return {
        ...state,
        requesting: true,
      };
    }
    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        requesting: false,
      };
    }
    case DELETE_USER_FAILURE: {
      return {
        ...state,
        requesting: false,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
