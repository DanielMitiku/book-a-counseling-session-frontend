import { GET_APPOINTMENTS_REQUEST, GET_APPOINTMENTS_FAILURE, GET_APPOINTMENTS_SUCCESS, CREATE_APPOINTMENT_REQUEST, CREATE_APPOINTMENT_SUCCESS, CREATE_APPOINTMENT_FAILURE } from '../actions/types';

const initialState = {
  requesting: false,
  appointment: {},
  appointments: [],
}

const appointmentReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_APPOINTMENT_REQUEST: {
      return { 
        requesting: true,
      };
    }
    case CREATE_APPOINTMENT_SUCCESS: {
      return {
        requesting: false,
        appointment: action.payload
      };
    }
    case CREATE_APPOINTMENT_FAILURE: {
      return { };
    }
    case GET_APPOINTMENTS_REQUEST: {
      return { 
        requesting: true,
      };
    }
    case GET_APPOINTMENTS_SUCCESS: {
      return {
        requesting: false,
        appointments: [...action.payload],
      };
    }
    case GET_APPOINTMENTS_FAILURE: {
      return { };
    }
    default:
      return state;
  }
};

export default appointmentReducer;