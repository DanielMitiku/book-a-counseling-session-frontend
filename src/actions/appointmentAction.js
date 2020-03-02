import { CREATE_APPOINTMENT_REQUEST, CREATE_APPOINTMENT_SUCCESS, CREATE_APPOINTMENT_FAILURE } from './types';
import { alert_success, alert_error } from './alertAction';
import axios from 'axios';
import { config } from '../utils/config';
import history from "../utils/history";


const createAppointment = (appointmentData, user) => {
  return dispatch => {
    dispatch(createAppointmentRequest());
    return axios.post(`${config.url.BASE_URL}/users/${user.id}/appointments`, appointmentData)
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
    type: CREATE_APPOINTMENT_REQUEST,
  }
}

export { createAppointment, createAppointmentFailure, createAppointmentRequest, createAppointmentSuccess };