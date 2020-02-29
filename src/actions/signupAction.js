import { config } from '../utils/config';
import axios from 'axios';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';
import { alert_success, alert_error } from './alertAction';
import history from "../utils/history";


const signupUser = (user) => {
  return dispatch => {
    dispatch(signupRequest(user));
    return axios.post(`${config.url.BASE_URL}/signup`, user)
    .then((response) => {
      dispatch(signupSuccess(response));
      dispatch(alert_success('Signup successful!'));
      history.push('/login');
    })
    .catch((error) => {
      dispatch(alert_error(error));
      dispatch(signupFailure(error));
      console.log(error)
    });
  }
}

const signupRequest = (user) => {
  return {
    type: SIGNUP_REQUEST,
    user
  }
}

const signupSuccess = (response) => {
  return {
    type: SIGNUP_SUCCESS,
    response
  }
}

const signupFailure = (error) => {
  return {
    type: SIGNUP_FAILURE,
    error
  }
}


export { signupUser, signupRequest, signupSuccess, signupFailure }