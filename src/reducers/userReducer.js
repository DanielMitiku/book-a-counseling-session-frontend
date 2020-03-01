import { GET_SESSIONS_FAILURE, GET_SESSIONS_SUCCESS, GET_SESSIONS_REQUEST } from '../actions/types';

const initialState = {
  requesting: false,
  sessions: [],
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_SESSIONS_REQUEST: {
      return { 
        requesting: true,
        sessions: [],
      };
    }
    case GET_SESSIONS_SUCCESS: {
      return {
        requesting: false,
        sessions: [...action.payload]
      };
    }
    case GET_SESSIONS_FAILURE: {
      return { };
    }
    default:
      return state;
  }
};

export default userReducer;