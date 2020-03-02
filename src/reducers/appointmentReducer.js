import { CREATE_APPOINTMENT_REQUEST, CREATE_APPOINTMENT_SUCCESS, CREATE_APPOINTMENT_FAILURE } from '../actions/types';

const initialState = {
  requesting: false,
  appointments: [],
}

const appointmentReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_APPOINTMENT_REQUEST: {
      return { 
        requesting: true,
        appointments: [...state.appointments],
      };
    }
    case CREATE_APPOINTMENT_SUCCESS: {
      return {
        requesting: false,
        appointments: [...action.payload]
      };
    }
    case CREATE_APPOINTMENT_FAILURE: {
      return { };
    }
    default:
      return state;
  }
};

export default appointmentReducer;