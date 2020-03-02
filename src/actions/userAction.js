import { GET_SESSIONS_REQUEST, GET_SESSIONS_SUCCESS, GET_SESSIONS_FAILURE, CREATE_APPOINTMENT_REQUEST, CREATE_APPOINTMENT_SUCCESS, CREATE_APPOINTMENT_FAILURE } from '../actions/types';
import { alert_success, alert_error } from './alertAction';
import axios from 'axios';
import { config } from '../utils/config';
import history from "../utils/history";


const getSessions = () => {
  return dispatch => {
    dispatch(getSessionsRequest());
    return axios.get(`${config.url.BASE_URL}/counselings`)
    .then((response) => {
      const counselings = response.data;
      dispatch(getSessionsSuccess(counselings));
    })
    .catch((error) => {
      dispatch(alert_error("Login Error"));
      dispatch(getSessionsFailure(error));
    });
  }
}

const getSessionsRequest = () => {
  return {
    type: GET_SESSIONS_REQUEST,
  }
}

const getSessionsSuccess = (payload) => {
  return {
    type: GET_SESSIONS_SUCCESS,
    payload
  }
}

const getSessionsFailure = (payload) => {
  return {
    type: GET_SESSIONS_FAILURE,
    payload
  }
}

const createAppointment = (couonseling_id, user) => {
  return dispatch => {
    dispatch(createAppointmentRequest());
    return axios.post(`${config.url.BASE_URL}/users/${user.id}/appointments`, couonseling_id)
    .then((response) => {
      const appointment = response.data;
      dispatch(createAppointmentSuccess(appointment));
      dispatch(alert_success("Appointment Created"));
    })
    .catch((error) => {
      dispatch(alert_error("Error Creating Appointment"));
      dispatch(createAppointmentFailure(error));
    });
  }
}

const createAppointmentSuccess = (payload) => {
  return {
    type: CREATE_APPOINTMENT_SUCCESS,
    payload,
  }
}

const createAppointmentFailure = (payload) => {
  return {
    type: CREATE_APPOINTMENT_FAILURE,
    payload,
  }
}

const createAppointmentRequest = () => {
  return {
    type: CREATE_APPOINTMENT_SUCCESS,
  }
}

export { getSessionsFailure, getSessionsRequest, getSessionsSuccess, getSessions, createAppointment, createAppointmentFailure, createAppointmentRequest, createAppointmentSuccess };