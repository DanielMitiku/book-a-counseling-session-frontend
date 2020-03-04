import { DELETE_APPOINTMENT_FAILURE, DELETE_APPOINTMENT_SUCCESS, DELETE_APPOINTMENT_REQUEST, GET_APPOINTMENTS_FAILURE, GET_APPOINTMENTS_SUCCESS, GET_APPOINTMENTS_REQUEST, CREATE_APPOINTMENT_REQUEST, CREATE_APPOINTMENT_SUCCESS, CREATE_APPOINTMENT_FAILURE } from './types';
import { alert_success, alert_error } from './alertAction';
import axios from 'axios';
import { config } from '../utils/config';
import history from "../utils/history";


const createAppointment = (appointmentData, user_id) => {
  return dispatch => {
    dispatch(createAppointmentRequest());
    return axios.post(`${config.url.BASE_URL}/users/${user_id}/appointments`, appointmentData)
    .then((response) => {
      const appointment = response.data.appointment;
      dispatch(createAppointmentSuccess(appointment));
      dispatch(alert_success("Appointment Created"));
      history.push('/appointments');
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

const getAppointments = ( user_id ) => {
  return dispatch => {
    dispatch(getAppointmentsRequest());
    return axios.get(`${config.url.BASE_URL}/users/${user_id}`)
    .then((response) => {
      const appointments = response.data.user_appointments;
      dispatch(getAppointmentsSuccess(appointments));
    })
    .catch((error) => {
      dispatch(alert_error("Error Getting Appointments"));
      dispatch(getAppointmentsFailure(error));
    });
  }
}

const getAppointmentsSuccess = (payload) => {
  return {
    type: GET_APPOINTMENTS_SUCCESS,
    payload,
  }
}

const getAppointmentsFailure = (payload) => {
  return {
    type: GET_APPOINTMENTS_FAILURE,
    payload,
  }
}

const getAppointmentsRequest = () => {
  return {
    type: GET_APPOINTMENTS_REQUEST,
  }
}

const deleteAppointment = (appointment_id, user_id) => {
  return dispatch => {
    dispatch(deleteAppointmentRequest());
    return axios.delete(`${config.url.BASE_URL}/users/${user_id}/appointments/${appointment_id}`)
    .then(() => {
      dispatch(deleteAppointmentSuccess(appointment_id));
      dispatch(alert_success('Appointment Removed'));
      dispatch(getAppointments(user_id));
    })
    .catch(() => {
      dispatch(alert_error("Error Deleting Appointment"));
      dispatch(deleteAppointmentFailure());
    });
  }
}

const deleteAppointmentRequest = () => {
  return {
    type: DELETE_APPOINTMENT_REQUEST,
  }
}

const deleteAppointmentSuccess = (payload) => {
  return {
    type: DELETE_APPOINTMENT_SUCCESS,
    payload,
  }
}

const deleteAppointmentFailure = () => {
  return {
    type: DELETE_APPOINTMENT_FAILURE,
  }
}

export { deleteAppointment, getAppointments, getAppointmentsFailure, getAppointmentsRequest, getAppointmentsSuccess, createAppointment, createAppointmentFailure, createAppointmentRequest, createAppointmentSuccess };