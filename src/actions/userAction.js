import { GET_SESSIONS_REQUEST, GET_SESSIONS_SUCCESS, GET_SESSIONS_FAILURE } from '../actions/types';
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

export { getSessionsFailure, getSessionsRequest, getSessionsSuccess, getSessions };