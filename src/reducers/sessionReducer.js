import {
  GET_SESSION_REQUEST, GET_SESSION_SUCCESS, GET_SESSION_FAILURE, CREATE_SESSION_REQUEST, CREATE_SESSION_SUCCESS, CREATE_SESSION_FAILURE, DELETE_SESSION_REQUEST, DELETE_SESSION_SUCCESS, DELETE_SESSION_FAILURE, GET_SESSIONS_FAILURE, GET_SESSIONS_SUCCESS, GET_SESSIONS_REQUEST,
} from '../actions/types';

const initialState = {
  requesting: false,
  sessions: [],
  session: {},
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SESSIONS_REQUEST: {
      return {
        requesting: true,
        sessions: [],
      };
    }
    case GET_SESSIONS_SUCCESS: {
      return {
        requesting: false,
        sessions: [...action.payload],
      };
    }
    case GET_SESSIONS_FAILURE: {
      return {
        ...state,
        requesting: false,
      };
    }
    case GET_SESSION_REQUEST: {
      return {
        ...state,
        requesting: true,
        session: {},
      };
    }
    case GET_SESSION_SUCCESS: {
      return {
        ...state,
        requesting: false,
        session: action.payload,
      };
    }
    case GET_SESSION_FAILURE: {
      return {
        ...state,
        requesting: false,
      };
    }
    case CREATE_SESSION_REQUEST: {
      return {
        ...state,
        requesting: true,
      };
    }
    case CREATE_SESSION_SUCCESS: {
      return {
        ...state,
        requesting: false,
      };
    }
    case CREATE_SESSION_FAILURE: {
      return {
        ...state,
        requesting: false,
      };
    }
    case DELETE_SESSION_REQUEST: {
      return {
        ...state,
        requesting: true,
      };
    }
    case DELETE_SESSION_SUCCESS: {
      return {
        ...state,
        requesting: false,
      };
    }
    case DELETE_SESSION_FAILURE: {
      return {
        ...state,
        requesting: false,
      };
    }
    default:
      return state;
  }
};

export default sessionReducer;
